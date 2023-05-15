import { FaFacebook, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import img from "../../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/Context";

const Login = () => {
  const {signIn} = useContext(AuthContext);

  const loginHandle = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);

    signIn(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error => console.log(error))
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-40">
        <div className="text-center lg:text-left">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={loginHandle} className="card-body">
            <h1 className="text-center text-2xl font-bold my-4">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                required
                name="email"
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                required
                name="password"
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-theme-100  border-none normal-case">
                Login
              </button>
            </div>
            <p className="label-text text-center my-2">Or Sign Up with</p>
            <div className="text-center">
              <button className="mx-3 text-xl ">
                <FaFacebook></FaFacebook>
              </button>
              <button className="mx-3 text-xl ">
                <FaLinkedinIn></FaLinkedinIn>
              </button>
              <button className="mx-3 text-xl ">
                <FaGoogle></FaGoogle>
              </button>
            </div>
            <p className="label-text text-center text-theme-300">
              Not have an account?
              <Link to="/signUp" className="text-center">
                <button className="btn btn-link normal-case font-bold label-text text-theme-100">
                  Sign Up
                </button>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
