const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      fullName: "",
    };
  },
  watch: {
    name(value) {
      this.fullName = value === "" ? "" : `${value} Felipe`;
    },
    counter(value) {
      this.counter = value > 50 ? 0 : value;
    },
  },
  computed: {
    /* fullName() {
      console.log("running");
      return this.name === "" ? "" : `${this.name} Felipe`;
    },*/
  },
  methods: {
    addCounter(num) {
      this.counter = this.counter + num;
    },
    removeCounter(num) {
      this.counter = this.counter - num;
    },
    confirmedInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("Submit!");
    },
    resetInput() {
      console.log(this.name);
      this.name = "";
      this.confirmedName = "";
      console.log(this.name);
    },
  },
});

app.mount("#events");
