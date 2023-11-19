import { BASE_URL } from "@env";

const sendSmsVerification = async (phoneNumber) => {
 try {
   const data = JSON.stringify({
     phoneNumber: phoneNumber,
   });

   const response = await fetch("https://ufsvivjeq3kgarbtywzrp6lqiy0bjifh.lambda-url.us-east-2.on.aws/", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: data,
   });

   const json = await response.json();
   console.log(json);
   return json.success;
 } catch (error) {
   console.error(error);
   return false;
 }
};

const checkVerification = async (phoneNumber, code) => {
 try {
   const data = JSON.stringify({
     to: phoneNumber,
     code,
   });

   const response = await fetch("https://ufsvivjeq3kgarbtywzrp6lqiy0bjifh.lambda-url.us-east-2.on.aws/", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: data,
   });

   const json = await response.json();
   console.log(json);
   return true
 } catch (error) {
   console.error(error);
   return false;
 }
};

module.exports = {
 sendSmsVerification,
 checkVerification,
};
