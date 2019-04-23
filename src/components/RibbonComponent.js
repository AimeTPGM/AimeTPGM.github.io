import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

export default () => {
  return (
    <div>
      <div
        css={{
          zIndex: 2,
          width: "200px",
          backgroundImage: 'linear-gradient(to bottom right,#ffcd40,#ab7600)',
          position: "absolute",
          top: "25px",
          right: "-50px",
          left: "auto",
          textAlign: "center",
          lineHeight: "50px",
          letterSpacing: "1px",
          color: "#f0f0f0",
          transform: "rotate(45deg)",
          color: "#824603"
        }}
      >
        <div css={{ 
            width: '100px',
            margin: 'auto',
            lineHeight: '25px',
            fontSize: "10px",
            textTransform: "uppercase",
            fontWeight: "900",
            wordBreak: 'break-all' }}>
            <span>Volunteering</span>
            <span>& Activities</span>
        </div>
      </div>
      <div
        css={{
          zIndex: -1,
          width: "20px",
          height: "10px",
          background: "#824603",
          position: "absolute",
          top: "0px",
          right: "115px",
          left: "auto",
          textAlign: "center",
          lineHeight: "50px",
          letterSpacing: "1px",
        }}
      />
      <div
        css={{
          zIndex: -1,
          width: "10px",
          height: "20px",
          background: "#824603",
          position: "absolute",
          top: "115px",
          right: "0px",
          left: "auto",
          textAlign: "center",
          lineHeight: "50px",
          letterSpacing: "1px",
        }}
      />
    </div>
  );
};
