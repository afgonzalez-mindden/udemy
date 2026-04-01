<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loadding</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && results.length === 0">
        No stored experiences found
      </p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  /* props: ['results'], */
  components: {
    SurveyResult,
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;

      fetch(
        'https://vue-http-demo-9aa94-default-rtdb.firebaseio.com/surveys.json',
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          const arrData = [];
          for (const id in data) {
            arrData.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
          this.results = arrData;
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
          this.error = 'Failed to fetch data';
        });
    },
    /* async loadExperiencesTwo() {
      const response = fetch(
        'https://vue-http-demo-9aa94-default-rtdb.firebaseio.com/surveys.json',
      );

      if (response.ok) {
        const arrData = [];
        const responseJson = response.json();
        for (const id in responseJson) {
          arrData.push({
            id: id,
            name: responseJson[id].name,
            rating: responseJson[id].rating,
          });
        }
        this.results = arrData;
      }
    }, */
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
