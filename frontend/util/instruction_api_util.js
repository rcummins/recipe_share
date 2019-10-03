export const createInstruction = instruction => (
  $.ajax({
    method: 'POST',
    url: '/api/instructions',
    data: instruction
  })
);

export const updateInstruction = instruction => (
  $.ajax({
    method: 'PUT',
    url: `/api/instructions/${instruction.instruction.id}`,
    data: instruction
  })
);

export const deleteInstruction = instruction => (
  $.ajax({
    method: 'DELETE',
    url: `/api/instructions/${instruction.instruction.id}`
  })
);
