import React,{useState} from "react"
import aktan from "./assets/aktan.png"
import gul from "./assets/gul.png"
import cake from "./assets/pngwing.com.png"
import Congratulations from "./components/Congratulations"
import './App.css'


function App() {
  
  const [showCard,setShowCard] = useState(false)
  const [spin,setSpin]=useState(false)
  return (
    <>
    <div className="min-h-screen w-full flex-col flex items-center justify-center p-0 sm:p-6">

  <div className="max-w-5xl w-full bg-linear-to-br from-pink-200 to-rose-400 rounded-3xl p-10 shadow-2xl  grid grid-cols-1 md:grid-cols-2 gap-10 border border-white/50">

    <div className="flex items-center justify-center flex-col">
     {showCard && <p className="text-2xl p-1.5 bg-linear-to-r from-rose-700 to-pink-500 font-extrabold bg-clip-text text-transparent">click her profile to animation</p>}
{ showCard ? (
  
    <img
      src={gul}
      onClick={() => setSpin(!spin)}
      className={`h-[500px] transition-transform duration-700 drop-shadow-fuchsia-300 overflow-x-hidden ${ spin ? "animate-spin" : "" }`}/>) : 
      (<img src={cake} className="w-full drop-shadow-xl transition-transform duration-200 hover:scale-[1.08]"/> )}
     
    </div>

    
    <div className="flex flex-col justify-center space-y-6">

      <div className="transform-3d rotate-y-22 rotate-x-20  duration-300 hover:rotate-y-0 hover:rotate-x-0 overflow-auto"> <h1 class="text-4xl md:text-5xl font-bold bg-linear-to-r from-[#FFE6B2] to-[#FFD48A] text-[#5a3d1a] shadow-xl p-4 rounded-3xl">
        С днём рождения!
      </h1></div>

      <p className="text-[#7b5a33] text-xl">
        Сегодня особенный день, и я хочу пожелать тебе:
      </p>

      <div className="space-y-3">
        <Congratulations congrate="✨ Сиять ярко и уверенно!"/>
        <Congratulations congrate="❤️ Быть любимым и ценимым."/>
        <Congratulations congrate="💡 Достичь всех своих целей."/>
        <Congratulations congrate="⚡ Оставаться энергичным и вдохновленным."/>
      </div>


      <button onClick={()=>setShowCard(!showCard)} class="transition-transform duration-200 hover:scale-[1.08] mt-4 px-6 py-3 bg-[#c2873c] text-white rounded-xl shadow-lg hover:brightness-110 ">
        🎁 Открыть подарок ⬆️⬆️
      </button>

    </div>
  </div>

  <h1 className="mt-2 text-2xl text-gray-600">Made with love (by Akosh/Herobrine)</h1>

</div>
    
    
    
     
    
    </>
  )
}

export default App
