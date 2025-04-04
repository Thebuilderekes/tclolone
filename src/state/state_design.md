## Creation of the context
The context is created in `AppStateContext` file to allow the entire app access to the list of tasks
and the ability to access each task using their `id`

## Usage of the context
In `AppStateContext`  the `useAppState` hook allows the `AppStateContext.Provider` to share values all accross the app by exporting a context provider wrapper component containing the values to be passed all through the app in `main.tsx`. The values which include `list` , `getTasksByListId` and `dispatch` function are shared as such, `list` and `getTaskByListId` are iterated upon to be used to create the cards(a list item within a column) and the columns(tasks within the `AppContainer` component) as well as used to run different actions in the app. 

## Defining actions

