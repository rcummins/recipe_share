json.set! @instruction.id do
  json.partial! 'api/instructions/instruction', instruction: @instruction
end
