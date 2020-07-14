import React from "react";
import InputMask from 'react-input-mask';
import './styles/phone.css';

class Phone extends React.Component {
    render() {

        return (

            <div className={'col-6'}>
                <div className={'form-label-group'}>
                    <InputMask mask="+7 999 999 99 99" id={this.props.fieldName} type="tel"
                               placeholder={this.props.placeholder}
                               className={`form-control ${this.props.errorClass}`} maskChar=" "
                               value={this.props.value}
                               onChange={((e) => this.props.onChange({
                                   field: this.props.fieldName,
                                   value: e.target.value
                               }))}
                    />
                    <label htmlFor={this.props.fieldName}>Мобильный телефон</label>
                </div>
                {this.props.errorText.length ?
                    <p className={'errorText'}>{this.props.errorText}</p> : ''}
            </div>

        )
    }
}

export default Phone;