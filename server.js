const express = require('express')
const app = express()
const router = express.Router()

const cors = require('cors')

app.use(cors({
    origin:'*'
}))
app.use(express.json())

app.post('/' , (req,res) => {
    console.log("start Working")

    const {email , number , bericht , lat , lng} = req.body
    const nodemailer = require("nodemailer");

    const locationurl = `http://localhost:3000/map/${lat}/${lng}`

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for port 465, false for other ports
      auth: {
        user: "beridzegigi19@gmail.com",
        pass: "cdcs xqtm mqsu qktj",
      },
    });
    
    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
      // send mail with defined transport object
      const info = await transporter.sendMail({
        from: '"Mobiele Bandencentrale" <maddison53@ethereal.email>', // sender address
        to: `${email}`, // list of receivers
        subject: "PECHBIJSTAND LEKKE BAND ✔", // Subject line
        text: "Hello world?", // plain text body
        html:  `<html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
            }
            .email-container {
              max-width: 600px;
              margin: 20px auto;
              padding: 20px;
              background-color: white;
              border-radius: 8px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            h1 {
              color: #333;
            }
            p {
              color: #555;
              font-size: 16px;
            }
            .button {
              background-color: #4CAF50;
              color: white !important;
              padding: 10px 20px;
              text-decoration: none;
              border-radius: 5px;
              font-weight: bold;
              text-decoration: none;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <h1>Welcome to Our Service!</h1>
            <p>Email: beridzegigi19@gmail.com,</p>
            <p>Mobile No: 593484636</p>
            <p>Aanvrag Type: PECHBIJSTAN LEKKE BAND</p>
            <p>Prijs: 145€ (Bandenprijs is niet inbegrepen) </p>
            <p>Fluweel gebroken: ZICHTBAAR SCHADE OF PLAT VERDER GEREDEN </p>
            <p>Region: West Vlaanderen </p>
            
            
            

            <p><a href=${locationurl} class="button">Location</a></p>
          </div>
        </body>
      </html>`, // html body
      });
    
      console.log("Message sent: %s", info.messageId);
      // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
    }
    
    main().catch(console.error);
})


app.listen(4000 , console.log("Server Launched"))