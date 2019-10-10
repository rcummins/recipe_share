json.array! @favorites do |favorite|
  json.partial! 'api/favorites/favorite', favorite: favorite
end
