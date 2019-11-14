class Api::FavoritesController < ApplicationController
  def create
    @favorite = Favorite.new(favorite_params)

    if @favorite.save
      render :show, status: :created
    else
      render json: @favorite.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @favorite = Favorite.find(params[:id])
    @favorite.destroy

    render json: @favorite
  end

  private

  def favorite_params
    params.require(:favorite).permit(:recipe_id, :user_id)
  end
end
