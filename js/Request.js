class Request{
    constructor() {
        this.result = document.getElementById('result');
        this.values = document.getElementById('values');
    }

    userRequest() {
        this.serverResponse()
    }
    serverResponse(){

        setTimeout(() =>this.result.innerHTML = `Response from server: ${this.values.value}`, 2000)
    }

    start() {
        try {
            if (this.values.options[this.values.selectedIndex].value === 'true'){
                this.userRequest()
            } else{
                throw new TypeError("Value is false")
            }

        } catch (err) {
            console.log(err.message)
        }
    }

}

const request = new Request();
