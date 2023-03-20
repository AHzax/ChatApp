
import './App.css';
import Img1 from "./images/img1.png";

function App() {
  return (
    <div className="App h-screen w-screen bg-[#131324] flex items-center justify-center">
      <form action="" className="bg-[#00000076] h-[60%] w-[30%] rounded-[8%] flex flex-col items-center justify-evenly p-[5%]">
        <div className="flex flex-row justify-center items-center w-[40%] h-[18%] ">
        <img src={Img1} className="h-full mr-[8%]" alt="" />
        <h1 className="text-white  font-semibold text-4xl">CHAT</h1>
        </div>

        <input  type="text" placeholder="Username" className="commonInputs  placeholder-[#ebebeb94] " />
        <input type="text" placeholder="Password" className="commonInputs  placeholder-[#ebebeb94] "/>

        <a href="#" className="font-semibold text-xl">LOGIN</a>

        <h1 className="text-white">DONT HAVE AN ACCOUNT? <span className="text-[#6026ff]">REGISTER</span></h1>

      </form>
    </div>
  );
}

export default App;
