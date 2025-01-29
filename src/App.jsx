import { useState } from "react";
import data from "../Common/data";
import "./App.css";
import Navbar from "./components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Body from "./components/Body";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/ContactPage";
import AuthPage from "./components/Login";

function App() {
  // Heading first
  let [heading1, setHeading1] = useState(data.cards[0].card.card.header.title);

  // Image cards
  let [img, setImg] = useState(data.cards[0].card.card.imageGridCards.info);

  // Heading second
  let [heading2, setHeading2] = useState(data.cards[1].card.card.header.title);

  // Card Data (Original & Filtered)
  let [cardsData, setCardsData] = useState(
    data.cards[4].card.card.gridElements.infoWithStyle.restaurants
  );
  let [originalCardsData] = useState(
    data.cards[4].card.card.gridElements.infoWithStyle.restaurants
  );

  // Heading Third
  let [heading3, setHeading3] = useState(data.cards[2].card.card.title);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Body
                heading1={heading1}
                img={img}
                heading2={heading2}
                cardsData={cardsData}
                originalCardsData={originalCardsData}
                heading3={heading3}
              />
            }
          /> 
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/sig-in" element={<AuthPage/>}></Route> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
