import React from "react";
import Pdf from "react-to-pdf";
import QrCode from "./QrCode";
import logoResto from "../assets/RestoLogo.png";


const ref = React.createRef();

const PDF = (props) => {

    return (
    <>
    <div ref={ref}>
        <img src={logoResto} width="50%" alt="logo resto" />
        <p>11 rue de la paix, 31000 Toulouse</p>
        <h1>La carte</h1>
        <QrCode url={props.urlToConvert} />
    </div>
    <Pdf targetRef={ref} filename="qrmenu.pdf">
    {({ toPdf }) => (<button onClick={toPdf} >Télécharger le PDF</button>)}
    </Pdf>
    </>
    )
}

export default PDF;