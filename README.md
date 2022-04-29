Link to video https://youtu.be/mQ4zmFy4d7Y?t=1017
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

create `MemoryDetails.vue`
import ionic components -again ( Better to make a base layout as a parent)
create folder: components & Base -> BaseLayout.vue
Move over main layout componenets to make a wrapper. exchange content for slot. 
add the title interpolation with a a prop


import  component as global in main.js. 
register the component using method  app.coomponent in mains.js
replace the ionic components with new base layout components
pass page title as prop `pageTitle ="xxx"`


set up route for memory details page
go to router/index.js and add the route path and the component to show.(make it dynamic using :id)
set up the link on the homepage-> using `router-link ="/memories/1"` on the list items.


set up back button on baselayout. 
import component and place in toolbar

import ion-buttons in base-layout
wrap back button in ion-back component
add slot=start to buttons component. 


