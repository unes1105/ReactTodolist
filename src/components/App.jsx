import React, { useState } from "react";

var list = [];

function App() {
  var [item, setItem] = useState("");
  var [x, reRender] = useState(0);
  function update(e) {
    const { value } = e.target;
    setItem((item = value));
  }

  function add() {
    list.push(item);
    setItem((item = ""));
  }

  function del(e) {
    list.splice(
      list.findIndex((i) => i == e.target.id),
      1
    );
    reRender((x += 1));
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={update} type="text" value={item} />
        <button onClick={add}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((i) => {
            return (
              <div>
                <li>{i}</li>
                <button onClick={del} id={`${i}`}>
                  Delete
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
