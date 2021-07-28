import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  //constructor will be called with props
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }

  //method to add item in list
  addItem(todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false,
      };
      //creating a varibale list which is going to hold all the values being appended
      //... means appending all the existing values i.e all values from state.list will come in list variable & then we add new ITem in list & then update that list in state.list
      const list = [...this.state.list];
      list.push(newItem);
      //to update state we always use setstate method
      this.setState({
        list,
        newItem: "",
      });
    }
  }

  //method to delete item
  deleteItem(id) {
    //copy all the values inside state.list in list
    const list = [...this.state.list];
    const updateList = list.filter((item) => item.id !== id);
    this.setState({
      //writing this bcoz name of updated list is not same as in state
      list: updateList,
    });
  }

  updateInput(input) {
    this.setState({ newItem: input });
  }
  render() {
    return (
      <div>
        <img src={logo} width="100" height="100" className="logo" />
        <h1 className="app-title">Todo App</h1>
        <div className="container">
          Add an Item....
          <br />
          <input
            type="text"
            className="input-text"
            placeholder="Write a Todo"
            required
            value={this.state.newItem}
            onChange={(e) => this.updateInput(e.target.value)}
          />
          <button
            className="add-btn"
            onClick={() => this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}
          >
            {" "}
            Add Todo
          </button>
          <div className="list">
            <ul>
              {this.state.list.map((item) => {
                return (
                  <li key={item.id}>
                    <input
                      type="checkbox"
                      name="idDone"
                      checked={item.isDone}
                      onChange={() => {}}
                    />
                    {item.value}
                    <button
                      className="btn"
                      onClick={() => this.deleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </li>
                );
              })}
              <li>
                <input type="checkbox" name="" id="" />
                First todo
                <button className="btn">Delete</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
