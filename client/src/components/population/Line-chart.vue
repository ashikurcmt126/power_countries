<template>
    <div>
        <div class="graph-char">
            <div>
                <apexchart height="400" width="750" type="line" :options="options" :series="series"></apexchart>
            </div>
        </div>
    </div>
</template>
 
<script>
import VueApexCharts from 'vue-apexcharts';
//import axios from 'axios'

export default {
      components: {
        apexchart: VueApexCharts
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
        data: [1000,2000,3000,4000]
        //data:[]
      }],
    }
  }

};


</script>
 
<style scoped>
    *{margin: 0; padding: 0;}
    
</style>