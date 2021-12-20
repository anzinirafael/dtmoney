import logo from "./../../assets/logo.svg";
import { Container, Content } from "./style";

interface Props {
  onClick: () => void;
}

export function Header({ onClick }: Props) {
  return (
    <>
      <Container>
        <Content>
          <img src={logo} />
          <button onClick={onClick}>Nova Transação</button>
        </Content>
      </Container>
    </>
  );
}
