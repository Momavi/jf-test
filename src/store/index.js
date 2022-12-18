import { createStore } from "vuex";

import mutations from "./mutations";
import apiRequests from "./actions/apiReguests";
import commonActions from "./actions/commonActions";

const actions = {
  ...apiRequests,
  ...commonActions,
};

export default createStore({
  state: {
    employee: "",
    loading: false,
    currentEmployee: "",
  },
  mutations,
  actions,
  modules: {},
});
