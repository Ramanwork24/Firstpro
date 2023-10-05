import React from 'react'
import './index.css'
import logo from "./assets/Logo.png"

function Index() {
    return (<>
        <div className="container">
            <div className="sideimage">
                <img src={logo} alt="logo" id="sidelogo" />
            </div>
            <div className="form-wrapper">
            <div className="login-form">
                <h1>Admin Sign In</h1>
                <p>Enter Your email and password to sign in!</p>
                <label>Email*</label>
                <div className="input-field">
                    <input type="email" name="email" placeholder='PePe@gmail.com' />
                    </div>
                    <label>Password*</label>
                    <div className="input-field1">
                        
                        <input type="password" name="password" maxLength={8} placeholder='Min 8 characters'  />
                    </div>
                      <div className="check">
                        <div className="check1">
                        <input type="checkbox" name="checkbox" />
                        <p>Keep me logged In</p>
                        </div>
                        <div className="forgetpass">
                            <p>Forget Password?</p>
                        </div>
                      </div>
                    <div className="button-field">
                        <input type="submit" name="submit" value="Sign In"  id="login-button" />

                    </div>
                </div>
            </div>
            </div>
        
    </>)
}

export default Index
