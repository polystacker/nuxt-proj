<template>
  <div id="fullscreen" class="bg-gray-800 w-screen h-screen">
    <div v-for="user in users" :key="user.id">
      <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div class="flex-shrink-0">
          <img
            class="h-20 w-20 rounded-full mx-0 my-0 px-0 py-0"
            :src="user.avatar"
            alt="ChitChat Logo"
          />
        </div>
        <div>

          <a class="text-xl font-medium text-black" :href= "user.email"> {{ user.first_name }}</a>
          <p class="text-gray-500"> {{ user.last_name }}</p>       

        </div>
      </div>
        <br>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      users: [],
    };
  },
  async mounted() {
    const { status, data } = await axios.get("https://reqres.in/api/users?page=1");
    this.users = data.data;
  },
};
</script>










































<style>
#imggg {
    object-fit: cover;
    width: 50px;
    height: 50px;
}

#fullscreen {}
</style>