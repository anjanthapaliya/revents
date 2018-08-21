import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layouts/App';
import registerServiceWorker from './registerServiceWorker';


//Hot module replacement
const rootEl = document.getElementById('root');
let render = () =>{
    ReactDOM.render(<App />, rootEl);
}
if (module.hot){
    module.hot.accept('./App', ()=>{
        setTimeout(render);
    });
}

render(); 
registerServiceWorker();


//Original Code prior to hot module reloading

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
