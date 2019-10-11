import React, { Component } from 'react';
// import { useHistory } from "react-router-dom";
import axios from 'axios';


class CreateUser extends Component {
    constructor(props) {
        super(props);


        this.onChangeUsername =this.onChangeUsername.bind(this);
        this.onSubmit =this.onSubmit.bind(this);

        this.state = {
            username: '',
            
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onSubmit(e) {
        // let history = useHistory();
    
        e.preventDefault();

        const user = {
            username: this.state.username,
            
        }
        
        console.log('on submit', user);

        axios.post('http://localhost:3001/users/add', user)
        .then(res => console.log('post finsihed', res.data));
        // .then(() => {
        //     history.push('/create')
        // })

        this.setState({
            username:''
        })
    }

    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateUser;