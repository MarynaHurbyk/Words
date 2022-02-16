import React, { useState } from "react";

import "./App.css";
import { HomePage } from "./pages/home/HomePage.tsx";
import { QuizePage } from "./pages/QuizePage.tsx";
import { ScorePage } from "./pages/ScorePage.tsx";

function App() {
  const [page, setPage] = useState("home");
  const [score, setScore] = useState(0);

  const updatePage = (value) => {
    setPage(value);
  };

  const updateScore = (value) => {
    setScore(value);
  };

  let component;
  switch (page) {
    case "home":
      component = <HomePage updatePage={updatePage} />;
      break;
    case "quize":
      component = (
        <QuizePage
          updatePage={updatePage}
          updateScore={updateScore}
        />
      );
      break;
    case "score":
      component = <ScorePage score={score} updatePage={updatePage} />;
      break;
  }

  return <div className="App">{component}</div>;
}

export default App;
