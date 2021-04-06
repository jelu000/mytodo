import React from 'react'
import PropTypes from 'prop-types'
import './TodoItem.css'
//import './App.css';
//<div key={t_index}>{t_todo}</div>
class TodoItem extends React.Component {

  clickedTodo = () =>{
    this.props.updateTodoFn(this.props.todo)
  }
//<div onClick={this.clickedTodo} key={this.props.key}>{this.props.todo.text}</div> TEXT ÄR VIKTIGT!! this.props.todo.TEXT
  render () {
    return (
      <div className={'todoitem' + (this.props.todo.completed ?  'completed': '')} onClick={this.clickedTodo} key={this.props.key}>{this.props.todo.text}</div>
    );

  }

}

TodoItem.propTypes = {
  updateTodoFn: PropTypes.func,
  todo: PropTypes.object
};

export default TodoItem;
