import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

export default (props) => {
  const { changePageFunc, pageToChange } = props;
  return (
    <div onClick={() => {changePageFunc(pageToChange)}} css={{ cursor: 'pointer'}}>
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
          transform: "rotate(45deg)",
          color: "#824603",
          transition: '0.5s',
          border: '1px solid #ab7600',
          ['&:hover'] : {
            boxShadow: '10px 1px 10px 1px #6f4e03',
            color: '#fff1d3',
            border: '1px solid #ecc873'
          }
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
            <span> & Activities</span>
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
          right: "118px",
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
          top: "118px",
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
