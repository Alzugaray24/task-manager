import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import CustomModal from "./src/components/CustomModal";
import TaskInput from "./src/components/TaskInput";
import TaskList from "./src/components/TaskList";
import useTaskManager from "./src/hooks/useTaskManager";

export default function App() {
  const {
    text,
    onChangeText,
    task,
    modalVisible,
    handleClick,
    handleModal,
    handleDelete,
    setModalVisible,
    error,
    message,
  } = useTaskManager();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.content}>
        <TaskInput
          onChangeText={onChangeText}
          handleClick={handleClick}
          text={text}
        />
        <TaskList
          task={task}
          error={error}
          message={message}
          handleModal={handleModal}
        />
      </View>

      <CustomModal
        handleDelete={handleDelete}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
