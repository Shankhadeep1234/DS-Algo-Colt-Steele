// function printString(string) {
//   setTimeout(() => {
//     console.log(string);
//   }, Math.floor(Math.random() * 100) + 1);
// }

// function printAll() {
//   printString("A");
//   printString("B");
//   printString("C");
// }
// printAll();

////////////////////////////////////////////////////////////////////////////

// function printWithCallback(string, callback) {
//   setTimeout(() => {
//     console.log(string);
//     callback();
//   }, Math.floor(Math.random() * 100) + 1);
// }

// function printAllWithCallBacks() {
//   printWithCallback("A", () => {
//     printWithCallback("B", () => {
//       printWithCallback("C", () => {});
//     });
//   });
// }

// printAllWithCallBacks();

////////////////////////////////////////////////////////////////////////////

// function printWthPromise(string) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(string);
//       resolve();
//     }, Math.floor(Math.random() * 100) + 1);
//   });
// }

// function printAllWithPromise() {
//   printWthPromise("A")
//     .then(() => {
//       return printWthPromise("B");
//     })
//     .then(() => {
//       return printWthPromise("C");
//     });
// }

// function printAllWithPromise() {
//   printWthPromise("A")
//     .then(() => printWthPromise("B"))
//     .then(() => printWthPromise("C"));
// }

//////////////////////////////////////////////////////////////////////////

//async await

function printWthAsyncAwait(string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(string);
      resolve();
    }, Math.floor(Math.random() * 100) + 1);
  });
}

async function printAllWIthAsyncAwait() {
  await printWthAsyncAwait("A");
  await printWthAsyncAwait("B");
  await printWthAsyncAwait("C");
}

printAllWIthAsyncAwait();
