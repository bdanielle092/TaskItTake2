import React from "react";
import Board from "./Board";

const BoardList = ({ boards }) => {
    return (
        <div>
            {boards.map((board) => (
                <div key={board.id} >

                </div>
            ))}
        </div>
    )
}
export default BoardList 