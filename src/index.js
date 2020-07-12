import React, {Component} from "react";
import ReactDOM from "react-dom";
// import './App.css';
import Form from './Form';


class App extends Component {
    render() {
        return (
            <div className='App'>
                <div className={'container-fluid'}>
                    <div className={'row'}
                         // style={{backgroundColor: 'white'}}
                    >
                        <div className={'col-6 offset-3'} >
                            <h4 className={'mb-3'}>Информация о сотруднике</h4>
                            <Form/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// const App = () => {
//     return (
//         <div>
//             <div className={'container-fluid'}>
//                 <div className={'row'} style={{backgroundColor: 'white'}}>
//                     <div className={'col-6 offset-3'} style={{border: '1px solid'}}>
//                         <h4>Информация о сотруднике</h4>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };


ReactDOM
    .render(
        <App/>,
        document.querySelector('#root')
    )
;