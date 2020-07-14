import React from "react";

class Email extends React.Component {
    render() {
        return (

            <div className={`col-6`}>
                <div className={'form-label-group'}>
                    <input name={this.props.fieldName} type="text"
                           className={`form-control ${this.props.errorClass}`}
                           placeholder={this.props.placeholder}
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

export default Email;