<template>
	<base-layout pageTitle="All Mems">
				<ion-list>
					<ion-item v-for="memory in memories" :router-link="`/memories/${memory.id}`" :key="memory.id">
						<ion-thumbnail slot="start">
							<ion-img :src="memory.image" :alt="memory.title"></ion-img>
						</ion-thumbnail>
						<ion-label>
							{{ memory.title }}
						</ion-label>
					</ion-item>
				</ion-list>
	</base-layout>
</template>

<script>
import {IonList, IonItem, IonImg, IonThumbnail, IonLabel} from '@ionic/vue';
export default {
	data() {
		return {
			memories : [
				{ 
					id: "m1",
					image: "./assets/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpeg",
					title: "A trip into the mountains",
					description: "It was a really nice trip"
				},
				{ 
					id: "m2",
					image: "./assets/Oahu_North_Shore_surfing_hand_drag.jpeg",
					title: "Surfing in the seas",
					description: "Feeling the cool breeze"
				},
				{ 
					id: "m3",
					image: "./assets/Cuisine_of_Malaysia_01.jpeg",
					title: "Good eating places",
					description: "really tasty"
				},
			]
		};
	}, 
    components : {
				IonList,
				IonItem,
				IonImg,
				IonThumbnail,
				IonLabel
    }

}
</script>

<style>


</style>