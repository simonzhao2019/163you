import Vue from 'vue';
import { ValidationProvider, extend, localize } from "vee-validate";

import zh_CN from "vee-validate/dist/locale/zh_CN";

Vue.component("ValidationProvider", ValidationProvider);

// Install required rule.

localize({
  zh_CN: {
    messages: zh_CN.messages,
    names: {
      email: "邮箱",
      password: "密码"
    },
  }
});


let LOCALE = "zh_CN";

extend("mobile", {
  validate: value => {
    return /^1[3|4|5|7|8][0-9]{9}$/.test(value);
  },
  message:"手机必须是11位手机号码" // the error message
});

Object.defineProperty(Vue.prototype, "locale", {
  get() {
    return LOCALE;
  },
  set(val) {
    LOCALE = val;
    localize(val);
  }
});

