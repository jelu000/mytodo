import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

class TodoList extends React.Component {



  updateTodo = (todo) => {
    this.props.updateTodoFn(todo);
  }
  //<div key={t_index}>{t_todo}</div>
  //const { todos, item1, item2 } = this.props; LONG WAY!!!
  render () {
    const { todos } = this.props;

    return (
      <div className="todolistContainer">
      <h2>TodoList</h2>
      {
        todos.map((t_todo, t_index) => {
          return (
            <TodoItem updateTodoFn={this.updateTodo} key={t_index} todo={t_todo} />
          )
        })
      }

      </div>
    );
  }
}

TodoList.propTypes = {
  updateTodoFn: PropTypes.func,
  todos: PropTypes.array
};

export default TodoList;
