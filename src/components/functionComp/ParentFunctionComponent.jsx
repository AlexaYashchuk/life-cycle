import { useState, useEffect } from "react";
import LifecycleFunctionComponent from './LifecycleFunctionComponent'

function ParentFunctionComponent() {

    const [show,setShow] = useState(true)

    const showFuncComp = () => {
        // setShow((show) => show = !show)
        setShow(!show)
    }


    return (
        <>
        {show && <LifecycleFunctionComponent/>}
        <button onClick={showFuncComp}>Размонтировать LifecycleFunctionComponent</button>   
        </>
    )

}

export default ParentFunctionComponent