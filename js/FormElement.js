class FormElement{
    constructor(type, id, placeholder, value, rules){
        this.type = type;
        this.id = id;
        this.placeholder = placeholder;
        this.value = value;
        this.rules = rules;
    }

    create() {
        this.my_form = document.createElement('form');
        this.my_form.classList='form_element';

        let name = document.createElement('input');
        name.type = "text";
        name.id = 'name';
        name.placeholder = 'Name';
        name.value = '';
        name.rules = "required";
        this.my_form.append(name);

        let email = document.createElement('input');
        email.type = "text";
        email.id = 'email';
        email.placeholder = 'Email';
        email.value = '';
        email.rules = "required|mail";
        this.my_form.append(email);

        let age = document.createElement('input');
        age.type = "text";
        age.id = 'age';
        age.placeholder = 'Age';
        age.value = '';
        age.rules = "required\min:10";
        this.my_form.append(age);

        let birthdate = document.createElement('input');
        birthdate.type = "text";
        birthdate.id = 'birthdate';
        birthdate.placeholder = 'Birthdate';
        birthdate.value = '';
        birthdate.rules = 'required\date';
        this.my_form.append(birthdate);

        let btn = document.createElement('input');
        btn.type = "submit";
        btn.id = "submit";
        btn.click(this.getValue())
        btn.value = "Save";
        this.my_form.append(btn);

        document.getElementsByTagName("body")[0]
            .append(this.my_form);
    }

    getValue() {

    }

    validate() {

    }

}

const formElement = new FormElement('text', 'name', 'Name', 'Ivan', 'required');
