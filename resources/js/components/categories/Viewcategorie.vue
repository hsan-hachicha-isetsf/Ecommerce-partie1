<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-success">
<div class="container-fluid">
<router-link :to="{name: 'Addcategory'}" class="btn btnoutline-light">
New Category
</router-link></div>
</nav>
    <div>
        <table class="table table-striped">
            <thead>
                <th>Image</th>
                <th>Nom catgorie</th>
                <th>Modifier</th>
                <th>supprimer</th>
                
            </thead>
            <tbody>
                <tr v-for="cat in categories" :key="cat.id">
                    <td><img :src="cat.imagecategorie" width="80" height="80"></td>
                    <td>{{ cat.nomcategorie }}</td>
                    <td><button class="btn btn-warning">Udate</button></td>
                    <td><button class="btn btn-danger" @click="deletecateg(cat.id)" >Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref,onMounted } from "vue";
import axios from "axios"
const categories=ref([])

const fetchcategories=async()=>{
    await axios.get("http://localhost:8000/api/categories")
    .then(res=>{
        categories.value=res.data
    })
    .catch(error=>{
        console.log(error)
    })
}
onMounted(() => {
    fetchcategories()
})

const deletecateg=async(id)=>{
    if(window.confirm("etes vous sur de vouloir supprimer la categorie "))
    {
await axios.delete(`http://localhost:8000/api/categories/${id}`)
.then(res=>{
    fetchcategories()
    console.log("categorie supprime")
})
.catch(error=>{
console.log(error)
})
}
}
</script>

<style lang="scss" scoped>

</style>