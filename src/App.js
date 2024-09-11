//import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { BookList } from './MyComponents/BookList.js';
import { BookView } from './MyComponents/BookView.js';
import { useState } from "react";

function App() {
  const [UserBookItem, setUserBookItem] = useState({})

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="BookView" element={<BookView UserBookItem={UserBookItem} />} />
          <Route index element={<div className="App">
              <header>
                <div>
                  <form className="my-form" >
                    <label htmlFor="search">Search: </label>
                    <input className="search-box" type="text" id="search" name="Search"/>
                  </form>
                </div>
              </header>
              <BookList setUserBookItem={setUserBookItem}/>
            </div> }/>
          
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
