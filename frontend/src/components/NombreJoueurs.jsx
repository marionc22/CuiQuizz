/* eslint-disable */
import React from "react";
// import player2s from "./player2.m4a"
// import "./App.css";
const NombreJoueurs = (props) => {
  const change2Players = (e) => {
    e.preventDefault();
    props.setNbJoueurs2(true)
    props.setDisplayNb(false)
    props.setNbJoueurs(2)
props.musicPlaying.play()
// props.setMusicPlaying(new Audio(player2s))
  };
  const change3Players = (e) => {
    e.preventDefault();
    props.setNbJoueurs3(true)
    props.setDisplayNb(false)
    props.setNbJoueurs(3)
    props.musicPlaying.play()
props.setMusicPlaying(new Audio(player2s))
  };
  return (
    <div className="nombreJoueurs">
        <div className="titreRegles">
        <h3><u>COMMENT JOUER AVEC LES REGLES DU JEU?</u></h3>
        <div className="regles">
        <p>VOUS DISPOSEZ D'UN TEMPS IMPARTI POUR REPONDRE AUX QUESTIONS</p>
        <p>PAS D'ARTICLES ("LE", "LA", "LES", "IEL" etc)</p>
        <p>PAS DE CARACTERES SPECIAUX (ACCENTS ETC)</p>
        <p>AMUSEZ-VOUS BANDE DE GALOPINS</p>
        </div>
      </div>
      <div className="choixNombre">
      <h2> Combien serez vous de Joueurs?</h2>
      <div className="choix">
      <p
      className="deuxjoueurs"
        onClick={change2Players}
      >2</p>
           <p
      className="troisjoueurs"
        onClick={change3Players}
      >3</p>
      </div>
      </div>
    </div>
  );
};
export default NombreJoueurs;