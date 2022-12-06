import { useMemo } from "react";
import { Button, ButtonContainer, Container } from "./styles";
import { NetflixLogo } from "./styles"


export interface AuthHeaderProps {
  showButtons?: boolean
}
export const AuthHeader = ({ showButtons = true }: AuthHeaderProps): JSX.Element => {
  const Buttons = useMemo(() => {
    if (showButtons) {
      return (
        <ButtonContainer>
          <Button> DropDown </Button>
          <Button>Iniciar Sessão</Button>
        </ButtonContainer>
      )
    }
    return null
  }, [showButtons])
  return (
    <Container>
      <NetflixLogo />
      {Buttons}

    </Container>
  );
}