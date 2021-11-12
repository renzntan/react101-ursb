import React, { Component } from "react";

import Food from "../food";

class Profile extends Component {
  state = {
    name: "John Smith",
    age: 23,
    favoriteFoods: ["burger", "fries", "coke", "spaghetti"],
  };

  handleOnClick() {
    this.setState({ age: this.state.age + 1 });
  }

  render() {
    return (
      <div>
        <h1>Profile Page</h1>
        <div>
          <span>Name: </span> {this.state.name}
        </div>
        <div>
          <span>Age: </span> {this.state.age}
        </div>
        <h3>My Favorite foods are:</h3>

        {this.state.favoriteFoods.map((food) => {
          return <Food name={food} />;
        })}

        <button onClick={() => this.handleOnClick()}>Add Age</button>
      </div>
    );
  }
}

export default Profile;
