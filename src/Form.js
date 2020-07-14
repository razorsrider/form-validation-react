import React, {Component} from "react";
import InputText from "./Components/Input.js";
import InputDate from "./Components/InputDate.js";
import SelectBox from "./Components/SelectBox.js";
import Phone from "./Components/Phone.js";
import Button from "./Components/Button.js";
import Email from "./Components/Email.js";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formErrors: {email: '', phone: '', date: '', name: '', surname: ''},
            surname: '',
            name: '',
            fatherName: '',
            gender: '',
            date: '',
            phone: '',
            email: '',
            address: '',
            employer: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log('handleChange', event);

        const stateObject = function () {
            const returnObj = {};
            returnObj[this.field] = this.value;
            return returnObj;
        }.bind(event)();

        this.setState(stateObject);
    }

    // handleSubmit1(event) {
    //     event.preventDefault();
    //     alert('A name was submitted: ' + this.state.value);
    // }

    handleSubmit = (event) => {
        event.preventDefault();

        let fieldValidationErrors = this.state.formErrors;
        const requiredField = 'Поле является обязательным';
        const incorrectField = 'Введен некорректный адрес почты';

        const form = document.forms.my;
        const surname = form.elements.surname.value;
        const name = form.elements.name.value;
        const fatherName = form.elements.fatherName.value;
        const gender = form.elements.gender.value;
        const date = form.elements.date.value;
        const phone = form.elements.phone.value;
        const email = form.elements.email.value;
        const address = form.elements.address.value;
        const employer = form.elements.employer.value;

        if (!surname.length) {
            fieldValidationErrors.surname = requiredField;
        } else {
            fieldValidationErrors.surname = '';
        }

        if (!name.length) {
            fieldValidationErrors.name = requiredField;
        } else {
            fieldValidationErrors.name = '';
        }

        if (!date.length) {
            fieldValidationErrors.date = requiredField;
        } else {
            fieldValidationErrors.date = '';
        }

        if (!phone.length) {
            fieldValidationErrors.phone = requiredField;
        } else {
            fieldValidationErrors.phone = '';
        }

        if (!email.length) {
            fieldValidationErrors.email = requiredField;
        } else {
            let emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            if (!emailValid) {
                fieldValidationErrors.email = incorrectField;
            } else {
                fieldValidationErrors.email = '';
            }
        }

        this.setState({
            formErrors: fieldValidationErrors
        });

        let errors = false;
        for (let each in fieldValidationErrors) {
            if (fieldValidationErrors[each].length) {
                errors = true;
                break;
            }
        }

        if (!errors) {
            alert('Форма валидна, отправляется запрос');
        }
    }

    errorClass(error) {
        return (error.length ? 'red-border' : '');
    }

    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit} name={'my'}>
                    <div className={'row'}>

                        <InputText fieldName={'surname'}
                                   value={this.state.surname}
                                   onChange={this.handleChange}
                                   errorClass={this.errorClass(this.state.formErrors.surname)}
                                   errorText={this.state.formErrors.surname} placeholder={'Фамилия'}/>

                        <InputText fieldName={'name'}
                                   value={this.state.name}
                                   onChange={this.handleChange}
                                   errorClass={this.errorClass(this.state.formErrors.name)}
                                   errorText={this.state.formErrors.name} placeholder={'Имя'}/>

                        <InputText fieldName={'fatherName'}
                                   value={this.state.fatherName}
                                   onChange={this.handleChange}
                                   errorClass={''}
                                   errorText={''} placeholder={'Отчество'}/>

                        <SelectBox fieldName={'gender'} onChange={this.handleChange}/>

                        <InputDate fieldName={'date'}
                                   value={this.state.date}
                                   onChange={this.handleChange}
                                   placeholder={'Дата рождения'}
                                   errorClass={this.errorClass(this.state.formErrors.date)}
                                   errorText={this.state.formErrors.date}/>

                        <Phone fieldName={'phone'}
                               value={this.state.phone}
                               onChange={this.handleChange}
                               errorClass={this.errorClass(this.state.formErrors.phone)}
                               errorText={this.state.formErrors.phone} placeholder={'Фамилия'}/>

                        <Email fieldName={'email'}
                               value={this.state.email}
                               onChange={this.handleChange}
                               errorClass={this.errorClass(this.state.formErrors.email)}
                               errorText={this.state.formErrors.email} placeholder={'Email (необязательно)'}/>

                        <InputText fieldName={'address'}
                                   value={this.state.address}
                                   onChange={this.handleChange}
                                   errorClass={''}
                                   errorText={''} placeholder={'Адрес постоянной регистрации'}/>

                        <InputText fieldName={'employer'}
                                   value={this.state.employer}
                                   onChange={this.handleChange}
                                   errorClass={''}
                                   errorText={''} placeholder={'Название работодателя'}/>

                        <Button/>

                    </div>
                </form>
            </div>
        )
    }
}


export default Form;