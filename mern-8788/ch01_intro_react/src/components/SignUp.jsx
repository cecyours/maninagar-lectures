import React from "react";
import google from "../assets/imgs/google-100.png";
import github from "../assets/imgs/github-100.png";
import facebook from "../assets/imgs/facebook-100.png";
function SignUp() {
  return (
    <div className="mt-5">
      <div className="row justify-content-center border p-2 py-5 rounded-3 shadow-sm">
        <div className="col-md-5">
          <h1>Register</h1>
          <div className="">
            <div className="mb-3">
              <label>Username</label>
              <input className="form-control"></input>
            </div>

            <div className="mb-3">
              <label>Email</label>
              <input className="form-control"></input>
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input className="form-control"></input>
            </div>

            <div className="mb-3">
              <label>Confirm Password</label>
              <input className="form-control"></input>
            </div>
            <div className="text-center">
              <button className="btn btn-primary rounded-pill">Sign Up</button>
            </div>
          </div>
        </div>

        <div className="col-md-5 d-flex align-items-center justify-content-center" >
          <div className="w-75 border-start  ps-4">
            <div className="d-flex border rounded-pill align-items-center gap-2 mb-3">
              <img className="img-icon" src={google} />
              <div className="fs-5">Sign up with Google</div>
            </div>
            <div className="d-flex border rounded-pill align-items-center gap-2 mb-3">
              <img className="img-icon" src={github} />
              <div className="fs-5">Sign up with Github</div>
            </div>
            <div className="d-flex border rounded-pill align-items-center gap-2">
              <img className="img-icon" src={facebook} />
              <div className="fs-5">Sign up with Facebook</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
