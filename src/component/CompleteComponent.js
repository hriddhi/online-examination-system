import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        test: state.test
    }
}

class Complete extends React.Component {

    render(){
        if(this.props.test.testID === null)
            return(
                <h1>404</h1>
            )
        else    
            return(
                <h1>hello</h1>
            );
    }
}

export default connect(mapStateToProps)(Complete);