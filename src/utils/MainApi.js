const BASE_URL =
    process.env.NODE_ENV === "production"
        ? "https://api.mesto.for.photos.nomoredomains.monster"
        : "http://localhost:3000";

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    } else
        return res.json().then((data) => {
            throw new Error(data.message);
        });
}

function request(endpoint, options) {
    return fetch(`${BASE_URL}/${endpoint}`, options)
        .then(checkResponse)
        .catch((error) => {
            throw new Error(error);
        });
}

export const signup = ({ name, password, email }) => {
    return request(`signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password, email }),
    });
};

export const signin = ({ email, password }) => {
    return request(`signin`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
    }).then((res) => {
        if (res.jwt) {
            localStorage.setItem("token", res.jwt);
        }
    });
};

export const checkToken = () => {
    return request(`users/me`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        credentials: "include",
    }).then((data) => {
        return data;
    });
};

export const signOut = () => {
    return request(`signout`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        credentials: "include",
    });
};

export const getUserInfo = () => {
    return request(`users/me`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        credentials: "include",
    }).then((data) => {
        return data;
    });
};
