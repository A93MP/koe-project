import bioIcon from '../assets/bio.svg'
import commentsIcon from '../assets/comments.svg'
import configIcon from '../assets/config.svg'
import profilePicture from '../assets/profile-picture.jpg'
import securityIcon from '../assets/security.svg'
import statsIcon from '../assets/stats.svg'
import style from '../styles/profile-component.css?raw'
export class Profile extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    const styles = document.createElement('style')
    styles.innerHTML = style
    this.shadowRoot.innerHTML = `
    <article class="section user-section">
      <section class="user-profile-info">
        <div class="user-picture">
          <img src="${profilePicture}"/>
        </div>
        <span class="preferences"><img src='${configIcon}' alt=""></span>
      </section>
      <section class="user-menu">
        <div class="menu-container">
          <div class="menu-bar">
            <div class="menu-option front"><img src="${bioIcon}" alt=""></div>
            <div class="menu-option back"><img src="${statsIcon}" alt=""></div>
            <div class="menu-option back"><img src="${securityIcon}" alt=""></div>
          </div>
          <div class="menu-option-display">
            <div class="display-option displayed" id="user-bio"></div>
            <div class="display-option not-displayed" id="user-stats"></div>
            <div class="display-option not-displayed" id="user-security"></div>
          </div>
        </div>
      </section>
    </article>
    <article class="section posts-section">
      <section class="filters">
        <div class="filter start"><p>Discover</p></div>
        <div class="filter middle selected-filter"><p>Following</p></div>
        <div class="filter middle"><p>Trending</p></div>
        <div class="filter middle end"><p>Look up</p></div>
      </section>
      <section class="posts-container">
        <div class="post">
          <div class="post-owner">
            <img src="${profilePicture}" alt="">
            <p>@agusmope</p>
          </div>
          <div class="post-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quas consequatur tempora nulla harum adipisci quisquam iste veniam, aperiam at vero! Impedit nihil sapiente eligendi voluptate quod eos at nemo.
            Quos voluptates...</p>
          </div>
          <div class="post-stats">
            <div><img src="${commentsIcon}" alt=""></div>
          </div>
        </div>
        <div class="post">
          <div class="post-owner">
            <img src="${profilePicture}" alt="">
            <p>@agusmope</p>
          </div>
          <div class="post-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quas consequatur tempora nulla harum adipisci quisquam iste veniam, aperiam at vero! Impedit nihil sapiente eligendi voluptate quod eos at nemo.
            Quos voluptates...</p>
          </div>
          <div class="post-stats"></div>
        </div>
      </section>
    </article>
    <article class="section extra-section"></art>
  `
    this.shadowRoot.appendChild(styles)
  }
}
customElements.define('profile-component', Profile)
