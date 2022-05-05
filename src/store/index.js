import { createStore } from 'vuex';

const store = createStore({
    state() {
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
    getters: {
        getMemories(state){
            return state.memories;
        },
        getMemory(state){
            return (memoryId) => {

                return state.memories.find((memory) => memory.id === memoryId);
            };  
        }
    }
});

export default store;