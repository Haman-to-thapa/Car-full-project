import { createContext } from "react";

export const AppContext = createContext()

const AppContextProvider = (props) => {

  const calculaterAge = (dob) => {
    const today = new Date();
    const birdDate = new Date(dob)

    let age = today.getFullYear() - birdDate.getFullYear();
    return age;

  }
  const currency = '$'

  const months = [" ", "jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];


  const slotDateFormted = (slotDate) => {
    const dateArray = slotDate.split('_')
    return dateArray[0] + " " + months[Number(dateArray[1])] + "" + dateArray[2]
  }


  const value = {
    calculaterAge,
    slotDateFormted,
    currency,
  }


  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}


export default AppContextProvider;