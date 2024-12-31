import React from "react";

const FullScreenIframe = () => {
  return (
    <div
      style={{
        position: "fixed", // Cố định vị trí khung
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      <iframe
        src="https://quynhnhaitour.vn/vi/ban-do-du-lich?appview=true" // Thay bằng URL trang web bạn muốn gắn
        style={{
          height: "100%",
          width: "100%",
          border: "none",
        }}
        title="Embedded Website"
      ></iframe>
    </div>
  );
};

export default FullScreenIframe;
