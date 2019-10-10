export const fetchMyFavorites = userID => (
  $.ajax({
    method: 'GET',
    url: `/api/favorites?user_id=${userID}`
  })
);

export const createFavorite = favorite => (
  $.ajax({
    method: 'POST',
    url: '/api/favorites',
    data: favorite
  })
);

export const deleteFavorite = favorite => (
  $.ajax({
    method: 'DELETE',
    url: `/api/favorites/${favorite.favorite.id}`
  })
);
