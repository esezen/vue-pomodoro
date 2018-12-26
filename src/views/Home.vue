<template>
  <div class="container mx-auto">
    <div class="text-center text-white pt-32">
      <p class="text-20xl timer-text">{{minutes}}:{{seconds}}</p>
      <div class="w-3/5 mx-auto flex justify-between mt-20">
        <i
          @click="resetTimer"
          class="fas fa-redo text-10xl"
        ></i>
        <i
          @click="startTimer"
          class="fas fa-play text-10xl"
        ></i>
        <i
          @click="stopTimer"
          class="fas fa-pause text-10xl"
        ></i>
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
      sessionLength: 25
    };
  },
  methods: {
    countdown: function() {
      if (this.timeLeft >= 1) {
        this.timeLeft--;
      } else {
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
      this.timer = setInterval(() => this.countdown(), 1000);
    },
    stopTimer: function() {
      clearInterval(this.timer);
      this.timer = null;
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
  }
};
</script>
