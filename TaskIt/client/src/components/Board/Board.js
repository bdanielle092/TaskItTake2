import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const Board = ({ board }) => {

    return (
        <Card>
            <CardBody>

                <Link to={`/board/${board.id}`}>
                    <strong>{board.name}</strong>
                </Link>

            </CardBody>
        </Card>
    )
}
export default Board