class Api::RecipesController < ApplicationController
  def index
    @recipes =
      if params[:author_id]
        Recipe.where(author_id: params[:author_id])
      else
        Recipe.all
      end
    render :index
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
    @recipe = Recipe.find(params[:id])
    render :show
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
