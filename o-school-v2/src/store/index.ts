import Vue from 'vue';
import Vuex from 'vuex';
// import { Session } from '../Interfaces/user/Session.interface';
// import { JWT_ACCESS } from '../../constants';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // session: {} as Session,
  },
  getters: {
    // session: (state): Session => state.session,
  },
  mutations: {
    // setSession(state) {
    // const data = jwtDecode<Payload>(
    // localStorage.getItem(`${JWT_ACCESS}`) as string
    // ),
    // user = JSON.parse(data.user)

    // conditionner la session en fonction du role du user
    // state.session = {
    // if (state.isParent && !state.isAdmin) {}
    // else if(!state.isParent && !state.isAdmin) {}
    // else {state.isAdmin}
    // }
    // },
  },
  actions: {
    // initSession(context) {
    //   context.commit('setSession');
    // },
  },
  modules: {
  },
});
