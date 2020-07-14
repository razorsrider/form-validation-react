import React from "react";
import './styles/input.css';

class inputText extends React.Component {
    render() {
        return (

            <div className={'col-12'}>
                <div className={'form-label-group'}>
                    <input id={this.props.fieldName} type="text"
                           className={`form-control ${this.props.errorClass}`}
                           placeholder={this.props.placeholder}
                           value={this.props.value}
                           onChange={((e) => this.props.onChange({field: this.props.fieldName,value: e.target.value}))}
                    />
                    <label htmlFor={this.props.fieldName}>{this.props.placeholder}</label>
                </div>
                {this.props.errorText.length ?
                    <p className={'errorText'}>{this.props.errorText}</p> : ''}
            </div>

        )
    }
}

export default inputText;