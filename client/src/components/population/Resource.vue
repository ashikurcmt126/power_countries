<template>
    <div>
        <section id="beforeResource">
            <div class="tabButtonHeading">
                    <h3>Bangladesh GDP Annual Growth Rate</h3>
            </div>
            <div class="resource">
                <div class="current-resource">
                    <h4>Population of Bangladesh <span>(CURRENT)</span></h4>
                    <h3>17,000000</h3>
                </div>
                <div class="under-line">
                    <h5>Bangladesh Population (1950 - 2020)</h5>
                </div>
                <div class="graph-char">
                    <div>
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
            amar desh
        </section>
    </div>
</template>
 
<script>
import VueApexCharts from 'vue-apexcharts'
import { GChart } from "vue-google-charts";

export default {
      components: {
        apexchart: VueApexCharts,
        GChart
    },
  data() {
    return {
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
        data: [3000, 4000, 4500, 5000, 4900, 6000, 7000, 9100]
      }],
      chartData: [
        ["Year", "Sales", "Expenses", "Profit"],
        ["Chines", 1000, 400, 200],
        ["Bangladesh", 1170, 460, 250],
        ["India", 660, 1120, 300],
        ["Japan", 1030, 540, 350]
      ],
      details: {
        title: 'My Daily Activities'
        ,chartArea:{left:0,top:0,width:"100%",height:"100%"}
        ,width: 750
      }
    }
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