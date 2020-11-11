import React from 'react';
import Header1 from './HeaderComponent';
import Question from './QuestionRenderComponent';
import Login from './LoginComponent';
import './css/MainComponent.css';

class Main extends React.Component {

    render(){
        return (
            <div className="MainComponent" >
                <Header1 />
                <Question />
                {/* <Login /> */}
            </div>
        );
    }
}

export default Main;