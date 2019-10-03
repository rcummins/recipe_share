class Api::InstructionsController < ApplicationController
  def create
    @instruction = Instruction.new(instruction_params)

    if @instruction.save
      render json: @instruction, status: :created
    else
      render json: @instruction.errors.full_messages,
        status: :unprocessable_entity
    end
  end

  def update
    @instruction = Instruction.find(params[:id])

    if @instruction.update(instruction_params)
      render json: @instruction
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
