import Accueil from './components/Accueil.vue';
import Viewcategorie from "./components/categories/Viewcategorie.vue"
import Addcategory from "./components/categories/Addcategory.vue"
import Viewarticles from "./components/articles/Viewarticles.vue"
export const routes = [
{
name: 'accueil',
path: '/',
component: Accueil
},
{
    name: 'viewcategorie',
    path: '/listcateg',
    component: Viewcategorie
    },
    {
        name: 'Addcategory',
        path: '/addcateg',
        component: Addcategory
        },

        {
            name:"Viewarticles",
            path:"/listarticles",
            component:Viewarticles
        },
    


];