<template>
  <div class="container mx-auto">
    <div class="text-center text-white pt-16 pb-20">
      <div class="flex justify-between w-2/3 mx-auto">
        <button
          @click="sessionLength=25"
          class="bg-pink-dark text-white hover:bg-pink-darker font-bold py-2 px-4 rounded-full border-b-4 border-pink-darker hover:border-pink-dark"
        >
          Pomodoro
        </button>
        <button
          @click="sessionLength=5"
          class="bg-pink-dark text-white hover:bg-pink-darker font-bold py-2 px-4 rounded-full border-b-4 border-pink-darker hover:border-pink-dark"
        >
          Short Break
        </button>
        <button
          @click="sessionLength=15"
          class="bg-pink-dark text-white hover:bg-pink-darker font-bold py-2 px-4 rounded-full border-b-4 border-pink-darker hover:border-pink-dark"
        >
          Long Break
        </button>
      </div>
      <p class="text-20xl text-font-concert">{{minutes}}:{{seconds}}</p>
      <div class="w-3/5 mx-auto flex justify-between mt-20">
        <i
          @click="resetTimer"
          class="fas fa-redo text-10xl cursor-pointer"
        ></i>
        <i
          @click="startTimer"
          class="fas fa-play text-10xl cursor-pointer"
        ></i>
        <i
          @click="stopTimer"
          class="fas fa-pause text-10xl cursor-pointer"
        ></i>
      </div>
      <div class="w-3/5 mt-32 bg-pink-dark mx-auto pb-10">
        <p class="text-5xl text-font-concert py-2">TO-DO LIST</p>
        <form
          autocomplete="off"
          class="w-full max-w-sm"
          @submit.prevent
        >
          <input
            class="appearance-none w-4/5 bg-grey-lighter text-black border border-grey-lighter rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey rounded-full text-center"
            id="grid-last-name"
            type="text"
            placeholder="New To-Do"
            v-on:keyup.enter.prevent="handleAddTodo"
            v-model="newTodo"
          >

        </form>
        <div
          class="w-4/5 mx-auto overflow-hidden shadow-lg bg-white mt-6"
          v-for="todo in todos"
        >
          <div class="px-6 py-4 flex justify-between align-baseline items-center">
            <span></span>
            <p
              class="text-grey-darker text-base"
              :class="{ 'line-through' : todo.done}"
            >
              {{todo.todo}}
            </p>
            <input
              class="
              mr-2
              leading-tight"
              type="checkbox"
              @click="todo.done = !todo.done"
            >
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "home",
  data: function() {
    return {
      timeLeft: 1500,
      timer: null,
      sessionLength: 25,
      newTodo: "",
      todos: []
    };
  },
  methods: {
    countdown: function() {
      if (this.timeLeft >= 1) {
        this.timeLeft--;
      } else {
        this.playSound(
          "http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3"
        );
        this.timeLeft = 0;
        this.resetTimer();
      }
    },
    resetTimer: function() {
      clearInterval(this.timer);
      this.timer = null;
      this.timeLeft = this.sessionLength * 60;
    },
    startTimer: function() {
      if (!this.timer) {
        this.timer = setInterval(() => this.countdown(), 1000);
      }
    },
    stopTimer: function() {
      clearInterval(this.timer);
      this.timer = null;
    },
    playSound: function(sound) {
      if (sound) {
        new Audio(sound).play();
      }
    },
    handleAddTodo: function() {
      this.todos.push({ todo: this.newTodo, done: false });
      this.newTodo = "";
    }
  },
  computed: {
    minutes: function() {
      return Math.floor(this.timeLeft / 60);
    },
    seconds: function() {
      if (this.timeLeft % 60 < 10) {
        return "0" + (this.timeLeft % 60);
      } else return this.timeLeft % 60;
    }
  },
  watch: {
    sessionLength: function() {
      this.resetTimer();
    }
  }
};
</script>
