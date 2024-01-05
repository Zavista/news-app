import Navbar from "./components/Navbar"
import NewsBoard from "./components/NewsBoard"
import { useState } from "react";

const App = () => {

  const [category, setCategory] = useState("General");

  return (
    <div>
      <Navbar setCategory={setCategory}></Navbar>
      <NewsBoard category={category}></NewsBoard>
    </div>
  )
}

export default App