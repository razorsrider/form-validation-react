import React, {Component} from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formErrors: {email: '', phone: '', date: '', name: '', surname: ''}
        }
    }

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

    _onFocus(e) {
        e.currentTarget.type = "date";
    }

    _onBlur(e) {
        e.currentTarget.type = "text";
        e.currentTarget.placeholder = "Дата рождения";
    }

    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit} name={'my'}>
                    <div className={'row'}>

                        <div className={'col-12'}>
                            <div className={'form-label-group'}>
                                <input id={'surname'} type="text"
                                       className={`form-control ${this.errorClass(this.state.formErrors.surname)}`}
                                       placeholder={'Фамилия'}/>
                                <label htmlFor={'surname'}>Фамилия</label>
                            </div>
                            {this.state.formErrors.surname.length ?
                                <p className={'errorText'}>{this.state.formErrors.surname}</p> : ''}
                        </div>

                        <div className={'col-12'}>
                            <div className={'form-label-group'}>
                                <input id={'name'} type="text" placeholder={'Имя'}
                                       className={`form-control ${this.errorClass(this.state.formErrors.name)}`}/>
                                <label htmlFor={'Name'}>Имя</label>
                            </div>
                            {this.state.formErrors.name.length ?
                                <p className={'errorText'}>{this.state.formErrors.name}</p> : ''}
                        </div>

                        <div className={'col-12'}>
                            <div className={'form-label-group'}>
                                <input id={'fatherName'} type="text" placeholder={'Отчество'}
                                       className={'form-control'}/>
                                <label htmlFor={'FatherName'}>Отчество</label>
                            </div>
                        </div>

                        <div className={'col-6'}>
                            <select id={'gender'} className={'form-control'}>
                                <option disabled>Пол</option>
                                <option value='Мужской'>Мужской</option>
                                <option value='Женский'>Женский</option>
                            </select>
                        </div>

                        <div className={'col-6'}>
                            <div className={'form-label-group'}>
                                <input id={'date'} type="text" placeholder={'Дата рождения'}
                                       className={`form-control ${this.errorClass(this.state.formErrors.date)}`}
                                    onFocus={this._onFocus} onBlur={this._onBlur}
                                />
                                <label htmlFor={'FatherName'}>Дата рождения</label>
                            </div>
                            {this.state.formErrors.date.length ?
                                <p className={'errorText'}>{this.state.formErrors.date}</p> : ''}
                        </div>


                        <div className={'col-6'}>
                            <div className={'form-label-group'}>
                                <input id={'phone'} type="tel" placeholder={'Мобильный телефон'}
                                       className={`form-control ${this.errorClass(this.state.formErrors.phone)}`}/>
                                <label htmlFor={'email'}>Мобильный телефон</label>
                            </div>
                            {this.state.formErrors.phone.length ?
                                <p className={'errorText'}>{this.state.formErrors.phone}</p> : ''}
                        </div>

                        <div className={`col-6`}>
                            <div className={'form-label-group'}>
                                <input name={"email"} type="text"
                                       className={`form-control ${this.errorClass(this.state.formErrors.email)}`}
                                       placeholder={'Email (необязательно)'}/>
                                <label htmlFor={'email'}>Email (необязательно)</label>
                            </div>
                            {this.state.formErrors.email.length ?
                                <p className={'errorText'}>{this.state.formErrors.email}</p> : ''}
                        </div>

                        <div className={'col-12'}>
                            <div className={'form-label-group'}>
                                <input id={'address'} type="text" placeholder={'Адрес постоянной регистрации'}
                                       className={'form-control'}/>
                                <label htmlFor={'address'}>Адрес постоянной регистрации</label>
                            </div>
                        </div>

                        <div className={'col-12'}>
                            <div className={'form-label-group'}>
                                <input id={'employer'} type="text" placeholder={'Название работодателя'}
                                       className={'form-control'}/>
                                <label htmlFor={'employer'}>Название работодателя</label>
                            </div>
                        </div>

                        <div className={'col-6 offset-6'}>
                            <input type="submit" value={'СОХРАНИТЬ'}
                                   style={{backgroundColor: '#43b055', color: 'white'}}
                                   className={'form-control'}/>
                        </div>

                    </div>
                </form>
            </div>
        )
    }
}


export default Form;