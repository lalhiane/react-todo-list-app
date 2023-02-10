import "./TodoTasks.css";

function TodoTasks(props) {

    let tasksEl = props.tasks.map(task => {

        const {id, title, completed} = task;

        return (

           <div className="task" key={id}>

                <label className="task-label">

                    <input type="checkbox" checked={completed} onChange={e => {

                        props.set_completed(e, id);

                        console.log("checked");

                    }} />

                    <h3 className="task-title">{title}</h3>

                </label>

                <button className="delete-btn" onClick={_ => props.delete_task(id)}>
                    Delete
                </button>

            </div> 

        );

    });

    return (

        <div className="tasks">{tasksEl}</div>

    );

}

export default TodoTasks;