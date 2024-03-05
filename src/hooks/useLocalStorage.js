import React from "react";

export function useLocalStorage(keyLocalStorage, initialValue) {
  const [todosList, setTodosList] = React.useState(() => {
    const todosFromStorage = window.localStorage.getItem(keyLocalStorage);

    if (todosFromStorage) return JSON.parse(todosFromStorage);

    return initialValue;
  });

  const saveTodos = (newItem) => {
    localStorage.setItem(keyLocalStorage, JSON.stringify(newItem));

    setTodosList(newItem);
  };

  return {
    todosList,
    saveTodos,
  };
}
