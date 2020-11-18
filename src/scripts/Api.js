export default class Api {
    constructor(data) {
        this.headers = data.headers;
        this.url = data.url;
    }

    getInitialCards(){
        return fetch(this.url, {
            headers: this.headers
        }).then((result) => {
            if (!result.ok) {
                return Promise.reject('Server error');
            }
            return result.json();
        }).then((data) => {
            // console.log(data);
            return data;
        }).catch(err => {
            alert(err);
        })
    }

    createCard(name, link) {
        return fetch(this.url, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify({name, link})
        }).then((result) => {
            if (!result.ok) {
                return Promise.reject('Server error');
            }
            return result.json();
        }).then((data) => {
            return data;
        }).catch(err => {
            alert(err);
        })
    }

    deleteCard(id) {
        return fetch(`${this.url}/${id}`, {
            method: "DELETE",
            headers: this.headers,
            body: JSON.stringify({name})
        }).then((result) => {
            if (!result.ok) {
                return Promise.reject('Server error');
            }
            return result.json();
        }).then((data) => {
            return data;
        }).catch(err => {
            alert(err);
        })
    }

    getPersonalInfo() {
        return fetch(this.url, {
            headers: this.headers
        }).then((result) => {
            if (!result.ok) {
                return Promise.reject('Server error');
            }
            return result.json();
        }).then((data) => {
            return data;
        }).catch(err => {
            alert(err);
        })
    }
}