<template>
    <div>
        <NavbarMenu></NavbarMenu>
        <div class="top">
            <SearchBox ></SearchBox>
        </div>
        <div class="resource">
            <Resource></Resource>
        </div>
    </div>
</template>
 
<script>
import NavbarMenu from './NavbarMenu'
import SearchBox from './SearchBox'
import Resource from './Resource'
    export default {
        components:{
            NavbarMenu,
            SearchBox,
            Resource
        }
    };
</script>
 
<style scoped>
    .top{
        margin-top: 68px;
    }

</style>