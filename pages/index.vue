<template>
  <div>
    <div id="navbar" class="text-gray-second body-font bg-gray-main" >
      <div class="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0 " href="./">
          <svg id="logo" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" 
          stroke-width="2" 
          class="transition ease-out duration-1000  w-10 h-10 text-white p-2 rounded-full bg-indigo-main stroke-current hover:bg-white transform hover:rotate-180 md:rotate-0"  
          viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>

          <span class="ml-5 pb-0.5 pr-1 mt-1 text-xl transition ease-out duration-500 transform hover:scale-110" style="font-family: Montserrat-SemiBold">Polystacker</span> </a>

        <nav class="md:mr-auto md:ml-6 md:py-1 md:pl-6 md:border-l md:border-gray-second flex flex-wrap items-center text-base justify-center">
          <a class="mr-7 transition ease-out duration-500 transform hover:scale-110 hover:text-white" href="./register" style="font-family: Montserrat-Medium">Our Cources</a>
          <a class="mr-7 transition ease-out duration-500 transform hover:scale-110 hover:text-white" href="./register" style="font-family: Montserrat-Medium">Products</a>
          <a class="mr-7 transition ease-out duration-500 transform hover:scale-110 hover:text-white" href="./register" style="font-family: Montserrat-Medium">News & Articles</a>
          <a class="mr-7 transition ease-out duration-500 transform hover:scale-110 hover:text-white" href="./contact" style="font-family: Montserrat-Medium">Support</a>
        </nav>



        <nav class="md:mr-5 md:ml-4 md:py-1 md:pl-4 md:border-r md:border-gray-second	flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 transition hover:scale-110 ease-out duration-500 hover:text-white transform text-base font-medium" href="./login" style="font-family: Montserrat-Medium">Log In</a>
        </nav>
        
<!-- style="background-color: #6366F2" -->
        <button onclick="window.location.href='/register'" 
        class=
        "
        transform 
        hover:scale-110
        transition 
        ease-out 
        duration-700
        font-medium
        inline-flex 
        items-center 
        border-0 py-1 px-3 
        focus:outline-none 
        hover:text-indigo-main
        hover:bg-white 
        rounded 
        text-base 
        mt-4 md:mt-0 
        bg-indigo-main
        text-white
        
        " style="font-family: Montserrat-Medium">
        Sign Up

        </button>

      </div>
    </div>

    <div id="body">
    <header>
<div class="inner">
  <div class=""> <!-- flex items-center justify-center flex-col w-full text-center  -->
    <a href="./"><svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round"
stroke-width="2"  class="ml-48 transition ease-out duration-1000 transform hover:rotate-180 hover:scale-150 md:rotate-0 w-20 h-20 text-white p-4 mx-24 my-32 absolute rounded-full bg-indigo-main stroke-current hover:bg-white hover:text-indigo-main" viewBox="0 0 24 24">
<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
</svg></a>

          </div>
        <h1 class="text-4xl font-extrabold mt-0 text-center " style="font-family: Montserrat-Bold"> </h1>
        <h1 class="ml-48 font-semibold text-5xl" style="margin-top: 30rem; font-family: Montserrat-Bold;">Make something unreal</h1>
        <p class="ml-48 mt-6 mr-98" style="font-family: Montserrat-Light;">
          Unreal Engine is the world’s most open and advanced real-time 3D creation tool. Continuously evolving to serve <br>
           not only its original purpose as a state-of-the-art game engine, today it gives creators across industries <br>
           the freedom and control to deliver cutting-edge content, interactive experiences, and immersive virtual worlds. </p>
              <button onclick="window.location.href='/register'" 
          class=
          "
          transform 
          hover:scale-110
          transition 
          ease-out 
          duration-700
          font-bold
          inline-flex 
          items-center 
          border-0 py-1 px-3 
          focus:outline-none 
          hover:text-indigo-main
          hover:bg-white 
          rounded 
          text-base  
          bg-indigo-main
          text-white
          text-2xl
          ml-48
          mt-6
          py-2
          px-6
          
          "
          style="letter-spacing: 0.00em; 
          font-family: Montserrat-Medium;">
        Purchase a course
         
        </button>
