

const express = require('express');
const cors=require("cors");
require("../Src/db/Conn")
const bodyParser=require("body-parser");
const cookieParser=require("cookie-parser");
const router=require("./routes/authRoutes")
const router1=require("./routes/Student.router");



const app = express();
const PORT=3000;

app.use(express.json());
app.use(cors());
app.use(router);
app.use(router1);
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:false}));



// Protected route example
/*app.get('/protected', verifyToken, (req, res) => {
  res.json({ success: true, message: 'Access granted to protected route.' });
});*/

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port no ${PORT}`);
});

