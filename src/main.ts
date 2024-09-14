import { Hero } from './components/Hero';
import { geolocation } from './services/geolocation';
import { Weather, weather } from './services/weather';
import './style.css';

function Main() {
  const hero = Hero();

  return hero;
}

function insertAppData(appData: Weather) {
  const temp = appData.app_temp;
  const description = appData.weather.description;
  const city = appData.city_name;
  const code = appData.country_code;

  const htmlAppTemp =  document.getElementById('app-temp') as HTMLParagraphElement;
  const htmlAppDesc =  document.getElementById('app-description') as HTMLParagraphElement;
  const htmlAppCity =  document.getElementById('app-citty') as HTMLParagraphElement;

  htmlAppTemp.textContent = Math.floor(temp) + '°C';
  htmlAppDesc.textContent = description;
  htmlAppCity.textContent = city + ', ' + code;
}

document.addEventListener('DOMContentLoaded', async () => {
  const defautlLat = '-15.793889';
  const defaultLon= '-47.882778';

  document.querySelector<HTMLDivElement>('#app')!.innerHTML = Main();

  const appData = await weather(defautlLat, defaultLon);
  
  insertAppData(appData);
  
  const location = await geolocation();
  const appDataUpdated = await weather(String(location.lat), String(location.lon));
  insertAppData(appDataUpdated);
})
