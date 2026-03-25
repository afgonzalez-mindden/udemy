Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  computed: {
    result() {
      return this.number === 37 ? 37 : this.number < 37 ? "Not there yet" : "Too much!";
    },
  },
  watch: {
    number(value) {
      const that = this;
      if (value > 37) {
        setTimeout(function () {
          that.number = 0;
        }, 5000);
        console.log("reset");
      }
    },
  },
  methods: {
    addNumber(num) {
      console.log("added");
      this.number += num;
    },
  },
}).mount("#assignment");
