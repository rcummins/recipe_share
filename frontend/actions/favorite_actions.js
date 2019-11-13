import * as FavoriteAPIUtil from '../util/favorite_api_util';

export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

const receiveFavorite = favorite => ({
  type: RECEIVE_FAVORITE,
  favorite
});

const removeFavorite = favorite => ({
  type: REMOVE_FAVORITE,
  favorite
});

export const createFavorite = formFavorite => dispatch => (
  FavoriteAPIUtil.createFavorite(formFavorite).then(
    favorite => dispatch(receiveFavorite(favorite))
  )
);

export const deleteFavorite = formFavorite => dispatch => (
  FavoriteAPIUtil.deleteFavorite(formFavorite).then(
    favorite => dispatch(removeFavorite(favorite))
  )
);
