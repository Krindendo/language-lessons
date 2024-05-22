import * as React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = React.forwardRef<
  React.ElementRef<typeof TextInput>,
  React.ComponentPropsWithoutRef<typeof TextInput>
>(({ style, ...props }, ref) => {
  return (
    <TextInput
      ref={ref}
      style={[styles.Input, style, props.editable === false && { opacity: 50 }]}
      placeholderTextColor="#e4e4e7"
      selectionColor="#000"
      {...props}
    />
  );
});

Input.displayName = "Input";

const styles = StyleSheet.create({
  Input: {
    height: 48,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#e4e4e7",
    backgroundColor: "#ffffff",
    paddingLeft: 12,
    paddingRight: 12,
    fontSize: 18,
    lineHeight: 22,
    color: "#09090b",
  },
});

export { Input };
