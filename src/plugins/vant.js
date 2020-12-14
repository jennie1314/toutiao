import { 
    Button, 
    NavBar,
    Form,
    Field
 } from 'vant'

const components = [
  Button,
  NavBar,
  Form,
  Field
]

const install = Vue => {
  components.forEach(component => Vue.component(component.name, component))
}

export default {
  install
}
