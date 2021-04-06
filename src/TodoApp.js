import React from 'react'
import './TodoApp.css';

import TodoList from './TodoList/TodoList';
import AddTodo from './AddTodo/AddTodo';

class TodoApp extends React.Component {

  constructor(){
    super();

    this.state = {
      todos: []
    };
  }

  componentDidMount(){
    //console.log("Did Mount");
    const todos = localStorage.getItem('todos');

    if (todos){
      const savedTodos = JSON.parse(todos);

      this.setState({
        todos: savedTodos
      });
      console.log('ComponentDidMount-Todos: ', todos);
    }
    else{
      console.log('ComponentDidMount-No todos');
    }

  }

  addTheTodo = async (todo) => {
    //this.setState({todos: [...this.state.todos, todo]});
    await this.setState({todos: [...this.state.todos, {
      text: todo,
      completed: false
    }

    ]});
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
    //console.log(localStorage.getItem('todos'));
  }

  /*async addTheTodo(todo){
    await this.setState({todos: [...this.state.todos, todo]});
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
    console.log(localStorage.getItem('todos'));
  }*/

updateTodo = async (todo) => {
  const newtodos = this.state.todos.map(t_todos => {
    if (todo === t_todos)
      return {
        text: todo.text,
        completed: !todo.completed
      }
    else
      return t_todos
  });
  //console.log(newtodos);
  await this.setState({ todos: newtodos })
  localStorage.setItem('todos', JSON.stringify(this.state.todos));
}

removeCompleted = async () => {
  const newtodos = this.state.todos.filter(t_todo => {
    return (!t_todo.completed)
  });
  //console.log(JSON.stringify(newtodos));
  await this.setState({todos: newtodos});
  localStorage.setItem('todos', JSON.stringify(newtodos));
}


  render () {
    return (
      <div>
        <AddTodo addTodoFn={this.addTheTodo} />

        <TodoList updateTodoFn={this.updateTodo} todos={this.state.todos} />

        <div>
          <button onClick={this.removeCompleted} >Remove completed Todos</button>
        </div>
        <p>
          To mark added todo as completed just click on it!. &copy;Jens Lundeqvist
        </p>

      </div>
    );

  }
}

export default TodoApp;
