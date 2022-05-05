## Set up

Link to video https://youtu.be/mxQ4zmFy4d7Y?t=1017
Link to docs https://ionicframework.com/docs/intro/cli

 install ionic globally. 
`ionic start`
install npm
set  up using wizard. `ionic serve`
covert from typescript to javascript project
`ionic serve`

clean up unwanted files. 
added pages folder  in src- and Memories Page.vue in 

set up componenet - template script style
imported ionic ui comonenets 
used componenets in template

set up core.css file to adjust theme color computed properties (css vars) from variables.css


## Page Creation 
create `MemoryDetails.vue`
import ionic components -again ( Better to make a base layout as a parent)
create folder: components & Base -> BaseLayout.vue
Move over main layout componenets to make a wrapper. exchange content for slot. 
add the title interpolation with a a prop


import  component as global in main.js. 
register the component using method  app.coomponent in mains.js
replace the ionic components with new base layout components
pass page title as prop `pageTitle ="xxx"`


## Navigations

set up route for memory details page
go to router/index.js and add the route path and the component to show.(make it dynamic using :id)
set up the link on the homepage-> using `router-link ="/memories/1"` on the list items.


set up back button on baselayout. 
import component and place in toolbar

import ion-buttons in base-layout
wrap back button in ion-back component
add slot=start to buttons component. 

***  3/5/2022

Note: Reloading on the navigate to page stops back button becuase Ionic has no idea where it came from . 
- Add a default ref on the back button. `:default-href="pageDefaultBackLink"`

now go to our base layout and add `pageDefaultBackLink` as a prop to expect. 
now add this to the base-layout component on the memories details page. 


## Adding Dynamic Data


in memories page componenet 
add data option ();
return : memories array of objects. 
- id: 'm1'
- image:
- title '
- description

with dummy data

``` javascript 
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
} 
```


Now generate that data dynamically by looping through each memory, setting the the the dynamic url to the ID. dont forget to bind the key so each iteration is unique, using ;key="id".
lastly out put the title as the content of each list item. 

Use Ion image component - lazy loaded with other stuff. 
`<ion-img :src="memory.image" :alt="memory.title"></ion-img>`

BETTER IMAGE STYLING
import IonThumbnail, IonLabel

Note- local images must be stored in public folder with relative urls NOT Prepended by public

wrapped Ion-img in ion thumbnail component that comes with predifined slots. set slot to start `slot="start"` to 





## VUEX

install vuex using npm

`npm install vuex@next`

create a store folder and an index.js file inside. 

in index.js

import createStore from vuex

create a s const store using the createStore() method

export store. 
in main.js we need to tac on .use(store) to our create app method 

``` javascript
const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(store);
```


## adding data to the store

pass an object to the createStore();

Object is {

a store that returns our stored data. in our case the hard coded memores. 
Then we will set the getters so that all components have access to a vuex data. 

for all our getters, which can be named anything we pass into them our state.
then return either the data. e.g. `return state.data` or return a function which whose parameter can no interact with the state. 

}





   








