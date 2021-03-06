class Api::InstructionsController < ApplicationController
  def create
    @instruction = Instruction.new(instruction_params)

    if @instruction.save
      render :show, status: :created
    else
      render json: @instruction.errors.full_messages,
        status: :unprocessable_entity
    end
  end

  def destroy
    @instruction = Instruction.find(params[:id])
    @instruction.destroy

    render json: @instruction
  end

  private

  def instruction_params
    params.require(:instruction).permit(:recipe_id, :step_number, :instruction)
  end
end
