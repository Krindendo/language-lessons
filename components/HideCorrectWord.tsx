import { StyleSheet, Text, TextInput } from "react-native";
import React, { useEffect, useState } from "react";

interface HideCorrectWordProps {
  correctWord: string;
}

export default function HideCorrectWord({ correctWord }: HideCorrectWordProps) {
  const [isHidden, setIsHidden] = useState(true);
  const [text, onChangeText] = React.useState("");

  useEffect(() => {
    if (text.toLowerCase() === correctWord.toLowerCase()) {
      setIsHidden(false);
    }
  }, [text]);

  if (isHidden) {
    return (
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    );
  }
  return <Text>{correctWord}</Text>;
}

const styles = StyleSheet.create({
  input: {
    height: 30,
    margin: 6,
    borderWidth: 1,
    padding: 10,
  },
});
