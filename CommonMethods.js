//获取URL参数
/**
 * @param {String} name
 * @returns
 */
function getUrlParam(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) {
    return unescape(r[2])
  }
  return null
}

//验证手机号
/**
 * @param {DOM} mobile
 * @returns
 */
function checkPhone(mobile) {
  var phone = mobile.val()
  if (!/^1[34578]\d{9}$/.test(phone)) {
    console.log('error')
    return false
  } else {
    console.log('bingo')
  }
}

//验证邮箱地址
/**
 * @param {DOM} mail
 * @returns
 */
function checkEmail(mail) {
  var pattern = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
  var email = mail.val()
  if (!pattern.test(email)) {
    console.log('error')
    return false
  } else {
    console.log('bingo')
  }
}

//限制文本输入框字体长度
/**
 * @param {DOM} obj  ID名
 * @param {DOM} obj1 ID名
 * @param {Number} num  总共可输入的字体长度
 */
function countChar(obj, obj1, num) {
  var count = document.getElementById(obj) //实时提醒字体还剩多少
  var regionLen = document.getElementById(obj1).value.length //文本输入框value长度
  count.innerHTML = num - regionLen
}

//验证中文
/**
 * @param {DOM} obj
 * @returns
 */
function isChinese(obj) {
  var name = obj.val()
  if (!/[\u4e00-\u9fa5]/.test(name)) {
    console.log('error')
    return false
  } else {
    console.log('bingo')
  }
}

//只能输入数字
/**
 * @param {Number} number
 * @returns
 */
function isNumber(number) {
  var pattern = /^[0-9]$/
  if (pattern.test(number)) {
    console.log('bingo')
    return true
  } else {
    console.log('error')
    return false
  }
}

//密码强度验证
/**
 * @param {String} str
 * @returns
 */
function checkPwd(str) {
  var pwdLv = 0
  if (str.length < 6) {
    return pwdLv
  }
  if (/[0-9]/.test(str)) {
    pwdLv++
  }
  if (/[a-z]/.test(str)) {
    pwdLv++
  }
  if (/[A-Z]/.test(str)) {
    pwdLv++
  }
  if (/[\.|-|_]/.test(str)) {
    pwdLv++
  }
  if (str.length > 16) {
    return false
  }
  return pwdLv
}

//判断滚动条是否到底部
function scrollBarToBottom() {
  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop()
    var docHeight = $(document).height()
    var windowHeight = $(this).height()
    var scrollHeight = document.body.scrollHeight
    console.log('scrollTop:' + scrollTop)
    console.log('scrollbottom:' + (docHeight - scrollTop - windowHeight))
    if (scrollTop + windowHeight == docHeight) {
      console.log('已经到最底部了！你还想要怎样')
    }
  })
}

//回到顶部
/**
 * @param {DOM} goTop
 */
function toTop(goTop) {
  $(window).scroll(function() {
    var windowTop = $(window).scrollTop()
    if (windowTop > 100) {
      goTop.fadeIn()
    } else {
      goTop.fadeOut()
    }
  })
  goTop.click(function() {
    $('html,body').animate(
      {
        scrollTop: '0'
      },
      '500'
    )
  })
}

//生成随机数
/**
 * @param {Number} min
 * @param {Number} max
 * @returns
 */
function randomNumber(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1))
}

//手机号中间四位用星号代替
/**
 * @ param {String} str
 * @ returns
 */

function mobileReplace(str) {
  return str.substring(0, 3) + '****' + str.substring(7)
}

//日期处理 时间戳转换成 y-d-m h:m:s格式
/**
 * @param {String} timestamp 时间戳
 * @returns
 */
function toDateFormat(timestamp) {
  function timestampToFormatDate() {
    var date = new Date()
    date.setTime(timestamp)
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()
    return year + '-' + supplementZero(month, 2) + '-' + supplementZero(day, 2) + ' ' + supplementZero(hour, 2) + ':' + supplementZero(minute, 2) + ':' + supplementZero(second, 2)
  }

  function supplementZero(obj, num) {
    if (obj == null || obj == undefined) {
      return ''
    }
    if (num == null || num == '' || num == undefined) {
      num = 2 //默认两位
    }
    //前面补充的0
    var zeroStr = ''
    if (obj.toString().length < num) {
      var gap = num - obj.toString().length
      for (var i = 0; i < gap; i++) {
        zeroStr += '0'
      }
    }
    if (zeroStr != '') {
      return zeroStr + obj
    } else {
      return obj
    }
  }
}

