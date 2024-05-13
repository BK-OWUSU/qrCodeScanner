import { Html5QrcodeScanner } from "html5-qrcode"
import { useState, useEffect } from "react";

const QrCode = () => {
    const [scanResult, setScanResult] = useState(null);

    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader',{
            qrbox: {
                width: 250,
                height: 250,
            },
            fps: 5,
        });
        scanner.render(success, error);
        function success (result) {
            scanner.clear();
            setScanResult(result)
        }
    
        function error (err) {
            console.log(err);
        }
    },[])

  return (
    <main>
        <h1>QR Code Reader</h1>
        {scanResult
        ? <div>success: <a href={"http://" + scanResult}>{scanResult}</a> </div>
        : <div id="reader"></div>
        }
    </main>
  )
}

export default QrCode