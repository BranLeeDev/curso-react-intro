import React from "react";

export function useLocalStorage(keyLocalStorage, initialValue) {
  const [todosList, setTodosList] = React.useState(() => {
    const todosFromStorage = window.localStorage.getItem(keyLocalStorage);

    if (todosFromStorage) return JSON.parse(todosFromStorage);

    return initialValue;
  });

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    try {
      setTimeout(() => {
        window.localStorage.setItem(keyLocalStorage, JSON.stringify(todosList));

        setLoading(false);
      }, 2000);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }, [todosList, keyLocalStorage]);

  const saveTodos = (newItem) => {
    setTodosList(newItem);
  };

  return {
    todosList,
    saveTodos,
    loading,
    error,
  };
}
