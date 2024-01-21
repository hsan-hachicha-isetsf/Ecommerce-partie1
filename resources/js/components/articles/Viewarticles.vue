<template>
    <div>
    <div v-if="isLoading">
        <h1>En cours de chargement ...</h1>
    </div>
    <div v-else class="container" >
        <nav class="navbar navbar-expand-lg navbar-dark bg-success">
<div class="container-fluid">
<router-link :to="{name: 'Addarticle'}" class="btn btnoutline-light">
<i class="fa-solid fa-square-plus"></i> New Article
</router-link>
</div>
</nav>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Référecne</th>
                    <th>Désignation</th>
                    <th>Quantité</th>
                    <th>Prix</th>
                    <th>Marque</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="art in listarticles" :key="art.id">
                    <td><img :src="art.imageart" width="80" height="80"/></td>
                    <td>{{ art.reference }}</td>
                    <td>{{ art.designation }}</td>
                    <td>{{ art.qtestock }}</td>
                    <td>{{ art.prix }}</td>
                    <td>{{ art.marque }}</td>
                    <td><router-link :to="{name: 'editarticle', params: { id: art.id }}" class="btn btn-warning"> 
                        <i class="fa-solid fa-pen-to-square"></i>
                        Update
                    </router-link>
                </td>
                    <td><button class="btn btn-danger" @click="deletearticle(art.id)">
                        <i class="fa-solid fa-trash"></i>
                        Delete</button></td>

                </tr>
            </tbody>

        </table>
    </div>
    </div>
</template>

<script setup>
import {ref,onMounted} from "vue"
import axios from "axios"
const listarticles=ref([])
const isLoading=ref(true)

const getarticles=async()=>{
    await axios.get("http://localhost:8000/api/articles").then(res=>{
        listarticles.value=res.data
        isLoading.value=false
    })
    .catch(error=>{
        console.log(error)
    })
}
onMounted(() => {
    getarticles()
})
const deletearticle=async(id)=>{
    if(window.confirm("etes vous sure de vouloir supprimper l'article")){
    await axios.delete(`http://localhost:8000/api/articles/${id}`)
    .then(res=>{
        console.log("article supprimé avec succées")
        getarticles()
    })
    .catch(error=>{
        console.log(error)
    })
}
}
</script>

<style lang="scss" scoped>

</style>