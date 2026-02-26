import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";

type MyButtonProps = {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
  style?: ViewStyle;
};

const MyButton = ({
  title,
  onPress,
  variant = "primary",
  style,
}: MyButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      style={[styles.button, variant === "secondary" && styles.secondaryButton, style]}
    >
      <Text style={[styles.buttonText, variant === "secondary" && styles.secondaryText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2563EB",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryButton: {
    backgroundColor: "#EFF6FF",
    borderWidth: 1,
    borderColor: "#BFDBFE",
  },
  secondaryText: {
    color: "#1D4ED8",
  },
});

export default MyButton;
