<template>
	<dialog open v-if="visible">
		<slot></slot>
		<button type="button" @click="close">X</button>
	</dialog>
</template>

<script setup>
// imports
import { ref, defineExpose } from "vue";

// Variables de estado
const visible = ref(false);

// Métodos
const open = () => (visible.value = true);
const close = () => (visible.value = false);

// Funciones expuestas
defineExpose({ open });
</script>

<style scoped>
dialog {
	position: fixed;
	top: 20vh;
	left: 30%;
	width: 40%;
	background-color: white;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	padding: 1rem;
}
</style>
