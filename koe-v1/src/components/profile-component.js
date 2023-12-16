import style from '../styles/profile-component.css?raw'
export class Profile extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
  }

  render () {
    const styles = document.createElement('style')
    styles.innerHTML = style
    this.shadowRoot.innerHTML = '<h3>Perfil</h3>'
    this.shadowRoot.appendChild(styles)
  }
}
customElements.define('profile-component', Profile)
