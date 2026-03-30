<template>
	<h2>Manage Goals</h2>
	<input type="text" v-model="goal" />
	<button @click="setGoal">Set Goal</button>
	<p>{{ isInputInvalid }}</p>

	<teleport to="body">
		<error-alert ref="alertRef">
			<template #default>
				<p>Input must not be empty!</p>
			</template>
		</error-alert>
	</teleport>
</template>

<script setup>
// Imports
import { ref } from "vue";
import ErrorAlert from "./ErrorAlert.vue";

// Variale de estado
const goal = ref("");
const alertRef = ref(null);

// Métodos
const setGoal = () => {
	alertRef.value.open();
};
</script>
