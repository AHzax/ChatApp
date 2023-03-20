import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ChannelCreate from './components/channelCreate';
import Login from './components/login';





function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>

          <Route path='/ChannelCreate' Component={ChannelCreate} />
        </Routes>
         */}
        
        <Login />
      {/* </BrowserRouter> */}
    </div>
  )
}

export default App;
