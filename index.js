const express = require('express')// third party package
const fs = require('fs');
const app = express()   //assigned
 const PORT=5000;





app.get('/', function (req, res) {         // http method (root end point)
  res.send('Hello this node js task 1------1)type /datetime to create current date-time file')                  // what response to be sent
})    


// creating new api end point to wtitw a text file in perticular folder
app.get('/datetime', function (req, res) { 
 // Create a new Date object
    const timeStamp = new Date();

// Convert to Indian Standard Time (IST)
    const options = {
    timeZone: 'Asia/Kolkata',
    hour12: false, // Use 24-hour format
    weekday: 'long', // Display full weekday name
    year: 'numeric', // Display year
    month: 'short', // Display short month name
    day: '2-digit', // Display day with leading zero
    hour: '2-digit', // Display hour with leading zero
    minute: '2-digit', // Display minute with leading zero
    second: '2-digit' // Display second with leading zero
    };

    const timestampIST = timeStamp.toLocaleString('en-IN', options);

    console.log(timestampIST);

        fs.writeFile("./inbuilt/current_date_time.txt", timestampIST , (err) => {
        console.log("Completed writing current_date_time.txt") 
        res.send("Completed writing current_date_time.txt") })       
                    
  }) 

  //--------------------------------------------Read Directory shows all files in it----------------------------
  app.get('/retrive', function (req, res) { 
    fs.readdir("./inbuilt", (err, files) => {
        console.log("All file names are", files)
        res.send(files)
    })
})

app.listen(PORT,()=>console.log("server is running on PORT", PORT))                          // you can give any number
