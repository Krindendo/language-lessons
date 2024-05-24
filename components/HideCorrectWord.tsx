import { StyleSheet } from "react-native";
import React, { useEffect, useMemo, useState } from "react";

import { ThemedText } from "@/components/ThemedText";
import { Input } from "./ui/Input";

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
  const cleanCorrectWord = useMemo(
    () => correctWord.replaceAll(".", "").replaceAll(",", ""),
    [correctWord]
  );

  useEffect(() => {
    if (word.toLowerCase() === cleanCorrectWord.toLowerCase()) {
      setIsHidden(false);
      onSuccess();
    }
  }, [word]);

  if (isHidden) {
    return <Input style={styles.input} onChangeText={setWord} value={word} />;
  }
  return <ThemedText style={styles.text}>{correctWord}</ThemedText>;
}

const styles = StyleSheet.create({
  input: {
    width: 100,
  },
  text: {
    color: "#33ff33",
  },
});
