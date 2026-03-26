Vue.createApp({
  data() {
    return {
      tasks: [],
      inputTask: "",
      showList: true,
      btnText: "Hide",
    };
  },
  methods: {
    addTask() {
      if (this.inputTask) {
        this.tasks.push(this.inputTask);
      } else {
        alert("Introduzca una tarea");
      }
      this.inputTask = "";
    },
    toggleList() {
      this.showList = !this.showList;
      this.btnText = this.btnText === "Hide" ? "Show" : "Hide";
    },
  },
}).mount("#assignment");
