import { StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import { allSentences } from "@/constants/english";
import { HideCorrectWord } from "@/components/HideCorrectWord";
import { useEffect, useMemo, useState } from "react";

export default function HomeScreen() {
  const [previousSentences, setPreviousSentences] = useState<number[]>([]);
  const [randomSentence, setRandomSentence] = useState(0);
  const mergedSentences = useMemo(() => allSentences, [allSentences]);

  useEffect(() => {
    setPreviousSentences([...previousSentences, randomSentence]);
  }, [randomSentence]);

  const currentSentence = mergedSentences[randomSentence];

  function onSuccess() {
    setRandomSentence(1);
  }

  return (
    <SafeAreaView>
      <ThemedText>Fill right word</ThemedText>
      <ThemedText>{currentSentence.infinitiveOfTheVerb}</ThemedText>
      <ThemedView>
        <View style={styles.sentence}>
          {currentSentence.text.split(" ").map((word, index) => {
            if (currentSentence.exclude.includes(index)) {
              return (
                <HideCorrectWord
                  key={index}
                  correctWord={word}
                  onSuccess={onSuccess}
                />
              );
            } else {
              return <ThemedText key={index}>{word}</ThemedText>;
            }
          })}
        </View>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  sentence: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  possibleWords: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
});
