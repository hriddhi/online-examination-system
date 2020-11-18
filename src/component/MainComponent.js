import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams, Redirect } from "react-router-dom";
import Header1 from './HeaderComponent';
import Question from './QuestionRenderComponent';
import Landing from './LandingComponent';
import Complete from './CompleteComponent';
import './css/MainComponent.css';


class Main extends React.Component {

    render(){
        return (
            <div className="MainComponent" >
                <Router>
                    <Header1 />
                    <Switch>
                        <Route exact path="/complete" children={<Complete />} />
                        <Route exact path='/test' children={<Question />} />  
                        <Route exact path="/:test_id" children={<Child />} />
                    </Switch>
                </Router>
                {/* <Question /> */}
                {/* <Landing /> */}
            </div>
        );
    }
}

function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { test_id } = useParams();
  
    return (
      <div>
        <Landing test_id={test_id} />
      </div>
    );
  }

export default Main;