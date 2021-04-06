<template>

  <section class="" style="height: 100vh">
    <div id="sl" class="px-50 flex items-center float-left w-2/5 h-full justify-center flex-col bg-gray-main">
      <div class=" px-50  flex items-center float-left w-full h-full justify-center flex-col bg-black bg-opacity-60">
        <div class="mx-24 md:pr-16 lg:pr-0 pr-0 mb-20">
          <h1 class="title-font mt-40 text-white font-extrabold text-5xl" style="font-family: Montserrat-Bold">Polystacker </h1>
          <p class="leading-relaxed text-gray-second mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
        </div>
      </div>
    </div>

      <a href="./"><svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"  
      class=" transition ease-out duration-1000 transform hover:scale-150 hover:rotate-180 md:rotate-0 w-16 h-16 text-white p-3 mx-24 my-32 absolute rounded-full bg-indigo-main stroke-current hover:bg-white hover:text-indigo-main" viewBox="0 0 24 24">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5 "></path>
      </svg></a>
      
       

      <div class="bg-gray-content h-full flex items-center justify-center flex-col text-center">
 <!--          <div class="w-96 h-3/5 absolute object-center bg-indigo-main rounded-lg 
          p-8 flex flex-col shadow-2xl transform inset-0 
          skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" style="margin: 0 50vw 0 50vw"></div>
        <div class=" absolute inset-0 my-20 mx-20 w-3/5 h-3/5 flex flex-col bg-indigo-main border-indigo-light shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>  -->
        <div class="w-3/5 h-3/5 object-center bg-gray-main rounded-lg p-8 flex flex-col shadow-2xl">
        <h2 class="text-white title-font mb-5 font-extrabold text-3xl" style="font-family: Montserrat-Bold" >Registration</h2>
        <div class="relative mb-4">
          <label for="full-name" class="leading-7 text-sm text-gray-second" style="font-family: Montserrat-Regular">Full Name</label>
          <input type="text" id="full-name" name="full-name" 
          class="w-full bg-gray-content rounded focus:bg-gray-second 
             text-base text-gray-main py-1 px-3 border-0 ring-2 leading-8 transition-colors focus:ring-2 focus:ring-indigo-800 duration-700 ease-in-out"> <!-- -200 -->
        </div>
        <div class="relative mb-4">
          <label for="full-name" class="leading-7 text-sm text-gray-second" style="font-family: Montserrat-Regular">Email</label>
          <input type="text" id="full-name" name="full-name" 
          class="w-full bg-gray-200 rounded border focus:bg-white border-gray-300
           focus:border-indigo- focus:ring-2 focus:ring-indigo-200 text-base
            outline-none text-gray-main py-1 px-3 leading-8 transition-colors duration-700 ease-in-out">
        </div>
        <div class="relative mb-4">
          <label for="full-name" class="leading-7 text-sm text-gray-second" style="font-family: Montserrat-Regular">Password</label>
          <input type="text" id="full-name" name="full-name" 
          class="w-full bg-gray-200 rounded border focus:bg-white border-gray-300
           focus:border-indigo- focus:ring-2 focus:ring-indigo-200 text-base
            outline-none text-gray-main py-1 px-3 leading-8 transition-colors duration-700 ease-in-out">
        </div>
        <div class="relative mb-4">
          <label for="full-name" class="leading-7 text-sm text-gray-second" style="font-family: Montserrat-Regular">Full Name</label>
          <input type="text" id="full-name" name="full-name" 
          class="w-full bg-gray-200 rounded border focus:bg-white border-gray-300
           focus:border-indigo- focus:ring-2 focus:ring-indigo-200 text-base
            outline-none text-gray-main py-1 px-3 leading-8 transition-colors duration-700 ease-in-out">
        </div>
        <button class="text-white bg-indigo-main border-2 border-indigo-main py-2 px-8 transition ease-out duration-700 focus:outline-none 
        hover:bg-white hover:text-indigo-main hover:border-indigo-main rounded text-lg font-medium" style="font-family: Montserrat-SemiBold">Button</button>
        <a href="login.vue" class="text-xs text-gray-second mt-3" style="font-family: Montserrat-Regular">Already have an account?</a>
        </div>
    </div>
  </section>
</template>

<style>

#sl {
  background-image: url(assets\img\welcome123.jpg);
  background-size: cover;
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

</style>

