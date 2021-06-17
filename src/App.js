import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Learn from './pages/Learn/Learn.component';
import Course from './pages/Course/Course.component';
import Module from './pages/Module/Module.component';
import Startup from './pages/StartupDetails/Startup.component';
import Week from './pages/Week/Week.component';
import Activity from './pages/Activity/Activity.component';
import Incubator from './pages/Incubator/Incubator.component';
import Home from './pages/Home/Home.component';
import Navbar from './components/Navbar/Navbar.component';
import './App.css';

function App(){
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' render={()=> <Redirect to='/home'/>}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/startup' component={Incubator}/>
        <Route exact path='/startup/:startupId' component={Startup}/>
        <Route exact path='/learn' component={Learn}/>
        <Route exact path='/learn/:courseId' component={Course}/>
        <Route exact path='/learn/:courseId/:moduleId' component={Module}/>
        <Route exact path='/learn/:courseId/:moduleId/:weekId' component={Week}/>
        <Route exact path='/learn/:courseId/:moduleId/:weekId/:activityId' component={Activity}/>
      </Switch>
    </div>
  )
}

export default App;