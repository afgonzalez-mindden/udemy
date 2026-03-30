<template>
	<button @click="acivateForm" v-if="isActiveForm">New Friend</button>
	<form v-else @submit.prevent="">
		<div>
			<label for="id">ID:</label>
			<input id="id" type="text" v-model="newFriend.id" placeholder="ID"/>
		</div>
		<div>
			<label for="name">Name:</label>
			<input id="name" type="text" v-model="newFriend.name" placeholder="Name"/>
		</div>
		<div>
			<label for="phone">Phone:</label>
			<input id="phone" type="text" v-model="newFriend.phone" placeholder="Phone"/>
		</div>
		<div>
			<label for="email">Email:</label>
			<input id="email" type="text" v-model="newFriend.email" placeholder="Email"/>
		</div>
		<div>
			<label for="favorite">Is favorite?:</label>
			<input id="favorite" type="checkbox" v-model="newFriend.favorite" placeholder="ID"/>
		</div>
		<button type="button" @click="saveParent">Save</button>
		<button type="button" @click="cancelSave">Cancel</button>
	</form>

</template>
<script>
	export default {
		name: 'addFriend',
		emits: ["save-new-friend"],
		data() {
			return {
				isActiveForm: true,
				newFriend: {
					id: '',
					name: '',
					phone: '',
					email: '',
					favorite: false
				}
			}
		},
		methods: {
			saveParent() {
				console.log(this.newFriend)
				this.$emit('save-new-friend', this.newFriend)
				this.resetForm();
			},
			resetForm(){
				this.newFriend.id = '';
				this.newFriend.name = '';
				this.newFriend.phone = '';
				this.newFriend.email = '';
				this.newFriend.favorite = false;
			},

			cancelSave(){
				this.resetForm();
				this.isActiveForm = !this.isActiveForm
			},
			acivateForm() {
				this.isActiveForm = !this.isActiveForm
				console.log(this.isActiveForm)
			}
		}
	}
</script>
<style></style>
