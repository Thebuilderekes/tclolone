import { CardContainer } from "../styles/Styles";
type CardProps = {
  text: string;
  id: string;
};

export const Card = ({ text }: CardProps) => {
  return <CardContainer>{text}</CardContainer>;
};
