export const createRating = rating => (
  $.ajax({
    method: 'POST',
    url: '/api/ratings',
    data: rating
  })
);
