import React from 'react'; 
import { connect } from 'react-redux';
import { createStore } from 'redux';
import Header from './Header';
import Home from './Home/index';

const defaultState = {
  appName: 'conduit',
  articles: null
};

const reducer = function(state = defaultState, action) {
    return state;
  };
  
const store = createStore(reducer);
const mapStateToProps = state => ({
  appName: state.appName
});

class App extends React.Component {

  render() {
    const onClick = () => store.dispatch({type: 'TOGGLE'});
    return (
        <div>
          <Header appName={this.props.appName} />
          {this.props.children}
        </div>
    );
  }
}

 App.contextTypes = {
   router: React.PropTypes.object.isRequired
   };

export default connect(mapStateToProps, () => ({}) )(App);