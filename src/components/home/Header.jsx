import React from "react";
import { Header as HeaderStyle} from "../../styles/header";

import Menu from "../header/Menu";
import Slider from "../header/Slider";

export default function Header() {
  return (
    <HeaderStyle>
      <Menu />
      <Slider />
    </HeaderStyle>
  );
}
