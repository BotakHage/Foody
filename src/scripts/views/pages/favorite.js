import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createListRestaurantsTemplate } from '../templates/template-restaurants';

const Favorite = {
  async render() {
    return `
      <div class="content" aria-label="Favorite Page">
        <h2 class="content-title" tabindex="0">Your Favorite Restaurant</h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createListRestaurantsTemplate(restaurant);
    });
  },
};

export default Favorite;
