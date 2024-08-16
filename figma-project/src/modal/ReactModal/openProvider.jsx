import {React, createContext, useState} from 'react';


export const openContext = createContext();
 
 export const OpenProvider =  ({ children })=>
 {
  
  const [open, setOpen] = useState(false);

  return (
    <openContext.Provider value={{open,setOpen}}>
      {children}
    </openContext.Provider>
  );
};


