<template>
  <!--
    <div id="app" class="container-fluid">
        <div class="site-info">
            <h1>grokonez</h1>
            <h3>Vue Nodejs example</h3>
        </div>
        <nav>
            <router-link class="btn btn-primary" to="/add">Add</router-link>
            <router-link class="btn btn-primary" to="/">Customers</router-link>
            <router-link class="btn btn-primary" to="/navbar">NavBar</router-link>
        </nav>
        <br/>
        <router-view/>
    </div>
  -->
  <div id="app">
    <router-view/>
  </div>
</template>
 
<script>
  export default {
    name: "app"
  };
</script>
 
<style>

</style>