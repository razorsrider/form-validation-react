(this["webpackJsonptest-application"]=this["webpackJsonptest-application"]||[]).push([[0],{16:function(e,a,r){e.exports=r(31)},21:function(e,a,r){},25:function(e,a,r){},26:function(e,a,r){},28:function(e,a,r){},29:function(e,a,r){},31:function(e,a,r){"use strict";r.r(a);var t=r(5),n=r(6),l=r(8),s=r(7),o=r(0),i=r.n(o),c=r(12),h=r.n(c),p=r(9),m=(r(21),r(32)),u=function(e){Object(l.a)(r,e);var a=Object(s.a)(r);function r(){return Object(t.a)(this,r),a.apply(this,arguments)}return Object(n.a)(r,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"col-12"},i.a.createElement("div",{className:"form-label-group"},i.a.createElement(m.a.Control,{id:this.props.fieldName,type:"text",className:"form-control ".concat(this.props.errorClass),placeholder:this.props.placeholder,value:this.props.value,onChange:function(a){return e.props.onChange({field:e.props.fieldName,value:a.target.value})}}),i.a.createElement("label",{htmlFor:this.props.fieldName},this.props.placeholder)),this.props.errorText.length?i.a.createElement("p",{className:"errorText"},this.props.errorText):"")}}]),r}(i.a.Component),d=(r(25),r(4)),f=r.n(d),v=function(e){Object(l.a)(r,e);var a=Object(s.a)(r);function r(){var e;Object(t.a)(this,r);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l)))._onFocus=function(e){e.currentTarget.type="date"},e._onBlur=function(a){a.currentTarget.type="text",a.currentTarget.placeholder=e.props.placeholder},e}return Object(n.a)(r,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"col-6"},i.a.createElement("div",{className:"form-label-group"},i.a.createElement(m.a.Control,{id:this.props.fieldName,type:"text",placeholder:this.props.placeholder,className:"form-control ".concat(this.props.errorClass),onFocus:this._onFocus,onBlur:this._onBlur,value:this.props.value,onChange:function(a){return e.props.onChange({field:e.props.fieldName,value:a.target.value})}}),i.a.createElement("label",{htmlFor:this.props.fieldName},this.props.placeholder)),this.props.errorText.length?i.a.createElement("p",{className:"errorText"},this.props.errorText):"")}}]),r}(i.a.Component);u.propTypes={fieldName:f.a.string,placeholder:f.a.string,errorClass:f.a.string,errorText:f.a.string};var g=v,C=(r(26),function(e){Object(l.a)(r,e);var a=Object(s.a)(r);function r(){return Object(t.a)(this,r),a.apply(this,arguments)}return Object(n.a)(r,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"col-6"},i.a.createElement(m.a.Control,{as:"select",custom:!0,id:this.props.fieldName,className:"form-control",defaultValue:this.props.value,onChange:function(a){return e.props.onChange({field:e.props.fieldName,value:a.target.value})}},i.a.createElement("option",{value:"default",disabled:!0},"\u041f\u043e\u043b"),i.a.createElement("option",{value:"\u041c\u0443\u0436\u0441\u043a\u043e\u0439"},"\u041c\u0443\u0436\u0441\u043a\u043e\u0439"),i.a.createElement("option",{value:"\u0416\u0435\u043d\u0441\u043a\u0438\u0439"},"\u0416\u0435\u043d\u0441\u043a\u0438\u0439")))}}]),r}(i.a.Component));u.propTypes={fieldName:f.a.string};var E=C,N=r(15),b=r.n(N),y=(r(28),function(e){Object(l.a)(r,e);var a=Object(s.a)(r);function r(){return Object(t.a)(this,r),a.apply(this,arguments)}return Object(n.a)(r,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"col-6"},i.a.createElement("div",{className:"form-label-group"},i.a.createElement(b.a,{mask:"+7 999 999 99 99",id:this.props.fieldName,type:"tel",placeholder:this.props.placeholder,className:"form-control ".concat(this.props.errorClass),maskChar:" ",value:this.props.value,onChange:function(a){return e.props.onChange({field:e.props.fieldName,value:a.target.value})}}),i.a.createElement("label",{htmlFor:this.props.fieldName},"\u041c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0439 \u0442\u0435\u043b\u0435\u0444\u043e\u043d")),this.props.errorText.length?i.a.createElement("p",{className:"errorText"},this.props.errorText):"")}}]),r}(i.a.Component));u.propTypes={fieldName:f.a.string,placeholder:f.a.string,errorClass:f.a.string,errorText:f.a.string};var j=y,O=(r(29),function(){return i.a.createElement("div",{className:"col-6 offset-6"},i.a.createElement("input",{type:"submit",value:"\u0421\u041e\u0425\u0420\u0410\u041d\u0418\u0422\u042c",className:"form-control"}))}),T=function(e){Object(l.a)(r,e);var a=Object(s.a)(r);function r(){return Object(t.a)(this,r),a.apply(this,arguments)}return Object(n.a)(r,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"col-6"},i.a.createElement("div",{className:"form-label-group"},i.a.createElement(m.a.Control,{name:this.props.fieldName,type:"text",className:"form-control ".concat(this.props.errorClass),placeholder:this.props.placeholder,value:this.props.value,onChange:function(a){return e.props.onChange({field:e.props.fieldName,value:a.target.value})}}),i.a.createElement("label",{htmlFor:this.props.fieldName},this.props.placeholder)),this.props.errorText.length?i.a.createElement("p",{className:"errorText"},this.props.errorText):"")}}]),r}(i.a.Component);u.propTypes={fieldName:f.a.string,placeholder:f.a.string,errorClass:f.a.string,errorText:f.a.string};var x=T,k=function(e){Object(l.a)(r,e);var a=Object(s.a)(r);function r(e){var n;return Object(t.a)(this,r),(n=a.call(this,e)).handleSubmit=function(e){e.preventDefault();var a=n.state.formErrors,r="\u041f\u043e\u043b\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c",t=n.state.surname,l=n.state.name,s=n.state.date,o=n.state.phone,i=n.state.email;if(t.length?a.surname="":a.surname=r,l.length?a.name="":a.name=r,s.length?a.date="":a.date=r,o.length?a.phone="":a.phone=r,i.length){var c=i.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);a.email=c?"":"\u0412\u0432\u0435\u0434\u0435\u043d \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441 \u043f\u043e\u0447\u0442\u044b"}else a.email=r;n.setState({formErrors:a});var h=!1;for(var p in a)if(a[p].length){h=!0;break}h||alert("\u0424\u043e\u0440\u043c\u0430 \u0432\u0430\u043b\u0438\u0434\u043d\u0430, \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0437\u0430\u043f\u0440\u043e\u0441")},n.state={formErrors:{email:"",phone:"",date:"",name:"",surname:""},surname:"",name:"",fatherName:"",gender:"default",date:"",phone:"",email:"",address:"",employer:""},n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(n.a)(r,[{key:"handleChange",value:function(e){var a=function(){var e={};return e[this.field]=this.value,e}.bind(e)();this.setState(a)}},{key:"errorClass",value:function(e){return e.length?"red-border":""}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(m.a,{onSubmit:this.handleSubmit,name:"my"},i.a.createElement("div",{className:"row"},i.a.createElement(u,{fieldName:"surname",value:this.state.surname,onChange:this.handleChange,errorClass:this.errorClass(this.state.formErrors.surname),errorText:this.state.formErrors.surname,placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"}),i.a.createElement(u,{fieldName:"name",value:this.state.name,onChange:this.handleChange,errorClass:this.errorClass(this.state.formErrors.name),errorText:this.state.formErrors.name,placeholder:"\u0418\u043c\u044f"}),i.a.createElement(u,{fieldName:"fatherName",value:this.state.fatherName,onChange:this.handleChange,errorClass:"",errorText:"",placeholder:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e"}),i.a.createElement(E,{fieldName:"gender",value:this.state.gender,onChange:this.handleChange}),i.a.createElement(g,{fieldName:"date",value:this.state.date,onChange:this.handleChange,placeholder:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f",errorClass:this.errorClass(this.state.formErrors.date),errorText:this.state.formErrors.date}),i.a.createElement(j,{fieldName:"phone",value:this.state.phone,onChange:this.handleChange,errorClass:this.errorClass(this.state.formErrors.phone),errorText:this.state.formErrors.phone,placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"}),i.a.createElement(x,{fieldName:"email",value:this.state.email,onChange:this.handleChange,errorClass:this.errorClass(this.state.formErrors.email),errorText:this.state.formErrors.email,placeholder:"Email (\u043d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e)"}),i.a.createElement(u,{fieldName:"address",value:this.state.address,onChange:this.handleChange,errorClass:"",errorText:"",placeholder:"\u0410\u0434\u0440\u0435\u0441 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}),i.a.createElement(u,{fieldName:"employer",value:this.state.employer,onChange:this.handleChange,errorClass:"",errorText:"",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0442\u043e\u0434\u0430\u0442\u0435\u043b\u044f"}),i.a.createElement(O,null))))}}]),r}(o.Component),w=(r(30),function(e){Object(l.a)(r,e);var a=Object(s.a)(r);function r(){return Object(t.a)(this,r),a.apply(this,arguments)}return Object(n.a)(r,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-6 offset-3"},i.a.createElement("h4",{className:"mb-3"},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0435"),i.a.createElement(k,null)))))}}]),r}(o.Component));h.a.render(i.a.createElement(w,null),document.querySelector("#root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.c078e95a.chunk.js.map