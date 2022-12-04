import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [inputList, setInputList] = useState([]);
  const [modalIsVisibile, setModalIsVisibile] = useState(false);

  const addTodosHandler = () => {
    setModalIsVisibile(true);
  };

  const exitAddTodosHandler = () => {
    setModalIsVisibile(false);
  };

  const onClickButtonHandler = (inputText) => {
    setInputList((current) => [
      ...current,
      { text: inputText, id: Math.random().toString() },
    ]);
    setModalIsVisibile(false);
  };

  const onDeleteItem = (id) => {
    setInputList((current) => {
      return current.filter((item) => item.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <Button
        title="Add New Task"
        color={"#2a66a2"}
        onPress={() => addTodosHandler()}
      />
      <TodoInput
        visible={modalIsVisibile}
        onAddTodo={onClickButtonHandler}
        onCancel={exitAddTodosHandler}
      />
      <View style={styles.separator} />
      <View style={styles.listContainer}>
        <FlatList
          data={inputList}
          renderItem={(data) => {
            return (
              <TodoItem
                id={data.item.id}
                text={data.item.text}
                onDeleteItem={onDeleteItem}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
    backgroundColor: "#000000",
  },
  separator: {
    marginVertical: 5,
    color: "#ffffff",
    border: 2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  listContainer: {
    flex: 6,
  },
});