</div>
    </header>
    
    <div class="bg-gray-content py-12">
<div id="contain-main">
  <section class="mb-12 ml-48 mr-48" style="height: 32rem">
    <div  class=" float-right w-2/5 h-full py-28 flex  flex-col justify-center"><!--  -->
        <h1 class=" text-4xl font-extrabold mx-12 text-white " style="font-family: Montserrat-Bold"> Zbrush & Anatomy</h1>
        <p class="ml-12 mt-4 text-white text-justify" style="font-family: Montserrat-Light;">
          A course for those who want to master key ZBrush skills from scratch. For 3D beginners, as well as anyone who is passionate about the computer graphics industry and does not know where to start. <br><br>

          The course is complemented by lectures on Substance Painter, where students will look at the basic tools for creating high-quality textures. The fabric elements will be created using the Marvelous Designer toolbox. The final render is done in the Marmoset Toolbag.</p>
         <button onclick="window.location.href='/register'" 
        class= 
        "transform hover:scale-110 transition ease-out duration-700 font-bold inline-flex items-center border-2 py-1 px-3 focus:outline-none   hover:bg-indigo-main rounded text-base w-64 border-indigo-main text-white text-2xl ml-12 mt-6 py-2 px-6"
        style="letter-spacing: 0.03em">
        View the course
         
        </button>
    </div>

    <div class="ml-12 h-full  flex items-center justify-center flex-col text-center" style="border-radius: 1.5rem;" >
      <a class="button23 transition-3" href="#"></a>
    </div>
  </section>

   <section class="mb-12 ml-48 mr-48 " style="height: 32rem">
    <div class="  float-left w-2/5 h-full py-28 flex  flex-col justify-center"><!--  -->
        <h1 class=" text-4xl font-extrabold mx-12 text-white" style="font-family: Montserrat-Bold;">Hardsurface in Maya</h1>
        <p class="mx-12 mt-4 text-white text-justify" style="font-family: Montserrat-Light;">
          A course for those who want to master key ZBrush skills from scratch. For 3D beginners, as well as anyone who is passionate about the computer graphics industry and does not know where to start. <br><br>

          The course is complemented by lectures on Substance Painter, where students will look at the basic tools for creating high-quality textures. The fabric elements will be created using the Marvelous Designer toolbox. The final render is done in the Marmoset Toolbag.</p>
         <button onclick="window.location.href='/register'" 
        class=
        "transform hover:scale-110 transition ease-out duration-700 font-bold inline-flex items-center border-2 py-1 px-3 focus:outline-none   hover:bg-indigo-main rounded text-base w-64 border-indigo-main text-white text-2xl ml-12 mt-6 py-2 px-6"
        style="letter-spacing: 0.03em">
        View the course
         
        </button>
    </div>
    <div class="ml-12 h-full flex items-center justify-center flex-col text-center" style="border-radius: 1.5rem;" >
      <a class="button22 transition-3" href="#"></a>
    </div>
   </section>

    <section class="mb-12 ml-48 mr-48" style="height: 32rem">
    <div class="float-right w-2/5 h-full py-28 flex  flex-col justify-center"><!--  -->
        <h1 class=" text-4xl font-extrabold mx-12 text-white" style="font-family: Montserrat-Bold;">Texturing & Rendering</h1>
        <p class="ml-12 mt-4 text-white text-justify" style="font-family: Montserrat-Light;">
          A course for those who want to master key ZBrush skills from scratch. For 3D beginners, as well as anyone who is passionate about the computer graphics industry and does not know where to start. <br><br>

          The course is complemented by lectures on Substance Painter, where students will look at the basic tools for creating high-quality textures. The fabric elements will be created using the Marvelous Designer toolbox. The final render is done in the Marmoset Toolbag.</p>
         <button onclick="window.location.href='/register'" 
        class=
        "transform hover:scale-110 transition ease-out duration-700 font-bold inline-flex items-center border-2 py-1 px-3 focus:outline-none   hover:bg-indigo-main rounded text-base w-64 border-indigo-main text-white text-2xl ml-12 mt-6 py-2 px-6"
        style="letter-spacing: 0.03em">
        View the course
         
        </button>
    </div>

    <div class="ml-12 h-full flex items-center justify-center flex-col text-center" style="border-radius: 1.5rem;" >
      <a class="button21 transition-3" href="#"></a>
    </div>
  </section>
