const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  mergeComponents: function () {
    let pageObj = arguments[0];
    let length = arguments.length;
    for (let i = 1; i < length; i++) {
      let compObj = arguments[i];
      for (let compKey in compObj) {
        if (compKey == 'data') {
          // 合并页面中的data
          let data = compObj[compKey];
          for (let dataKey in data) {
            pageObj.data[dataKey] = data[dataKey];
          }
        } else {
          // 合并页面中的方法
          pageObj[compKey] = compObj[compKey];
        }
      }
    }
  }
}
