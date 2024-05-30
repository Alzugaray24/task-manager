import { StyleSheet, Text, View, Modal, Alert, Pressable } from "react-native";
import React from "react";

export default function CustomModal({
  handleDelete,
  modalVisible,
  setModalVisible,
}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.modalContainer}>
        <Pressable
          style={[styles.modalButton, styles.deleteModalButton]}
          onPress={handleDelete}
        >
          <Text style={styles.buttonModalText}>Delete Task</Text>
        </Pressable>
        <Pressable
          style={[styles.modalButton, styles.cancelModalButton]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.buttonModalText}>Cancel</Text>
        </Pressable>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalButton: {
    width: 200,
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  deleteModalButton: {
    backgroundColor: "#ff4d4d",
  },
  cancelModalButton: {
    backgroundColor: "#4caf50",
  },
  buttonModalText: {
    color: "#fff",
    fontSize: 16,
  },
});
