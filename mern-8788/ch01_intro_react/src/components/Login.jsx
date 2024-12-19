import React from 'react'
import img from "../assets/imgs/left-grp.svg"
function Login() {
  return (
    <>
    <h1>Login</h1>
    <div className="row mt-5  m-2 p-2 justify-content-center">
        <div className="col-md-6  d-flex justify-content-center align-items-center">
            <div className="w-75">
                <div className="mb-3">
                    <input className="form-control" placeholder="user name"></input>
                 </div>
             <div>
              <div className="mb-3">
                    <input className="form-control" placeholder="password"></input>
                 </div>
             </div>
             <div className="d-flex justify-content-between">
                <button className="btn btn-primary">Login</button>
                <button className="btn text-primary">forget password?</button>
             </div>
            </div>
        </div>
        <div className="col-md-4 ">
        <img src={img} />
        </div>
    </div>
    </>
  )
}

export default Login