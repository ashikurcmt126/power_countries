<template>
    <div>
        <section id="beforeResource">
            <div class="tabButtonHeading">
              <h3>Bangladesh GDP Annual Growth Rate</h3>
            </div>
            <div class="resource">
              <div class="resource-container">
                <div class="current-resource">
                  <h4>Population of Bangladesh <span>(CURRENT)</span></h4>
                  <h3>17,000000</h3>
                </div>

                <div class="under-line">
                  <h5>Bangladesh Population (1950 - 2020)</h5>
                </div>

                <div id="tuntuni" class="graph-char">
                  <button v-if="show0" class="button" v-on:click = "showdata">Click To Show Chart</button>
                  <div v-if = "show">
                    <apexchart height="400" width="750" type="line" :options="options" :series="series"></apexchart>
                  </div>
                </div>

                <div class="details">
                  <ul>
                    <li><i class="fas fa-hand-point-right"></i> In 2020 population is 17,0000000.</li>
                    <li><i class="fas fa-hand-point-right"></i> In 2019 population is 16,0000000.</li>
                    <li><i class="fas fa-hand-point-right"></i> In 2018 population is 15,0000000.</li>
                    <li><i class="fas fa-hand-point-right"></i> In 2017 population is 14,0000000.</li>
                    <li><i class="fas fa-hand-point-right"></i> In 2016 population is 13,0000000.</li>
                  </ul>
                </div>

                <div class="before-table-chart">
                  <h5>Population of All Countries</h5>
                </div>
                
                <div class="table-chart">
                  <GChart
                    type="Table"
                    :data="chartData"
                    :options="details"
                  />  
                </div>
              </div> 

            </div>
            <div class="sidebar-relative">
              <p>Ashikur</p>
              <p>Rahman</p>
              <p>Rashid</p>
              <p>Bangladesh</p>
              <p>India</p>
            </div>
            <div class="sidebar-compare">
              <h4>Create a Comparison Chart</h4>
              <input type="text" id="fcountry" name="firstCountry">
              <h6>vs</h6>
              <input type="text" id="scountry" name="secondCountry">
              <br>
              <button id="compare-button">
                <h3>COMPARE</h3>
              </button>
            </div>
        </section>
    </div>
</template>
 
<script>
import VueApexCharts from 'vue-apexcharts';
import { GChart } from "vue-google-charts";
//import axios from 'axios'

export default {
      components: {
       apexchart: VueApexCharts,
        GChart
    },
    
  data() {
    return {
        population: [],
         show: false,
         show0:true,
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      
      series: [{
        name: 'series-1',
        data: [1000,2000,3000,4000]
      }],
      
      chartData: [],
      details: {
        title: 'My Daily Activities'
        ,chartArea:{left:0,top:0,width:"100%",height:"100%"}
        ,width: 750
      }
    }
  },
  methods:{
    showdata : function() {
      this.show = !this.show;
      this.show0= false            
    }
  },
  computed: {
  },
  mounted(){
    
  },
  created(){
    console.log("ashikur")
      this.$store.dispatch('getPopulation')
        .then(response => {
            console.log(response)
          this.population = this.$store.getters.returnAllPopulation; 
          console.log(this.population[0].country_id+5)
          
          for(let i=0;i<8;i++){
            this.series[0].data[i]=this.population[1].country_id+i;

            console.log(this.series[0].data[i]);
          }
        this.chartData.push(["Year", "Sales", "Expenses", "Profit"])
        for (let i = 0; i < 5; i++) {
            this.chartData.push([this.population[i].country_id,1000+i,400+i,200+i]);
        }
        })
  }
  

};


</script>
 
