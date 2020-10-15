<template>
    <div>
        <section id="searchBar">
           <div class="container1">
               <div class="searchHeader">
                    <h1>The World's Trusted Servey Authority</h1>
                </div>
                <div class="insideContainer">
                    <div class="searchHeader">
                        <h2>Categories</h2>
                    </div>
                    <div class="inputboxWrappe">
                        <div class="inputBox1">
                            <h4>Select Categories</h4>
                            <div class="box-point">
                                <div style="width: 250px;" class="form-group">
                                    <select data-live-search="true" class="form-control selectpicker fixed-box">
                                        <option>Select One</option>
                                        <option>Mango</option>
                                        <option>Orange</option>
                                        <option>Lychee</option>
                                        <option>Pineapple</option>
                                        <option>Apple</option>
                                        <option>Banana</option>
                                        <option>Grapes</option>
                                        <option>Water Melon</option>
                                    </select>
                                </div>
                            </div> 
                        </div>

                        <div class="inputBox1">
                            <h4>Select Countries</h4>
                            <div class="box-point">
                                <div style="width: 250px;" class="form-group">
                                    <select data-live-search="true" class="form-control selectpicker">
                                        <option>Select One</option>
                                        <option>Mango</option>
                                        <option>Orange</option>
                                        <option>Lychee</option>
                                        <option>Pineapple</option>
                                        <option>Apple</option>
                                        <option>Banana</option>
                                        <option>Grapes</option>
                                        <option>Water Melon</option>
                                    </select>
                                </div>
                            </div> 
                        </div>

                        <div class="search">
                            <button id="searchBtn">
                                <i class="fas fa-arrow-circle-right searchBtnDesign"></i>
                            </button>
                        </div>
                        
                    </div>
                </div>
           </div>
        </section>
    </div>
</template>
 
<script>

</script>
 
<style scoped>
    *{margin: 0; padding: 0;}
    #searchBar {
        margin-top: 68px;
        height: 321px;
        background-color: #18237F;
        background-image: linear-gradient(#1D2983,#50639D );
    }
    .container1{
        margin: auto;
        width: 1000px;
    }
    .searchHeader h1 {
        font-family: 'Oswald', sans-serif;
        color: #FFFFFF;
        font-size: 28px;
        padding: 28px 0px;
    }
    .insideContainer {
        background-color: #092679;
        background-image: linear-gradient(#092679,#274688);
        border-radius: 10px;
        height: 200px;
    }
    .searchHeader h2 {
        font-family: 'Oswald', sans-serif;
        color: #FFFFFF;
        text-align: center;
        padding: 10px 32px;
    }

    
    .inputboxWrappe{position:relative;}
    .inputBox1:nth-child(2) {
    left: 448px;
}
    .inputBox1 {
        position: absolute;
        left: 121px;
        top: 20px;
    }
    
    .inputBox1 h4 {
        color: white;
        margin-bottom: 7px;
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
        margin-left: 4px;
    }
    .search {
        position: absolute;
        left: 738px;
        top: 37px;
    }
    i.fas.fa-arrow-circle-right.searchBtnDesign {
        padding: 10px;
        font-size: 36px;
    }
    button#searchBtn {
        border-radius: 10px;
        cursor: pointer;
        color: red;
        outline: 0;
    }

</style>