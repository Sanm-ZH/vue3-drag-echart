const chartTypes = [
  {
    value: 'line',
    label: '折线图',
    chartType: [
      {
        imgSrc: '',
        type: 'singleLine'
      },
      {
        imgSrc: '',
        type: 'doubleLine'
      }
    ]
  },
  {
    value: 'pie',
    label: '饼图',
    chartType: [
      {
        imgSrc: '',
        type: 'areaPie'
      },
      {
        imgSrc: '',
        type: 'circlePie'
      }
    ]
  },
  {
    value: 'bar',
    label: '柱状图',
    chartType: [
      {
        imgSrc: '',
        type: 'rowBar'
      },
      {
        imgSrc: '',
        type: 'columnBar'
      }
    ]
  }
]

const chartPWs = [
  {
    value: 'w24',
    label: '24vw'
  },
  {
    value: 'w32',
    label: '32vw'
  },
  {
    value: 'w48',
    label: '48vw'
  }
]

const chartPHs = [
  {
    value: 'h15',
    label: '15vh'
  },
  {
    value: 'h20',
    label: '20vh'
  },
  {
    value: 'h30',
    label: '30vh'
  }
]

export {
  chartTypes,
  chartPWs,
  chartPHs
}
