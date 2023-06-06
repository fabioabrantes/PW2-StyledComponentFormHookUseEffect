import { ButtonStyled } from "./styles";

interface IProps{
  color?:'primary'|'secondary'|'danger'|'success';
}

export function Button({color='primary'}:IProps){
  return <ButtonStyled cor={color}>Enviar</ButtonStyled>
}