import React from "react";
import './styles/inputDate.css';

class inputDate extends React.Component {

    _onFocus = (e) => {
        e.currentTarget.type = "date";
    }

    _onBlur = (e) => {
        e.currentTarget.type = "text";
        e.currentTarget.placeholder = this.props.placeholder;
    }

    render() {
        return (

            <div className={'col-6'}>
                <div className={'form-label-group'}>
                    <input id={this.props.fieldName} type="text" placeholder={this.props.placeholder}
                           className={`form-control ${this.props.errorClass}`}
                           onFocus={this._onFocus} onBlur={this._onBlur}
                           value={this.props.value}
                           onChange={((e) => this.props.onChange({field: this.props.fieldName, value: e.target.value}))}
                    />
                    <label htmlFor={this.props.fieldName}>{this.props.placeholder}</label>
                </div>

                {this.props.errorText.length ?
                    <p className={'errorText'}>{this.props.errorText}</p> : ''}
            </div>

        )
    }
}

export default inputDate;