/**
 *
 * @param {number} method - Sorting method: 0 → oldest to newest, 1 → newest to oldest.
 * @param {[]} todoList - The todo list to be sorted.
 * @returns {[]} - A new sorted array of todos.
 */
export const sortByMethod = (method, todoList) => {
  return todoList.toSorted((a, b) =>
    method === 0 ? a.dateCreated - b.dateCreated : b.dateCreated - a.dateCreated
  );
};
