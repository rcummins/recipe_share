json.favorites do
  @user.favorites.each do |favorite|
    json.set! favorite.id do
      json.partial! 'api/favorites/favorite', favorite: favorite
    end
  end
end

json.ratings do
  @user.ratings.each do |rating|
    json.set! rating.id do
      json.partial! 'api/ratings/rating', rating: rating
    end
  end
end
