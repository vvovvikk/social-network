import './App.css';
import Dialogs from './components/dialogs/Dialogs';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Friends from './components/navbar/friends/Friends';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App(props) {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Navbar navBar={props.state.navBar} />
        <div className="wrapper-content">
          <Routes>
            <Route path='/' element={<Profile profilePage={props.state.profilePage} newPostText={props.state.profilePage.newPostText} dispatch={props.dispatch} />} />
            <Route path='/profile' element={<Profile profilePage={props.state.profilePage} newPostText={props.state.profilePage.newPostText} dispatch={props.dispatch} />} />
            <Route exact path='/dialogs' element={<Dialogs dialogsPage={props.state.dialogsPage} newMsg={props.state.dialogsPage.newMsg} dispatch={props.dispatch} />} />
            <Route exact path='/messages' element={<Dialogs dialogsPage={props.state.dialogsPage} newMsg={props.state.dialogsPage.newMsg} dispatch={props.dispatch} />} />
            <Route exact path='/friends' element={<Friends navBar={props.state.navBar} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

