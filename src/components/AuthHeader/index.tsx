import { useMemo } from "react";
import { Button, Container } from "./styles";
import { NetflixLogo } from "./styles"


export interface AuthHeaderProps {
  showButtons?: boolean
}
export const AuthHeader = ({ showButtons = true }: AuthHeaderProps): JSX.Element => {
  const Buttons = useMemo(() => {
    if (showButtons) {
      return (
        <>
          <NetflixLogo />
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