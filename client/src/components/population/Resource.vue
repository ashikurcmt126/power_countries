<template>
    <div>
        <section id="beforeResource">
            <div class="tabButtonHeading">
                    <h3>Bangladesh GDP Annual Growth Rate</h3>
            </div>
            <div class="graph-char">
                <div>
                    <apexchart width="500" type="line" :options="options" :series="series"></apexchart>
                </div>
            </div>
        </section>
    </div>
</template>
 
<script>
import VueApexCharts from 'vue-apexcharts'


export default {
      components: {
        apexchart: VueApexCharts,
    },
  data: function() {
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
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
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
    .graph-char{
        background: #F5F5F5;
    }

</style>