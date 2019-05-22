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
                <form className='login'>
                User Name:
                    <input
                        type='text'
                        name='username'
                    />
                Password:
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