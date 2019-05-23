import React from 'react';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();
        
    }

    render() {
        return (
            <div>
                <form className='login' onSubmit={this.login}>
                User Name:
                    <input
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                Password:
                    <input
                        type='text'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>
                        Log In
                    </button>
                </form>
            </div>
        )
    }
}

export default Login