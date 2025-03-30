import { useState } from "react"
import { NewItemFormContainer, NewItemInput, NewItemButton } from "../styles/Styles"


type NewItemFormProps = {
  onAdd(text: string): void
}
//• onAdd is a callback passed through AddNewItemProps.

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("")
  return (
    <NewItemFormContainer>
      <NewItemInput
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <NewItemButton onClick={() => onAdd(text)}>
        Create
      </NewItemButton>
    </NewItemFormContainer>
  )
}
