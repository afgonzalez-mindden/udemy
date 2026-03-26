Vue.createApp({
  data() {
    return {
      boxSelectedA: false,
      boxSelectedB: false,
      boxSelectedC: false,
    };
  },
  computed: {
    boxAClasses() {
      const that = this;
      let classes = {
        demo: true,
        active: that.boxSelectedA,
        border: that.boxSelectedA,
      };

      return classes;
    },
  },
  methods: {
    detectarClick(box) {
      if (box === "A") {
        this.boxSelectedA = !this.boxSelectedA;
      } else if (box === "B") {
        this.boxSelectedB = !this.boxSelectedB;
      } else if (box === "C") {
        this.boxSelectedC = !this.boxSelectedC;
      }
      console.log(this.boxSelectedA, this.boxSelectedB, this.boxSelectedC);
    },
  },
}).mount("#styling");
