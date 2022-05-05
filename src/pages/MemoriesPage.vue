<template>
	<base-layout pageTitle="All Mems">
	<memories-list :memories="memories"></memories-list>
	</base-layout>
</template>

<script>
import MemoriesList from '../components/memories/MemoriesList.vue';
export default {
	data() {
		return {
		
		};
	}, 
    components : {
			MemoriesList
    },
	computed : {
		memories() {
			return this.$store.getters.getMemories
		}
	}
}
</script>

<style>


</style>