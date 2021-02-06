import { useEffect, useState, useContext } from "react";
import { UserProfileContext } from "../../providers/UserProfileProvider";
import { useParams, useHistory } from "react-router-dom";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown, Col } from 'reactstrap';
import "./Board.css";
import TaskList from "../Task/TaskList";
import Task from "../Task/Task";



const Board = (props) => {
    const { getToken } = useContext(UserProfileContext);
    const { id } = useParams();
    const history = useHistory();
    const [board, setBoard] = useState([]);
    const [tasks, setTasks] = useState([]);
    // const [task, setTask] = useState();

    //getting the board by id 
    useEffect(() => {
        getToken()
            .then((token) =>
                console.log("boardTwo", board)
                    .then(fetch(`/api/board/${id}`, {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    })
                    )
                    .then(console.log("res", res))
                    .then((res) => res.json())
                    .then((board) => { setBoard(board) }));

    });


    //taking user to the edit form   
    const goToBoardEditForm = () => {
        history.push(`/BoardEditForm/${id}`);
    }

    //getting the task
    useEffect(() => {
        getToken()
            .then((token) =>
                console.log("board", board)
                    .then(fetch(`/api/board/${board.Id}/task`, {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    })
                    )
                    .then((res) => res.json())
                    .then((tasks) =>

                        setTasks(tasks)));
        console.log("tasks", tasks)



    }, []);

    return (
        <div>
            <h3 className="BoardName">{board.name} Board</h3>

            <UncontrolledDropdown>
                <DropdownToggle caret>
                    Actions
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={goToBoardEditForm}>Edit {board.name} Board</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Delete {board.name} Board</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>

            {/* <Col className="listOfTasks">
                <TaskList tasks={tasks} />
            </Col> */}

        </div>

    )
}
export default Board