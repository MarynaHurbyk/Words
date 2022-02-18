import React, { useState } from "react";

import { HomePage } from "./pages/home/HomePage.tsx";
import { QuizPage } from "./pages/quiz/QuizPage.tsx";
import { ScorePage } from "./pages/score/ScorePage.tsx";
import "./App.css";

export type PageName = "home" | "quiz" | "score";

function App() {  
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
