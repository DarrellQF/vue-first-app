<template>
	<base-layout pageTitle="All Mems">
				<ion-list>
					<ion-item v-for="memory in memories" :router-link="`/memories/${memory.id}`" :key="memory.id">
					{{ memory.title }}
					</ion-item>
				</ion-list>
	</base-layout>
</template>

<script>
import {IonList, IonItem} from '@ionic/vue';
export default {
	data() {
		return {
			memories : [
				{ 
					id: "m1",
					image: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg",
					title: "A trip into the mountains",
					description: "It was a really nice trip"
				},
				{ 
					id: "m2",
					image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Oahu_North_Shore_surfing_hand_drag.jpg",
					title: "Surfing in the seas",
					description: "Feeling the cool breeze"
				},
				{ 
					id: "m3",
					image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Cuisine_of_Malaysia_01.jpg/800px-Cuisine_of_Malaysia_01.jpg",
					title: "Good eating places",
					description: "really tasty"
				},
			]
		};
	}, 
    components : {
				IonList,
				IonItem,
    }

}
</script>

<style>


</style>