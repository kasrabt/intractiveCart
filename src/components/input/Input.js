import { Fragment, useEffect, useState } from "react";
import Complete from "../complete/complete";

const Input = (props) => {
  const classInput =
    "rounded-lg border  border-gray-400 p-2  outline-none mb-3 mt-1 border-solid focus:border-black";
  const classInput2 =
    "rounded-lg border   border-gray-400 p-2 w-20  outline-none mb-5 mt-1 border-solid focus:border-black";
  const classInput3 =
    "rounded-lg border  border-gray-400 p-2 w-32  outline-none mb-5 mt-1 border-solid focus:border-black";
  const [IvalueN, setIvalueN] = useState("Jane Appleseed");
  const [IvalueNum, setIvalueNum] = useState("0000 0000 0000 0000");
  const [IvalueM, setIvalueM] = useState(10);
  const [IvalueY, setIvalueY] = useState(10);
  const [IvalueCV, setIvalueCV] = useState(0);
  const [Error, setError] = useState(false);
  const [ErrorName, setErrorName] = useState(false);
  const [next, setNext] = useState(false);
  const onchangeHNum = (e) => {
    if (e.target.value.length === 4) {
      e.target.value += " ";
    } else if (e.target.value.length === 9) {
      e.target.value += " ";
    } else if (e.target.value.length === 14) {
      e.target.value += " ";
    } else if (e.target.value.match(/[a-zA-Z]/g)) {
      setError(true);
      return;
    }
    setIvalueNum(e.target.value);
  };
  useEffect(() => {
    props.onAddData(IvalueN,IvalueNum,IvalueM,IvalueY,IvalueCV);
    setError(false)
    setErrorName(false)
  }, [IvalueN, props, IvalueNum, IvalueM, IvalueY, IvalueCV]);
  const onSumbitHandler = (e) => {
    e.preventDefault();
    setNext(true);
  };
  return (
    <Fragment>
      {!next && (
        <form
          onSubmit={onSumbitHandler}
          className=" flex flex-col ml-40 justify-center "
        >
          <label> CARD HOLDER NAME</label>
          <input
            type="text"
            className={classInput}
            placeholder="e.g Jane Appleseed"
            onChange={(e) => {
              if (isNaN(e.target.value) === false) {
                setErrorName(true);
                return;
              }
              setIvalueN(e.target.value);
            }}
          />
          {ErrorName && <p className=" text-red-500 mb-3"> Wrong Format !</p>}
          <label> Card Number</label>
          <input
            type="text"
            className={classInput}
            placeholder="e.g 1234 5678 9123 0000"
            onChange={onchangeHNum}
            maxLength="19"
          />
          {Error && (
            <p className=" text-red-500 mb-3">Wrong Format , numbers only</p>
          )}
          <div>
            <label> EXP.DATE(MM/YY)</label>
            <label className="ml-20" htmlFor="cvv">
              CVC
            </label>
            <div className=" flex gap-6">
              <div className=" flex gap-2">
                <input
                  type="text"
                  maxLength="2"
                  className={classInput2}
                  placeholder="MM"
                  onChange={(e) => {
                    setIvalueM(e.target.value);
                  }}
                />
                <input
                  type="text"
                  maxLength="2"
                  className={classInput2}
                  placeholder="YY"
                  onChange={(e) => {
                    setIvalueY(e.target.value);
                  }}
                />
              </div>
              <input
                type="text"
                maxLength="3"
                className={classInput3}
                placeholder="e.g 123"
                onChange={(e) => {
                  setIvalueCV(e.target.value);
                }}
              />
            </div>
          </div>
          <button
            className=' bg-indigo-950   text-white p-3 rounded-lg disabled:opacity-40 '
            disabled={Error || ErrorName ? true : false}
          >
            Confirm
          </button>
        </form>
      )}
      {next && <Complete />}
    </Fragment>
  );
};
export default Input;
