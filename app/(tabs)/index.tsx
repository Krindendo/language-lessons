import { StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import { allSentences } from "@/constants/english";
import { HideCorrectWord } from "@/components/HideCorrectWord";
import { useEffect, useState } from "react";
import { getRandomInt } from "@/lib/utils";
import { Sentence } from "@/types/Sentence";
import React from "react";

const setSentence = () => ({
  type: "SET_SENTENCE" as const,
});

const removeSentence = (id: number) => ({
  type: "REMOVE_SENTENCE" as const,
  payload: { id },
});

type Action =
  | ReturnType<typeof setSentence>
  | ReturnType<typeof removeSentence>;
type State = {
  sentences: Sentence[];
  currentSentence: Sentence;
};

const initialState: State = {
  sentences: allSentences,
  currentSentence: allSentences[0],
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_SENTENCE": {
      const randomNumber = getRandomInt(state.sentences.length);
      return {
        ...state,
        currentSentence: state.sentences[randomNumber],
      };
    }
    case "REMOVE_SENTENCE": {
      return {
        ...state,
        sentences: state.sentences.filter((t) => t.id !== action.payload.id),
      };
    }
    default: {
      throw Error("Unknown action: " + action["type"]);
    }
  }
}

export default function HomeScreen() {
  const [state, dispatch] = React.useReducer<React.Reducer<State, Action>>(
    reducer,
    initialState
  );
  const [remaining, setRemaining] = useState(
    state.currentSentence.exclude.length
  );

  const onSuccess = () => {
    setRemaining((prev) => prev - 1);
    console.log("remaining", remaining);
  };

  useEffect(() => {
    if (remaining === 0) {
      dispatch({
        type: "REMOVE_SENTENCE",
        payload: { id: state.currentSentence.id },
      });
      dispatch({ type: "SET_SENTENCE" });
    }
  }, [remaining]);

  return (
    <SafeAreaView>
      <View style={styles.titleContainer}>
        <ThemedText>Fill right word</ThemedText>
      </View>
      <ThemedText>Tence: {state.currentSentence.tence}</ThemedText>
      <ThemedText>
        Infinitive of the verb: {state.currentSentence.infinitiveOfTheVerb}
      </ThemedText>
      <ThemedView>
        <View style={styles.sentence}>
          {state.currentSentence.text.split(" ").map((word, index) => {
            if (state.currentSentence.exclude.includes(index)) {
              return (
                <HideCorrectWord
                  key={index + state.currentSentence.text}
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