</div>
    </div>
    
    <div class="bg-gray-content pb-8 text-white text-5xl text-center" style="font-family: Montserrat-Bold" ><h1>News in the 3D industry:</h1></div>
    
    <div class="grid-container">
  <div class="one">

   

        <div class="h-full flex items-center justify-items-center justify-center flex-col"> <!--  style="height:100%; display:flex; align-items:center; justify-content:center; flex-direction: column; text-align: center;" -->      
    <a class="button12 transition-3" href="#">
    <p class="mx-10 text-justify mt-48 text-3xl text-white" style="font-family: Montserrat-Bold">A sneak peek at MetaHuman Creator: digital humans </p><button onclick="window.location.href='/register'" 
        class=
        "transform hover:scale-110 transition ease-out duration-700 font-bold inline-flex items-center border-2 py-1 px-3 focus:outline-none   
        hover:bg-indigo-main rounded text-base border-indigo-main text-white text-2xl ml-8 mt-6 py-2 px-6"
        style="letter-spacing: 0.03em; font-family: Montserrat-Medium"> More Info </button></a></div>

  </div>
  <div class="two">

     <div class="h-full flex items-center justify-items-center justify-center flex-col"> <!--  style="height:100%; display:flex; align-items:center; justify-content:center; flex-direction: column; text-align: center;" -->      
    <a class="button11 transition-3" href="#">
    <p class="mx-10 text-justify mt-48 text-3xl text-white" style="font-family: Montserrat-Bold"> Creating a digital showroom: Audi choose UE4</p> <button onclick="window.location.href='/register'" 
        class=
        "transform hover:scale-110 transition ease-out duration-700 font-bold inline-flex items-center border-2 py-1 px-3 focus:outline-none   
        hover:bg-indigo-main rounded text-base border-indigo-main text-white text-2xl ml-8 mt-6 py-2 px-6"
        style="letter-spacing: 0.03em; font-family: Montserrat-Medium"> More Info </button></a></div>

  </div>
  <div class="three">

    <div class="h-full flex items-center justify-items-center justify-center flex-col"> <!--  style="height:100%; display:flex; align-items:center; justify-content:center; flex-direction: column; text-align: center;" -->      
    <a class="button13 transition-3" href="#">
    <p class="mx-10 mt-48 text-3xl text-white " style="font-family: Montserrat-Bold">Winners of "Virtual Production for Storytellers" </p> <button onclick="window.location.href='/register'" 
        class=
        "transform hover:scale-110 transition ease-out duration-700 font-bold inline-flex items-center border-2 py-1 px-3 focus:outline-none   
        hover:bg-indigo-main rounded text-base border-indigo-main text-white text-2xl ml-8 mt-6 py-2 px-6"
        style="letter-spacing: 0.03em; font-family: Montserrat-Medium"> More Info </button></a></div>

        

  </div>
    </div>
    <div class="bg-gray-content pt-60 pb-10 text-white text-2xl text-center" style="font-family: Montserrat-SemiBold" ><h1>Browse Materials</h1></div>
    <div class="bg-gray-content pb-10 text-white text-5xl text-center" style="font-family: Montserrat-ExtraBold" ><h1>LET’S MAKE STORY BOARDS, <br> AND RENDERS REAL FAST.</h1></div>
    <div class="bg-gray-content  text-white text-xl text-center" style="font-family: Montserrat-Light; padding: 0 26rem 2.2rem 26rem" ><h1>Give your projects the kind of oomph that wows clients – instantly. We have opinions about the subtleties of paper. We know what’s on trend for car paint. We’re ahead of the latest in stylish mid-century patterns, which you’ll see in our collections and use to produce beautifully realistic renders quickly. </h1></div>
    <!-- <div class="bg-gray-content pb-10 text-white text-xl text-center" style="font-family: Montserrat-Light; padding: 0 26rem 0 26rem" ><h1>Materials are compatible with:</h1></div>
     -->
     <div class="bg-gray-content h-16"></div>

     
