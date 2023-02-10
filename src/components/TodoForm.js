import "./TodoForm.css";

function TodoForm(props) {

    return (

        <form onSubmit={e => props.set_tasks(e)}>
 
            <input

                onInput={e => props.set_task_title(e.target.value)}
            
                type="text"

                name="todoInput"

                value={props.taskTitle}
                
                placeholder="Add Your New Task"
                
            />

            <button type="submit" className="submit-btn">Add Task</button>

        </form>

    );

}

export default TodoForm;