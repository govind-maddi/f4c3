import logo from './logo.svg';
import './App.css';
import React,{useRef, useState} from 'react';
import Login from './Components/Login';
import Profile from './Components/Profile';

export const User = React.createContext();
export const Setuser = React.createContext();

function App() {

  const [userid,setUserId] = useState('');

  return (
    <div className="App">
      <User.Provider value={userid}>
        <Setuser.Provider value={setUserId}>
          <Login></Login>
          <Profile></Profile>
        </Setuser.Provider>
      </User.Provider>
    </div>
  );
}

export default App;
