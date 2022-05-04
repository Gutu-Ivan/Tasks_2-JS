class Form{
    constructor(){
        this.name = document.getElementById('name');
        this.city = document.getElementById('city');
        this.message = document.getElementById('message');
        this.langCheckboxes = document.querySelectorAll('.form-check-input');
        this.languages = [];
    }
    getLanguages() {
        for (let language of this.langCheckboxes) {
            language.addEventListener('click', () => {
                if(language.checked == true) {
                    this.languages.push(language.value)
                } else{
                    if (this.languages.length > 0){
                        this.languages.pop(language.value)
                    } else {
                        this.languages = [];
                    }
                }
            })
        }

    }

    saveToLocalStorage() {
        let data = {
            "Name": this.name.value,
            "City": this.city.value,
            "Message": this.message.value,
            "Languages": this.languages

        }
        localStorage.setItem('Info', JSON.stringify(data))
    }
    clearLocalStorage() {
        localStorage.clear();
    }
}

const form = new Form();
form.getLanguages()
