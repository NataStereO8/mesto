export default class Api {
    constructor(data) {
        this.headers = data.headers;
        this.url = data.url;
    }

    getReply(result) {

        if (!result.ok) {
            return Promise.reject('Server error');
        }
        return result.json();
    }

    getInitialCards(){
        return fetch(`${this.url}/cards`, {
            headers: this.headers
        }).then(this.getReply)
    }

    createCard({name, link}) {
        return fetch(`${this.url}/cards`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify({name, link})
        }).then(this.getReply)
    }

    deleteCard(id) {
        return fetch(`${this.url}/cards/${id}`, {
            method: "DELETE",
            headers: this.headers,
            body: JSON.stringify({name})
        }).then(this.getReply)
    }

    getPersonalInfo() {
        return fetch(`${this.url}/users/me`, {
            headers: this.headers
        }).then(this.getReply)
    }

    setPersonalInfo({name, about}) {
        return fetch(`${this.url}/users/me`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify({name, about})
        }).then(this.getReply)
    }

    setAvatarInfo(avatar){
        return fetch(`${this.url}/users/me/avatar`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(avatar)
        }).then(this.getReply)
    }

    checkLikes(cardId, like) {
        return fetch(`${this.url}/cards/likes/${cardId}`, {
            method: like ? "PUT" : "DELETE",
            headers: this.headers
        })
            .then(this.getReply)
        }
    }
