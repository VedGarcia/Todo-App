import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem)); //para actualizar la persistencia
    setItem(newItem); // para actualizar el estado
  };
  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };

// const dTodos = [
//   { text: "Cortar cabello", complete: true },
//   { text: "Preparar diapositivas", complete: false },
//   { text: "Correjir tarea de ingles", complete: true },
//   { text: "Aprender estados derivados", complete: true },
//   { text: "Participar del Algo+", complete: false },
// ];

// localStorage.setItem('TODO_V1', JSON.stringify(dTodos));

// localStorage.removeItem('TODO_V1')