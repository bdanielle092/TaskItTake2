import { useEffect, useState, useContext } from "react";
import { UserProfileContext } from "../../providers/UserProfileProvider";
import { Button, Col, ButtonGroup } from 'reactstrap';



const Task = (props) => {
    const { getToken } = useContext(UserProfileContext);
    const [task, setTask] = useState([]);
    const [cSelected, setCSelected] = useState([]);
    const [rSelected, setRSelected] = useState(null);

    const onCheckboxBtnClick = (selected) => {
        const index = cSelected.indexOf(selected);
        if (index < 0) {
            cSelected.push(selected);
        } else {
            cSelected.splice(index, 1);
        }
        setCSelected([...cSelected]);
    }
    return (
        <div>
            <h3>{task.name}</h3>
            {/* <Button outline color="danger" onClick={}>
                  Cancel
              </Button> */}
            <h4>Notes</h4>
            <h4>Subtask</h4>

            <h5>Radio Buttons</h5>

            <ButtonGroup>
                <Button color="primary" onClick={() => setRSelected(1)} active={rSelected === 1}>none</Button>
                <Button color="primary" onClick={() => setRSelected(2)} active={rSelected === 2}>low</Button>
                <Button color="primary" onClick={() => setRSelected(3)} active={rSelected === 3}>medium</Button>
                <Button color="primary" onClick={() => setRSelected(3)} active={rSelected === 3}>high</Button>
            </ButtonGroup>
            <p>Selected: {rSelected}</p>

            <h4>{task.dateCreated}</h4>

            {/* <Button color="danger" onClick={(e) => {e.preventDefault() deleteTask(taskToDelete); }} >Delete {task.name}</Button> */}
        </div>
    )
}

export default Task