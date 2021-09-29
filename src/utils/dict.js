import singleLine from '../assets/singleLine.png'
import doubleLine from '../assets/doubleLine.png'
import areaPie from '../assets/areaPie.png'
import circlePie from '../assets/circlePie.png'
import rowBar from '../assets/rowBar.png'
import columnBar from '../assets/columnBar.png'

const chartTypes = [
  {
    value: 'line',
    label: '折线图',
    chartType: [
      {
        imgSrc: singleLine,
        type: 'singleLine'
      },
      {
        imgSrc: doubleLine,
        type: 'doubleLine'
      }
    ]
  },
  {
    value: 'pie',
    label: '饼图',
    chartType: [
      {
        imgSrc: areaPie,
        type: 'areaPie'
      },
      {
        imgSrc: circlePie,
        type: 'circlePie'
      }
    ]
  },
  {
    value: 'bar',
    label: '柱状图',
    chartType: [
      {
        imgSrc: rowBar,
        type: 'rowBar'
      },
      {
        imgSrc: columnBar,
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

const singleLineColor = [
  {
    color: '#EB3841'
  }, {
    color: '#FEB4B4'
  }
]
const doubleLineColor = [
  {
    color: '#EB3841'
  }, {
    color: '#6086FF'
  }
]
const rowBarColor = [
  {
    color: '#6086FF'
  }, {
    color: '#98D1FF'
  }, {
    color: '#FEA145'
  }, {
    color: '#FB764A'
  }
]
const columnBarColor = [
  {
    color: 'rgba(152,209,255,0.2)',
    showalpha: true
  }, {
    color: '#83bff6'
  }, {
    color: '#188df0'
  }, {
    color: '#188df0'
  }
]
const areaPieColor = [
  {
    color: '#67A8FF'
  }, {
    color: '#D0F6FF'
  }, {
    color: '#FFE059'
  }, {
    color: '#FB764A'
  }
]
const circlePieColor = [
  {
    color: '#EB3841'
  }, {
    color: '#FB764A'
  }, {
    color: '#FEA145'
  }, {
    color: '#FFE059'
  }, {
    color: '#D0F6FF'
  }, {
    color: '#98D1FF'
  }, {
    color: '#67A8FF'
  }, {
    color: '#6086FF'
  }
]

export {
  chartTypes,
  chartPWs,
  chartPHs,
  singleLineColor,
  doubleLineColor,
  rowBarColor,
  columnBarColor,
  areaPieColor,
  circlePieColor
}
