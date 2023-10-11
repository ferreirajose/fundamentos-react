import React from "react";

export default function Aleatorio (props) {
    const { min, max } = props;
    const random = Math.ceil(Math.random() * (max - min)) + min;
    return(
        <> 
            <p>O valor entre o Minimo e o Maximo é { random }</p>
            <p>Maximo é { max }</p>
            <p>Minimo é { min }</p>
        </>
    );
}