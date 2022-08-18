import React from "react";
import { StyledDisplay } from "./styles/styledDisplay";

const Display = ({gameover, text}) => (
    <StyledDisplay gameover={gameover}>{text}</StyledDisplay>
)

export default Display;