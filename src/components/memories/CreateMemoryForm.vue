<template>
      <form @submit.prevent="submitForm" class="ion-padding">
        <ion-list>
            <ion-item>
                <ion-label position="floating">Title</ion-label>
                <ion-input v-model="enteredTitle" type="text" required/>
            </ion-item>
             <ion-item>
                <ion-label position="floating">Image URL</ion-label>
                <ion-input v-model="enteredImageUrl" type="url" required/>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Description</ion-label>
                <ion-textarea  v-model="enteredDescription"  rows="5" type="text" > </ion-textarea>
            </ion-item>
                <ion-button type="submit" expand="full" >Save</ion-button>
        </ion-list>
    </form>
</template>

<script>
import { IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton} from '@ionic/vue'
export default {
    data() {
        return {
            enteredTitle: '',
            enteredImageUrl: '',
            enteredDescription: ''
        };
    },
    emits: ['save-memory'],
    components: { IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton},
    methods: {
        submitForm() {
            console.log(this.$store.state)
            const memoryData = {
                title: this.enteredTitle,
                imageUrl: this.enteredImageUrl,
                description:this.enteredDescription
            };
            this.$emit('save-memory', memoryData);
        }
    }

}
</script>

<style>

</style>