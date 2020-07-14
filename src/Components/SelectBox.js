import React from "react";
import './styles/selectBox.css';

class selectBox extends React.Component {
    render() {
        return (

            <div className={'col-6'}>
                <select id={this.props.fieldName} className={'form-control'}
                        onChange={((e) => this.props.onChange({field: this.props.fieldName, value: e.target.value}))}>
                    <option value='' disabled>Пол</option>
                    <option value='Мужской'>Мужской</option>
                    <option value='Женский'>Женский</option>
                </select>
            </div>

        )
    }
}

export default selectBox;