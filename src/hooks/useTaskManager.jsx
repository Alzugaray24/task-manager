import { useState } from "react";

export default function useTaskManager() {
  const [text, onChangeText] = useState("");
  const [task, setTask] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState();

  const handleClick = () => {
    if (text.length === 0) {
      setMessage("You must add a task");
      setError(true);
    } else if (text.length < 4) {
      setMessage("The task must have atleast 4 characters");
      setError(true);
    } else if (task.length >= 12) {
      console.log("estoya acad");
      setMessage(
        "The maximum number of tasks allowed is 12. Please delete an existing task to add a new one."
      );
      setError(true);
    } else {
      setError(false);
      if (task.length === 0) {
        setTask([{ id: 1, title: text }]);
      } else {
        const newId = task[task.length - 1].id + 1;
        setTask([...task, { id: newId, title: text }]);
      }
      onChangeText("");
    }
  };

  const handleModal = (id) => {
    setSelectedItem(id);
    setModalVisible(true);
  };

  const handleDelete = () => {
    if (selectedItem !== null) {
      setTask(task.filter((t) => t.id !== selectedItem));
      setModalVisible(false);
    }
  };

  return {
    text,
    onChangeText,
    task,
    selectedItem,
    modalVisible,
    handleClick,
    handleModal,
    handleDelete,
    setModalVisible,
    error,
    setError,
    message,
    setMessage,
  };
}
