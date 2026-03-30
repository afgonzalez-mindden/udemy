<template>
	<li>
		<h2>{{ name }} {{ favorite ? "(Favorito)" : "" }}</h2>
		<button @click="toogleFavorite">{{ favorite ? "&#129505;" : "&#128148;" }}</button>
		<button @click="toogleDetails">{{ showDetails ? "Hide" : "Show" }} Details</button>
		<ul v-if="showDetails">
			<li><strong>Phone: </strong>{{ phone }}</li>
			<li><strong>Email: </strong>{{ email }}</li>
		</ul>
		<button type="button" @click="deleteFriend">Delete</button>
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
		id: String,
		name: String,
		phone: String,
		email: String,
		favorite: Boolean,
	},
	emits: ["toggle-favorite", "delete-friend"],
	methods: {
		toogleDetails() {
			this.showDetails = !this.showDetails;
		},
		toogleFavorite() {
			this.$emit("toggle-favorite", this.id);
		},
		deleteFriend() {
			this.$emit("delete-friend", this.id)
		}
	},
};
</script>

<style scope></style>
