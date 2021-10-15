import ReactDOM from 'react-dom';
import React from 'react';
import Header from './Header';
import Dashboard from './Dashboard'

const App = () => {
 return  (
    <div >
<Header/>
<Dashboard/>
    </div>
);
 }
ReactDOM.render(<App />, document.getElementById('app'));