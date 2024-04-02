const express = require("express");
const app = express();
const auth = require("./routes/auth");
const card = require("./routes/carte")
require("./cnx/cnx");
app.use(express.json());
 
app.get("/",(req,res)=>{
    res.send("hello")
});
 
app.use("/api/v1", auth);
app.use("/api/v2",card);
app.listen(1000,() => {
  console.log("started");
}
);