import { Scroll, Timer } from 'phosphor-react';
import {NavLink} from 'react-router-dom';

import logoIFPB from '../../assets/LogoIFPB.png';
import { HeaderContainer } from './styles';


export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logoIFPB} alt="" />
      </span> 
      <nav>
        <NavLink to="/" title="home">
          <Timer size={24} />
        </NavLink>
        <NavLink to='/history'title="histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}