import {
  Image,
  StyleSheet,
  Platform,
  View,
  TouchableOpacity,
  Text,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import { presentSimpleSentences } from "@/constants/english";
import { useState } from "react";
import HideCorrectWord from "@/components/HideCorrectWord";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ThemedText>Fill right word</ThemedText>
      <ThemedView>
        <View style={styles.sentence}>
          {presentSimpleSentences[0].text.split(" ").map((word, index) => {
            if (presentSimpleSentences[0].exclude.includes(index)) {
              return <HideCorrectWord key={index} correctWord={word} />;
            } else {
              return <ThemedText key={index}>{word}</ThemedText>;
            }
          })}
        </View>
        <View style={styles.possibleWords}>
          {presentSimpleSentences[0].possibleAnswers.map((word, index) => (
            <TouchableOpacity>
              <Text>{word}</Text>
            </TouchableOpacity>
          ))}
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
