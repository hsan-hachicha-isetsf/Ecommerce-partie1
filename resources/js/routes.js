import Accueil from './components/Accueil.vue';
import Viewcategorie from "./components/categories/Viewcategorie.vue"
import Addcategory from "./components/categories/Addcategory.vue"
import Viewarticles from "./components/articles/Viewarticles.vue"
import Addarticle from "./components/articles/addarticle.vue"
import Editarticle from "./components/articles/Editarticle.vue"
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
    
        {
            name:"Addarticle",
            path:"/addarticle",
            component:Addarticle
            },
            {
                name:"editarticle",
                path:"/editarticle/:id",
                component:Editarticle
                },

];