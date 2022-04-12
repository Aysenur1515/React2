import React, { useState } from "react";
import "./component.css";

export default function Baslık() {
  return (
    <>
      <div
        className="baslık"
        style={{
          width: "calc(100% - 40px)",
          display: "flex",
          borderBottom: "1px solid black",
          fontSize: "20px",
          margin: "20px",
          justifyContent: "space-between",
          paddingTop:"10px"
          
        }}
      >
        <div>JFORCE EĞİTİM </div>
        <div>
          <a className="tarih"> 12.12.2003</a>
        </div>
      </div>
    </>
  );
}
