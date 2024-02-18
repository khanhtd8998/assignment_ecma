import { useEffect, useState } from "../ultilities";
const LoginComponent = () => {
    useEffect(() => {
        fetch("http://localhost:3000/users")
            .then((reponsive) => reponsive.json())
            .then((data) => {
                const btnLogin = document.querySelector("#btn_login");
                btnLogin.addEventListener("click", (e) => {
                    e.preventDefault();
                    handleLogin(data);
                })

            });

    }, [])

    const handleLogin = (data) => {
        const userName = document.querySelector('#user-name').value;
        const passWord = document.querySelector('#pass-word').value;

        const user = data.find((value) => value.username === userName && value.password === passWord);

        if (user) {
            alert("Successfully logged in in Dashboard");
            localStorage.setItem("user", JSON.stringify(user));
            window.location.href = "http://localhost:5173/admin";
        } else {
            console.log("Invalid username or password");
        }
        console.log(userName + " " + passWord);
    }
    return /*html*/`
        <section class="vh-100">
            <div class="container py-5 h-100">
                <div class="row d-flex align-items-center justify-content-center h-100">
                <div class="col-md-8 col-lg-7 col-xl-6">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                    class="img-fluid" alt="Phone image">
                </div>
                <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                    <form>
                    <!-- Email input -->
                    <div class="form-outline mb-4">
                    <label >Tài khoản</label>
                    <input type="text" id="user-name" class="form-control form-control-lg" />
                    </div>

                    <!-- Password input -->
                    <div class="form-outline mb-4">
                    <label >Mật khẩu</label>
                    <input type="password" id="pass-word" class="form-control form-control-lg" />
                    </div>

                    <div class="d-flex justify-content-around align-items-center mb-4">
                        <!-- Checkbox -->
                        <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                        <label class="form-check-label" for="form1Example3"> Ghi nhớ tài khoản </label>
                        </div>
                        <a href="#!">Quên mật khẩu?</a>
                    </div>

                    <!-- Submit button -->
                    <button type="submit" id="btn_login" class="btn btn-primary btn-lg btn-block">Đăng nhập</button>

                    <div class="divider d-flex align-items-center my-4">
                        <p class="text-center fw-bold mx-3 mb-0 text-muted"></p>
                    </div>

                    <a class="btn btn-primary btn-lg btn-block" style="background-color: #3b5998" href="#!"
                        role="button">
                        <i class="fab fa-facebook-f me-2"></i>Continue with Facebook
                    </a>
                    <a class="btn btn-primary btn-lg btn-block" style="background-color: #55acee" href="#!"
                        role="button">
                        <i class="fab fa-twitter me-2"></i>Continue with Twitter</a>

                    </form>
                </div>
                </div>
            </div>
        </section>
    `
}
export default LoginComponent