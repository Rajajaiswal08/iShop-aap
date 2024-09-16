import React, { createContext } from 'react'
const Context = createContext();

function MainContext(props) {
  return (
    <Context.Provider value={{}}>
      {props.children}
    </Context.Provider>
  )
}

export default MainContext;
