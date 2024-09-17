import { Footer } from './components/Footer';
import { SectionForecast } from './components/SectionForecast';
import { Hero } from './components/Hero';
import { geolocation } from './services/geolocation';
import { Weather, weather } from './services/weather';
import './style.css';
import { html } from './utils/html';
import { Icons } from './utils/icons';
import { forecast, tForecast } from './services/forecast';
import { Forecastitem } from './components/ForecastItem';
/* import { forecast, tForecast } from './services/forecast';
 */
function Main() {
  const hero = Hero();
  const footer = Footer();
  const sectionforecast = SectionForecast();
  return hero + sectionforecast + footer;
}

function insertAppData(appData: Weather) {
  const temp = appData.app_temp;
  const description = appData.weather.description;
  const city = appData.city_name;
  const code = appData.country_code;
  const iconCode = appData.weather.code;
  const iconName =
    appData.weather.icon.split('')[appData.weather.icon.length - 1] === 'n'
      ? 'night'
      : 'day';

  const htmlWIcon = document.getElementById('app-icon') as HTMLDivElement;
  const htmlAppTemp = document.getElementById(
    'app-temp'
  ) as HTMLParagraphElement;
  const htmlAppDesc = document.getElementById(
    'app-description'
  ) as HTMLParagraphElement;
  const htmlAppCity = document.getElementById(
    'app-citty'
  ) as HTMLParagraphElement;

  const classCode = Icons[iconCode as keyof typeof Icons][iconName];

  htmlWIcon.innerHTML = html` <i class="wi ${classCode}"></i> `;
  htmlAppTemp.textContent = Math.floor(temp) + '°C';
  htmlAppDesc.textContent = description;
  htmlAppCity.textContent = city + ', ' + code;
}

function insertAppForecast(appData: tForecast[]) {
  const htmlContainerItens = document.getElementById(
    'container-itens'
  ) as HTMLDivElement;

  htmlContainerItens.innerHTML = `
    <div >
      ${appData
        .map(
          forecast => `
            <div >
              ${Forecastitem({ forecast })}
            </div>`
        )
        .join('')}
    </div>
  `;
}
document.addEventListener('DOMContentLoaded', async () => {
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = Main();

  const defautlLat = '2.8235';
  const defaultLon = '60.6758';

  const appData = await weather(defautlLat, defaultLon);
  const appDataF = await forecast(defautlLat, defaultLon);
  insertAppData(appData);
  insertAppForecast(appDataF);
  const location = await geolocation();
  const appDataUpdated = await weather(
    String(location.lat),
    String(location.lon)
  );
  const appDataUpdatedf = await forecast(
    String(location.lat),
    String(location.lon)
  );
  insertAppForecast(appDataUpdatedf);
  insertAppData(appDataUpdated);
  console.log(appData);
});
