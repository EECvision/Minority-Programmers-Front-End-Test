import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Learn from './pages/Learn/Learn.component';
import Course from './pages/Course/Course.component';
import Module from './pages/Module/Module.component';
import Startup from './pages/Startup/Startup.component';
import Week from './pages/Week/Week.component';
import Activity from './pages/Activity/Activity.component';
import StartupOverview from './components/StartupOverview/StartupOverview.component';
import Home from './pages/Home/Home.component';

function App(){
  return (
    <div>
      <Switch>
        <Route exact path='/' render={()=> <Redirect to='/home'/>}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/startup' component={StartupOverview}/>
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