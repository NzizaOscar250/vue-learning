<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script> -->

<template>
  <h1 class="text-red-500">{{title}}</h1>

 <LoginForm/>

</template>



<script>
import LoginForm from "./components/LoginForm.vue"
 export default{
    components:{LoginForm},
   data(){
        return {
          title:"Welcome to my dirst template"
        }
   }
 }

</script>
