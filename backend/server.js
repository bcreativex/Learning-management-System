// import app from "./app.js";
// const PORT = process.env.PORT;
// import {v2 as cloudinary} from 'cloudinary';
// import Razorpay from "razorpay"; 
         
// // cloudinary configuration
// cloudinary.config({ 
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY, 
//   api_secret: process.env.CLOUDINARY_API_SECRET 
// });

// // razorpay  
// export const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_SECRET
// })

// app.listen(PORT, () => {
//     console.log(`server started at http://localhost:${PORT}`);
// })

import dotenv from "dotenv";
dotenv.config();  

import app from "./app.js";
const PORT = process.env.PORT || 8080;  // ✅ Default to 8080 if PORT is undefined

import { v2 as cloudinary } from 'cloudinary';
import Razorpay from "razorpay"; 

// ✅ Cloudinary configuration
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

// ✅ Razorpay configuration
export const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET
});

// ✅ Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server started at http://localhost:${PORT}`);
});