<section class="bg-gray-content " style="height: 44rem">
    <div class=" float-left h-full mr-12 " style="width:48.5%">
      <div class="ml-12  h-full flex items-center justify-center flex-col">
      <a class="button44 transition-3" style="border-radius: 1rem" href="#">
          <div id="contain" class="ml-12 pr-12 pb-12 pt-10 absolute bg-gray-main rounded-lg mt-96 transform hover:-translate-y-6 transition ease-out duration-700" style="width: 32rem">
            
            <h1 class=" text-4xl font-extrabold mx-12 text-white" style="letter-spacing: 0.02em; font-family: Montserrat-Bold;">CAR PAINTS MATERIAL COLLECTION</h1>
            <p class="ml-12 mt-4 text-white text-justify" style="font-family: Montserrat-Light;"> 38 custom-built car paint materials for all of your automotive render needs (and beyond.) Compatible with Arnold, Octane, and Redshift. Install with a click through the Plus Library.</p>
            <button onclick="window.location.href='/register'" 
            class=
            "transform hover:scale-110 transition ease-out duration-700 font-bold inline-flex items-center border-2 py-1 px-3 focus:outline-none   
            hover:bg-indigo-main rounded text-base
             border-indigo-main text-white ml-12 mt-6 py-2 px-6"
            style="letter-spacing: 0.09em; font-family: Montserrat-Light; font-size:0.8rem">
            YES TO BETTER CAR RENDERS
             
            </button> 
          
          </div>
        

      </a>
    </div>
    </div>

    <div class=" mr-12 h-full flex items-center justify-center flex-col " >
      <a class="button43 transition-3" style="border-radius: 1rem" href="#">
         <div id="contain" class="ml-12 pr-12 pb-12 pt-10 absolute bg-gray-main rounded-lg mt-96 transform hover:-translate-y-6 transition ease-out duration-700" style="width: 32rem">
            
            <h1 class=" text-4xl font-extrabold mx-12 text-white" style="letter-spacing: 0.02em; font-family: Montserrat-Bold;">TECH PRODUCTS MATERIAL COLLECTION</h1>
            <p class="ml-12 mt-4 text-white text-justify" style="font-family: Montserrat-Light;"> 86 high-quality materials for product visualization in Cinema 4D. Compatible with Arnold, Octane, and Redshift. Install with a click through the Plus Library.</p>
            <button onclick="window.location.href='/register'" 
            class=
            "transform hover:scale-110 transition ease-out duration-700 font-bold inline-flex items-center border-2 py-1 px-3 focus:outline-none   
            hover:bg-indigo-main rounded text-base
             border-indigo-main text-white ml-12 mt-6 py-2 px-6"
            style="letter-spacing: 0.09em; font-family: Montserrat-Light; font-size:0.8rem">
            YES TO FASTER PRODUCT VISUALIZATION
             
            </button> 
          
          </div>
</a>
     <!--  </a> -->
    </div>
  </section>


<div class="bg-gray-content h-32"></div>

