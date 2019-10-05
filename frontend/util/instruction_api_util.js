export const createInstruction = instruction => (
  $.ajax({
    method: 'POST',
    url: '/api/instructions',
    data: instruction
  })
);

export const deleteInstruction = instruction => (
  $.ajax({
    method: 'DELETE',
    url: `/api/instructions/${instruction.instruction.id}`
  })
);
