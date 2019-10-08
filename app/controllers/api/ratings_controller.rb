class Api::RatingsController < ApplicationController
  def index
    @ratings =
      if params[:recipe_id] && params[:author_id]
        Rating.where(
          recipe_id: params[:recipe_id],
          author_id: params[:author_id]
        )
      elsif params[:recipe_id]
        Rating.where(recipe_id: params[:recipe_id])
      end
    render :index
  end

  def create
    @rating = Rating.new(rating_params)

    if @rating.save
      render json: @rating, status: :created
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
