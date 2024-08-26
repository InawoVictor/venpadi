<template>
    <div id="chart">
        <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script setup lang="ts">
const series= [{
    name: 'Hot Lead',
    data: [44, 55, 41, 67, 22, 43],
    color: "#FE8E39"
    }, {
    name: 'Warm Lead',
    data: [13, 23, 20, 8, 13, 27],
    color: "#FFECDE"
    }, 
];

const chartOptions = {
            chart: {
              type: 'bar',
              height: 350,
              stacked: true,
              toolbar: {
                show: true
              },
              zoom: {
                enabled: false
              }
            },
            responsive: [{
              breakpoint: 480,
              options: {
                legend: {
                  position: 'bottom',
                  offsetX: -10,
                  offsetY: 0
                }
              }
            }],
            plotOptions: {
              bar: {
                horizontal: false,
                borderRadius: 10,
                borderRadiusApplication: 'end', // 'around', 'end'
                borderRadiusWhenStacked: 'last', // 'all', 'last'
                dataLabels: {
                  total: {
                    enabled: false,
                  }
                }
              },
            },
            xaxis: {
              type: 'datetime',
              categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
                '01/05/2011 GMT', '01/06/2011 GMT'
              ],
            },
            yaxis: {
              labels: {
                formatter: (val: string) => {
                  return val + 'K'
                }
              }
            },
            legend: {
              position: 'top',
              offsetY: 0
            },
            fill: {
              opacity: 1
            }
          }
</script>