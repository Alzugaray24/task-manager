import { StyleSheet, Text, FlatList, View } from "react-native";
import React from "react";
import TaskItem from "./TaskItem";
import ErrorDisplay from "./ErrorDisplay";

export default function TaskList({ task, handleModal, error, message }) {
  return (
    <View style={styles.container}>
      {error ? <ErrorDisplay message={message} /> : null}
      {task.length > 0 ? (
        <FlatList
          data={task}
          renderItem={({ item }) => (
            <TaskItem
              title={item.title}
              onPress={() => handleModal(item.id)}
              id={item.id}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text style={styles.noTaskText}>There are no tasks to make</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  noTaskText: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
  },
});
