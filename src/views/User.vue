<template>
    <div class="user">
            I'm User
            {{$route.params}}
           
     <router-link :to="{name:'profile',params:{name:'profile11'}}  " class="nav-link active">Profile</router-link>

     <router-link :to="{name:'setting',params:{name:'setting111'}}  " class="nav-link active">Setting</router-link>
            <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>