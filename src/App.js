import React, { useRef, useState, useEffect } from "react";
import QRCodeStyling from "qr-code-styling";
import "./App.css"; // Import file CSS

const QRCodeApp = () => {
  const qrCodeRef = useRef();
  const [qrData, setQrData] = useState("https://example.com");
  const [qrLogo, setQrLogo] = useState("");
  const [qrColor, setQrColor] = useState("#000000");

  useEffect(() => {
    const qrCode = new QRCodeStyling({
      width: 300,
      height: 300,
      data: qrData,
      image: qrLogo,
      dotsOptions: { color: qrColor, type: "rounded" },
      backgroundOptions: { color: "#FFFFFF" },
      imageOptions: {
        crossOrigin: "IGB",
        margin: 10,
        hideBackgroundDots: true, // Ẩn ô vuông phía sau logo
      },
    });

    if (qrCodeRef.current) {
      qrCodeRef.current.innerHTML = "";
      qrCode.append(qrCodeRef.current);
    }
  }, [qrData, qrLogo, qrColor]);

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setQrLogo(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container">
      <h1>Tạo Mã QR Tùy Chỉnh</h1>

      <div className="input-group">
        <label>Nhập dữ liệu QR</label>
        <input
          type="text"
          value={qrData}
          onChange={(e) => setQrData(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Chọn logo (tùy chọn)</label>
        <input type="file" accept="image/*" onChange={handleLogoUpload} />
      </div>

      <div className="input-group">
        <label>Chọn màu QR</label>
        <input
          type="color"
          value={qrColor}
          onChange={(e) => setQrColor(e.target.value)}
        />
      </div>

      <div className="qr-display" ref={qrCodeRef}></div>

      <button
        className="download-btn"
        onClick={() => {
          const qrCode = new QRCodeStyling({
            width: 300,
            height: 300,
            data: qrData,
            image: qrLogo,
            dotsOptions: { color: qrColor, type: "rounded" },
            imageOptions: {
              crossOrigin: "IGB",
              margin: 10,
              hideBackgroundDots: true, // Ẩn ô vuông phía sau logo
            },
          });
          qrCode.download({ extension: "png" });
        }}
      >
        Tải xuống QR Code
      </button>
    </div>
  );
};

export default QRCodeApp;
