/* eslint-disable */

import React from "react";
export default function TableauRecap(props) {
  return (
    <div className="tableaurecap">
      <h1 className="titretable"> Tableau Recapitulatif</h1>
      <div className="table">
        {props.recap.map((resultat) => (
          <div className="questionrep">
            <p className="questiontable">{resultat.question}</p>
            <p className="reponsetable">{resultat.reponse}</p>
          </div>
        ))}{" "}
      </div>
    </div>
  );
}