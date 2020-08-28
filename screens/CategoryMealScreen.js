import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategoryMealScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Category meal Screen</Text>
      <Button
        title="to Meal detail"
        onPress={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
          });
        }}
      />
      <Button
        title="Go back"
        onPress={() => {
          // props.navigation.goBack();
          props.navigation.pop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealScreen;
