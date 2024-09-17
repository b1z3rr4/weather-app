import { html } from '../../utils/html';
import './style.css';
export const Footer = () => {
  return html`
    <footer class="footer">
      <h2>© 2024 Weather App</h2>
      <ul>
        <ul>
          <li><a href="">Privacity</a></li>
          <li><a href="">Terms</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </ul>
    </footer>
  `;
};
