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
      render partial: 'recipe',
        locals: {recipe: @recipe},
        status: :created
    else
      render json: @recipe.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @recipe = Recipe
    .includes(:ingredients, :instructions, :author, :ratings)
    .find(params[:id])
    render :show
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