//随机获取16进制颜色
function getRandomColor() {
  return '#' + ('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).substr(-6) // 0x1000000 << 0 取整
}

//随机获取rgba颜色值
function getRandomRgbaColor() {
  var r = Math.floor(Math.random() * 256) //随机生成256以内r值
  var g = Math.floor(Math.random() * 256) //随机生成256以内g值
  var b = Math.floor(Math.random() * 256) //随机生成256以内b值
  var alpha = Math.random().toFixed(1) //随机生成1以内a值
  return `rgba(${r},${g},${b},${alpha})` //返回rgba(r,g,b,a)格式颜色 采用es6变量字符串拼接方法
}

/**
 * px转换rem
 * @param {Number} designWidth 设计图尺寸
 * @param {Number} rem2px 转换比例 100
 * @returns
 * Demo:adapt(640, 100)
 */
function adapt(designWidth, rem2px) {
  var d = window.document.createElement('div')
  d.style.width = '1rem'
  d.style.display = 'none'
  var head = window.document.getElementsByTagName('head')[0]
  head.appendChild(d)
  var defaultFontSize = parseFloat(window.getComputedStyle(d, null).getPropertyValue('width'))
  d.remove()
  document.documentElement.style.fontSize = (((window.innerWidth / designWidth) * rem2px) / defaultFontSize) * 100 + '%'
  var st = document.createElement('style')
  var portrait = '@media screen and (min-width: ' + window.innerWidth + 'px) {html{font-size:' + (window.innerWidth / (designWidth / rem2px) / defaultFontSize) * 100 + '%;}}'
  var landscape = '@media screen and (min-width: ' + window.innerHeight + 'px) {html{font-size:' + (window.innerHeight / (designWidth / rem2px) / defaultFontSize) * 100 + '%;}}'
  st.innerHTML = portrait + landscape
  head.appendChild(st)
  return defaultFontSize
}

/**
 * 点击文档空白处隐藏input输入框 针对iOS 安卓会自动隐藏
 * @param {param}
 * @returns
 */
function objBlur(id, time) {
  if (typeof id != 'string') throw new Error('objBlur()参数错误')
  var obj = document.getElementById(id),
    time = time || 300,
    docTouchend = function(event) {
      if (event.target != obj) {
        setTimeout(function() {
          obj.blur()
          document.removeEventListener('touchend', docTouchend, false)
        }, time)
      }
    }
  if (obj) {
    obj.addEventListener(
      'focus',
      function() {
        document.addEventListener('touchend', docTouchend, false)
      },
      false
    )
  } else {
    throw new Error('objBlur()没有找到元素')
  }
}

//移动端横竖屏模式
function isLandOrPort() {
  $(window).on('orientationchange', function(e) {
    if (window.orientation == 90 || window.orientation == -90) {
      $('body').attr('class', 'landscape') //横屏模式
      //TODO...
      orientation = 'landscape'
      return false
    } else if (window.orientation == 0 || window.orientation == 180) {
      $('body').attr('class', 'portrait') //竖屏模式
      //TODO...
      orientation = 'portrait'
      return false
    }
  })
}

//取视频第一帧为封面图片
/**
 * @param {element} videoEle
 */
function getVideoPoster(videoEle) {
  var video = null, //video标签
    scale = 0.8 //第一帧图片与源视频的比例
  video = videoEle.get(0) //赋值标签
  video.on('loadeddata', function() {
    //加载完成事件，调用函数
    var canvas = document.createElement('canvas') //canvas画布
    canvas.width = video.videoWidth * scale
    canvas.height = video.videoHeight * scale
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height) //画图
    video.setAttribute('poster', canvas.toDataURL('image/png')) //关键一步 —— 设置标签的 poster 属性的值为 base64 编译过后的canvas绘图。
  })
}

//移动端判断是长按还是点击
/**
 * @param {element} el
 */
