import "./TasksInfo.css";

function TasksInfo(props) {

    return (

        <div className="tasks-info">

            <p>You have {props.counter} pendding tasks</p>

            <button 

                onClick={_ => props.clear_tasks()}
            
                className="clear-btn"
                
            >Clear Tasks</button>

        </div>

    );

}

export default TasksInfo;