Vue.createApp({
  data() {
    return {
      name: "Álvaro",
      age: 37,
      imgUrl: "https://images.pexels.com/photos/33538346/pexels-photo-33538346.jpeg",
    };
  },
  methods: {
    randomNumber() {
      return Math.random();
    },
  },
}).mount("#assignment");
