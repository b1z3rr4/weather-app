import { html } from '../../utils/html';

export const Hero = () => {
  return html`
    <header class="app-bar">
      <div class="logo">
        <span class="material-symbols-outlined"> filter_drama </span>
        <h2>Weather App</h2>
      </div>
      <nav class="nav-bar">
        <ul>
          <li class="nav-item"><a href="#home">Home</a></li>
          <li class="nav-item"><a href="#forecast">Forecast</a></li>
          <li class="nav-item"><a href="#details">Details</a></li>
          <li class="nav-item"><a href="#about">About</a></li>
        </ul>
      </nav>
    </header>
    <section class="banner-hero" id="home">
      <div class="city-weather">
        <div class="container-graus">
          <div class="sun">
            <span class="material-symbols-outlined"> wb_sunny </span>
          </div>
          <div class="graus">
            <p class="temperature" id="app-temp">24°C</p>
            <p id="app-description">Sunny</p>
          </div>
        </div>
        <div class="city"><p id="app-citty">San Francisco, CA</p></div>
      </div>
    </section>
  `;
};
