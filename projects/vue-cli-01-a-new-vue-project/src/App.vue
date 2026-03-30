<template>
  <section>
    <header>
      <h1>Friends list</h1>
    </header>
    <NewFriend @save-new-friend="saveNewFriend" ></NewFriend>
    <ul>
      <FriendContact
        v-for="friend in friends"
        :key="friend.id"
        v-bind="friend"
        @toggle-favorite="toogleFavoriteStatus"
        @delete-friend="deleteFriend"
      ></FriendContact>
    </ul>
  </section>
</template>

<script>
import FriendContact from "./components/FriendContact.vue";
import NewFriend from "./components/NewFriend.vue"

export default {
  components: {
    FriendContact, NewFriend
  },
  data() {
    return {
      friends: [
        {
          id: "alvaro",
          name: "Alvaro Felipe",
          phone: "233 423 234",
          email: "alvaro@local.com",
          favorite: true,
        },
        {
          id: "jose",
          name: "Jose Pérez",
          phone: "231 877 565",
          email: "jose@local.com",
          favorite: false,
        },
      ],
    };
  },
  methods: {
    toogleFavoriteStatus(id) {
      const friend = this.friends.find((friend) => friend.id === id);
      friend.favorite = !friend.favorite;
    },
    saveNewFriend(newFriend){
      const friendToAdd = {
        id: newFriend.id,
        name: newFriend.name,
        phone: newFriend.phone,
        email: newFriend.email,
        favorite: newFriend.favorite
      }

      this.friends.push(friendToAdd)

      console.log(friendToAdd)
      console.log(this.friends.length)
    },
    deleteFriend(id){
      console.log('works')
      const index = this.friends.findIndex((friend) => friend.id === id )
      console.log(index)
      this.friends.splice(index, 1)

      // Filter. Devuelve el array solo con los que cumplen la condición
      this.friends = this.friends.filter()
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #4fc08d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #4fc08d;
  margin: 0 0 1rem 0;
}

#app p {
  font-size: 1.25rem;
  font-weight: bold;
  border: 1px solid #4fc08d;
  background-color: #4fc08d;
  color: white;
  padding: 0.5rem;
  border-radius: 25px;
}

#app input {
  font: inherit;
  border: 1px solid #ccc;
}

#app input:focus {
  outline: none;
  border-color: #1b995e;
  background-color: #d7fdeb;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app li {
  list-style: none;
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
