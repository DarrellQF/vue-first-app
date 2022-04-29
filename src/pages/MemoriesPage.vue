<template>
	<base-layout pageTitle="All Mems">
				<ion-list>
					<ion-item router-link="/memories/1">A trip into the mountains</ion-item>
					<ion-item>Surfing in the seas</ion-item>
					<ion-item>Good eating places</ion-item>
				</ion-list>
	</base-layout>
</template>

<script>
import {IonList, IonItem} from '@ionic/vue';
export default {
    components : {
				IonList,
				IonItem,
    }

}
</script>

<style>


</style>