<section class="bg-gray-content " style="height: 44rem">
    <div class=" float-left h-full mr-12 " style="width:48.5%">
      <div class="ml-12  h-full flex items-center justify-center flex-col">
      <a class="button41 transition-3" style="border-radius: 1rem"  href="#">
          <div id="contain" class="ml-12 pr-12 pb-12 pt-10 absolute bg-gray-main rounded-lg mt-96 transform hover:-translate-y-6 transition ease-out duration-700" style="width: 32rem">
            
            <h1 class=" text-4xl font-extrabold mx-12 text-white" style="letter-spacing: 0.02em; font-family: Montserrat-Bold;">CAR PAINTS MATERIAL COLLECTION</h1>
            <p class="ml-12 mt-4 text-white text-justify" style="font-family: Montserrat-Light;"> 38 custom-built car paint materials for all of your automotive render needs (and beyond.) Compatible with Arnold, Octane, and Redshift. Install with a click through the Plus Library.</p>
            <button onclick="window.location.href='/register'" 
            class=
            "transform hover:scale-110 transition ease-out duration-700 font-bold inline-flex items-center border-2 py-1 px-3 focus:outline-none   
            hover:bg-indigo-main rounded text-base
             border-indigo-main text-white ml-12 mt-6 py-2 px-6"
            style="letter-spacing: 0.09em; font-family: Montserrat-Light; font-size:0.8rem">
            YES TO BETTER CAR RENDERS
             
            </button> 
          
          </div>
        

      </a>
    </div>
    </div>

    <div class=" mr-12 h-full flex items-center justify-center flex-col" >
      <a class="button42 transition-3" style="border-radius: 1rem" href="#">
         <div id="contain" class="ml-12 pr-12 pb-12 pt-10 absolute bg-gray-main rounded-lg mt-96 transform hover:-translate-y-6 transition ease-out duration-700" style="width: 32rem">
            
            <h1 class=" text-4xl font-extrabold mx-12 text-white" style="letter-spacing: 0.02em; font-family: Montserrat-Bold;">TECH PRODUCTS MATERIAL COLLECTION</h1>
            <p class="ml-12 mt-4 text-white text-justify" style="font-family: Montserrat-Light;"> 86 high-quality materials for product visualization in Cinema 4D. Compatible with Arnold, Octane, and Redshift. Install with a click through the Plus Library.</p>
            <button onclick="window.location.href='/register'" 
            class=
            "transform hover:scale-110 transition ease-out duration-700 font-bold inline-flex items-center border-2 py-1 px-3 focus:outline-none   
            hover:bg-indigo-main rounded text-base
             border-indigo-main text-white ml-12 mt-6 py-2 px-6"
            style="letter-spacing: 0.09em; font-family: Montserrat-Light; font-size:0.8rem">
            YES TO FASTER PRODUCT VISUALIZATION
             
            </button> 
          
          </div>
</a>
     <!--  </a> -->
    </div>
  </section>
