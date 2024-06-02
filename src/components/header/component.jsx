/* eslint-disable no-unused-vars */

import { Authorization } from "../authorization/component";
import { Button } from "../button/component";
import { Scrollbar } from "../scrollbar/component";

export const Header = ({ onChange, onSign }) => {
  return (
    <header style = {{ position: "sticky", top: "0" }}>
      Header will be here
      <Button onClick = {onChange}>Change buttons theme</Button>
      <Authorization onSign = {onSign}/>
      <Scrollbar />
    </header>
  );
};
