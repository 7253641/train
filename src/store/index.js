import Vue from 'vue'
import Vuex from 'vuex'
import { AlertPlugin, ToastPlugin } from 'vux'
import mutations from './mutations';
import getters from './getters';
import actions from './actions'

Vue.use(Vuex);
Vue.use(AlertPlugin);
Vue.use(ToastPlugin);

const state={
	publicSet:{//公共部分
        trainListFilter:false,
	    indexSubmenu:false,
	    headSwiper: false,
	    headNav: false,
	    headTitle: false,
	    sTitle: '列表页',
	    sStyle: '',
	    sTo: {
	      url: '/',
	      name: true
	    }
	},
	vLoadingIsShow:false,
	toastMsg:{
		isShow:false,
		text:'提示',
		width:'20em',
		time:2000
	}

}

const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})

export default store