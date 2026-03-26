const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    setText() {
      this.message = this.$refs.userText.value;
      this.currentUserInput = this.$refs.btn.value;
      console.dir(this.$refs.title.textContent);
      console.log(this.$refs.userText.value);
      console.log(this.currentUserInput);
    },
  },
  created() {
    console.log("Al crear");
  },
  beforeCreate() {
    console.log("Ejecutado antes de crear");
  },
});

app.mount("#app");
