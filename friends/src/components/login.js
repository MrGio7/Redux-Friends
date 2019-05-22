import React from 'react';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        type='text'
                        name='username'
                    />
                    <input
                        type='text'
                        name='password'
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