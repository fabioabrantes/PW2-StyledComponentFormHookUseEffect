import styled from 'styled-components';

interface IPropsButton{
  cor?:'primary'|'secondary'|'danger'|'success';
}
export const  ButtonStyled  = styled.button<IPropsButton>`
   width:100px;
   height: 48px;
   background: ${(props)=>{
      if(props.cor === "secondary"){
        return props.theme.yellow500
      } else if(props.cor === "success"){
        return  props.theme.green700
      }else{
        return  props.theme.red500
      }
    
    }}

`