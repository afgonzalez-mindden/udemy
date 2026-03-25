Vue.createApp({
  data() {
    return {
      userInput: "",
      viewButton: true,
      color: "",
    };
  },
  computed: {
    stateButton() {
      const that = this;
      let classes = {
        user1: that.userInput === "user1",
        user2: that.userInput === "user2",
        visible: that.viewButton,
        hidden: !that.viewButton,
      };

      return classes;
    },
  },
  methods: {
    tooglePar() {
      this.viewButton = !this.viewButton;
    },
  },
}).mount("#assignment");
