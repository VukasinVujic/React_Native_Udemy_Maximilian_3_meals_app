import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Color";

const CategoriesScreen = (props) => {
  // to see the special props given to CategoriesScreen because he was put in Navigator
  // console.log(props);

  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate({ routeName: "CategoryMeals" });
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      // keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
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
