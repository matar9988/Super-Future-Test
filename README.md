# Super Future Test

This project is built using several libraries:

- react-router-dom: For linking pages by URL and making the site a single-page application.
- Redux: To manage the global state needed by the application.
- React-Redux: To provide the necessary tools and hooks to communicate with Redux.
- redux-saga: A middleware for managing asynchronous APIs.
- react-infinite-scroll-component: To add an infinite scroll method with pagination for the list data.

Some commonly used information is stored in the global state so that all necessary pages and components can access it without being passed from parent to child.

To access this information, Selectors are used on the pages to select the necessary parts from the global state.

 The global state is modified by dispatching actions declared in "/src/store/modules/posts/actions". If the action is added to a saga, it will execute a series of operations, which may include making an API call, and the corresponding reducer for the action is also activated. 

The saga is the most crucial element in business logic as it controls the sequence of operations that change the global state, which in turn affects the user interface.
