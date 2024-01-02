import React from 'react'
import './app.less';
import Header from "./components/header/index.jsx";
import Content from "./components/content/index.jsx";

const App = () => {
  return (
    <div className={`intro-wrapper`}>
      <Header/>
      <Content/>
    </div>
  )
}

export default App
