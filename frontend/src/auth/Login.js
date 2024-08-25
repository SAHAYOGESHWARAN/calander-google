import React from 'react';

const Login = () => {
    const handleLogin = () => {
        window.location.href = '/auth/google';
    };

    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleLogin}>Login with Google</button>
        </div>
    );
};

export default Login;
