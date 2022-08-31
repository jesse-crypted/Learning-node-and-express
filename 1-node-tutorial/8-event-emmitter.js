const EventEmmitter = require("events");

const customEmmitter = new EventEmmitter();

customEmmitter.on("response", (team) => {
  console.log(`...data received by ${team} 💼`);
});

customEmmitter.on("response", () => {
  function sayHello(name, company) {
    console.log(
      `Hello Mr. ${name} welcome to Meta pleased to welcome you to the ecosystem of innovators 🤗`
    );
  }
  sayHello(`Jesse`);
});

customEmmitter.emit("response", "Dev-team");
