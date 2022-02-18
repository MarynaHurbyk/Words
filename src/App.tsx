import React, { useState } from "react";

import "./App.css";
import { HomePage } from "./pages/home/HomePage.tsx";
import { QuizPage } from "./pages/quiz/QuizPage.tsx";
import { ScorePage } from "./pages/score/ScorePage.tsx";

function App() {
  type PageName = "home" | "quiz" | "score";
  const [page, setPage] = useState<PageName>("home");
  const [score, setScore] = useState(0);

  const getPage = (page: PageName) => {
    switch (page) {
      case "home":
        return <HomePage updatePage={setPage} />;
      case "quiz":
        return <QuizPage updatePage={setPage} updateScore={setScore} />;
      case "score":
        return <ScorePage score={score} updatePage={setPage} />;
    }
  };

  let component = getPage(page);

  return <div className="App">{component}</div>;
}

export default App;
