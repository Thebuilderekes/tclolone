import { useState } from "react"
import { NewItemFormContainer, NewItemInput, NewItemButton } from "../styles/Styles"
import useFocus from "../utils/UseFocus"

type NewItemFormProps = {
  onAdd(text: string): void
}
//• onAdd is a callback passed through AddNewItemProps.

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("")
  const inputRef = useFocus()
  return (
    <NewItemFormContainer>
      <NewItemInput
      //to get the input to focus automatically as soon as the form component mounts, a ref is used from the Usefocus
      //hook in utils
         ref={inputRef}
        value={text}
        onChange={e => {
          //remove this console code and extra braces make it one single return 
          console.log("typing")
          setText(e.target.value)
        }}
      />
      <NewItemButton onClick={() => onAdd(text)}>
        Create
      </NewItemButton>
    </NewItemFormContainer>
  )
}
