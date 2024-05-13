import { StyleSheet, TextInput } from "react-native";
import React, { useEffect, useState } from "react";

import { ThemedText } from "@/components/ThemedText";

interface HideCorrectWordProps {
  correctWord: string;
  onSuccess: () => void;
}

export function HideCorrectWord({
  correctWord,
  onSuccess,
}: HideCorrectWordProps) {
  const [isHidden, setIsHidden] = useState(true);
  const [word, setWord] = useState("");

  console.log("correctWord", correctWord);

  useEffect(() => {
    if (word.toLowerCase() === correctWord.toLowerCase()) {
      setIsHidden(false);
      onSuccess();
    }
  }, [word]);

  if (isHidden) {
    return (
      <TextInput style={styles.input} onChangeText={setWord} value={word} />
    );
  }
  return <ThemedText style={styles.text}>{correctWord}</ThemedText>;
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 6,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    color: "#33ff33",
  },
});
