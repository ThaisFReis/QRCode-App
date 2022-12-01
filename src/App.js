import { useState } from 'react';
import QRCode from 'qrcode';

import './App.css';

function App() {
  const [qrCode, setQrCode] = useState(null);
  const [url, setUrl] = useState('');

  const generateQRCode = () => {
    QRCode.toDataURL(url, {
      width: 300,
      height: 300,
      color: {
        dark: '#000000',
        light: '#ffffff',
      },
      ecl: 'M',
    },
    ).then((url) => {
      setQrCode(url);
      console.log(url);
    }).catch((err) => {
      console.error(err);
    });
  };

  return (
    <div className="App">
      <h1> QR Code Generator </h1>

      { qrCode === null ? (
          <div className="generate-qr-code">
            <input type="text" placeholder="e.g. https://www.google.com" value={url} onChange={(e) => setUrl(e.target.value)} />
            <button onClick={generateQRCode}>Generate</button>
          </div>
      ) 
      : 
      (
        "" 
      )}
  
      {qrCode && 
        <div className="qr-code">
          <img src={qrCode} alt="QR Code" />
          <a href={qrCode} download="qrcode.png">Download</a>
          <button onClick={() => setQrCode(null)}>Clear QR Code</button>
        </div>
      }
    </div>
  );
}

export default App;
