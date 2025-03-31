import { ColumnContainer, ColumnTitle } from "../styles/Styles.tsx"
import { FC } from 'react'
import { AddNewItem } from "./AddNewItem.tsx"

type ColumnProps = React.PropsWithChildren<{
  text: string,
}>

const Column: FC<ColumnProps> = ({ text, children }) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
      <AddNewItem toggleButtonText=" + add another task" onAdd={console.log("button add")} dark/>
    </ColumnContainer>
  )
}

export default Column
