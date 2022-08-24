import React from "react";
import Tarjeta from './Tarjeta';
import '../stylesheets/Tarjetas.css'

function Tarjetas (props) {
    const { tarjetas } = props;
    
    return (
    <main>
        <div className="tarjetas">
        {tarjetas.map((tarjeta) => (
        <Tarjeta key={tarjeta.id} tarjeta={tarjeta}></Tarjeta>
        ))}
        </div>   
        </main>
    )
};

export default Tarjetas;


// export default function Tarjetas(props) {
//     const { tarjetas } = props;
//     return (
//     <main >
//         <div className="tarjetas">
//         {tarjetas.map((tarjeta) => (
//             <Tarjeta key={tarjeta.id} tarjeta={tarjeta} ></Tarjeta>
//         ))}
//         </div>
//     </main>
//     );
// }
