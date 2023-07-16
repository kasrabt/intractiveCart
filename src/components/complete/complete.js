import c from './../../images/com.svg'
const Complete =()=>{
return (<div className=' flex flex-col justify-center items-center ml-44'>
   <img src={c} alt='complete'/>
   <p className=' text-2xl mt-5 mb-5'>Thank You !</p>
   <p className=' text-lg text-gray-400'>We've Added your cart Detail</p>
   <button  className=" w-52 mt-5 bg-indigo-950  text-white p-3 rounded-lg">Continue</button>
</div>)
}
export default Complete