import Vue from 'vue'
import { Button } from 'element-ui'
import { Form, FormItem } from 'element-ui'
import { Input } from 'element-ui'
//10导入message消息提示
import { Message } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
    //10导入到vue原型对象上,用this就能访问到$message,就可以进行弹框提示
Vue.prototype.$message = Message