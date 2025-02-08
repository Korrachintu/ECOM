import React, { useState } from 'react';
import './RegisterPage.css'

function RegisterPage() {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [isRegistered, setIsRegistered] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        setFirstName('');
        setLastName('');
        setMail('');
        setPassword('');
        setConfirmPassword('');
        setGender('');
        setAddress('');
        setIsRegistered(true);
        setTimeout(()=>setIsRegistered(false),5000);
    }


    return (
        <div>
            <form id="form" onSubmit={handleSubmit}>
                <div className='form-row'>
                    <label htmlFor="firstname">First Name:</label>
                    <input type="text" id='firstname' name='name' value={firstname} onChange={(e) => setFirstName(e.target.value)} placeholder='Enter your first name' /> <br />
                </div>
                <div className='form-row'>
                    <label htmlFor="lastname">Last Name:</label>
                    <input type="text" id='lastname' name='name' value={lastname} onChange={(e) => setLastName(e.target.value)} placeholder='Enter your last name' /> <br />
                </div>
                <div className='form-row'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id='mail' name='email' value={mail} onChange={(e) => setMail(e.target.value)} placeholder='Enter your email' /> <br />
                </div>
                <div className='form-row'>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} required='true' placeholder='Enter your password' /> <br />
                </div>
                <div className='form-row'>
                    <label htmlFor="cnfPassword">Confirm Password:</label>
                    <input type="password" id='cnfPassword' name='cnfPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Re-enter password' /> <br />
                </div>
                <div className='radio-group'>
                    <label htmlFor="gender">Gender:</label> <br />
                    <input type="radio" id='male' name='gender' value="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)} />
                    <label htmlFor="male">Male</label> <br />

                    <input type="radio" id='female' name='gender' value="female" checked={gender === "female"} onChange={(e) => setGender(e.target.value)} />
                    <label htmlFor="female">Female</label> <br />

                    <input type="radio" id='other' name='gender' value="other" checked={gender === "other"} onChange={(e) => setGender(e.target.value)} />
                    <label htmlFor="other">Other</label> <br />
                </div>
                <div className='form-row'>
                    <label htmlFor="address">Address:</label>
                    <textarea name="address" id="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Enter your address'></textarea> <br />
                </div>

                <input type="submit" value="submit" />
            </form>
            {isRegistered && <p style={{ color: 'green', marginTop: '20px', textAlign:'center' }}>Registration successful!</p>}
        </div>
    )
}

export default RegisterPage