function isLongTap(el) {
  el.on({
    touchstart: function(e) {
      timeOutEvent = setTimeout(function() {
        timeOutEvent = 0
        alert('你长按了')
      }, 400)
    },
    touchmove: function() {
      clearTimeout(timeOutEvent)
      timeOutEvent = 0
    },
    touchend: function() {
      clearTimeout(timeOutEvent)
      if (timeOutEvent != 0) {
        alert('你点击了')
      }
      return false
    }
  })
}

//jsonp处理跨域请求

/**
 *
 * @param {*} url  请求的URL地址
 * @param {*} params 向后台发送的数据
 * @param {*} callback 即跟后台约定的jsonp函数名
 * @returns
 * 测试用例 var params = {
				g_tk: 5381,
				uin: 0,
				format: 'jsonp',
				inCharset: 'utf-8',
				outCharset: 'utf-8',
				notice: 0,
				platform: 'h5',
				needNewCode: 1,
				_: 1539051419323,
				jsonpCallback: 'jsonpCallback'
		}
		jsonp('https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg', params, 'jsonpCallback')
				.then(res => {
					console.log(res)
				})
 */
function jsonp(url, params, callback) {
  return new Promimse((resolve, reject) => {
    window[callback] = function(data) {
      resolve(data)
      document.body.removeChild(script)
    }
    params = { ...params, callback }
    let arrs = []
    for (let key in params) {
      arrs.push(`${key}=${params[key]}`)
    }
    let script = document.createElement('script')
    script.src = url + '?' + arrs.join('&')
    document.body.appendChild(script)
  })
}

/**
 *DOM元素有没有该class
 * @param {*} obj DOM
 * @param {*} cls className
 * @returns
 */
function hasClass(obj, cls) {
  return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

/**
 *DOM元素添加class
 * @param {*} obj DOM
 * @param {*} cls className
 */
function addClass(obj, cls) {
  if (!hasClass(obj, cls)) obj.className += ' ' + cls
}

/**
 *DOM元素删除class
 *@param {DOM} obj
 * @param {className} cls
 */
function removeClass(obj, cls) {
  if (hasClass(obj, cls)) {
    const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    obj.className = obj.className.replace(reg, ' ')
  }
}

/**
 *toggle class类名
 * @param {DOM} obj
 * @param {className} cls
 */
function toggleClass(obj, cls) {
  if (hasClass(obj, cls)) {
    removeClass(obj, cls)
  } else {
    addClass(obj, cls)
  }
}

/**
 *获取滚动条滚动的高度
 *
 * @returns
 */
function getScrollOffset() {
  if (window.pageXOffset) {
    return {
      x: window.pageXOffset,
      y: window.pageYOffset
    }
  } else {
    return {
      x: document.body.scrollLeft || document.documentElement.scrollLeft,
      y: document.body.scrollTop || document.documentElement.scrollTop
    }
  }
}

/**
 *获取页面视口宽高
 *
 * @returns
 */
function getViewPortOffSet() {
  if (window.innerWidth) {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  } else {
    if (document.compatMode === 'BackCompat') {
      return {
        width: document.body.clientWidth,
        height: document.body.clientHeight
      }
    } else {
      return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientWidth
      }
    }
  }
}

/**
 *
 *获取元素css属性值
 * @param {DOM} ele
 * @param {String} prop
 * @returns
 */
function getStyle(ele, prop) {
  if (window.getComputedStyle) {
    return window.getComputedStyle(ele, null)[prop]
  } else {
    return ele.currentStyle[prop]
  }
}

/**
 *
 *添加事件
 * @param {DOM} ele
 * @param {eventType} type
 * @param {callback} handle
 */
function addEvent(ele, type, handle) {
  if (ele.addEventListener) {
    ele.addEventListener(type, handle, false)
  } else if (ele.attachEvent) {
    ele.attachEvent(`on${type}`, function() {
      handle.call(ele)
    })
  } else {
    ele['on' + type] = type
  }
}

/**
 *阻止冒泡
 *
 * @param {*} event
 */
function stopBubble(event) {
  if (event.stopPropagation) {
    event.stopPropagation()
  } else {
    event.cancelBubble = true
  }
}

/**
 *
 *
 * @param {*} event
 */
function cancelDefaultHandle(event) {
  if (event.preventDefault) {
    event.preventDefault()
  } else {
    event.returnValue = false
  }
}
