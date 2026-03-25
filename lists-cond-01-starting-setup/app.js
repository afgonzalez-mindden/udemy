const app = Vue.createApp({
  data() {
    return {
      goals: [],
      inputGoal: "",
    };
  },
  methods: {
    addGoal() {
      if (this.inputGoal !== "") {
        this.goals.push(this.inputGoal);
      }
      this.inputGoal = "";
    },
    removeGoal(id) {
      this.goals.splice(id, 1);
    },
  },
});

app.mount("#user-goals");
