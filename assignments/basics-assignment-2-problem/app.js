Vue.createApp({
  data() {
    return {
      registeredUser: "",
      confirmedInput: "",
    };
  },
  methods: {
    showAlert() {
      alert("Button pressed!");
    },
    registerUser(event) {
      this.registeredUser = event.target.value;
    },
    confirmInput() {
      this.confirmedInput = this.registeredUser;
    },
  },
}).mount("#assignment");
