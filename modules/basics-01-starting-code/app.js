Vue.createApp({
  data() {
    return {
      courseGoalA: "Finished the course!",
      courseGoalB: "Master Vue!",
      link: "https://vuejs.org/guide/quick-start.html",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      return randomNumber < 0.5 ? this.courseGoalA : this.courseGoalB;
    },
  },
}).mount("#user-goal");
