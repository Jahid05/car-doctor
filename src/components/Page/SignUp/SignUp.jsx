import { FaFacebook, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import img from "../../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/Context";

const SignUp = () => {
  const {createUser} = useContext(AuthContext)

  const signUpHandle = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = {name, email, password}
    console.log(user);

    createUser(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error => console.log(error))
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse gap-40">
        <div className="text-center lg:text-left">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={signUpHandle}>
            <div className="card-body">
              <h1 className="text-center text-2xl font-bold my-4">Sign Up</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
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
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  required
                  name="password"
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-theme-100  border-none normal-case">
                  Sign Up
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
                Already have an account?
                <Link to="/login" className="text-center">
                  <button className="btn btn-link normal-case font-bold label-text text-theme-100">
                    Login
                  </button>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
