import React, {useEffect , useRef , useState} from "react" ;

function eyes() {
    const[rotate , setrotate] = useState(0) ;

    useEffect(() => {
        window.addEventListener("mousemove" , (e) => {
            let mousex = e.clientX ;
            let mousey = e.clientY ;

            console.log(mousex , mousey) ;

            let deltax = mousex - window.innerWidth/2 ;
            let deltay = mousey - window.innerHeight/2 ;

            var angle = Math.atan2(deltay , deltax) * (180/Math.PI) ;

            setrotate(angle-180) ;
        })
    })
  return (
    <div className='h-screen w-full overflow-hidden'>
        <div data-scroll data-scroll-speed="-0.8" className="h-full w-full flex items-center justify-center bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
            <div className="mqx-w-[37rem] h-1/2 flex gap-10 p-20 justify-evenly items-center">
                <div className="w-[15vw] h-[15vw] bg-white rounded-full p-[3vw]">
                    <div className="w-full h-full bg-zinc-900 rounded-full relative ">
                        <div style={{transform: `translate(-50% , -50%) rotate(${rotate}deg)`}} className="w-full h-[2vw] rounded-md absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
                        <div className="w-[2vw] h-[2vw] rounded-full bg-white"></div>
                        </div>
                    </div>
                </div>
                <div className="w-[15vw] h-[15vw] bg-white rounded-full p-[3vw] overflow-hidden ">
                <div className="w-full h-full bg-zinc-900 rounded-full relative ">
                <div style={{transform: `translate(-50% , -50%) rotate(${rotate}deg)`}} className="w-full h-[2vw] rounded-md absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
                        <div className="w-[2vw] h-[2vw] rounded-full bg-white"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default eyes