const Login = () => {
    return (  
        <div className="login-page h-full w-full">
            <img src="src\assets\images\lendsqr-logo.svg" alt="" className="ml-40 lendsqr-logo ps-absolute top-60 left-20"/>
            <div className="images h-screen w-50 mt-20">
                <img src="src\assets\images\pablo-sign-in.svg" alt="" className="login-2d-image" />
            </div>
            <div className="form-container h-screen w-50">
                <form>
                    <h1>Welcome!</h1>
                    <h3>Enter details to login.</h3>
                    <input type="text" placeholder="Email" />
                    <div className="password-input ">
                        <input type="text" placeholder="Password" />
                        <span>SHOW</span>
                    </div>
                    <span>FORGOT PASSWORD?</span>
                    <button type="submit" >LOG IN</button>
                </form>
            </div>
        </div>
    );
}
        
export default Login;