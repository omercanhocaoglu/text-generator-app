import './App.css';

import { useState, useEffect } from 'react';

import Options from './components/Options';

import Output from './components/Output';

import Clock from './components/Clock';

function App() {
 
 const [paragraphs, setParagraphs] = useState([]);

 const [tag, setTag] = useState("p");

 const [inputValue, setInputValue] = useState(4);

 const [includeHtml, setIncludeHtml] = useState("No");

 useEffect( () => {
  const url = `https://baconipsum.com/api/?type=all-meat&paras=${inputValue}&start-with-lorem=1`;

  fetch(url).then(res => res.json()).then(data => setParagraphs(data));
 }, [inputValue] );
 
  return (
    <div className="App">
      
      <div className='container'>
        
        <div className='title'>

          <h1> Lorem Ipsum Text Generator </h1>

      

        </div>

        <p style={{color:"white", textAlign:"end", marginTop:"5px" }}> <Clock/> </p>

          <Options 
          paragraphs={paragraphs} 
          includeHtml={includeHtml} 
          setIncludeHtml={setIncludeHtml}
          inputValue={inputValue}
          setInputValue={setInputValue}
          tag={tag}
          setTag={setTag}   />

          <Output paragraphs={paragraphs} tag={tag} includeHtml={includeHtml} />

      </div>
  
      
    </div>
  );
}

export default App;
