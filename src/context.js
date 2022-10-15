import { createContext, useState } from "react";

export const UserContext = createContext();
export const UserProvider = ({ children })=> {
    const [Logger,setLogger] = useState({username:''});
    return <UserContext.Provider value={{Logger,setLogger}}>
        {children}
    </UserContext.Provider>
}