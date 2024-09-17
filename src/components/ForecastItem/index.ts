import { tForecast } from '../../services/forecast';
import { html } from '../../utils/html';
import { Icons } from '../../utils/icons';
import '../SectionForecast/style.css';

interface ForecastItemProps {
  forecast: tForecast;
}

export const Forecastitem = (props: ForecastItemProps) => {
  const { datetime, temp, weather } = props.forecast;
  const { code, description, icon } = weather;

  const iconName = icon.split('')[icon.length - 1] === 'n' ? 'night' : 'day';
  const classCode = Icons[code as keyof typeof Icons][iconName];

  return html`
  <div class="displayItens">
     <div class="card">
      <div class="itens-container">
      <div id="forecast-icon"><li class="wi ${classCode}"/></div>
      <p id="forecast-data">${datetime}</p>
      </div>
        <p id="forecast-temp">${Math.floor(temp) + '°C'}</p>
        <p id="forecast-description">${description}</p>
      </div>
     </div>
  </div>
  `;
};
