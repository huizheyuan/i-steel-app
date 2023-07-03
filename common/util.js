// 获取年月日信息
export const getDate = (type, sep) => {
  const date = new Date();

  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (type === "start") {
    year = year - 60;
  } else if (type === "end") {
    year = year + 2;
  }
  month = month > 9 ? month : "0" + month;
  day = day > 9 ? day : "0" + day;
  let getMonth = "";
  let getDay = "";
  if (sep == "chineseChar") {
    getMonth = `${year}年${month}月`;
    getDay = `${year}年${month}月${day}日`;
  } else {
    getMonth = `${year}-${month}`;
    getDay = `${year}-${month}-${day}`;
  }
  var weekday = ["日", "一", "二", "三", "四", "五", "六"];

  let week = "星期" + weekday[date.getDay()];
  return {
    getMonth: getMonth, //获取年月
    getDay: getDay, //获取年月日
    getWeek: week,
  };
};
export const myFlat = (treeData) => {
  let queue = treeData;
  let data = []; //返回的数组结构
  while (queue.length !== 0) {
    //当队列为空时就跳出循环
    let item = queue.shift(); //取出队列中第一个元素
    data.push({
      id: item.id,
      parentId: item.parentId,
      name: item.name,
    });
    let children = item.listChildren; // 取出该节点的孩子
    if (children) {
      for (let i = 0; i < children.length; i++) {
        queue.push(children[i]); //将子节点加入到队列尾部
      }
    }
  }
  return data;
};

export const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const toTree = (data) => {
  // 删除 所有 children,以防止多次调用
  data.forEach(function (item) {
    delete item.children;
  });

  // 将数据存储为 以 id 为 KEY 的 map 索引数据列
  const map = {};
  data.forEach(function (item) {
    map[item.id] = item;
  });
  //        console.log(map);
  const val = [];
  data.forEach(function (item) {
    // 以当前遍历项，的pid,去map对象中找到索引的id
    const parent = map[item.parentId];
    // 好绕啊，如果找到索引，那么说明此项不在顶级当中,那么需要把此项添加到，他对应的父级中
    if (parent) {
      (parent.children || (parent.children = [])).push(item);
    } else {
      // 如果没有在map中找到对应的索引ID,那么直接把 当前的item添加到 val结果集中，作为顶级
      val.push(item);
    }
  });
  return val;
};
/**
 * 构建标准类型树
 * @param data
 * @param disable
 * @returns {Array}
 */
