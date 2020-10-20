const start: number = Date.now();
import("./app/app").then(() => {
  const waitingTimeTo3: number = 3000 - (Date.now() - start);
  setTimeout(() => {
    console.log("We waited: ", waitingTimeTo3);
  }, waitingTimeTo3);
});
