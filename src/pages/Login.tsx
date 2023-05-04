import { Link } from 'react-router-dom';
const Login = () => {
    return (  
        <div className="login-page">
            <img src="images\lendsqr-logo.svg" alt="" className="lendsqr-logo"/>
            <div className="image-2d">
                <img src="images\pablo-sign-in.svg" alt="" className="" />
            </div>
            <div className="form-container">
                <div className="center-form">
                    <img src="images\lendsqr-logo.svg" alt="" className="lendsqr-logo"/>
                    <form>
                        <h1>Welcome!</h1>
                        <h3>Enter details to login.</h3>
                        
                        <input type="text" placeholder="Email" />
                        <div className="password-input ">
                            <input type="text" placeholder="Password" />
                            <span>SHOW</span>
                        </div>
                        <span>FORGOT PASSWORD?</span>

                        <Link to="/users">
                            <button type="submit" >LOG IN</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
        
export default Login;