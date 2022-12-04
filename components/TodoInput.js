import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";

const TodoInput = (props) => {
  const [inputText, setInputText] = useState("");
  const taskImg = require("../assets/images/task-icon-image.jpg");

  const textInputHandler = (value) => {
    setInputText(value);
  };

  const addTodo = () => {
    props.onAddTodo(inputText);
    setInputText("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={taskImg} />
        <TextInput
          style={styles.input}
          placeholder="Enter value"
          onChangeText={textInputHandler}
          value={inputText}
        />
        <View style={styles.buttonsView}>
          <View style={styles.button}>
            <Button color={"#df0c0c"} title="Back" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button color={"#407ec0"} title="Click me" onPress={addTodo} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  image: {
    width: 100,
    height: 100,
  },
  input: {
    width: "80%",
    autoFocus: true,
    borderRadius: 6,
    marginRight: 5,
    borderWidth: 2,
    borderColor: "#407ec0",
    backgroundColor: "#407ec0",
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  buttonsView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    width: "35%",
    margin: 8,
  },
});

export default TodoInput;
