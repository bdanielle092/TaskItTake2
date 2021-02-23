import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { UserProfileContext } from "../../providers/UserProfileProvider";
import {
    Form,
    FormGroup,
    Card,
    CardBody,
    Label,
    Input,
    Button,
} from "reactstrap";
import { BoardContext } from "../../providers/BoardProvider";



const BoardEditForm = () => {
    const { getToken } = useContext(UserProfileContext)
    const { getBoardById, updateBoard, board } = useContext(BoardContext)
    //UseParams pulls in the id information from applications view 
    const { id } = useParams();
    const history = useHistory();
    const [editBoard, setEditBoard] = useState({ name: "" });

    useEffect(() => {
        getBoardById(parseInt(id))
    }, [])

    useEffect(() => {
        setEditBoard(board)
    }, [board]);


    //updating boardToEdit value. Updates boardToEdit value on every key stroke for the input field
    const handleSubmit = (evt) => {
        const newBoard = evt.target.value;
        setEditBoard(newBoard);
    };

    // update function to update the database with the new state of the board name
    const editBoard = (event) => {
        updateBoard({
            name: editBoard.name
        })
            .then((evt) => history.push("/"));
    };

    return (
        <div>
            <Card>
                <CardBody>
                    <Form>
                        <FormGroup>
                            <Label for="name">Board Name</Label>
                            <Input
                                id="name"
                                type="text"
                                name="name"
                                value={boardToEdit}
                                onChange={(evt) => {
                                    evt.preventDefault()
                                    handleSubmit(evt)
                                }}
                            />
                        </FormGroup>
                    </Form>
                    <Button

                        color="warning "
                        onClick={(evt) => {
                            evt.preventDefault();
                            updateBoard(boardToEdit);
                        }}
                    >
                        SUBMIT
                    </Button>
                </CardBody>
            </Card>
        </div>
    );
}
export default BoardEditForm;