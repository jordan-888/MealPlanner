<template>
  <div class="calendar">
    <h2>Weekly Meal Calendar</h2>
    <div class="calendar-grid">
      <div class="calendar-header" v-for="day in days" :key="day">
        {{ day }}
      </div>
      <div class="calendar-cell" v-for="(meals, day) in mealPlan" :key="day">
        <h3>{{ day }}</h3>
        <p><strong>Breakfast:</strong> {{ meals.breakfast || "Not Set" }}</p>
        <p><strong>Lunch:</strong> {{ meals.lunch || "Not Set" }}</p>
        <p><strong>Dinner:</strong> {{ meals.dinner || "Not Set" }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MealPlannerCalendar", // Multi-word name for ESLint compliance
  inject: ["mealPlan"],
  data() {
    return {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    };
  },
};
</script>

<style>
.calendar {
  padding: 2rem;
  text-align: center;
}

.calendar h2 {
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1rem;
}

.calendar-header {
  font-weight: bold;
  background-color: #f4f4f4;
  padding: 0.5rem;
  border: 1px solid #ddd;
  text-align: center;
}

.calendar-cell {
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.calendar-cell h3 {
  margin-bottom: 0.5rem;
  color: #34495e;
}

.calendar-cell p {
  margin: 0.25rem 0;
  font-size: 0.9rem;
  color: #555;
}
</style>