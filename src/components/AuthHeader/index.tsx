import { useMemo } from "react";
import { Button, Container } from "./styles";
import NetflixLogo from '../../assets/netflix_logo.svg';


export interface AuthHeaderProps {
  showButtons?: boolean
}
export const AuthHeader = ({ showButtons = true }: AuthHeaderProps): JSX.Element => {
  const Buttons = useMemo(() => {
    if (showButtons) {
      return (
        <>
          <Button> DropDown </Button>
          <Button>Iniciar Sessão</Button>
        </>
      )
    }
    return null
  }, [showButtons])
  return (
    <Container>
      {/* <NetflixLogo /> */}
      {Buttons}
    </Container>
  );
}