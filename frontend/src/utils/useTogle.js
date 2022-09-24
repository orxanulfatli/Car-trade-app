import { useState } from "react"

export const useToggle = (initState=false) => {
    const [visibility, setVisibility] = useState(initState);
    const toggle = () => setVisibility(prev => !prev)
    const setToggleStatus = (value) => setVisibility(Boolean(value))
    return [ visibility,toggle,setToggleStatus]
}