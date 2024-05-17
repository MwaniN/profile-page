import React from 'react';


function Main() {

  return (

    <div id="main" className="bg-black h-screen w-screen">
      <canvas id="canvas" className="h-screen w-screen absolute"></canvas>
    <div className="flex h-screen">
      <div className="m-auto z-10">
      <h1 className="text-5xl tracking-normal text-center text-white font-hindSilliguri font-thin leading-10 mx-2">
      Hello, I'm <span className="text-5xl text-red-500 font-hindSilliguri font-thin leading-10 tracking-normal inline-block">Mwani</span>.
    </h1>
    <h1 className="text-5xl tracking-normal text-white text-center font-hindSilliguri font-thin leading-15 my-2 mx-2">
      I'm a full stack software engineer.
    </h1>
      </div>
    </div>
    </div>
  )
}
export default Main;
