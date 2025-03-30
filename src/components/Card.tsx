import { CardContainer } from "../styles/Styles"
type CardProps = {
  text: string
}

export const Card = ({ text }: CardProps) => {
  return (
    <CardContainer>
      {text}
    </CardContainer>
  )
}

