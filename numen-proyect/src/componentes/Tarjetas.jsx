import React from "react";
import Tarjeta from './Tarjeta';

function Tarjetas (props) {
    const { tarjetas } = props;
    return (
        <div>
            {/* {tarjetas.map ((tarjeta)=> (
                <Tarjeta key={tarjeta.id} tarjeta={tarjeta}></Tarjeta>   
            )) } */}

        {tarjetas.map((tarjeta) => (
        <Tarjeta key={tarjeta.id} tarjeta={tarjeta}></Tarjeta>
        ))}
        </div>   
    )
};

export default Tarjetas;