<style scoped>
    *{margin: 0; padding: 0;}
    .tabButtonHeading {
        border: 3px solid gray;
        padding: 4px;
        background: #F5F5F5;
    }
    .tabButtonHeading h3 {
        font-size: 20px;
        font-weight: 700;
        padding-top: 5px;
        margin-left: 65px;
        margin-bottom: 5px;
    }
    .beforeResource{
        overflow: hidden;
    }
    .current-resource{
        width: 750px;
        padding-top: 30px;
        padding-bottom: 20px;
    }
    .current-resource h4{
        color: #696969;;
        font-size: 38px;
        font-weight: 600;
        font-family: roboto condensed,sans-serif;
        text-align: center;
    }
    .current-resource h3{
        color: #696969;
        font-size: 40px;
        font-weight: 800;
        font-family: roboto condensed,sans-serif;
        text-align: center;
    }
    .current-resource span {
        font-size: 17px;
        letter-spacing: 0.8px;
        font-weight: 600;
        font-family: 'Yanone Kaffeesatz', sans-serif;
    }
    .graph-char{
        z-index: 10;
    }
    button.button[data-v-f12aba60][data-v-f12aba60][data-v-f12aba60] {
      background-color: #4E619B;
      border: none;
      color: #FFFFFF;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      outline: none;
      text-transform: uppercase;
      font-family: 'Yanone Kaffeesatz', sans-serif;
      letter-spacing: 1.0px;
      border-radius: 7px;
      margin-top: 5px;
      margin-left: 312px;
      margin-bottom: 25px;
      cursor: pointer;
    }
    .resource {
        padding: 14px 0px 5px 65px;
        font-family: Arial;
        float: left;
    }
    .under-line {
        background-color: #EEEEEE;
        width: 750px;
        padding: 5px;
        margin-top: 15px;
    }
    .under-line h5{
        text-align: center;
        font-size: 18px;
    }
    .overflow{
        overflow: hidden;
    }
    .sidebar-relative {
      background: #4E609C;
      float: left;
      width: 260px;
      margin-top: 43px;
      margin-left: 10px;
      color: #FFFFFF;
      cursor: pointer;
      font-size: 13px;
      font-family: 'Roboto', sans-serif;
    }
    .sidebar-relative p {
      padding: 10px;
      border: 1px solid black;
    }
    .sidebar-relative p:hover{
      background: #EEEEEE;
      color: black;
    }
    .sidebar-compare {
      padding: 20px;
      background: #4E609C;
      float: left;
      width: 260px;
      margin-top: 50px;
      margin-left: 10px;
      color: #FFFFFF;
      font-size: 13px;
      font-family: 'Yanone Kaffeesatz', sans-serif;
    }
    .sidebar-compare h4 {
      font-size: 20px;
      padding-bottom: 20px;
    }
    .sidebar-compare input {
      padding: 5px;
      width: 175px;
      margin-bottom: 10px;
      color: black;
      font-size: 15px;
      letter-spacing: 0.8px;
      padding-left: 1;
    }
    .sidebar-compare h6 {
      margin-bottom: 8px;
      padding-left: 83px;
    }
    button#compare-button {
      background: #495057;
      color: white;
      padding: 6px 20px;
      margin-left: 50px;
      letter-spacing: 0.8px;
      margin-top: 10px;
      cursor: pointer;
      border-radius: 25px;
      outline: none;
    }
    button#compare-button h3 {
      font-size: 18px;
    }
    button#compare-button:hover{
      background: #5A5F65;
    }
    .before-table-chart {
        background-color: #EEEEEE;
        width: 750px;
        padding: 5px;
        margin-top: 35px;
        margin-bottom: 25px;
    }
    .before-table-chart h5{
        text-align: center;
        font-size: 20px;
        font-family: 'Yanone Kaffeesatz', sans-serif;
    }
    .details ul li {
        list-style: none;
        font-size: 18px;
        color: #696969;
        font-weight: 530;
        letter-spacing: 1.5px;
        padding: 10px;
        font-family: 'Yanone Kaffeesatz', sans-serif;
        margin-left: 58px;
    }

</style>