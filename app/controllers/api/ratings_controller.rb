class Api::RatingsController < ApplicationController
  def create
    @rating = Rating.new(rating_params)

    if @rating.save
      Recipe.find(rating_params[:recipe_id]).update_average_ratings
      @rating = Rating.includes(:recipe).find(@rating.id)
      render :show, status: :created
    else
      render json: @rating.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def rating_params
    params
      .require(:rating)
      .permit(:recipe_id, :author_id, :taste_rating, :effort_rating)
  end
end
