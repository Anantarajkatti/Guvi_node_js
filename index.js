const express = require("express"); // third party package
const fs = require("fs");
const app = express(); //assigned
const PORT = 4000;

//const filePath = "./inbuilt/current_date_time.txt";

app.get("/", function (req, res) {
  // http method (root end point)
  res.send(
    "Hello this node js task <hr/>1) /datetime<br/> to create current date-time file<br/> <br/>2)/datetime/read <br/> for reading the Date file<br/><br/>3) /retrive<br/> for reading directory"
  ); // what response to be sent
});

// creating new api end point to wtitw a text file in perticular folder
app.get("/datetime", function (req, res) {
  // Create a new Date object
  const timeStamp = new Date();

  // Convert to Indian Standard Time (IST)
  const options = {
    timeZone: "Asia/Kolkata",
    hour12: false, // Use 24-hour format
    weekday: "long", // Display full weekday name
    year: "numeric", // Display year
    month: "short", // Display short month name
    day: "2-digit", // Display day with leading zero
    hour: "2-digit", // Display hour with leading zero
    minute: "2-digit", // Display minute with leading zero
    second: "2-digit", // Display second with leading zero
  };

  const timestampIST = timeStamp.toLocaleString("en-IN", options).replace(/[\/,:\s]/g, "-");

  console.log(timestampIST);
  console.log(typeof(timestampIST));
  const filePath = `./inbuilt/${timestampIST}.txt`;

  fs.writeFile(filePath, timestampIST, (err) => {
    console.log("Completed writing current_date_time.txt");
    res.send(
      `Completed writing file ${filePath}<br/>${timestampIST}<br/> now provide <br/><br/> URL:-----http://localhost:4000/datetime/read `
    );
  });
});

//--------------------------------------------Read Directory shows all files in it----------------------------
app.get("/retrive", function (req, res) {
  fs.readdir("./inbuilt", (err, files) => {
    console.log("All file names are", files);
    res.send(files);
  });
});

//------------------------------//datetime/read

// app.get("/datetime/read", function (req, res) {
//   const fs = require("fs");
//   fs.readFile("./inbuilt/current_date_time.txt", "utf-8", (err, data) => {
//     if (err) {
//       console.error("Error reading file:", err);
//     }
//     console.log("Successfully read timestamp:", data);
//     res.send(data); // Send the timestamp data as the response
//   });
// });

app.listen(PORT, () => console.log("server is running on PORT", PORT)); // you can give any number
