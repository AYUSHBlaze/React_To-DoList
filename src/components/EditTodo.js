import React, {useState} from 'react';
import TodoForm from './TodoForm';
function EditTodo(){
    const [text, setText] = useState()
    const [day, setDay] = useState()
    const [time, setTime] = useState()
    const [todoProject, setTodoProject] = useState()
    const projects = [
        {id:1, name:"Personal", numOfTodos:0},
        {id:2, name:"Work", numOfTodos:1},
        {id:3, name:"Others", numOfTodos:2}
    ]
    function handleSubmit(e){

    }
    return(
        <div class="EditTodo">
            <div className="header">
                Edit Todo
            </div>
            <div className="container">
            <TodoForm
                    handleSubmit={handleSubmit}
                    text={text}
                    setText={setText}
                    day={day}
                    setDay={setDay}
                    time={time}
                    todoProject={todoProject}
                    setTodoProject={setTodoProject}
                    setTime={setTime}
                    projects={projects}
                />
            </div>
        </div>
    )
}

export default EditTodo