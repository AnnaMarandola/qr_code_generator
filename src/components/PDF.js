import React from "react";
import Pdf from "react-to-pdf";
import QrCode from "./QrCode";
import useQrCode from "react-qrcode-hook";

import logoResto from "../assets/RestoLogo.png";

const options = {
    margin: 5,
    scale: 7,
    color: {
      dark: "#031627",
      light: "#FDFFFC",
    },
  };

const ref = React.createRef();

const PDF = (props) => {
    const qrCode = useQrCode(`${props.url}`, options);

    return (
    <>
    <div ref={ref}>
        <img src={logoResto} alt="logo resto" />
        <p>11 rue de la paix, 31000 Toulouse</p>
        <h1>La carte</h1>
        <img alt="qr code" src={qrCode} />
    </div>
    <Pdf targetRef={ref} filename="qrmenu.pdf">
    {({ toPdf }) => (<button onClick={toPdf} >Télécharger le PDF</button>)}
    </Pdf>
    </>
    )
}

export default PDF;