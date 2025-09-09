import App from './App'


import Vue from 'vue'
import './uni.promisify.adaptor'
import uviewPlus from '@/uni_modules/uview-plus'

import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(uviewPlus)
  return {
    app
  }
}
