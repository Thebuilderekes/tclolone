import { ColumnContainer, ColumnTitle } from "../styles/Styles.tsx"
import { FC } from 'react'

type ColumnProps = React.PropsWithChildren<{
  text: string,
}>

const Column: FC<ColumnProps> = ({ text, children }) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
    </ColumnContainer>
  )
}

export default Column
