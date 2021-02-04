import React from "react";

const BoardList = ({ boards }) => {
    return (
        <div>
            {boards.map((board) => (
                <Board key={board.id} board={board} />
            ))}
        </div>
    )
}
export default BoardList 