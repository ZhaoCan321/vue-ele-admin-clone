import Clipboard from './clipboard'

const install = function(Vue) {
  Vue.directive("clipboard", Clipboard)
}

if(window.Vue) {
  window.clipboard = Clipboard
  Vue.use(install)
}

Clipboard.install = install
export default Clipboard