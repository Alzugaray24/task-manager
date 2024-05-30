import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import useTaskManager from "../hooks/useTaskManager";

export default function ErrorDisplay({ message }) {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    width: "100%",
    padding: 10,
    backgroundColor: "#f8d7da",
    borderColor: "#f5c2c7",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  errorText: {
    color: "#721c24",
    fontSize: 16,
    fontWeight: "bold",
  },
});
