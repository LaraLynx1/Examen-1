import {Crearproducto} from "./components/indexpadre.js"
import {productsData} from "./data/data.js"
class appcontainer extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({mode: "open"})
  }
  
  connectedCallback() {
    this.render()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this[propname]= newVal
    this.render();
  }
  product=[]


  render(){
      productsData.forEach((element) => {
        this.shadowRoot.innerHTML += `<crear-producto></crear-producto>`
      });
  }
}

window.customElements.define('app-container', appcontainer);