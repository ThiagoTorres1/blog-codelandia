import { Container, Info, Content } from "./styles";
import { FiHeart } from "react-icons/fi";


export function Note({data, ...rest}) {
  return(
    <Container {...rest}>
      <Info>
        <p>{data.created}</p>
        <FiHeart size={20}/>
      </Info>
      <Content>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </Content>
    </Container>
  )
}