// Importing React and React Native components
import React, { useState } from 'react'; // useState is used for state management (React, 2024).
import { View, Text, FlatList, StyleSheet, Button, Alert } from 'react-native'; // Basic UI components from React Native

// Array of meals that will be displayed on the home page
const meals = [
  { id: '1', name: 'Monday meal', description: 'Meal prepared on this day.', price: 'R**' },
  { id: '2', name: 'Tuesday meal', description: 'Meal prepared on this day.', price: 'R**' },
  { id: '3', name: 'Wednesday meal', description: 'Meal prepared on this day.', price: 'R**' },
  { id: '4', name: 'Thursday meal', description: 'Meal prepared on this day.', price: 'R**' },
  { id: '5', name: 'Friday meal', description: 'Meal prepared on this day.', price: 'R**' },
  { id: '6', name: 'Saturday meal', description: 'Meal prepared on this day.', price: 'R**' },
  { id: '7', name: 'Sunday meal', description: 'Meal prepared on this day.', price: 'R**' },
];

// Main component function for the restaurant app
const RestaurantApp = () => {
  const [selectedMeals, setSelectedMeals] = useState([]); // useState stores the list of selected meals (React, 2024).

  // Function to handle adding a meal to the user's order
  const handleMealSelect = (meal) => {
    if (!selectedMeals.includes(meal)) {
      setSelectedMeals([...selectedMeals, meal]); // Adds the meal to the array of selected meals (React, 2024).
      Alert.alert('Meal Added', `${meal.name} has been added to your order.`); // Display an alert to confirm addition (React Native, 2024).
    } else {
      Alert.alert('Already Added', `${meal.name} is already in your order.`); // Prevents duplicates
    }
  };

  // Component to render each individual meal item
  const MealItem = ({ name, description, price }) => (
    <View style={styles.mealItem}>
      <Text style={styles.mealName}>{name}</Text>
      <Text style={styles.mealDescription}>{description} </Text>
      <Text style={styles.mealPrice}>{price}</Text>
      <Button title="Add to Order" onPress={() => handleMealSelect({ name, price })} /> 
      {/* Button that triggers adding a meal to the order */}
    </View>
  );

  // Main render block for displaying the list of meals
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restaurant Menu</Text>
      {/* FlatList is used to render the meals array efficiently (React Native, 2024) */}
      <FlatList
        data={meals} // Passes the meals array to FlatList
        keyExtractor={(item) => item.id} // Extracts unique key for each meal item
        renderItem={({ item }) => (
          <MealItem name={item.name} description={item.description} price={item.price} />
        )}
      />
    </View>
  );
};

// Styles for the app, using StyleSheet for clean structure
const styles = StyleSheet.create({
  container: {
    flex: 1, // Allows the container to take up the full screen height
    padding: 16,
    backgroundColor: '#fff', // White background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16, // Adds space below the title
  },
  mealItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc', // Light gray separator line between items
  },
  mealName: {
    fontSize: 18,
    fontWeight: 'bold', // Bold font for meal name
  },
  mealDescription: {
    fontSize: 14,
    color: '#666', // Gray color for description
  },
  mealPrice: {
    fontSize: 16,
    color: '#000', // Black color for price
    marginTop: 4, // Adds space between description and price
  },
});

export default RestaurantApp; // Exports the component to be used in the app entry point

//Referencing list
// React (2024) Introducing Hooks. Available at: https://reactjs.org/docs/hooks-intro.html (Accessed: 8 October 2024).
// React Native (2024) Components and APIs. Available at: https://reactnative.dev/docs/components-and-apis (Accessed: 8 October 2024).
// React Native (2024) Alert. Available at: https://reactnative.dev/docs/alert (Accessed: 8 October 2024).
