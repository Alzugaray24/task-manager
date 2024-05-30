import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";

export default function TaskItem({ title, onPress, id }) {
  return (
    <Pressable style={styles.item} onPress={() => onPress(id)}>
      <Text style={styles.itemTitle}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },

  itemTitle: {
    fontSize: 16,
    color: "#333",
  },
});
