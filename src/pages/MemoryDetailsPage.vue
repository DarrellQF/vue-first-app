<template>
    <base-layout :page-title="loadedMemory ? loadedMemory.title : 'Loading...'" pageDefaultBackLink="/memories">
        <h2 v-if="!loadedMemory">Cound not find a memory for the given id </h2>
        <memory-overview v-else :title="loadedMemory.title" :image="loadedMemory.image" :description="loadedMemory.description"> </memory-overview>
    </base-layout>
</template>

<script>
import MemoryOverview from '../components/memories/MemoryOverview.vue'
export default {
    data() {
        return {
            memoryId: this.$route.params.id
        }
    },
    computed : {
        loadedMemory() {
            return this.$store.getters.getMemory(this.memoryId)
        }

    },
    components : {
        MemoryOverview
    }
    // watch:  {
    //     '$route'(currentRoute) {
    //         this.memoryId = currentRoute.params.id
    //     }
    // }
}
</script>

<style>

</style>
