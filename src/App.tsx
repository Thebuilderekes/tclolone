import "./App.css";
import { AppContainer } from "./styles/Styles.tsx";
import { AddNewItem } from "./components/AddNewItem.tsx";
 import Column from "./components/Column.tsx";
 import { Card } from "./components/Card.tsx";
 
function App() {
  return (
    <>
      <AppContainer>
         <Column text="To Do">
            <Card text="Generate app scaffold" />
         </Column>
         <Column text="In Progress">
             <Card text="Learn Typescript" />
         </Column>
         <Column text="Done">
             <Card text="Begin to use static typing" />
         </Column> 
        <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log("add new item button is working")} />
        columns will go here
     </AppContainer>
   </>
  );
}

export default App;
