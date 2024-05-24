import { StyleSheet, View, Pressable } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { SafeAreaView } from "react-native-safe-area-context";
import { allSentences } from "@/constants/english";
import { HideCorrectWord } from "@/components/HideCorrectWord";
import { useEffect, useState } from "react";
import { getRandomInt } from "@/lib/utils";
import { Sentence } from "@/types/Sentence";
import React from "react";

const setSentences = () => ({
  type: "SET_SENTENCES" as const,
});

const setSentence = () => ({
  type: "SET_SENTENCE" as const,
});

const removeSentence = (id: number) => ({
  type: "REMOVE_SENTENCE" as const,
  payload: { id },
});

type Action =
  | ReturnType<typeof setSentences>
  | ReturnType<typeof setSentence>
  | ReturnType<typeof removeSentence>;
type State = {
  sentences: Sentence[];
  currentSentence: Sentence;
};

const initialState: State = {
  sentences: allSentences,
  currentSentence: allSentences[getRandomInt(allSentences.length)],
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_SENTENCES": {
      const randomNumber = getRandomInt(state.sentences.length);
      return {
        sentences: allSentences,
        currentSentence: state.sentences[randomNumber],
      };
    }
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
  };

  useEffect(() => {
    if (remaining === 0) {
      dispatch({
        type: "REMOVE_SENTENCE",
        payload: { id: state.currentSentence.id },
      });
      setTimeout(() => {
        dispatch({ type: "SET_SENTENCE" });
      }, 1000);
    }
  }, [remaining]);

  useEffect(() => {
    setRemaining(state.currentSentence.exclude.length);
  }, [state.currentSentence]);

  const restartSentences = () => {
    dispatch({ type: "SET_SENTENCES" });
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <ThemedText type="title">Fill right word</ThemedText>
        </View>
        <ThemedText type="defaultSemiBold">
          Tence: {state.currentSentence.tence}
        </ThemedText>
        <View style={styles.textWrapper}>
          <ThemedText>
            Infinitive of the verb
            {state.currentSentence.infinitiveOfTheVerb.length > 1 ? "s" : ""}:
          </ThemedText>
          <ThemedText style={{ fontSize: 18, fontWeight: 600 }}>
            {state.currentSentence.infinitiveOfTheVerb.join("; ")}
          </ThemedText>
        </View>

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
        <View style={styles.restartButtonWrapper}>
          <Pressable onPress={restartSentences} role="button" />
          <Button styles={styles.restartButton}>
            <ThemedText style={styles.restartButtonText}>Restart</ThemedText>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    paddingHorizontal: 12,
    display: "flex",
    gap: 12,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  textWrapper: { display: "flex", flexDirection: "row", gap: 6 },
  sentence: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: 4,
    gap: 2,
  },
  possibleWords: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  restartButtonWrapper: {},
  restartButton: {
    //group flex items-center justify-center rounded-md h-12 px-5 py-3 bg-primary
  },
  restartButtonText: {
    //text-base font-medium text-foreground text-primary-foreground
  },
});
