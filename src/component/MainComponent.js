import React from 'react';
import Header1 from './HeaderComponent';
import Question from './QuestionRenderComponent';
import './css/MainComponent.css';

class Main extends React.Component {

    render(){
        console.log('in main');
        return(
            <div className="MainComponent" >
                <Header1 />
                <Question />
            </div>
        );
    }
}

export default Main;