Vue.createApp({
  data() {
    return {
      monsterH: 100,
      userH: 100,
      attacks: 0,
      round: 0,
      end: null,
      logs: [],
    };
  },
  watch: {
    monsterH(value) {
      if (value <= 0 && this.userH <= 0) {
        this.end = "d";
      } else if (value <= 0) {
        this.end = "w";
      }
    },
    userH(value) {
      if (value <= 0 && this.monsterH <= 0) {
        this.end = "d";
      } else if (value <= 0) {
        this.end = "l";
      }
    },
  },
  computed: {
    isDisabled() {
      return this.round === 0 || this.round % 3 !== 0;
    },
    monsterBar() {
      if (this.monsterH < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterH + "%" };
    },
    userBar() {
      if (this.userH < 0) {
        return { width: "0%" };
      }
      return { width: this.userH + "%" };
    },
    logStyles() {},
  },
  methods: {
    attackMonster() {
      const attackValue = getRandom(5, 12);
      this.monsterH -= attackValue;
      this.addLogMessage("user", "attacks", attackValue);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandom(8, 15);
      this.userH -= attackValue;
      this.round++;
      this.addLogMessage("monster", "attacks", attackValue);
      console.log(this.monsterH, this.userH);
    },
    specialAttack() {
      const attackValue = getRandom(20, 30);
      this.monsterH -= attackValue;
      this.addLogMessage("user", "special-attacks", attackValue);
      this.attackPlayer();
    },
    heal() {
      const healValue = getRandom(20, 30);
      this.userH += healValue;
      this.addLogMessage("user", "heals", healValue);
      this.attackPlayer();
    },
    newGame() {
      this.monsterH = 100;
      this.userH = 100;
      this.round = 0;
      this.end = null;
      this.logs = [];
      this.disableSpecial = true;
    },
    surrend() {
      this.end = "l";
    },
    addLogMessage(character, what, value) {
      this.logs.unshift({
        who: character,
        action: what,
        actionValue: value,
      });
    },
  },
}).mount("#game");

// Internal functions
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
