
import './App.css';
import React, { useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'


const App =() => {
  const max = 10;
  const apiKey = process.env.REACT_APP_NEWS_API
  
  const [progress, setProgress] = useState(0)
  
    return (
      <Router>

        <div>
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}

          />
          <Routes>

            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" max={max} country="in" category="general" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" max={max} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" max={max} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" max={max} country="in" category="general" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" max={max} country="in" category="health" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" max={max} country="in" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" max={max} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" max={max} country="in" category="technology" />} />
            <Route exact path="/nation" element={<News setProgress={setProgress} apiKey={apiKey} key="nation" max={max}  category="nation" />} />
            <Route exact path="/world" element={<News setProgress={setProgress} apiKey={apiKey} key="world" max={max}  category="world" />} />
          </Routes>
      
        </div>
        
      </Router>
     
    )
  
}

export default App;