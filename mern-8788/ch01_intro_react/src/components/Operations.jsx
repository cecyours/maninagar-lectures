import React,{useState} from "react";

function Operations() {
    const [num1,setNum1] = useState(0)
    const [num2,setNum2] = useState(0)
    const [result,setResult] = useState(null)
  const handleChangeNum1= async(e)=>{

    console.log({e:e.target.value})
    setNum1(e.target.value)
  }
  const handleChangeNum2= async(e)=>{

    console.log({e:e.target.value})
    setNum2(e.target.value)
  }

  const handleAdd = async()=>{
    setResult(parseInt(num1)+parseInt(num2))
  }
  return (
    <div className="d-flex justify-content-center">
      <div className="row w-75  justify-content-between border p-4 mt-5 rounded-3">
        <div className="col-md-6">
          <div>
            <input value={num1} onChange={handleChangeNum1} className="form-control" placeholder="number 1" />
          </div>
        </div>
        <div className="col-md-6">
          <div>
            <input  value={num2} onChange={handleChangeNum2} className="form-control" placeholder="number 2" />
          </div>
        </div>
        <div className="col-md-12   ">
          <div className="mt-5 gap-3 d-flex justify-content-center">
            <button className="btn border" onClick={handleAdd}>+</button>
            <button className="btn border">-</button>
            <button className="btn border">*</button>
            <button className="btn border">/</button>
          </div>
        </div>

        <div className="col-md-12 text-center  ">
            <hr/>
            <span className="text-muted">calculate now | {result}</span>
        </div>
      </div>
    </div>
  );
}

export default Operations;
