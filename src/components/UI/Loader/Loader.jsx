import React from "react";
import cl from "./Loader.module.css"

const Loader = ({problem}) =>  {
    return (
        <div className={cl.info_div}>
            <span className={cl.loader}></span>
            <p>{problem}</p>
        </div>
    )
}

export default Loader;