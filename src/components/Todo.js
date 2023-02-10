import { Component } from "react";
import TodoForm from "./TodoForm";
import TodoTasks from "./TodoTasks";
import TasksInfo from "./TasksInfo";
import "./Todo.css";

class Todo extends Component {

    get_tasks_from_ls = () => {

        let tasks = JSON.parse(localStorage.getItem("tasks"));

        return localStorage.getItem("tasks") === null ? [] : tasks;

    }

    get_completed_tasks_from_ls = () => {

        let counter = 0;

        this.get_tasks_from_ls().forEach(task => {

            if (task.completed === false) counter++;

        });

        return counter;

    }

    state = {
            
        taskTitle: "",
        
        tasks: this.get_tasks_from_ls(),

        counter: this.get_completed_tasks_from_ls()
        
    }

    set_task_title = (value) => this.setState({taskTitle: value});

    add_tasks_to_ls = (tasks) => {

        localStorage.setItem("tasks", JSON.stringify(tasks));

    }

    set_tasks = (e) => {

        e.preventDefault();

        if (this.state.taskTitle !== "") {

            let task = {

                id: Math.random(),

                title: this.state.taskTitle,

                completed: false

            }

            let tasks = [...this.state.tasks, task];

            this.add_tasks_to_ls(tasks);

            this.setState({
                
                tasks: this.get_tasks_from_ls(),
                
                taskTitle: "",

                counter: this.get_completed_tasks_from_ls()
            
            });

            e.target.todoInput.focus();

        } else {

            alert("Empty Input!");

        }

    }

    delete_task = (id) => {

        let tasks = this.state.tasks.filter(task => task.id !== id);

        this.add_tasks_to_ls(tasks);

        this.setState({
            
            tasks: this.get_tasks_from_ls(),

            counter: this.get_completed_tasks_from_ls()
        
        });

    }

    set_completed = (e, id) => {

        this.state.tasks.forEach(task => {

            if (task.id === id) task.completed = e.target.checked;

        });

        let tasks = this.state.tasks;

        this.add_tasks_to_ls(tasks);

        this.setState({
            
            tasks: this.get_tasks_from_ls(),

            counter: this.get_completed_tasks_from_ls()
        
        });

    }

    clear_tasks = () => {

        localStorage.clear();

        this.setState({

            taskTitle: "",
            
            tasks: this.get_tasks_from_ls(),

            counter: this.get_completed_tasks_from_ls()
        
        });

    }

    render() {

        return (

            <div className="todo-app">

                <h2 className="main-title">Todo App</h2>

                <TodoForm 
                
                    set_task_title = {this.set_task_title}

                    set_tasks = {this.set_tasks}

                    taskTitle={this.state.taskTitle}
                    
                />

                <TodoTasks 
                
                    tasks = {this.state.tasks} 

                    delete_task = {this.delete_task}
                    
                    set_completed = {this.set_completed}
                />

                <TasksInfo 
                
                    counter = {this.state.counter}

                    clear_tasks = {this.clear_tasks}
                    
                />

            </div>
            
        );

    }

}

export default Todo;