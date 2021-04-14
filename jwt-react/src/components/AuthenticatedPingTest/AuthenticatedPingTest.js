import React, { useContext, useState,useEffect } from 'react';

import Button from 'react-bootstrap/Button';

import { UserContext } from '../../contexts/userContext.js'
import { ping } from '../../api/rest.js'

function AuthenticatedPingTest() {
  // const [pingResult, setPingResult] = useState();
  // // eslint-disable-next-line no-unused-vars
  // const {user, setUser, isUserLoggedIn} = useContext(UserContext)

  // const testPing = () => {
  //   ping()
  //   .then((data)=>{
  //     console.log(typeof data)
  //     setPingResult(data)
  //   }).catch((error)=> {
  //     setUser(null);
  //   });
  // }


  const [dummy, setData] = useState([]);

  useEffect(() => {
    ping()
      .then((data) => {
       
        setData(data);
        console.log("trying aaaaa",data);
      })
      .catch((e) => {
        
        console.log('fetch failed');
      });
  }, []);

  for (var i = dummy.length - 1; i >= 0; i--) {
    console.log(dummy[i])
  }

  return(<div>{dummy.map((elem) => elem.name)}</div>);

  
}

export default AuthenticatedPingTest;
