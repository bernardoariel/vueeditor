import Button from 'primevue/button';
import Editor from 'primevue/editor';

export default  {
  load: (Vue) => {
    Vue.component('Button', Button);
    Vue.component('Editor', Editor);
  }
}