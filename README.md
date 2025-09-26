# Todo App

Aplicación de lista de tareas (ToDo) creada con React y Vite. Permite crear, completar, buscar y eliminar tareas. Los datos se persisten en el almacenamiento local del navegador.

- Entrada principal: [src/main.jsx](src/main.jsx)
- UI principal: [`AppUI`](src/App/AppUI.jsx) en [src/App/AppUI.jsx](src/App/AppUI.jsx) (montada por [src/App/index.jsx](src/App/index.jsx))
- Proveedor de estado y persistencia: [`TodoProvider`](src/components/TodoContext/index.jsx) en [src/components/TodoContext/index.jsx](src/components/TodoContext/index.jsx) que usa [`useLocalStorage`](src/components/TodoContext/useLocalStorage.js) en [src/components/TodoContext/useLocalStorage.js](src/components/TodoContext/useLocalStorage.js)
- Componentes relevantes: [`CreateTodoButton`](src/components/CreateTodoButton/index.jsx) ([src/components/CreateTodoButton/index.jsx](src/components/CreateTodoButton/index.jsx)) y [`TodoForm`](src/components/TodoForm/index.jsx) ([src/components/TodoForm/index.jsx](src/components/TodoForm/index.jsx))
- Configuración de Vite: [vite.config.js](vite.config.js)
- Documento HTML: [index.html](index.html)

Características principales

- Crear nuevas tareas.
- Marcar tareas como completadas.
- Buscar tareas por texto.
- Persistencia en localStorage.
- Modal para añadir tareas (portal a #modal).

Dependencias

- Node.js (>= 16 recomendado).
- Administrador de paquetes: npm o yarn.
- Dependencias del proyecto están en [package.json](package.json): React, React DOM, Vite, etc.

Instalación y servidor de desarrollo

1. Instalar dependencias:

```sh
npm install
```

2. Levantar servidor de desarrollo:

```sh
npm run dev
```

Esto usa Vite y sirve la app en modo desarrollo. La entrada principal es [src/main.jsx](src/main.jsx) y la app monta el contenido en el elemento con id `root` de [index.html](index.html).

Comandos útiles

- Desarrollo: `npm run dev`
- Build de producción: `npm run build`
- Previsualizar build: `npm run preview`
- Linter: `npm run lint`

Notas de despliegue

- El archivo [vite.config.js](vite.config.js) establece `base: '/Todo-App/'`. Ajustar ese valor si se despliega en una ruta distinta o en GitHub Pages.

Licencia

- MIT — ver [LICENSE](LICENSE).

Puedes ver la app en funcionamiento haciendo click -> https://vedgarcia.github.io/Todo-App/
