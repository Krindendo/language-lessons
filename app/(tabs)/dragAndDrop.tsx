import React from "react";
import { View, StyleSheet } from "react-native";

import WordList from "../../components/WordList";
import Word from "../../components/Word";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const words = [
  { id: 1, word: "Er" },
  { id: 8, word: "hungrig" },
  { id: 2, word: "isst" },
  { id: 7, word: "er" },
  { id: 6, word: "weil" },
  { id: 9, word: "ist" },
  { id: 5, word: "," },
  { id: 3, word: "einen" },
  { id: 4, word: "Apfel" },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

const Duolingo = () => {
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <WordList>
          {words.map((word) => (
            <Word key={word.id} {...word} />
          ))}
        </WordList>
      </View>
    </GestureHandlerRootView>
  );
};

export default Duolingo;
