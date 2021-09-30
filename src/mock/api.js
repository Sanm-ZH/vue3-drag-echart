const apiPath =
  process.env.NODE_ENV === 'production'
    ? ''
    : ''

export const FIRSTCHART = `${apiPath}/data/firstchart`
export const GETLINECHART = `${apiPath}/data/lineChart`
