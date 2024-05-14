 import Vue from 'vue';
import { PluginObject } from 'vue/types/plugin';
import servicesProvider from "./servicesProvider";


const servicesPlugin: PluginObject<any> = {
  install(Vue) {
    Vue.prototype.$services = servicesProvider;
  }
};

export default servicesPlugin;
