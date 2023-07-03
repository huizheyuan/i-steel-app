/**
 * 正则
 */
//数字验证
const numberReg = /^-?[1-9][0-9]?.?[0-9]*$/;
//身份证验证
const idCardReg =
  /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/;
//电话验证
const phoneReg = /^1[3456789]\d{9}$/;
//邮箱验证
const emailReg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
//密码验证
const pwdReg = /^.{6,16}$/;
//验证码验证
const vaildCodeReg = /^\d{4}$/;

/**
 * 正则验证
 */
export default {
  //数字验证
  isNumber: function (val) {
    return numberReg.test(val);
  },
  //身份证验证
  isIdCard: function (val) {
    return idCardReg.test(val);
  },
  //电话验证
  isPhone: function (val) {
    return phoneReg.test(val);
  },
  //邮箱验证
  isEmail: function (val) {
    return emailReg.test(val);
  },
  //密码验证
  isPwd: function (val) {
    return pwdReg.test(val);
  },
  //验证码验证
  isVaildCode: function (val) {
    return vaildCodeReg.test(val);
  },
  // 判断是否符合正则以及是否是必填项
  validate: function (data, rules) {
    // debugger
    // isOk是否符合正则;errmsg为提示信息
    let res = { isOk: true, errmsg: "" };
    if (!rules || !rules.length) {
      return res;
    }
    for (let rule of rules) {
      // rule: {name:'', type:'', errmsg:'', min:1, max:2, eq:'', required:Boolean, regex:''}
      if (!rule || !rule.name || !rule.type) {
        continue;
      }
      // 如果值不存在,判断是否为必填项
      if (!data[rule.name] || data[rule.name].length === 0) {
        // 如果是必填项就返回错误提示，required可以作为type是为了不同的type能给用户不同的提示
        if (rule.type === "required" || rule.required) {
          res = { isOk: false, errmsg: rule.errmsg };
          if (!res.errmsg) {
            res.errmsg = "请正确输入的数据"; //默认提示
          }
          return res;
        }
        // 如果不是必填项就跳过
        continue;
      }
      switch (rule.type) {
        // required 上面已经判断过了
        case "equals":
        // 数字验证
        case "number":
          if (!numberReg.test(data[rule.name])) {
            res = { isOk: false, errmsg: rule.errmsg };
          }
          break;
        // 身份证验证
        case "idcard":
          if (!idCardReg.test(data[rule.name])) {
            res = { isOk: false, errmsg: rule.errmsg };
          }
          break;
        // 电话验证
        case "phone":
          if (!phoneReg.test(data[rule.name])) {
            res = { isOk: false, errmsg: rule.errmsg };
          }
          break;
        // 邮箱验证
        case "email":
          if (!emailReg.test(data[rule.name])) {
            res = { isOk: false, errmsg: rule.errmsg };
          }
          break;
        // 密码验证
        case "pwd":
          if (!pwdReg.test(data[rule.name])) {
            res = { isOk: false, errmsg: rule.errmsg };
          }
          break;
        // 验证码验证
        case "vaildCode":
          if (!vaildCodeReg.test(data[rule.name])) {
            res = { isOk: false, errmsg: rule.errmsg };
          }
          break;
        case "range": // 数字类型的值取值范围
          // {name: 'xxx', type: 'range', min: 6, max: 6, required: true, errmsg: 'xxx'}
          let val = data[rule.name];
          if (val) {
            if (numberReg.test(val)) {
              if (rule.min && val < rule.min) {
                res = { isOk: false, errmsg: rule.errmsg };
              } else if (rule.max && val > rule.max) {
                res = { isOk: false, errmsg: rule.errmsg };
              }
            } else {
              res = { isOk: false, errmsg: rule.errmsg };
            }
          }
          break;
        case "lengthRange": // 字符串长度取值范围
          // {name: 'xxx', type: 'lengthRange', min: 6, max: 6, errmsg: 'xxx'}
          let le = data[rule.name] ? data[rule.name].length : 0;
          if (rule.min && le < rule.min) {
            res = { isOk: false, errmsg: rule.errmsg };
          } else if (rule.max && le > rule.max) {
            res = { isOk: false, errmsg: rule.errmsg };
          }
          break;
        case "regex": // 自定义正则表达式
          // {name: 'xxx', type: 'regex', regex: /^1[0-9]{10,10}$/, errmsg: 'xxx'}
          if (rule.regex && !rule.regex.test(data[rule.name])) {
            res = { isOk: false, errmsg: rule.errmsg };
          }
          break;
      }
      // 发现任何一个错误就立即返回，后面的不再判断
      if (!res.isOk) {
        if (!res.errmsg) {
          res.errmsg = "请正确输入的数据"; //默认提示
        }
        return res;
      }
    }
    return res;
  },
};
