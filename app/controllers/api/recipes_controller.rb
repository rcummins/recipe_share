class Api::RecipesController < ApplicationController
  def index
    @recipes = Recipe
      .includes(:author, :ingredients, :instructions)
      .all
    render :index
  end

  def create
    @recipe = Recipe.new(recipe_params)

    if @recipe.save
      @recipe = Recipe.includes(:author).find(@recipe.id)
      render :show
    else
      render json: @recipe.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @recipe = Recipe.find(params[:id])

    if @recipe.update(recipe_params)
      render partial: 'recipe', locals: {recipe: @recipe}
    else
      render json: @recipe.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @recipe = Recipe.includes(:ingredients, :instructions).find(params[:id])
    render :destroy
    @recipe.destroy
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
