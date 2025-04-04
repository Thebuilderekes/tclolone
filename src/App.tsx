import "./App.css";
import { AppContainer } from "./styles/Styles.tsx";
import { AddNewItem } from "./components/AddNewItem.tsx";
import Column from "./components/Column.tsx";
import { useAppState } from "./state/AppStateContext";
import { addList } from "./state/action.ts";
function App() {
const {lists, dispatch} = useAppState()
  return (
    <>
      <AppContainer>
        {lists.map((list) => (
          <Column text={list.text} key={list.id} id={list.id} />
        ))}
        <AddNewItem
          dark={false}
          toggleButtonText="+ Add another list"
         onAdd={text => dispatch(addList(text))} 
        />
        columns will go here
      </AppContainer>
    </>
  );
}

export default App;
