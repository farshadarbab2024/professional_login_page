import React from "react" ; 
import "../scss/form.scss" ; 

function Form(){
    return(
        <form action="" method="post">
            
            <h1 id="title">SIGN IN</h1>

            {/* Username */}
            <div className="relative mt-5">
                <input type="text" className="input" id="username_input" placeholder="" />
                <label id="username_label" htmlFor="username_input">Username</label>
            </div>

            {/* Password */}
            <div className="relative mt-5">
                <input type="password" className="input" id="password_input" placeholder="" />
                <label id="password_label" htmlFor="password_input">Password</label>
            </div>

            {/* Links */}
            <div className="flex justify-between mt-5">
                <a href="#" className="light-gray-color">Forgot Password</a>
                <a href="#" className="blue-color">Signup</a>
            </div>

            {/* Submit Button */}
            <input type="submit" value="Login" id="login_button" />
        </form>
    ) ; 
}

export default Form ; 