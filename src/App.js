import React, { useEffect } from 'react'
import {BrowserRouter} from 'react-router-dom'
import GlobalState from './global/GlobalState'
import Routes from './routes/Routes'
import GlobalStyle from './GlobalStyle'


function App() {

  useEffect(()=>{
    document.title = 'Ifuture'
  }, [])

  return<BrowserRouter>
          <GlobalStyle/>
          <GlobalState>
            <Routes/>          
          </GlobalState>
        </BrowserRouter>
}

export default App;
