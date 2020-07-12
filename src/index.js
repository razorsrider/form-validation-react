import React, {Component} from "react";
import ReactDOM from "react-dom";
import Form from './Form';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <div className={'container-fluid'}>
                    <div className={'row'}>
                        <div className={'col-6 offset-3'}>
                            <h4 className={'mb-3'}>Информация о сотруднике</h4>
                            <Form/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM
    .render(
        <App/>,
        document.querySelector('#root')
    )
;