import * as echarts from 'echarts'
import { countNumber } from './index'

let linchartResize = []
let piechartResize = []
let barchartResize = []

const lineChart = params => {
  return new Line(params)
}
function Line (params) {
  this.init(params)
}

Line.prototype = {
  init: function (params) {
    const options = []
    this.lineChartArr = params
    for (let i = 0; i < params.length; i++) {
      options.push({
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          top: '20%',
          bottom: '15%'
        },
        xAxis: {
          type: 'category',
          data: params[i].xData,
          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        series: (function () {
          const series = []
          for (let j = 0; j < params[i].seriesData.length; j++) {
            if (params[i].chartDetailType === 'singleLine') {
              const item = {
                data: params[i].seriesData[j].data,
                type: 'line',
                itemStyle: {
                  color: params[i].chartColor[0]
                },
                areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: params[i].chartColor[0]
                  },
                  {
                    offset: 0.4,
                    color: params[i].chartColor[1]
                  },
                  {
                    offset: 1,
                    color: '#fff'
                  }
                  ])
                },
                symbol: null,
                symbolSize: 0
              }
              series.push(item)
            }
            if (params[i].chartDetailType === 'doubleLine') {
              const item = {
                data: params[i].seriesData[j].data,
                type: 'line',
                itemStyle: {
                  color: params[i].seriesData[j].color
                },
                symbol: null,
                symbolSize: 0
              }
              series.push(item)
            }
          }
          return series
        })()
      })
    }
    this.setLinechart(options)
  },
  setLinechart: function (options) {
    linchartResize = []
    for (let i = 0; i < this.lineChartArr.length; i++) {
      for (let j = 0; j < options.length; j++) {
        if (i === j) {
          console.log(this)
          this.lineChart = echarts.init(
            document.querySelector(
              this.lineChartArr[i].chartMainClass + ' .charShow'
            )
          )
          linchartResize.push(this.lineChart)
          this.lineChart.setOption(options[j])
        }
      }
    }
    window.addEventListener(
      'resize',
      function () {
        for (let x = 0; x < linchartResize.length; x++) {
          linchartResize[x].resize()
        }
      }
    )
  }
}

const pieChart = params => {
  return new Pie(params)
}

function Pie (params) {
  this.init(params)
}
Pie.prototype = {
  init: function (params) {
    const options = []
    this.pieChartArr = params
    for (let i = 0; i < params.length; i++) {
      options.push({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'right',
          y: 'center'
        },
        series: (function () {
          const series = []
          if (params[i].chartDetailType === 'circlePie') {
            const circlePieColor = params[i].chartColor
            const item = {
              type: 'pie',
              radius: ['50%', '70%'],
              center: ['25%', '60%'],
              avoidLabelOverlap: false,
              data: params[i].seriesData,
              itemStyle: {
                color: function (param) {
                  return circlePieColor[param.dataIndex]
                }
              }
            }
            series.push(item)
          }
          if (params[i].chartDetailType === 'areaPie') {
            const areaPieColor = params[i].chartColor
            const item = {
              type: 'pie',
              radius: ['10%', '60%'],
              center: ['30%', '50%'],
              roseType: 'radius',
              lableLine: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: true
                }
              },
              data: params[i].seriesData,
              itemStyle: {
                color: function (param) {
                  return areaPieColor[param.dataIndex]
                }
              }
            }
            series.push(item)
          }
          return series
        }())
      })
    }
    this.setPieChart(options)
  },
  setPieChart: function (options) {
    piechartResize = []
    for (let i = 0; i < this.pieChartArr.length; i++) {
      for (let j = 0; j < options.length; j++) {
        if (i === j) {
          this.lineChart = echarts.init(
            document.querySelector(
              this.pieChartArr[i].chartMainClass + ' .charShow'
            )
          )
          piechartResize.push(this.lineChart)
          this.lineChart.setOption(options[j])
        }
      }
    }
    window.addEventListener(
      'resize',
      function () {
        for (let x = 0; x < piechartResize.length; x++) {
          piechartResize[x].resize()
        }
      })
  }
}

const barChart = params => {
  return new Bar(params)
}

function Bar (params) {
  this.init(params)
}
Bar.prototype = {
  init: function (params) {
    const options = []
    this.barChartArr = params
    for (let i = 0; i < params.length; i++) {
      if (params[i].chartDetailType === 'rowBar') {
        options.push({
          xAxis: {
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                type: 'solid',
                color: '#e7e7e7',
                width: '2'
              }
            },
            splitLine: { show: false },
            type: 'value',
            boundaryGap: [0, 0],
            axisLabel: { interval: 0 }
          },
          grid: {
            left: '23%',
            top: '20%',
            bottom: '3%'
          },
          yAxis: {
            type: 'category',
            data: params[i].xData,
            axisTick: [{
              show: false
            }],
            axisLine: {
              show: true,
              lineStyle: {
                type: 'solid',
                color: '#e7e7e7',
                width: '2'
              }
            },
            textStyle: {
              fontSize: '14',
              fontFamily: 'PingFang SC Medium',
              color: '#666'
            }
          },
          series: (function () {
            const rowBarColor = params[i].chartColor
            const series = []
            for (let j = 0; j < params[i].seriesData.length; j++) {
              const item = {
                type: 'bar',
                tooltip: { show: false },
                barWidth: 16,
                data: params[i].seriesData[j].data,
                itemStyle: {
                  color: (params) => {
                    return rowBarColor[params.dataIndex]
                  }
                }
              }
              series.push(item)
            }
            return series
          }())
        })
      }
      if (params[i].chartDetailType === 'columnBar') {
        options.push({
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          xAxis: {
            data: params[i].xData,
            textStyle: {
              color: '#AAAAAA'
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            z: 10
          },
          grid: {
            left: '15%',
            top: '20%',
            bottom: '15%'
          },
          yAxis: {
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            textStyle: {
              color: '#AAAAAA'
            }
          },
          dataZoom: [{
            type: 'inside'
          }],
          series: function () {
            const series = []
            for (let j = 0; j < params[i].seriesData.length; j++) {
              this.dataShadow = []
              this.yMax = Math.max.apply(null, params[i].seriesData[j].data)
              const countNum = countNumber(this.yMax)
              for (let m = 0; m < params[i].seriesData[j].data.length; m++) {
                this.dataShadow.push(countNum)
              }
              const item = {
                type: 'bar',
                itemStyle: {
                  color: params[i].chartColor[0]
                },
                barGap: '-100%',
                barCategoryGap: '40%',
                data: this.dataShadow,
                animation: false
              }
              const item1 = {
                type: 'bar',
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [
                      { offset: 0, color: params[i].chartColor[1] },
                      { offset: 0.5, color: params[i].chartColor[2] },
                      { offset: 1, color: params[i].chartColor[3] }
                    ]
                  )
                },
                data: params[i].seriesData[j].data
              }
              series.push(item, item1)
            }
            return series
          }.bind(this)()
        })
      }
      this.setBarChart(options)
    }
  },
  setBarChart: function (options) {
    barchartResize = []
    for (let i = 0; i < this.barChartArr.length; i++) {
      for (let j = 0; j < options.length; j++) {
        if (i === j) {
          this.lineChart = echarts.init(
            document.querySelector(
              this.barChartArr[i].chartMainClass + ' .charShow'
            )
          )
          barchartResize.push(this.lineChart)
          this.lineChart.setOption(options[j])
        }
      }
    }
    window.addEventListener(
      'resize',
      function () {
        for (let x = 0; x < barchartResize.length; x++) {
          barchartResize[x].resize()
        }
      })
  }
}

export { lineChart, pieChart, barChart }