<div class="bg-gray-content h-48"></div>

    <footer id="footer" class="text-gray-600 body-font bg-gray-main " style="font-family: Montserrat-Medium">
    <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <svg id="logo" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" 
          stroke-width="2" class="transition ease-out duration-1000  w-10 h-10 text-white p-2 rounded-full bg-indigo-main stroke-current hover:bg-white 
          transform hover:rotate-180 md:rotate-0 " viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="ml-3 text-xl" style="font-family: Montserrat-SemiBold; letter-spacing: 0.02em; ">Polystacker</span>
        </a>
        <p class="mt-2 text-sm text-gray-second">Make something unreal 3D with industry professionals</p>
      </div>
      <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3"> </h2>
          <nav class="list-none mb-10 ">
            <li>
              <a class="text-gray-second hover:text-white"> </a>
            </li>
            <li>
              <a class="text-gray-second hover:text-white"> </a>
            </li>
            <li>
              <a class="text-gray-second hover:text-white"></a>
            </li>
            <li>
              <a class="text-gray-second hover:text-white"> </a>
            </li>
          </nav>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 class="title-font font-medium text-white  tracking-widest text-sm mb-3"></h2>
          <nav class="list-none mb-10 ">
            <li class=" ">
              <a class="text-gray-second hover:text-white transform hover:scale-110 transition ease-out duration-700 "></a>
            </li>
            <li>
              <a class="text-gray-second hover:text-white transform hover:scale-110 transition ease-out duration-700"></a>
            </li>
            <li>
              <a class="text-gray-second hover:text-white transform hover:scale-110 transition ease-out duration-700"></a>
            </li>
            <li>
              <a class="text-gray-second hover:text-white transform hover:scale-110 transition ease-out duration-700"></a>
            </li>
          </nav>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 class="title-font text-lg font-medium text-white  tracking-widest text-sm mb-3" style="font-family: Montserrat-Bold">USEFULLY</h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-gray-second  hover:text-white transform hover:scale-110 transition ease-out duration-700">Expressions</a>
            </li>
            <li>
              <a class="text-gray-second hover:text-white transform hover:scale-110 transition ease-out duration-700">Plugins</a>
            </li>
            <li>
              <a class="text-gray-second hover:text-white transform hover:scale-110 transition ease-out duration-700">Extensions</a>
            </li>
            <li>
              <a class="text-gray-second hover:text-white transform hover:scale-110 transition ease-out duration-700">Documentation</a>
            </li>
          </nav>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 class="title-font text-lg font-medium text-white  tracking-widest text-sm mb-3" style="font-family: Montserrat-Bold">SUPPORT</h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-gray-second  hover:text-white transform hover:scale-110 transition ease-out duration-700">Teachers</a>
            </li>
            <li>
              <a class="text-gray-second hover:text-white transform hover:scale-110 transition ease-out duration-700">Contacts</a>
            </li>
            <li>
              <a class="text-gray-second hover:text-white transform hover:scale-110 transition ease-out duration-700">Rules</a>
            </li>
            <li>
              <a class="text-gray-second hover:text-white transform hover:scale-110 transition ease-out duration-700">Sponsors</a>
            </li>
          </nav>
        </div>
      </div>
    </div>
    <div class="bg-gray-main md:border-t-2 md:border-gray-second" >
      <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p class="text-gray-400 text-sm text-center sm:text-left">© 2021 Polystacker —
          <a href="https://www.instagram.com/polystacker/" rel="noopener noreferrer" class="text-gray-second ml-1" target="_blank">All rights reserved. ®</a>
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a class="text-gray-second" href="https://www.facebook.com/poly.stacker/">
            <svg fill="#9CA3AF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5  transition ease-out duration-500 transform hover:scale-150" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-second" href="https://twitter.com/polystacker">
            <svg fill="#9CA3AF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5  transition ease-out duration-500 transform hover:scale-150" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-second" href="https://www.instagram.com/polystacker/">
            <svg fill="none" stroke="#9CA3AF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5  transition ease-out duration-500 transform hover:scale-150" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-second" >
            <svg fill="#9CA3AF" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5  transition ease-out duration-500 transform hover:scale-150" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </div>
    </footer>

    
    </div>
  </div>
</template>



<script> </script>

<style scoped>

/* #body {
  max-width: ;
}
 */
#navbar
 {
   position: sticky;
   left: 0;
   top: 0;
   width: 100%;
   z-index: 99;
   background-image: url(assets/img/1122.png);
  background-size: 90%;
 }
#contain-main {
  /* background-image: url(assets/img/112233.png); */
  background-size: 100%;
}
#contain {
  /* background-image: url(assets/img/1122.png); */
  background-size: 300%;
}
#footer {
  background-image: url(assets/img/1122.png);
  background-size: cover;

}
            .grid-container { height: 24rem; margin: 0; }

            .grid-container {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              grid-template-rows: 1fr;
              gap: 0px 0px;
              grid-template-areas:
                "one two three";
            }

            .one { grid-area: one; }

            .two { grid-area: two; }

            .three { grid-area: three; }

            .grid-container * {
              position: relative;
            }

