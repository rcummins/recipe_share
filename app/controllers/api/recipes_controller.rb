class Api::RecipesController < ApplicationController
  def index
    render json: Recipe.all
  end

  def create
    @recipe = Recipe.new(recipe_params)

    if @recipe.save
      render json: @recipe, status: :created
    else
      render json: @recipe.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    render json: Recipe.find(params[:id])
  end

  def update
    @recipe = Recipe.find(params[:id])

    if @recipe.update(recipe_params)
      render json: @recipe
    else
      render json: @recipe.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @recipe = Recipe.find(params[:id])
    @recipe.destroy

    render json: @recipe
  end

  private

  def recipe_params
    params
      .require(:recipe)
      .permit(
        :author_id,
        :title,
        :servings,
        :average_taste_rating,
        :average_effort_rating
      )
  end
end
