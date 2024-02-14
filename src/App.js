import React, { useState, useEffect } from "react"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Home from "./Pages/Home"
import CatIndex from "./Pages/CatIndex"
import CatShow from "./Pages/CatShow"
import CatNew from "./Pages/CatNew"
import CatEdit from "./Pages/CatEdit"
import NotFound from "./Pages/NotFound"
import { Routes, Route } from "react-router-dom"
import './App.css';

const App = () => {
  const [cats, setCats] = useState([])

  useEffect(() => {
    readCat()
  }, [])

  const readCat = () => {
    fetch("https://cat-tinder-ddav.onrender.com")
      .then((response) => response.json(response))
      .then((payload) => setCats(payload))
      .catch((errors) => console.log("cat read errors", errors))
  }
  const createCat = (cat) => {
    fetch("https://cat-tinder-ddav.onrender.com", {
      body: JSON.stringify(cat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then((response) => response.json())
      .then(() => readCat())
      .catch((errors) => console.log("Cat create errors:", errors))
  }
  return (
    <>
      < Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catindex" element={<CatIndex cats={cats} />} />
        <Route path="/catshow/:id" element={<CatShow cats={cats} />} />
        <Route path="/catnew" element={<CatNew createCat={createCat} />} />
        <Route path="/catedit" element={<CatEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      < Footer />
    </>
  )
}
export default App