.button23 {
            height: 100%;
            width: 100%;
            background: url(assets/img/surfer0.jpg) 50% 50% ;
            background-size: 100% 100%;	
            border-radius: 1.5rem;

        }
        .button22 {
            height: 100%;
            width: 100%;
            background: url(assets/img/weapon.jpg) 50% 50% ;
            background-size: 100% 100%;	
            border-radius: 1.5rem;

        }
        .button21 {
            height: 100%;
            width: 100%;
            background: url(assets/img/text.jpg) 50% 50% ;
            background-size: 100% 100%;	
            border-radius: 1.5rem;
        }
        .button11 {
            height: 100%;
            width: 100%;
            background: url(assets/img/mers1.jpg) 50% 50% ;
            background-size: 100% 100%;
        }	
        .button12 {
            height: 100%;
            width: 100%;
            background: url(assets/img/humans1.jpg) 50% 50% ;
            background-size: 100% 100%;
        }	
        .button13 {
            height: 100%;
            width: 100%;
            background: url(assets/img/winners1.jpg) 50% 50% ;
            background-size: 100% 100%;
        }	
        .button41 {
            height: 100%;
            width: 100%;
            background: url(assets/img/car.jpg) 50% 50% ;
            background-size: 100% 100%;
        }	
        .button42 {
            height: 100%;
            width: 100%;
            background: url(assets/img/watch.jpg) 50% 50% ;
            background-size: 100% 100%;
        }	
        .button43 {
            height: 100%;
            width: 100%;
            background: url(assets/img/mecha.jpg) 50% 50% ;
            background-size: 100% 100%;
        }	
        .button44 {
            height: 100%;
            width: 100%;
            background: url(assets/img/abstract.jpg) 50% 50% ;
            background-size: 100% 100%;
       
        }	
        .transition-3 {
            transition: background-size 0.5s;
            transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }	
        
        .button23:hover {
            background-size: 110% 110%;

        }
        .button22:hover {
            background-size: 110% 110%;

        }
        .button21:hover {
            background-size: 110% 110%;

        }
        .button11:hover {
            background-size: 110% 110%;

        }
         .button12:hover {
            background-size: 110% 110%;

        }
         .button13:hover {
            background-size: 110% 110%;

        }
        .button41:hover {
            background-size: 110% 110%;

        }
        .button42:hover {
            background-size: 110% 110%;

        }
        .button43:hover {
            background-size: 110% 110%;

        }
        .button44:hover {
            background-size: 110% 110%;

        }
        





header {
  position: relative;
  background: url(assets/img/welcome3.jpg) center no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
  height: 95vh;
}
  
header:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,.5 );
  z-index: 2;
}
  
.inner {
  position: relative;
  z-index: 3;
  color: #fff;
  padding: 50px; 
}

#logo:hover {
  stroke: #6366f2;
}


@font-face {
    font-family: Montserrat-Black;
    src: url(assets/fonts/Montserrat-Black.ttf);
}

@font-face {
    font-family: Montserrat-Bold;
    src: url(assets/fonts/Montserrat-Bold.ttf);
}

@font-face {
    font-family: Montserrat-ExtraBold;
    src: url(assets/fonts/Montserrat-ExtraBold.ttf);
}

@font-face {
    font-family: Montserrat-ExtraLight;
    src: url(assets/fonts/Montserrat-ExtraLight.ttf);
}

@font-face {
    font-family: Montserrat-Regular;
    src: url(assets/fonts/Montserrat-Regular.ttf);
}

@font-face {
    font-family: Montserrat-Light;
    src: url(assets/fonts/Montserrat-Light.ttf);
}

@font-face {
    font-family: Montserrat-Medium;
    src: url(assets/fonts/Montserrat-Medium.ttf);
}

@font-face {
    font-family: Montserrat-SemiBold;
    src: url(assets/fonts/Montserrat-SemiBold.ttf);
}

@font-face {
    font-family: Montserrat-Thin;
    src: url(assets/fonts/Montserrat-Thin.ttf);
}


/* #surfer {
  background: url(assets/img/surfer0.jpg) center no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
}
#weapon {
  background: url(assets/img/weapon.jpg) center no-repeat;
  -webkit-background-size: cover;
  background-size: cover;

} 
#text {
  background: url(assets/img/text.jpg) center no-repeat;
  -webkit-background-size: cover;
  background-size: cover;

}*/

/* #wrapper1 {
    display:flex;
}
#wrapper1 div {
    height:20rem;
}

#center1 {
    width:33%;
} */
     

</style>


