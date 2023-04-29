const Login = () => {
    return (  
        <div className="login-page">
            <img src="src\assets\images\lendsqr-logo.svg" alt="" />
            <div className="grid">
                <div className="image">
                    <img src="src\assets\images\pablo-sign-in.svg" alt="" />
                </div>
                <div>
                    <h1>Welcome!</h1>
                    <h3>Enter details to login.</h3>
                    <form>
                        <input type="text" placeholder="Email" />
                        <div className="password-input ">
                            <input type="text" placeholder="Password" />
                            <span>SHOW</span>
                        </div>
                        <span>FORGOT PASSWORD?</span>
                        <button type="submit">LOG IN</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Login;