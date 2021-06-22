import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

// 看到了没？ 这就是 Vue类 的定义 
// Vue构造函数定义
// 定义Vue实例API
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // 构造函数仅执行了_init
  // 调用原型上的_init(options)方法并把用户所写的选项options传入
  // _init 用法这么写是编码习惯, 也降低的代码耦合性
  this._init(options)
}

// 2.实现Vue的实例方法和属性
initMixin(Vue) // 实现init函数
stateMixin(Vue) // 状态相关api $data,$props,$set,$delete,$watch
eventsMixin(Vue) // 事件相关api $on,$once,$off,$emit
lifecycleMixin(Vue)  // 生命周期api _update,$forceUpdate,$destroy
renderMixin(Vue) // 渲染api _render,$nextTick

export default Vue
