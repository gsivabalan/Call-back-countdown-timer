var countdownele = document.getElementById("countdown");

function countdown(num, callback) {
  countdownele.textContent = num;
  if (num > 0) {
    setTimeout(function() {
      countdown(num - 1, callback);
    }, 1000);
  } else {
    callback();
  }
}
countdown(10, function() {
  countdownele.textContent = "Happy Independence Day";
});
// console.log("Starting countdown...");
// setTimeout(function() {
//   console.log("10");
//   setTimeout(function() {
//     console.log("9");
//     setTimeout(function() {
//       console.log("8");
//       setTimeout(function() {
//         console.log("7");
//         setTimeout(function() {
//           console.log("6");
//           setTimeout(function() {
//             console.log("5");
//             setTimeout(function() {
//               console.log("4");
//               setTimeout(function() {
//                 console.log("3");
//                 setTimeout(function() {
//                   console.log("2");
//                   setTimeout(function() {
//                     console.log("1");
//                     setTimeout(function() {
//                       console.log("Happy Independence Day!");
//                     }, 1000);
//                   }, 1000);
//                 }, 1000);
//               }, 1000);
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

