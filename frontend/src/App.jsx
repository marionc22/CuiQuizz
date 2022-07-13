/* eslint-disable */
import React, { useEffect, useRef } from "react";
import "./App.css";
import axios from "axios";
import Cases from "./components/Cases";
import PoserQuestion from "./components/PoserQuestion";
import rien from "./components/rien.png";
import Progress from "./components/Progress";
import QuestionImage from "./components/QuestionImage";
import Setup1 from "./components/Setup1";
import Setup2 from "./components/Setup2";
import Setup3 from "./components/Setup3";
import Popup from "./components/Popup";
import NombreJoueurs from "./components/NombreJoueurs";
import Restart from "./components/Restart";

function App() {
  // Plateau
  const board = [
    {
      categorie: "Arrivée",
    },
    {
      categorie: "Sport",
    },
    {
      categorie: "Film",
    },
    {
      categorie: "Musique",
    },
    {
      categorie: "Images",
    },
    {
      categorie: "Géographie",
    },
    {
      categorie: "Départ",
    },
  ];
  //  API dans des variables
  const [geo, setGeo] = React.useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5050/api/geo")

      .then((result) => setGeo(result.data))
      .catch((err) => console.log(err));
  }, []);
  const [sport, setSport] = React.useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5050/api/sport")

      .then((result) => setSport(result.data))
      .catch((err) => console.log(err));
  }, []);
  const [film, setFilm] = React.useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5050/api/film")

      .then((result) => setFilm(result.data))
      .catch((err) => console.log(err));
  }, []);

  const [images, setImages] = React.useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5050/api/images")

      .then((result) => setImages(result.data))
      .catch((err) => console.log(err));
  }, []);

  const [musique, setMusique] = React.useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5050/api/musique")

      .then((result) => setMusique(result.data))
      .catch((err) => console.log(err));
  }, []);

  // States utilisés pendant le jeu

  const [player1, setPlayer1] = React.useState(board.length - 1);
  const [player2, setPlayer2] = React.useState(board.length - 1);
  const [player3, setPlayer3] = React.useState(board.length - 1);
  const [questionPosee, setQuestionPosee] = React.useState(
    "Player 1, choisis ton nom et ton perso?"
  );
  const [answer, setAnswer] = React.useState("");
  const rey = "./constirey.png";
  const julien = "./fatju.png";
  const marion = "./marionkick.png";
  const pigeon = "./pigeonrey.png";
  const [currentPlayer, setCurrentPlayer] = React.useState("");
  const [a, setA] = React.useState(Math.floor(Math.random() * 20));
  const [b, setB] = React.useState(Math.floor(Math.random() * 20));
  const [c, setC] = React.useState(Math.floor(Math.random() * 20));
  const [d, setD] = React.useState(0);
  const [x, setX] = React.useState(0);
  const [player1Name, setPlayer1Name] = React.useState("");
  const [player2Name, setPlayer2Name] = React.useState("");
  const [player3Name, setPlayer3Name] = React.useState("");
  const [questionImageOpen, setQuestionImageOpen] = React.useState(false);
  const [imageSource, setImageSource] = React.useState("images[a].pic");
  const [choice, setChoice] = React.useState(rien);
  const [choice2, setChoice2] = React.useState(rien);
  const [choice3, setChoice3] = React.useState(rien);
  const [martine, setMartine] = React.useState(true);
  const [deden, setDeden] = React.useState(false);
  const [sarah, setSarah] = React.useState(false);
  const [pop, setPop] = React.useState(0);
  const rep = document.querySelector(".push");
  const elem = document.querySelector(".barre");
  const [nbJoueurs2, setNbJoueurs2] = React.useState(false);
  const [nbJoueurs3, setNbJoueurs3] = React.useState(false);
  const [displayNb, setDisplayNb] = React.useState(true);
  const [nbJoueurs, setNbJoueurs] = React.useState(0);
  const interval = useRef();
  const [run, setRun] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [musicPlaying, setMusicPlaying] = React.useState(
    new Audio("./player1.m4a")
  );
  const denis = "./denis.gif";
  const wil = "./What.gif";
  const [recap, setRecap] = React.useState([{ question: "", reponse: "" }]);

  useEffect(() => {
    function shuffleArray(array) {
      for (const i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    shuffleArray(musique);
  }, [musique]);

  // timer

  function startIt() {
    interval.current = setInterval(() => {
      setProgress((prev) => prev + 1);
    }, 200);
  }
  // animation barre
  useEffect(() => {
    if (run) {
      elem.style.width = `${progress}%`;
    }
  });
  // end timer
  useEffect(() => {
    if (progress === 97) {
      rep.click();
    }
  }, [progress]);

  // Mise en place des fonctions paramétrées
  function laQuestion(player, i) {
    if (board[player].categorie === "Géographie") {
      setQuestionImageOpen(false);
      geo && setQuestionPosee(geo[i].question);
    } else if (board[player].categorie === "Sport") {
      setQuestionImageOpen(false);
      sport && setQuestionPosee(sport[i].question);
    } else if (board[player].categorie === "Film") {
      setQuestionImageOpen(false);
      film && setQuestionPosee(film[i].question);
    } else if (board[player].categorie === "Musique") {
      setQuestionImageOpen(true);
      setImageSource(musique[d].gif);
      setNbJoueurs2(false);
      setNbJoueurs3(false);
      clearInterval(interval.current);
      musicPlaying.play();
      setQuestionPosee("Ecoutez ce morceau attentivement");
      musicPlaying.onended = function () {
        setQuestionImageOpen(false);
        setQuestionPosee("Quel est le titre?");
        startIt();
        if (nbJoueurs === 2) {
          setNbJoueurs2(true);
        } else if (nbJoueurs === 3) {
          setNbJoueurs3(true);
        }
        setD((d += 1));
        if (d === 9) {
          setD(0);
        }

        setMusicPlaying(new Audio(musique[d].son));
      };
    } else if (board[player].categorie === "Images") {
      images && setImageSource(images[i].pic);
      images && setQuestionImageOpen(true);
      images && setQuestionPosee("Qui est sur cette photo?");
    }
  }

  function answerFunction(cat, player, setPlayer, i) {
    if (answer.toLowerCase() === cat[i].correct_answer.toLowerCase()) {
      setPlayer((player -= 1));
    } else {
      setRecap((current) => [
        ...current,
        { question: questionPosee, reponse: cat[i].correct_answer },
      ]);
    }
  }

  function laReponse(player, setPlayer, i) {
    setAnswer("");
    if (board[player].categorie === "Géographie") {
      answerFunction(geo, player, setPlayer, i);
    } else if (board[player].categorie === "Sport") {
      answerFunction(sport, player, setPlayer, i);
    } else if (board[player].categorie === "Film") {
      answerFunction(film, player, setPlayer, i);
    } else if (board[player].categorie === "Musique") {
      if (answer === musique[d - 1].correct_answer) {
        setPlayer((player -= 1));
      }
      setMusicPlaying(new Audio(musique[d].son));
    } else if (board[player].categorie === "Images") {
      answerFunction(images, player, setPlayer, i);
    }
  }

  if (d === 19) {
    setD(0);
  }

  // Lancement du jeu au clic
  function play2(event) {
    event.preventDefault();
    setAnswer("");
    setX((x += 1));
    if (x === 1) {
      musicPlaying.play();
      // setMusicPlaying(new Audio(musique[d].son))
      setMartine(!martine);
      setDeden(!deden);
      setQuestionPosee("Player 2, choisis ton nom et ton perso?");
      setPlayer1Name(answer.toUpperCase());
    }
    if (x === 2) {
      setDeden(!deden);
      setPlayer2Name(answer.toUpperCase());
      setPlayer1((player1 -= 1));
      setPlayer2((player2 -= 1));
      laQuestion(player1, a);
      setCurrentPlayer(`${player1Name} à ton tour`);
      setRun(true);
      startIt();
    }
    if (x === 3) {
      laQuestion(player2, b);
      laReponse(player1, setPlayer1, a);
      setA(Math.floor(Math.random() * 20));
      setCurrentPlayer(`${player2Name} à ton tour`);
      setRun(true);
    }
    if (x === 4) {
      laQuestion(player1, a);
      laReponse(player2, setPlayer2, b);
      setB(Math.floor(Math.random() * 20));
      setCurrentPlayer(`${player1Name} à ton tour`);
      setRun(true);
      setX(2);
    }
  }
  // Lancement du jeu au clic pour 3 joueurs
  function play3(event) {
    event.preventDefault();
    setAnswer("");
    setX((x += 1));
    if (x === 1) {
      musicPlaying.play();
      setMusicPlaying(new Audio("./player3.m4a"));
      setMartine(!martine);
      setDeden(!deden);
      setQuestionPosee("Player 2, choisis ton nom et ton perso?");
      setPlayer1Name(answer.toUpperCase());
    }
    if (x === 2) {
      musicPlaying.play();
      setMusicPlaying(new Audio(musique[d].son));
      setDeden(!deden);
      setSarah(!sarah);
      setQuestionPosee("Player 3, choisis ton nom et ton perso?");
      setPlayer2Name(answer.toUpperCase());
    }
    if (x === 3) {
      setSarah(!sarah);
      setPlayer3Name(answer.toUpperCase());
      setPlayer1((player1 -= 1));
      setPlayer2((player2 -= 1));
      setPlayer3((player3 -= 1));
      laQuestion(player1, a);
      setCurrentPlayer(`${player1Name} à ton tour`);
      setRun(true);
      startIt();
    }
    if (x === 4) {
      laQuestion(player2, b);
      laReponse(player1, setPlayer1, a);
      setA(Math.floor(Math.random() * 20));
      setCurrentPlayer(`${player2Name} à ton tour`);
      setRun(true);
    }
    if (x === 5) {
      laQuestion(player3, c);
      laReponse(player2, setPlayer2, b);
      setB(Math.floor(Math.random() * 20));
      setCurrentPlayer(`${player3Name} à ton tour`);
      setRun(true);
    }
    if (x === 6) {
      laQuestion(player1, a);
      laReponse(player3, setPlayer3, c);
      setC(Math.floor(Math.random() * 20));
      setCurrentPlayer(`${player1Name} à ton tour`);
      setRun(true);
      setX(3);
    }
  }

  const [finalGif, setFinalGif] = React.useState("");
  // Alert du gagnant
  useEffect(() => {
    if (player1 === 0) {
      if (choice === julien) {
        setFinalGif(wil);
      } else if (choice === rey) {
        setFinalGif(denis);
      } else if (choice === marion) {
        setFinalGif(wil);
      }
      setPop(1);
      clearInterval(interval.current);
    }
    if (player2 === 0) {
      if (choice2 === julien) {
        setFinalGif(wil);
      } else if (choice2 === rey) {
        setFinalGif(denis);
      } else if (choice2 === marion) {
        setFinalGif(wil);
      }
      setPop(2);
      clearInterval(interval.current);
    }
    if (player3 === 0) {
      if (choice3 === julien) {
        setFinalGif(wil);
      } else if (choice3 === rey) {
        setFinalGif(denis);
      } else if (choice3 === marion) {
        setFinalGif(wil);
      }
      setPop(3);
      clearInterval(interval.current);
    }
  });

  return (
    <div className="jeu">
      {/* {dis? <PremierePage setDis={setDis}/> : null} */}
      <div id="cuiquizz">
        <img src="./pioupiou.png" alt="" id="cuiquizz1" />
        <img src="./cui.png" alt="" id="cuiquizz2" />
        <img src="./quizz.png" alt="" id="cuiquizz3" />
      </div>
      {displayNb ? (
        <NombreJoueurs
          setMusicPlaying={setMusicPlaying}
          musicPlaying={musicPlaying}
          nbJoueurs2={nbJoueurs2}
          setNbJoueurs2={setNbJoueurs2}
          nbJoueurs3={nbJoueurs3}
          setNbJoueurs3={setNbJoueurs3}
          displayNb={displayNb}
          setDisplayNb={setDisplayNb}
          nbJoueurs={nbJoueurs}
          setNbJoueurs={setNbJoueurs}
        />
      ) : null}
      {pop === 1 ? (
        <Popup joueur={player1Name.toUpperCase()} recap={recap} />
      ) : null}
      {pop === 2 ? (
        <Popup joueur={player2Name.toUpperCase()} recap={recap} />
      ) : null}
      {pop === 3 ? (
        <Popup joueur={player3Name.toUpperCase()} recap={recap} />
      ) : null}
      <div className="plateau">
        {board.map((element, index) => (
          <Cases
            key={element.categorie}
            nom={element.categorie}
            player1Place={player1 === index ? choice : rien}
            player2Place={player2 === index ? choice2 : rien}
            player3Place={player3 === index ? choice3 : rien}
          />
        ))}
      </div>
      <Restart />
      <div className="questionnaire">
        <div className="poserQuestion">
          <PoserQuestion
            question={questionPosee}
            currentPlayer={currentPlayer}
          />
          <div className="setup">
            {martine ? (
              <Setup1
                choice={choice}
                setChoice={setChoice}
                player1setup={julien}
                player2setup={rey}
                player3setup={marion}
                player4setup={pigeon}
              />
            ) : null}
            {deden ? (
              <Setup2
                choice2={choice2}
                setChoice2={setChoice2}
                player1setup={julien}
                player2setup={rey}
                player3setup={marion}
                player4setup={pigeon}
              />
            ) : null}
            {sarah ? (
              <Setup3
                choice3={choice3}
                setChoice3={setChoice3}
                player1setup={julien}
                player2setup={rey}
                player3setup={marion}
                player4setup={pigeon}
              />
            ) : null}
          </div>
          <br />
          {questionImageOpen ? (
            <QuestionImage imageSource={imageSource} />
          ) : null}
        </div>
        {nbJoueurs2 ? (
          <div>
            <form
              className="reponse"
              onSubmit={(event) => {
                play2(event);
                setProgress(0);
              }}
            >
              <input
                type="text"
                value={answer}
                onChange={(e) => {
                  setAnswer(e.target.value);
                }}
                className="unpute"
                placeholder="type answer"
              />
              <input
                type="image"
                src="./bouttons.png"
                alt="Submit"
                width="48"
                height="48"
                className="push"
              />
            </form>
          </div>
        ) : null}
        {nbJoueurs3 ? (
          <div>
            <form
              className="reponse"
              onSubmit={(event) => {
                play3(event);
                setProgress(0);
              }}
            >
              <input
                type="text"
                value={answer}
                onChange={(e) => {
                  setAnswer(e.target.value);
                }}
                className="unpute"
                placeholder="type answer"
              />
              <input
                type="image"
                src="./bouttons.png"
                alt="Submit"
                width="48"
                height="48"
                className="push"
              />
            </form>
          </div>
        ) : null}
        <div>
          <Progress
            run={run}
            setRun={setRun}
            progress={progress}
            setProgress={setProgress}
            interval={interval}
            rep={rep}
            elem={elem}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
