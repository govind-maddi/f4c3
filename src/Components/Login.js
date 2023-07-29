import React,{ useState,useContext } from 'react'
import { User,Setuser } from '../App';

const emailarr = ['hbingley1','rshawe2'];
const passwordarr = ['CQutx25i8r','OWsTbMUgFc'];

export default function Login() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const user = useContext(User);
    const setUser = useContext(Setuser);

    function authUser(e){
        e.preventDefault();
        if(emailarr.includes(email,0) && passwordarr.includes(password,0))
        {
            fetch('https://dummyjson.com/auth/login',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                username:email,
                password:password,
                })
                })
                .then(res => res.json())
                .then((data) => {console.log(data.id);setUser(data.id)});
        }
        
    }

  return (
    <div>
        <form onSubmit={(e) => {authUser(e)}}>
            <input type="text" onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={(e) => {authUser(e)}}>Login</button>
        </form>
    </div>
  )
}
