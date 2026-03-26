<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toogleDetails">{{ showDetails ? "Hide" : "Show" }} Details</button>
    <ul v-if="showDetails">
      <li><strong>Phone: </strong>{{ friend.phone }}</li>
      <li><strong>Email: </strong>{{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      showDetails: false,
    };
  },
  props: {
    friend: Object,
  },
  methods: {
    toogleDetails() {
      this.showDetails = !this.showDetails;
    },
  },
};
</script>

<style scope></style>
