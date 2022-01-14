import './login.css'

export default function Login() {
    return (
        <>
            <div className="loginWrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 "></div>
                        <div className="col-md-4 mt-5">
                            <div className="logo"></div>
                            <div className="singIn_form">
                                <h2>Sign-In</h2>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <button className="form-control">SignIn</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 "></div>

                </div>
            </div>
        </>
    )
}
