import { Hero } from './components/Hero';
import './style.css';

function Main() {
  const hero = Hero();

  return hero;
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = Main();
})
