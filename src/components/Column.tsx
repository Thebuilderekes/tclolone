import { ColumnContainer, ColumnTitle } from "../styles/Styles.tsx";
import { useAppState } from "../state/AppStateContext.tsx";
import { AddNewItem } from "./AddNewItem.tsx";
import { Card } from "./Card";
import { addTask } from "../state/action.ts";
type ColumnProps = React.PropsWithChildren<{
  text: string;
  id: string;
}>;

const Column = ({ text, id }: ColumnProps) => {
  const { getTasksByListId, dispatch } = useAppState();
  const tasks = getTasksByListId(id);
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card text={task.text} key={task.id} id={task.id} />
      ))}
      <AddNewItem dark
        toggleButtonText=" + add another task"
        onAdd={text =>
          dispatch(addTask(text, id))
        }
      />
    </ColumnContainer>
  );
};

export default Column;
