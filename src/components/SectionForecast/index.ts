import { forecast, tForecast } from '../../services/forecast';
import { html } from '../../utils/html';
import './style.css';
export const SectionForecast = () => {
  let response: tForecast[] = [];

  document.addEventListener('DOMContentLoaded', async () => {
    const defautlLat = '2.8235';
    const defaultLon = '60.6758';

    const responseForecast = await forecast(defautlLat, defaultLon);

    response = responseForecast;
    console.log(response);
  });

  return html`
    <section class="forecast">
      <div class="title">
        <h1>Forecast</h1>
      </div>
      <div class="container-itens" id="container-itens"></div>
    </section>
  `;
};
