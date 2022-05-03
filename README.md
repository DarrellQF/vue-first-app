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

``` {{ 
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
} }```



Now generate that data dynamically by looping through each memory, setting the the the dynamic url to the ID. dont forget to bind the key so each iteration is unique, using ;key="id".
lastly out put the title as the content of each list item. 




   








