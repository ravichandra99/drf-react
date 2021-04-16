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
        console.log(data);
      })
      .catch((e) => {
        
        console.log('fetch failed');
      });
  }, []);
  
return(
    <div>
      {
        dummy.map((elem) => <p>{elem.name}</p>)
      }
    </div>
  );

}
export default AuthenticatedPingTest;
