<template>
  <div>
    <h2>Meal Planner</h2>
    <div v-for="(meals, day) in mealPlan" :key="day" class="day-plan">
      <h3>{{ day }}</h3>
      <div>
        <label>Breakfast:</label>
        <input v-model="customMeal[day].breakfast" placeholder="Enter breakfast" />
        <select v-model="mealPlan[day].breakfast">
          <option v-for="meal in mealLibrary" :key="meal.name" :value="meal.name">{{ meal.name }}</option>
        </select>
      </div>
      <div>
        <label>Lunch:</label>
        <input v-model="customMeal[day].lunch" placeholder="Enter lunch" />
        <select v-model="mealPlan[day].lunch">
          <option v-for="meal in mealLibrary" :key="meal.name" :value="meal.name">{{ meal.name }}</option>
        </select>
      </div>
      <div>
        <label>Dinner:</label>
        <input v-model="customMeal[day].dinner" placeholder="Enter dinner" />
        <select v-model="mealPlan[day].dinner">
          <option v-for="meal in mealLibrary" :key="meal.name" :value="meal.name">{{ meal.name }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { mealLibrary } from "../data/mealLibrary.js";

export default {
  name: "MealPlanner",
  inject: ["mealPlan"],
  data() {
    return {
      customMeal: JSON.parse(JSON.stringify(this.mealPlan)),
      mealLibrary: mealLibrary, // Use the imported mealLibrary
    };
  },
};
</script>

<style>
.day-plan {
  margin-bottom: 1.5rem;
}
label {
  margin-right: 0.5rem;
}
input,
select {
  margin-bottom: 0.5rem;
}
</style>