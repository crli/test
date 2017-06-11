import {
  GET_USERINFO
} from './mutation-types.js'

import {setCookie,removeStore,delCookie,setStore} from '../config/mUtils'

export default {
  [GET_USERINFO](state, info) {
    if (state.userInfo && (state.userInfo.AccountName !== info.AccountName   )) {
      return;
    };

    if (info&&!info.Msg) {
      state.userInfo = info;
      state.login = true;
    } else {
      state.userInfo = null;
    }
  },
}
