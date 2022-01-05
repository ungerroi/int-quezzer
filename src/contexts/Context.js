import {createContext, useState} from 'react'

const MainContext = createContext()

export const Context = ({Children}) => {

    const [state, setState] = useState({
        data: 'data test'
    })

    return (
        <MainContext.Provider value={state}>
            {Children}
        </MainContext.Provider>
    )
}

export default Context
