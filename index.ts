import { app } from "./src/app";

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// app.listen(port, (err) => {
//   if (err) {
//     return console.error(err);
//   }
//   return console.log(
//     `server is listening on ${port}, go to your browser and open localhost:9010 in the address bar`
//   );
// });
