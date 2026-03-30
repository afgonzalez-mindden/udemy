<template>
	<div>
		<TheHeader />
		<button @click="setSelectedComponent('active-goals')">Active Goals</button>
		<button @click="setSelectedComponent('ManageGoals')">Manage Goals</button>
		<!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
		<manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->
		<KeepAlive>
			<component :is="selectedComponent"></component>
		</KeepAlive>
	</div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
	components: {
		TheHeader,
		ManageGoals,
	},
	data() {
		return {
			selectedComponent: "active-goals",
			activeUser: {
				name: "Maximilian Schwarzmüller",
				description: "Site owner and admin",
				role: "admin",
			},
		};
	},
	methods: {
		setSelectedComponent(comp) {
			this.selectedComponent = comp;
		},
	},
};
</script>

<style>
html {
	font-family: sans-serif;
}

body {
	margin: 0;
}
</style>
