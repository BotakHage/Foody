import RestaurantSource from '../../data/restaurant-source';
import { createListRestaurantsTemplate } from '../templates/template-restaurants';

const Restaurants = {
  async render() {
    return `
      <div class="hero" tabindex="0">
        <picture tabindex="0">
          <source media="(max-width: 600px)" srcset="./images/heros/hero-image_2-small.jpg">
          <img src='./images/heros/hero-image_2-large.jpg' alt="Hero content background image of people eating together">
        </picture>

        <div class="hero-content" tabindex="0" aria-label="Hero content text">
          <h1 class="hero-title" tabindex="0">Hello.. Foodyers!</h1>
          <p class="hero-description" tabindex="0">You must eat from the best place.</p>
        </div>
      </div>

      <div class="content" aria-label="Main Content">
        <h2 class="content-title" tabindex="0">Explore Restaurant</h2>
        <div id="restaurant-list"></div>
      </div>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurants();
    const restaurantsContainer = document.querySelector('#restaurant-list');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createListRestaurantsTemplate(restaurant);
    });
  },
};

export default Restaurants;
