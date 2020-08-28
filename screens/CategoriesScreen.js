import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategoriesScreen = (props) => {
  // to see the special props given to CategoriesScreen because he was put in Navigator
  console.log(props);
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen</Text>
      <Button
        title="Go to meals"
        onPress={() => {
          props.navigation.navigate(
            //one way
            { routeName: "CategoryMeals" }
          );
          //second way
          // props.navigation.navigate("CategoryMeals")

          //same as navigate
          // props.navigation.push("CategoryMeals");

          // if  you want to replace the current Componennt on stack with other
          // so the stack would contain only one Component
          // props.navigation.replace('CategoryMeals)
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

export default CategoriesScreen;
