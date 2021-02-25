/*调整数字格式，100000变为100,000*/
function formatMoney(s) {
  s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(0) + "";
  var l = s.split(".")[0].split("").reverse(),
    t = "";
  for (i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
  }
  return t.split("").reverse().join("");
}


//avatar加后缀
function avatarAddSuffix(value) {
  value = replaceProtocol(value);
  if (value.indexOf(Switch_Protocol + "//kascdn.kascend.com") != -1) {
    if (value.indexOf("!") <= 0)
      return escapeString(value) + '!jellyfishavatar';
    else
      return escapeString(value);
  } else {
    return escapeString(value);
  }
}


//判断手机号
function checkIsPhone(phoneNumber) {
  var numbers = /^0{0,1}(1[3-9][0-9])[0-9]{8}$/;
  var isPhone = true;
  if (phoneNumber == "") {
    isPhone = false;
  } else {
    if (!numbers.test(phoneNumber)) {
      isPhone = false;
    }
  }
  return isPhone;
}

//校验邮箱
function checkIsEmail(emailNumber) {
  var RegExpT = "^\\w+((-\\w+)|(\\.\\w+))*@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-zA-Z]{2,}$";
  var pattern = new RegExp(RegExpT, "igm");
  var isEmail = true;
  if (emailNumber == "") {
    isEmail = false;
  } else {
    if (!pattern.test(emailNumber)) {
      isEmail = false;
    }
  }
  return isEmail;
}


//判断身份证
function checkIsIdcard(idCard) {
  var city = {
    11: "北京",
    12: "天津",
    13: "河北",
    14: "山西",
    15: "内蒙古",
    21: "辽宁",
    22: "吉林",
    23: "黑龙江 ",
    31: "上海",
    32: "江苏",
    33: "浙江",
    34: "安徽",
    35: "福建",
    36: "江西",
    37: "山东",
    41: "河南",
    42: "湖北 ",
    43: "湖南",
    44: "广东",
    45: "广西",
    46: "海南",
    50: "重庆",
    51: "四川",
    52: "贵州",
    53: "云南",
    54: "西藏 ",
    61: "陕西",
    62: "甘肃",
    63: "青海",
    64: "宁夏",
    65: "新疆",
    71: "台湾",
    81: "香港",
    82: "澳门",
    91: "国外 "
  };
  var regIdCard = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9]|[1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$/;
  if (idCard.length == 18) {
    if (regIdCard.test(idCard)) {
      if (city[idCard.substr(0, 2)]) {
        var idCardWi = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); //将前17位加权因子保存在数组里
        var idCardY = new Array(1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2); //这是除以11后，可能产生的11位余数、验证码，也保存成数组
        var idCardWiSum = 0; //用来保存前17位各自乖以加权因子后的总和
        for (var i = 0; i < 17; i++) {
          idCardWiSum += idCard.substring(i, i + 1) * idCardWi[i];
        }

        var idCardMod = idCardWiSum % 11; //计算出校验码所在数组的位置
        var idCardLast = idCard.substring(17); //得到最后一位身份证号码

        //如果等于2，则说明校验码是10，身份证号码最后一位应该是X
        if (idCardMod == 2) {
          if (idCardLast == "X" || idCardLast == "x") {
            return true;
          } else {
            return false;
          }
        } else {
          //用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
          if (idCardLast == idCardY[idCardMod]) {
            return true;
          } else {
            return false;
          }
        }
      } else {
        return false;
      }
    } else {
      return false;

    }
  } else {
    if (idCard.length == 10) {
      return true;
    } else {
      return false;
    }
  }
}


/*通过正则获取url中的参数*/
function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return decodeURI(r[2]);
  return null;
}


function formateNumber(value) {
    var num = parseInt(value);
    if (num >= 10000 && num < 100000000) {
        var snum = (num / 10000).toFixed(1);
        // alert(snum);
        return snum + '万';
    } else if (num >= 100000000) {
        var snum = (num / 100000000).toFixed(1);
        return snum + '亿';
    } else {
        return num;
    }
};

function escapeString(value) {
    value = value + "";
    var RexStr = /\</g;
    var step1 = value.replace(RexStr, '&lt;');
    var RexStr2 = /\>/g;
    var step2 = step1.replace(RexStr2, '&gt;');
    var RexStr3 = /\"/g;
    var step3 = step2.replace(RexStr3, '&quot;');
    var RexStr4 = /\'/g;
    var step4 = step3.replace(RexStr4, '&#39;');
    return step4;
}

//修改url中的参数，用法var newurl = changeURLArg(window.location.href,'step',4);
function changeURLArg(url, arg, arg_val) {
    var pattern = arg + '=([^&]*)';
    var replaceText = arg + '=' + arg_val;
    if (url.match(pattern)) {
        var tmp = '/(' + arg + '=)([^&]*)/gi';
        tmp = url.replace(eval(tmp), replaceText);
        return tmp;
    } else {
        if (url.match('[\?]')) {
            return url + '&' + replaceText;
        } else {
            return url + '?' + replaceText;
        }
    }
}