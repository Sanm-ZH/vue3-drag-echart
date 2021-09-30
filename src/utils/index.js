export function requestHandle (req) {
  return req.then((res) => {
    if (res.status === 200) {
      return {
        success: true,
        data: res.data
      }
    }
    return {
      success: false,
      data: res.data.message,
      message: res.data.message
    }
  }, (err) => {
    console.log(err)
    return {
      success: false,
      data: '网络异常'
    }
  })
}

export function transBodyParams (body) {
  var obj = JSON.parse(body)
  return obj.params ? obj.params : obj
}

export function countNumber (num) {
  if (num % 100 === 0) {
    return num
  } else {
    var y = 100 - num % 100
    return num + y
  }
}
