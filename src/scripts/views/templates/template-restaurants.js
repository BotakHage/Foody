import CONFIG from '../../globals/config';

const createListRestaurantsTemplate = (restaurant) => `
    <div class="restaurant-card" tabindex="0">
        <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Picture from ${restaurant.name}">
        <span>Rating: ${restaurant.rating}</span>
        <h3><a href="#/detail/${restaurant.id}">${restaurant.name}</a></h3>
        <span> - ${restaurant.city}</span>
        <p>${restaurant.description.length > 150 ? `${restaurant.description.slice(0, 100)} ...` : restaurant.description}</p>
    </div>
`;

const createRestaurantDetailTemplate = (resto) => `
    <div class="restaurant-detail" tabindex="0" >
        <h2 tabindex="0">${resto.restaurant.name}</h2>
        <img src="${CONFIG.BASE_IMAGE_URL + resto.restaurant.pictureId}" alt="Picture from ${resto.restaurant.name}"  tabindex="0"/>
        <div class="restaurant-info" tabindex="0">
            <h3>Information</h3>
            <h4>Rating: </h4>
            <p>${resto.restaurant.rating}</p>
            <h4>Address: </h4>
            <p>${resto.restaurant.address}</p>
            <h4>City: </h4>
            <p>${resto.restaurant.city}</p>
            <h4>Description: </h4>
            <p>${resto.restaurant.description}</p>
        </div>

        <div class="restaurant-menu" tabindex="0">
            <h3>Menu</h3>
            <hr class="line-detail" />
            <div class="foods" tabindex="0">
            <h4>Foods: </h4>
                <ol>
                    ${resto.restaurant.menus.foods.map((food) => `
                        <li>${food.name}</li>
                    `).join('')}
                </ol>
            </div>
            <div class="drinks" tabindex="0">
            <h4>Drinks: </h4>
                <ol>
                    ${resto.restaurant.menus.drinks.map((drink) => `
                        <li>${drink.name}</li>
                    `).join('')}
                </ol>
            </div>
        </div>
    </div>

    <h3 class="review-title" tabindex="0">Reviews</h3>
    <hr class="line-detail" />
    <div class="restaurant-reviews">
        ${resto.restaurant.customerReviews.map((review) => `
            <div class="review-card" tabindex="0">
                <h4 class="review-name">${review.name}</h4>
                <span class="review-date">${review.date}</span>
                <hr>
                <p>${review.review}</p>
            </div>
        `).join('')}
    </div>
`;

const createFavoriteRestaurantButtonTemplate = () => `
    <button aria-label="favorite this restaurant" id="favoriteButton" class="favorite">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><style>svg{fill:#ffffff}</style><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" aria-hidden="true"/></svg>    
    </button>
`;

const createUnfavoriteRestaurantButtonTemplate = () => `
    <button aria-label="unfavorite this restaurant" id="favoriteButton" class="favorite">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><style>svg{fill:#ffffff}</style><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" aria-hidden="true"/></svg>
    </button>
`;

export {
  createListRestaurantsTemplate,
  createRestaurantDetailTemplate,
  createFavoriteRestaurantButtonTemplate,
  createUnfavoriteRestaurantButtonTemplate,
};
