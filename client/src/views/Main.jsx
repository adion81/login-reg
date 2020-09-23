import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import {navigate} from '@reach/router';

const Main = props => {
    const [users,setUsers] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8000/api/users",{withCredentials:true})
            .then(res => setUsers(res.data.results))
            .catch(err => {
                if(err.response.status === 401){
                    navigate('/');
                }
            });
    },[])

    return(
        <div>
            {
                users.map((u,i) => {
                    return <p key={i}>{u.firstName} {u.lastName}</p>
                })
            }
        </div>
    )
}

export default Main;