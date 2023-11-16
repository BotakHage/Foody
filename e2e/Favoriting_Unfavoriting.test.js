Feature('Favoriting and Unfavoriting Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('favoriting and unfavoriting one restaurant', ({ I }) => {
  // Melihat ada tidak nya restaurant
  I.seeElement('.restaurant-card');

  // Mengklik restaurant pertama yang ada untuk menuju halaman detail
  I.click(locate('.restaurant-card a').first());

  // Melihat ada tidak nya element favoriteButton
  I.seeElement('#favoriteButton');

  // Mengklik dan mem-favorite kan restaurant
  I.click('#favoriteButton');

  // Pindah ke halaman daftar restaurant yang sudah di favorite kan
  I.amOnPage('/#/favorite');

  // Melihat restaurant yang sudah di favorite kan
  I.seeElement('.restaurant-card');

  // Mengklik restaurant pertama yang sudah disukai
  I.click(locate('.restaurant-card a').first());

  // Mengklik dan tidak mem-favorite kan restaurant
  I.click('#favoriteButton');

  // Pindah ke halaman daftar restaurant yang sudah di favorite kan
  I.amOnPage('/#/favorite');

  // Melihat tidak ada nya restaurant yang di favorit kan
  I.dontSee('.restaurant-card');
});
