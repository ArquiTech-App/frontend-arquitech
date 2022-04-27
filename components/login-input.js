

export default function LoginInput(){

    return (
        <>
        <section className="input-login">
            <h3>Welcome to Arquitetch</h3>
            <p>Login</p>
            <form className="form-login" id="login">
                <label>Email
                    <input name="email" type="email"/>
                </label>
                <label>Password
                    <input name="password" type="password"/>
                </label>
                <input className="btn-login" type="submit" value="Login"/>
            </form>
        </section>
        </>
    )
}