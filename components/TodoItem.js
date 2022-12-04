import { Pressable, StyleSheet, Text, View } from "react-native";

const TodoItem = (props) => {
  return (
    <View style={styles.textView}>
      <Pressable
        android_ripple={{ color: "#37c7c5" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.text}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textView: {
    marginVertical: 5,
    backgroundColor: "#407ec0",
    borderRadius: 6,
  },
  text: {
    paddingLeft: 5,
    color: "#ffffff",
    fontStyle: "italic",
    fontSize: 20,
  },
  pressedItem: {
    opacity: 0.5,
    color: "#37c7c5",
  },
});

export default TodoItem;
