<template>
      <form class="ion-padding">
        <ion-list>
            <ion-item>
                <ion-label position="floating">Title</ion-label>
                <ion-input type="text" required/>
            </ion-item>
             <ion-item>
                <ion-label position="floating">Image URL</ion-label>
                <ion-input type="url" required/>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Description</ion-label>
                <ion-textarea  rows="5" type="text" > </ion-textarea>
            </ion-item>
                <ion-button expand="full" >Save</ion-button>
        </ion-list>
    </form>
</template>

<script>
import { IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton} from '@ionic/vue'
export default {
      components: { BaseLayout , IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton},

}
</script>

<style>

</style>