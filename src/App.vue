<template>
  <div id="app">
    <header>
      <h1>Meal Planner</h1>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/meal-planner">Meal Planner</router-link></li>
          <li><router-link to="/calendar">Calendar</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { mealLibrary } from './data/mealLibrary.js';

export default {
  name: 'App',
  data() {
    return {
      mealLibrary: mealLibrary,
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      mealPlan: {
        Monday: { breakfast: '', lunch: '', dinner: '' },
        Tuesday: { breakfast: '', lunch: '', dinner: '' },
        Wednesday: { breakfast: '', lunch: '', dinner: '' },
        Thursday: { breakfast: '', lunch: '', dinner: '' },
        Friday: { breakfast: '', lunch: '', dinner: '' },
        Saturday: { breakfast: '', lunch: '', dinner: '' },
        Sunday: { breakfast: '', lunch: '', dinner: '' },
      },
      customMeal: {
        Monday: { breakfast: '', lunch: '', dinner: '' },
        Tuesday: { breakfast: '', lunch: '', dinner: '' },
        Wednesday: { breakfast: '', lunch: '', dinner: '' },
        Thursday: { breakfast: '', lunch: '', dinner: '' },
        Friday: { breakfast: '', lunch: '', dinner: '' },
        Saturday: { breakfast: '', lunch: '', dinner: '' },
        Sunday: { breakfast: '', lunch: '', dinner: '' },
      }
    };
  },
  provide() {
    return {
      mealPlan: this.mealPlan
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

header {
  background-color: green;
  color: white;
  padding: 1rem;
}

nav ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

nav li {
  display: inline;
}

nav a {
  color: white;
  text-decoration: none;
}

nav a.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}

main {
  padding: 2rem;
}
</style>
