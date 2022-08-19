import React, {useState} from "react";
//co,pomponents
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
//styled components
import { StyledTetris, StyledTetrisWrapper } from "./styles/StyledTetris";
//Custom Hooks
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";



const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    
    const [player] = usePlayer();
    const [stage, setStage] = useStage(player);

    console.log("re-render")

    return(
        <StyledTetrisWrapper>
            <StyledTetris>
            <Stage stage={stage} />
            <aside>
                {gameover ? (
                    <Display gameOver={gameOver} text="Game Over" />
                ) : (
                <div>
                    <Display text="score" />
                    <Display text="Rows" />
                    <Display text="Level" />
                </div>
                )}
                <StartButton />
            </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
};

export default Tetris;