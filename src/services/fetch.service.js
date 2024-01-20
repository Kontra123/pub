const fetchMode = { mode: 'cors' };
const baseUrl = 'http://localhost:3001/'

class FetchService {

    authenticatedGet = async (url) => {
        // await idleCheckRefresh.verifyToken()
        const headers = { 
            // 'Authorization': `Bearer ${userStore.userToken}`,
        };
        const request = new Request(`${baseUrl}${url}`, {
            method: 'GET',
            headers: headers
        });

        return fetch(request, fetchMode).then((response) => {
                if (response) {
                    return (this.checkResponse(response));
                }
            }
        ).catch(err => {
            return [{isError: true, errorMessage: 'Internal Server Error. Please Send Again.'}];
        });;

    };

    authenticatedPost = async (url, body) => {
        // await idleCheckRefresh.verifyToken()
        const headers = {
            // 'Authorization': `Bearer ${userStore.userToken}`,
            'Content-Type': 'application/json'
        };
        const request = new Request(`${baseUrl}${url}`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        });
        return fetch(request, fetchMode).then((response) => {
                if (response) {
                    return (this.checkResponse(response));
                }
            }
        ).catch(err => {
            return [{isError: true, errorMessage: 'Internal Server Error. Please Send Again.'}];
        });;
    };

    authenticatedPut = async (url, body) => {
        // await idleCheckRefresh.verifyToken(true)
        const headers = {
            // 'Authorization': `Bearer ${userStore.userToken}`,
            'Content-Type': 'application/json',
        };
        const request = new Request(`${baseUrl}${url}`, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(body)
        });

        return fetch(request, fetchMode).then((response) => {
                if (response) {
                    return (this.checkResponse(response));
                }
            }
        ).catch(err => {
            return [{isError: true, errorMessage: 'Internal Server Error. Please Send Again.'}];
        });
    };

    authenticatedPatch = async (url, body) => {
        // await idleCheckRefresh.verifyToken()
        const headers = {
            // 'Authorization': `Bearer ${userStore.userToken}`,
            'Content-Type': 'application/json'
        };
        const request = new Request(`${baseUrl}${url}`, {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify(body)
        });

        return fetch(request, fetchMode).then((response) => {
                if (response) {
                    return (this.checkResponse(response));
                }
            }
        ).catch(err => {
            return [{isError: true, errorMessage: 'Internal Server Error. Please Send Again.'}];
        });;
    };

    authenticatedDelete = async (url) => {
        // await idleCheckRefresh.verifyToken()
        const headers = { 
            // 'Authorization': `Bearer ${userStore.userToken}`
        };
        const request = new Request(`${baseUrl}${url}`, {
            method: 'DELETE',
            headers: headers
        });

        return fetch(request, fetchMode).then((response) => {
                if (response) {
                    return (this.checkResponse(response));
                }
            }
        ).catch(err => {
            return [{isError: true, errorMessage: 'Internal Server Error. Please Send Again.'}];
        });;
    };

    patch = async (url, body) => {
        const headers = {
            'Content-Type': 'application/json'
        };
        const request = new Request(`${baseUrl}${url}`, {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify(body)
        });

        return fetch(request, fetchMode).then((response) => {
                if (response) {
                    return (this.checkResponse(response));
                }
            }
        ).catch(err => {
            return [{isError: true, errorMessage: 'Internal Server Error. Please Send Again.'}];
        });;
    };
    post = async (url, body) => {
        const headers = {
            'Content-Type': 'application/json'
        };
        const request = new Request(`${baseUrl}${url}`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        });

        return fetch(request, fetchMode).then((response) => {
                if (response) {
                    return (this.checkResponse(response));
                }
            }
        ).catch(err => {
            return [{isError: true, errorMessage: 'Internal Server Error. Please Send Again.'}];
        });;
    };
    get = async (url) => {
        const headers = {
            'Content-Type': 'application/json'
        };
        const request = new Request(`${baseUrl}${url}`, {
            method: 'GET',
            headers: headers
        });

        return fetch(request, fetchMode).then((response) => {
                if (response) {
                    return (this.checkResponse(response));
                }
            }
        ).catch(err => {
            return [{isError: true, errorMessage: 'Internal Server Error. Please Send Again.'}];
        });;
    };

    errorHandler = error => {
        if (error.status === 401) {
            window.location.reload(true);
        } else {
            return error;
        }
    };

    checkResponse = async (response) => {
        const status = response.status;
        if (status === 200 || status === 201) {
            const responseJson = await response.json();
            return responseJson;
        }
        else if(status === 403) {
            // Authorization error. log out.
            // userStore.logOut();
        }
        else {
            return [{isError: true, errorMessage: 'Internal Server Error. Please Send Again.'}];
        }
    };

}

const fetchService = new FetchService();
export default fetchService;
