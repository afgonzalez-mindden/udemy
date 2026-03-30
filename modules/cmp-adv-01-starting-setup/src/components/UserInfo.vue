<template>
	<base-card>
		<template v-slot:header>
			<h3>{{ fullName }}</h3>
			<base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
		</template>
		<template v-slot:main>
			<p>{{ infoText }}</p>
		</template>
	</base-card>
	<base-card>
		<template v-slot:main>
			<p>Slot 'main'</p>
		</template>
	</base-card>
</template>

<script>
export default {
	props: ["fullName", "infoText", "role"],
};
</script>

<style scoped>
div {
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
}

p {
	align-self: flex-start;
}
</style>
