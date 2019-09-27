class Api::IngredientsController < ApplicationController
  def index
    render json: Ingredient.where(recipe_id: params[:recipe_id])
  end

  def create
    @ingredient = Ingredient.new(ingredient_params)

    if @ingredient.save
      render json: @ingredient, status: :created
    else
      render json: @ingredient.errors.full_messages,
        status: :unprocessable_entity
    end
  end

  def update
    @ingredient = Ingredient.find(params[:id])

    if @ingredient.update(ingredient_params)
      render json: @ingredient
    else
      render json: @ingredient.errors.full_messages,
        status: :unprocessable_entity
    end
  end

  def destroy
    @ingredient = Ingredient.find(params[:id])
    @ingredient.destroy

    render json: @ingredient
  end

  private

  def ingredient_params
    params.require(:ingredient).permit(:recipe_id, :ingredient)
  end
end