export function buildStandardTree(data, disable) {
  // 删除 所有 children,以防止多次调用
  data.forEach(function (item) {
    delete item.children;
    item.title = item.name;
    item.value = item.id;
    item.key = item.id;
  });

  // 将数据存储为 以 id 为 KEY 的 map 索引数据列
  const map = {};
  data.forEach(function (item) {
    map[item.id] = item;
  });
  //        console.log(map);
  const val = [];
  data.forEach(function (item) {
    // 以当前遍历项，的pid,去map对象中找到索引的id
    const parent = map[item.parentId];
    // 好绕啊，如果找到索引，那么说明此项不在顶级当中,那么需要把此项添加到，他对应的父级中
    if (parent) {
      (parent.children || (parent.children = [])).push(item);
      parent.disabled = disable;
    } else {
      // 如果没有在map中找到对应的索引ID,那么直接把 当前的item添加到 val结果集中，作为顶级
      val.push(item);
    }
  });
  return val;
}
export const deepClone = (source) => {
  if (!source && typeof source !== "object") {
    throw new Error("error arguments", "shallowClone");
  }
  const targetObj = source.constructor === Array ? [] : {};
  Object.keys(source).forEach((keys) => {
    if (source[keys] && typeof source[keys] === "object") {
      targetObj[keys] = deepClone(source[keys]);
    } else {
      targetObj[keys] = source[keys];
    }
  });
  return targetObj;
};
export const formatSearch = (search = "") => {
  let arr;
  let obj = {};
  arr = decodeURIComponent(search).split(/[?&#]/);
  for (let s of arr) {
    if (s) {
      let attr = s.split("=");
      if (attr[1]) {
        obj[attr[0]] = attr[1];
      }
    }
  }
  return obj;
};
export const getTimeState = () => {
  // 获取当前时间
  let timeNow = new Date();
  // 获取当前小时
  let hours = timeNow.getHours();
  // 设置默认文字
  let timeText = ``;
  // 判断当前时间段
  if (hours >= 0 && hours <= 11) {
    timeText = `早上好`;
  } else if (hours > 11 && hours <= 13) {
    timeText = `中午好`;
  } else if (hours > 13 && hours <= 18) {
    timeText = `下午好`;
  } else if (hours > 18 && hours <= 24) {
    timeText = `晚上好`;
  }
  // 返回当前时间段对应的状态
  return timeText;
};

// 将"2018-08-15T08:04:52.000+0000"这种格式的时间转化为正常格式2019-08-15 15:02:07

export const transformDate = (timedata) => {
  if (timedata !== null) {
    var that = this;
    var data = timedata.substr(0, 19); //'2019-08-09T18:23:27'
    var date = new Date(data.replace(/T/g, " ").replace(/-/g, "/"));
    var Year = date.getFullYear();
    var Month =
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1;
    var d = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    var Hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    var Minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var Seconds =
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    var over_time =
      Year +
      "/" +
      Month +
      "/" +
      d +
      " " +
      Hours +
      ":" +
      Minutes +
      ":" +
      Seconds;
    //***至此以上是将时间2020-03-18T01:57:23.000+0000转为正常时间格式，以下为将时间进行增加8小时解决时区差异的操作***
    var time = new Date(Date.parse(over_time));
    // console.log(over_time)
    // console.log(Date.parse(over_time))
    // console.log(time)
    time.setTime(time.setHours(time.getHours() + 8));
    var Y = time.getFullYear() + "-";
    var M = addZero(time.getMonth() + 1) + "-";
    var D = addZero(time.getDate()) + " ";
    var h = addZero(time.getHours()) + ":";
    var m = addZero(time.getMinutes()) + ":";
    var s = addZero(time.getSeconds());
    let dateSecondTime = Y + M + D + " " + h + m + s; //年月日时分秒
    let dateTime = Y + M + D; //年月日

    return {
      dateTime: dateTime,
      dateSecondTime: dateSecondTime,
    };
  }
};
//不足10 补0操作
var addZero = function (num) {
  return num < 10 ? "0" + num : num;
};

//获取上一页实例
export const prePage = () => {
  let pages = getCurrentPages(); //当前页
  let prePage = pages[pages.length - 2]; //前一页
  return prePage;
};
//简化uni.showtoast
export const msg = (title, duration = 1500, mask = false, icon = "none") => {
  //统一提示方便全局修改
  if (Boolean(title) === false) {
    return;
  }
  uni.showToast({
    title,
    duration,
    mask,
    icon,
  });
};

//统一修改顶部标题
export const setTabTitle = (title) => {
  uni.setNavigationBarTitle({
    title: title,
    success: (e) => {
      // console.log(e)
    },
  });
};

/**
 * 获取地址中参数
 * @returns {Object}
 */
export const getRequestUrl = () => {
  var url = document.location.search;
  var theRequest = new Object();
  if (url.indexOf("?") != -1) {
    var str = url.substr(1);
    let strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
  }
  return theRequest;
};

// * 获取七天时间
export const getDateRang = (num, mode) => {
  let dateRang = ["", ""];
  let time1 = new Date();
  let time2 = new Date();
  time2.setDate(time1.getDate() + num + 1);
  let start = null;
  let end = null;
  if (time1 < time2) {
    start = time1;
    end = time2;
  } else {
    start = time2;
    end = time1;
  }
  let sy = start.getFullYear();
  let sm = start.getMonth() + 1;
  let sd = start.getDate();
  let ey = end.getFullYear();
  let em = end.getMonth() + 1;
  let ed = end.getDate();
  let s = "";
  let e = "";
  if (mode == "sinogram") {
    s = sy + "年" + addZero(sm) + "月" + addZero(sd) + "日" + " 00:00:00"; //今日开始
    e = ey + "年" + addZero(em) + "月" + addZero(ed) + "日" + " 23:59:59"; //今日结束
  } else {
    s = sy + "-" + addZero(sm) + "-" + addZero(sd) + " 00:00:00"; //今日开始
    e = ey + "-" + addZero(em) + "-" + addZero(ed) + " 23:59:59"; //今日结束
  }
  dateRang[0] = s;
  dateRang[1] = e;
  return dateRang;
};

// * 获取当天开始和结束时间
export const getTodayDate = (mode) => {
  // mode  分为两种以"-"分隔或者以"年"分隔
  let today = ["", ""];
  let todayDate = new Date();
  let y = todayDate.getFullYear();
  let m = todayDate.getMonth() + 1;
  let d = todayDate.getDate();
  let s = "";
  let e = "";
  if (mode == "sinogram") {
    s = y + "年" + addZero(m) + "月" + addZero(d) + "日" + " 00:00:00"; //今日开始
    e = y + "年" + addZero(m) + "月" + addZero(d) + "日" + " 23:59:59"; //今日结束
  } else {
    s = y + "-" + addZero(m) + "-" + addZero(d) + " 00:00:00"; //今日开始
    e = y + "-" + addZero(m) + "-" + addZero(d) + " 23:59:59"; //今日结束
  }
  today[0] = s;
  today[1] = e;
  return today;
};

// * 获取本周开始和结束时间
export const getCurrentWeek = (mode) => {
  var startStop = new Array();
  //获取当前时间
  var currentDate = new Date();
  //返回date是一周中的某一天
  var week = currentDate.getDay();
  //返回date是一个月中的某一天
  var month = currentDate.getDate();
  //一天的毫秒数
  var millisecond = 1000 * 60 * 60 * 24;
  //减去的天数
  var minusDay = week != 0 ? week - 1 : 6;
  //alert(minusDay);
  //本周 周一
  var monday = new Date(currentDate.getTime() - minusDay * millisecond);
  //本周 周日
  var sunday = new Date(monday.getTime() + 6 * millisecond);
  var sy = monday.getFullYear();
  var sm = monday.getMonth() + 1;
  var sd = monday.getDate();
  var ey = sunday.getFullYear();
  var em = sunday.getMonth() + 1;
  var ed = sunday.getDate();

  if (mode == "sinogram") {
    var s = sy + "年" + addZero(sm) + "月" + addZero(sd) + "日" + " 00:00:00"; //今日开始
    var e = ey + "年" + addZero(em) + "月" + addZero(ed) + "日" + " 23:59:59"; //今日结束
  } else {
    var s = sy + "-" + addZero(sm) + "-" + addZero(sd) + " 00:00:00"; //开始
    var e = ey + "-" + addZero(em) + "-" + addZero(ed) + " 23:59:59"; //结束
  }
  startStop.push(s);
  startStop.push(e);
  return startStop;
};

// 获取近${num}月 开始时间和结束时间
export const getMonthRange = (num, mode) => {
  let dateRang = ["", ""];
  let time1 = new Date();
  let time2 = new Date();
  time2.setMonth(time1.getMonth() + num);
  time2.setDate(time1.getDate() + 1);
  let start = null;
  let end = null;
  if (time1 < time2) {
    start = time1;
    end = time2;
  } else {
    start = time2;
    end = time1;
  }
  let sy = start.getFullYear();
  let sm = start.getMonth() + 1;
  let sd = start.getDate();
  let ey = end.getFullYear();
  let em = end.getMonth() + 1;
  let ed = end.getDate();
  let s = "";
  let e = "";
  if (mode == "sinogram") {
    s = sy + "年" + addZero(sm) + "月" + addZero(sd) + "日" + " 00:00:00"; //今日开始
    e = ey + "年" + addZero(em) + "月" + addZero(ed) + "日" + " 23:59:59"; //今日结束
  } else {
    s = sy + "-" + addZero(sm) + "-" + addZero(sd) + " 00:00:00"; //今日开始
    e = ey + "-" + addZero(em) + "-" + addZero(ed) + " 23:59:59"; //今日结束
  }
  dateRang[0] = s;
  dateRang[1] = e;
  return dateRang;
};

// * 获取当月开始和结束时间
export const getCurrentMonth = (mode) => {
  //起止日期数组
  var startStop = new Array();
  //获取当前时间
  var currentDate = new Date();
  //获得当前月份0-11
  var currentMonth = currentDate.getMonth();
  //获得当前年份4位年
  var currentYear = currentDate.getFullYear();
  //求出本月第一天
  var firstDay = new Date(currentYear, currentMonth, 1);

  //当为12月的时候年份需要加1
  //月份需要更新为0 也就是下一年的第一个月
  if (currentMonth == 11) {
    currentYear++;
    currentMonth = 0; //就为
  } else {
    //否则只是月份增加,以便求的下一月的第一天
    currentMonth++;
  }

  //一天的毫秒数
  var millisecond = 1000 * 60 * 60 * 24;
  //下月的第一天
  var nextMonthDayOne = new Date(currentYear, currentMonth, 1);
  //求出上月的最后一天
  var lastDay = new Date(nextMonthDayOne.getTime() - millisecond);
  var sy = firstDay.getFullYear();
  var sm = firstDay.getMonth() + 1;
  var sd = firstDay.getDate();
  var ey = lastDay.getFullYear();
  var em = lastDay.getMonth() + 1;
  var ed = lastDay.getDate();

  if (mode == "sinogram") {
    var s = sy + "年" + addZero(sm) + "月" + addZero(sd) + "日" + " 00:00:00"; //今日开始
    var e = ey + "年" + addZero(em) + "月" + addZero(ed) + "日" + " 23:59:59"; //今日结束
  } else {
    var s = sy + "-" + addZero(sm) + "-" + addZero(sd) + " 00:00:00"; //开始
    var e = ey + "-" + addZero(em) + "-" + addZero(ed) + " 23:59:59"; //结束
  }
  startStop.push(s);
  startStop.push(e);

  return startStop;
};

//获取当前时间(这个时间还需要处理)
export const getCurrentTimes = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minute =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const second =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

  return {
    detail: {
      year: year,
      month: month,
      day: day,
      hour: hour,
      minute: minute,
      second: second,
    },
  };
};
// * 获取本年开始和结束时间
export const getYear = (mode, dates) => {
  //type为字符串类型，有两种选择，"s"代表开始,"e"代表结束，dates为数字类型，不传或0代表今年，-1代表去年，1代表明年
  var dd = new Date();
  let startStop = [];

  var n = dates || 0;
  var year = dd.getFullYear() + Number(n);
  if (mode == "sinogram") {
    // sy + '年' + addZero(sm) + '月' + addZero(sd) + "日" + ' 00:00:00'
    var s = year + "年01月01日" + " 00:00:00"; //开始
    var e = year + "年12月31日" + " 23:59:59"; //开始
    // var e = year + '年12月31日  '; //结束
  } else {
    var s = year + "-01-01  00:00:00"; //开始
    var e = year + "-12-31  23:59:59"; //结束
  }

  startStop.push(s);
  startStop.push(e);
  return startStop;
};
// * 获取近一年开始和结束时间
export const getLastYear = (num, mode) => {
  let dateRang = ["", ""];
  let time1 = new Date();
  let time2 = new Date();
  time2.setFullYear(time1.getFullYear() + num);
  time2.setDate(time1.getDate() + 1);
  let start = null;
  let end = null;
  if (time1 < time2) {
    start = time1;
    end = time2;
  } else {
    start = time2;
    end = time1;
  }
  let sy = start.getFullYear();
  let sm = start.getMonth() + 1;
  let sd = start.getDate();
  let ey = end.getFullYear();
  let em = end.getMonth() + 1;
  let ed = end.getDate();
  let s = "";
  let e = "";
  if (mode == "sinogram") {
    s = sy + "年" + addZero(sm) + "月" + addZero(sd) + "日" + " 00:00:00"; //今日开始
    e = ey + "年" + addZero(em) + "月" + addZero(ed) + "日" + " 23:59:59"; //今日结束
  } else {
    s = sy + "-" + addZero(sm) + "-" + addZero(sd) + " 00:00:00"; //今日开始
    e = ey + "-" + addZero(em) + "-" + addZero(ed) + " 23:59:59"; //今日结束
  }
  dateRang[0] = s;
  dateRang[1] = e;
  return dateRang;
};
// 不足补零
var withData = (num) => {
  let param = parseInt(num);
  return param < 10 ? "0" + param : "" + param;
};
// 转换时间
export const format = (arr) => {
  let curarr = [];
  let curarr0 = [];
  let str = "";
  arr.forEach((cur, index) => {
    let o = withData(cur);
    if (index > 2) {
      curarr.push(o);
    } else {
      curarr0.push(o);
    }
  });
  if (arr.length < 4) {
    str = curarr0.join("-");
  } else {
    str = curarr0.join("-") + " " + curarr.join(":");
  }
  return str;
};
export const currOrPast = (aa) => {
  var date1 = new Date(),
    time1 =
      date1.getFullYear() +
      "-" +
      (date1.getMonth() + 1) +
      "-" +
      date1.getDate(); //time1表示当前时间
  var date2 = new Date(date1);
  date2.setDate(date1.getDate() + aa);
  var time2 =
    date2.getFullYear() +
    "-" +
    addZero(date2.getMonth() + 1) +
    "-" +
    addZero(date2.getDate());
  return time2;
};
//blod对象转base64方法
export const blobToDataURL = (blob, callback) => {
  let a = new FileReader();
  a.onload = function (e) {
    callback(e.target.result);
  };
  a.readAsDataURL(blob);
};
//判断网络状态
export const isNetworkError = (callBack) => {
  uni.getNetworkType({
    success: function (res) {
      // console.log('networkType: ', res.networkType)
      if (res.networkType === "none") {
        callBack(true);
      } else {
        callBack(false);
      }
    },
  });
};

//判断一个值是否为空
export const isEmpty = (v) => {
  switch (typeof v) {
    case "undefined":
      return true;
    case "string":
      if (v.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length == 0)
        return true;
      break;
    case "boolean":
      if (!v) return true;
      break;
    case "number":
      if (isNaN(v)) return true;
      break;
    case "object":
      if (null === v || v.length === 0) return true;
      for (var i in v) {
        return false;
      }
      return true;
  }
  return false;
};
//获取随机id
export const uuid = function (len, binary) {
  len = !len ? 36 : len;
  binary = !binary ? 16 : binary;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
    .replace(/[xy]/g, function (c) {
      var r = (Math.random() * binary) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(binary);
    })
    .substring(0, len);
};

// 获取日期差
export const DateDiff = function (sDate1, sDate2) {
  //sDate1和sDate2是2002-12-18格式
  let aDate, bDate, oDate1, oDate2, iDays;
  aDate = sDate1.split("-");
  oDate1 = new Date(aDate[1] + "/" + aDate[2] + "/" + aDate[0]); //转换为12-18-2002格式
  bDate = sDate2.split("-");
  oDate2 = new Date(bDate[1] + "/" + bDate[2] + "/" + bDate[0]);
  iDays = parseInt((oDate1 - oDate2) / 1000 / 60 / 60 / 24); //把相差的毫秒数转换为天数
  return iDays;
};

export const groupBy = (arr, name) => {
  let groups = {};
  arr.forEach((o) => {
    const group = o[name];
    if (!o.id) o.id = Math.random().toString(16) + "_" + new Date().getTime();
    groups[group] = groups[group] || [];
    groups[group].push(o);
  });
  return groups;
};
