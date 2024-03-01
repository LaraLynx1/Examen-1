class Crearproducto extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"})
  }
  static get observedAttributes(){
     return['title','image','description','inStock.available','inStock.quantity']
  }

  connectedCallback() {
    this.render()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this[propname]= newVal
    this.render
  }
  

  render(){
    this.shadowRoot.innerHTML`<div class="tarjeta">
    <img src="${this.image}">
    <h3>${this.tittle}</h3>
    <h3>${this.description}</h3>
    <h3>${this.inStock}.available</h3>
    <h3>${this.inStock}.quantity</h3>
    <button>show more</button>
</div>`
  }
}

window.customElements.define('crear-producto', Crearproducto);
export default Crearproducto 
