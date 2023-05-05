import { Link } from 'react-router-dom';
const Login = () => {
    const viewPassword = (event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => {
        const showPassword = event.target as HTMLElement;
        if (showPassword && showPassword.parentElement) {
            const passwordInput = showPassword.parentElement.querySelector("input[type='password']") as HTMLInputElement;
            
            showPassword.addEventListener("click", () => {
                if (!passwordInput) return;

                passwordInput.type = passwordInput.type === "password" ? "text" : "password";

                if (passwordInput.type === "password") {
                    showPassword.style.textDecoration = "none";
                } else {
                    showPassword.style.textDecoration = "line-through";
                }
            })
        }
    };

    return (  
        <div className="login-page">
            <img src="/images\lendsqr-logo.svg" alt="" className="lendsqr-logo"/>
            <div className="image-2d">
                <img src="/images\pablo-sign-in.svg" alt="" className="" />
            </div>
            <div className="form-container">
                <div className="center-form">
                    <img src="/images\lendsqr-logo.svg" alt="" className="lendsqr-logo"/>
                    <form>
                        <h1>Welcome!</h1>
                        <h3>Enter details to login.</h3>
                        
                        <input type="text" placeholder="Email" />
                        <div className="password-input ">
                            <input type="password" placeholder="Password" />
                            <span onMouseOver={(e) => viewPassword(e)} onTouchStart={(e) => viewPassword(e)}>SHOW</span>
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