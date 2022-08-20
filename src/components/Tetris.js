import React, {useState} from "react";
import { createStage } from "../gameHelpers";
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

    const movePlayer = dir =>{

    }

    const startGme = () => {
        //reset everything
    }

    const drop = () =>{
        underPlayerPos({x:0, y:1 collided:false})
    }

    const dropPlayer = () => {
        drop();
    }

    const move = ({keyCode}) => {
        if(!gameOver){
            if(keyCode === 37){
                movePlayer(-1);
            } else if(keyCode === 39) 
                movePlayer(1);
            } else if(keyCode === 40){
             dropPlayer();
            }
    }

    return(
        <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
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