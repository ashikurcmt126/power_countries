<template>
    <div>
        <header id="topBar">
            <div class="primaryMenu">
                <div class="nav-container">
                    <div class="logo">
                        <h1>Ashikur</h1>
                    </div>
                    <div class="menuWrapper">
                        <div class="menu">
                            <ul class="mainMenuItem">
                                <li><a href="#">Home<i class="fas fa-angle-down"></i></a></li>
                                <li><a href="#">National<i class="fas fa-angle-down"></i></a></li>
                                <li><a href="#">International<i class="fas fa-angle-down"></i></a></li>
                                <li><a href="#">Continent<i class="fas fa-angle-down"></i></a></li>
                                <li><a href="#">Contact<i class="fas fa-angle-down"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>
 
<script>

</script>
 
<style scoped>
    *{margin: 0; padding: 0;}
    header#topBar {
        overflow: hidden;
        top: 0px;
        position: fixed;
        width: 100%;
        z-index: 10;
    }
    .primaryMenu {
        background: #0A146E;
        height: 68px;
    }
    .nav-container {
        margin: auto;
        width: 1000px;
    }
    .primaryWrapper{
        overflow: hidden;
    }
    .logo {
        float: left;
        width: 40%;
        margin-top: 12px;
    }
    .logo h1{
        font-family: 'Lobster', cursive;
        color: #ffffff
    }
    .menu {
        float: left;
        margin-top: 0px;
    }
    .menuWrapper {
        float: left;
        width: 60%;
        margin-top: 19px;
    }
    ul.mainMenuItem li {
        list-style: none;
        float: left;
        padding-right: 10px;
        font-family: 'Yanone Kaffeesatz', sans-serif;
        font-size: 18px;
        letter-spacing: 1.1;
        padding-left: 24px;
        text-transform: uppercase;
    }
    ul.mainMenuItem li a{
        text-decoration: none;
        font-size: 25px;
        font: inherit;
        color:#FFFFFF;
    }
    .fa, .far, .fas {
        font-family: "Font Awesome 5 Free";
        font-size: 13px;
    }

</style>