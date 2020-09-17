import React from "react";
import useQrCode from "react-qrcode-hook";

const options = {
  margin: 5,
  scale: 7,
  color: {
    dark: "#031627",
    light: "#FDFFFC",
  },
};

function QrCode(props) {
  const qrCode = useQrCode(`${props.url}`, options);
  return (
    <div
      style = {{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img alt="qr code" src={qrCode} />
    </div>
  );
}

export default QrCode;
