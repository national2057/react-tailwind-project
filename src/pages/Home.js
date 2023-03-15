import React from "react";
import NavBar from "../component/NavBar";
import Content from "./Content";


const Home = () => {



  return (
    <div>

      <NavBar />

      <div className='grid grid-cols-2 justify-center '>

        <div className='h-[400px] m-[25px]'>
          <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_4ggqrsq6.json" background="transparent" speed="1" loop autoplay></lottie-player>
        </div>

        <div className='mt-[100px] '>
          <h1 className='font-bold text-3xl'>Hi, I am National Shrestha</h1>
          <p className='text-rose-600'>Some Dev, Freelancer, Rounder</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, molestiae unde ipsam ex inventore alias commodi deserunt, sapiente quam, velit ipsum officiis praesentium nobis eum pariatur? Sapiente dicta pariatur recusandae ipsum est. Voluptatibus natus reiciendis quidem velit, nam, temporibus possimus qui, minima iure autem itaque quibusdam iusto dolor! Aspernatur quas esse, ex, eum accusamus doloribus facilis optio quos, repellat fugiat cupiditate qui rerum inventore. Inventore, fugit ullam suscipit placeat corrupti eos possimus perferendis asperiores impedit non optio cumque error nemo, itaque tempora? Unde ipsa explicabo nesciunt distinctio veritatis dignissimos porro earum ad? Dolorem nesciunt dicta reiciendis temporibus quasi. Repellendus blanditiis eaque eveniet veniam veritatis voluptatum. Aut magnam quidem ipsum atque harum. Pariatur rem deserunt cum natus tempore, distinctio adipisci mollitia.</p>
        </div>
      </div>

      <div>

        <Content />
      </div>


    </div>
  )
}

export default Home