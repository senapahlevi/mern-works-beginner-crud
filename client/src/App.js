import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";
// ini versi 6 import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar.js";
import Edit from "./components/edit.js";
import Create from "./components/create.js";
import RecordList from "./components/recordList.js";
function App() {
  return (
    <div>
      <Route exact path="/">
        <RecordList />
      </Route>
      <Route path="/edit/:id" component={Edit} />
      <Route path="/create">
        <Create />
      </Route>
    </div>
  );
}

export default App;
/*
 <Router>
        <Routes>
          <Route exact path="/" element={<RecordList />} />
          <Route path="/edit/:id" element={<Edit />} />

          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
*/

/*

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");
*/
/*
  ini .get request data then get data lalu response nya ambil data/akses dari API request
  kalo di non lokal bukan localhost tapi nama hostingan web kita
  */
/*
  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data); //data getting back response nya beda sama si create bawah ini
    });
  }, []);

  */
/*
ini sama aja name:name,age:age di dalem obj maka diringkes jadi kek gini
dan setelah then itu ada callback response jadi ketika user input sebelumnya gw udah input nama bambang
ketika gw input budi dia ga otomatis nambah mesti refresh mulu pake itu buat tracking dan simpen setListOfUser
sebelumnya dan auto nambah data baru
*/
/*  
  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      name,
      age,
      username,
    }).then((response) => {
      setListOfUsers([
        ...listOfUsers,
        {
          name,
          age,
          username,
        },
      ]);
    });
  };

  return (
    <div className="App">
      <div className="usersDisplay">
        {listOfUsers.map((user) => {
          return (
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Username: {user.username}</h1>
            </div>
          );
        })}
      </div>

      <div>
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Age..."
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button onClick={createUser}> Create User </button>
      </div>
    </div>
  );
}

*/
