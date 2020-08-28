import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

const renderGridItem = (itemData) => {
  return (
    <View style={styles.gridItem}>
      <Text>{itemData.item.title}</Text>
    </View>
  );
};

const CategoriesScreen = (props) => {
  // to see the special props given to CategoriesScreen because he was put in Navigator
  // console.log(props);

  return (
    <FlatList
      // keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;

{
  /* <View style={styles.screen}> 
      <Text>The Categories Screen</Text>
      <Button
        title="Go to meals"
        onPress={() => {
          props.navigation.navigate(
    //         one way
            { routeName: "CategoryMeals" }
          );
    //       second way
    //       props.navigation.navigate("CategoryMeals")

    //       same as navigate
    //       props.navigation.push("CategoryMeals");

    //       if  you want to replace the current Componennt on stack with other
    //       so the stack would contain only one Component
    //       props.navigation.replace('CategoryMeals)
        }}
      />
    </View></View>

    */
}
