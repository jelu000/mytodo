import React from 'react'
import PropTypes from 'prop-types'
import './AddTodo.css'

class AddTodo extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      todo: ''
    };


    this.updateInput = this.updateInput.bind(this);
    this.submitTodo = this.submitTodo.bind(this);
  }


  updateInput(e){
    this.setState({ todo: e.target.value })
  }

  submitTodo(e){
    e.preventDefault();
    //console.log("submit", this.state );
    this.props.addTodoFn(this.state.todo);
    document.getElementById("addTodoInput").value = "";
  }

  render () {
    return (
      <div className='addTodoContainer'>

      <form onSubmit={this.submitTodo}>
        <input id="addTodoInput" onChange={this.updateInput} type="text"></input>
        <button type="submit">Add Todo</button>
      </form>
      <hr/>

      </div>
    );
  }
}

AddTodo.propTypes = {
  addTodoFn: PropTypes.func
};

export default AddTodo;
