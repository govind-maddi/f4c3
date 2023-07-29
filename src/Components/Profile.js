import React,{ useContext, useEffect, useState } from 'react'
import { User,Setuser } from '../App';

export default function Profile() {

const [userobj,setUserObj] = useState({});
const [userarr ,setUserArr] = useState([]);
const userid = useContext(User);

useEffect(() =>{
    console.log(userid)
    fetch(`https://dummyjson.com/users/2`)
    .then(resp => resp.json())
    .then(data => {setUserObj(data);console.log(userobj)})
    /* for (const key in userobj) {
        setUserArr([...userarr,userobj[key]]);
    } */
},[userid]);

  return (
    <div>
        <ul>
           {Object.keys(userobj).map(item => <li>{userobj[item]}</li>)}
        </ul>
    </div>
  )
}
