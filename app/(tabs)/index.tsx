import { StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import { allSentences } from "@/constants/english";
import { HideCorrectWord } from "@/components/HideCorrectWord";
import { useEffect, useMemo, useState } from "react";
import { getRandomInt } from "@/lib/utils";

export default function HomeScreen() {
  const [previousSentences, setPreviousSentences] = useState<number[]>([]);
  const [randomSentence, setRandomSentence] = useState(0);
  const mergedSentences = useMemo(() => allSentences, [allSentences]);

  const maxNumberOfSentences = mergedSentences.length;
  const currentSentence = mergedSentences[randomSentence];
  const [remaining, setRemaining] = useState(currentSentence.exclude.length);

  function onSuccess() {
    setRemaining((prev) => prev - 1);
    console.log("remaining", remaining);
  }

  useEffect(() => {
    setPreviousSentences([...previousSentences, randomSentence]);
    setRandomSentence(getRandomInt(maxNumberOfSentences));
  }, [remaining]);

  return (
    <SafeAreaView>
      <View style={styles.titleContainer}>
        <ThemedText>Fill right word</ThemedText>
      </View>
      <ThemedText>
        Infinitive of the verb: {currentSentence.infinitiveOfTheVerb}
      </ThemedText>
      <ThemedView>
        <View style={styles.sentence}>
          {currentSentence.text.split(" ").map((word, index) => {
            if (currentSentence.exclude.includes(index)) {
              return (
                <HideCorrectWord
                  key={index + currentSentence.text}
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
    marginTop: 4,
    gap: 2,
  },
  possibleWords: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
});
