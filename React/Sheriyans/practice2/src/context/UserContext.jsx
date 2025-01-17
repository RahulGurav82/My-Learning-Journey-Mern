import { createContext } from "react"
export const DataContext = createContext();

function UserContext({ children }) {
    const username = "Rahul";

    return (
      <>
        <DataContext.Provider value={username}>
            {children}
        </DataContext.Provider>
      </>
    )  
  }
  
  export default UserContext
