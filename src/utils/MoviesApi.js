import React from "react";

class Api extends React.Component {
    constructor({ baseUrl, headers }, props) {
        super(props);
        this.baseUrl = baseUrl;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getMovies() {
        return fetch(`${this.baseUrl}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(this._checkResponse)
    }
}

const api = new Api({
    baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
});

export default api;
