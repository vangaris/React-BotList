import React, { Component } from 'react';
class App extends Component {

    constructor() {
        super();

        this.state = {
            users: []
        }
    }

    //when the page mount
    componentDidMount() {

        const myPromse = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.state.users)
            }, 3000)
        })
        myPromse.then((e) => e.push({ name: 'henry' })).then((b) => console.log(this.state.users))

        //  promise -> Response from body (JSON: body header and properteis)
        //  we want the body and a format tha js understand so -> responses.json(). 
        //  new then() as i return a new promise will get the body(users) which is array

        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then((response => response.json()))
        //     .then(users => this.setState({ users: users }))
    }

    render() {
        return (
            <div className="App">
                {this.state.users.map((user) => (
                    <h1 key={user.id}> {user.name}</h1>
                ))}
            </div>
        );
    }
}


