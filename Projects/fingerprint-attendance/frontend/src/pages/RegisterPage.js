import React, { useState } from 'react';
import axios from 'axios';

function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fingerprintData, setFingerprintData] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/users/register', { name, email, password, fingerprintData });
            alert('User registered successfully');
        } catch (error) {
            console.error(error);
            alert('Failed to register user');
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="text" placeholder="Fingerprint Data" value={fingerprintData} onChange={(e) => setFingerprintData(e.target.value)} />
            <button type="submit">Register</button>
        </form>
    );
}

export default RegisterPage;
