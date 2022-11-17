import React from 'react';

export default function Dashboard({user}) {
  if(user===undefined){
    return(<h2>shucks</h2>);
  }
  else{
  return(
    <h2>{user.token}</h2>
  );
}
}