class Api::IngredientsController < ApplicationController
  def create
    @ingredient = Ingredient.new(ingredient_params)

    if @ingredient.save
      render partial: 'ingredient',
        locals: {ingredient: @ingredient},
        status: :created
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
    params.require(:ingredient).permit(:recipe_id, :item_number, :ingredient)
  end
end
