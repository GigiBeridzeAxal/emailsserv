const express = require('express')
const app = express()
const router = express.Router()


const cors = require('cors')
 //"user: Info@mobielebandencentrale.be pass: zdyt xzdw lyqm kvpr,"
app.use(cors({
    origin:'*'
}))
app.use(express.json())

app.post('/' , (req,res) => {



    const {email , number , desc , lat , lng , Stockage , price , Aanvraag , region , TypeBand , lat2 , lng2 } = req.body
    const nodemailer = require("nodemailer");



    const locationurl = `http://localhost:3000/map/${lat}/${lng}`
    const locationurl2 = `http://localhost:3000/map/${lat2}/${lng2}`
    

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for port 465, false for other ports
      auth: {
        user: "Info@mobielebandencentrale.be",
        pass: "kzqm kldo zpsv jibx",
      },
      tls: {
          rejectUnauthorized: false, // Ignore self-signed certificate error
        },

    });
    
    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
      // send mail with defined transport object
      const info = await transporter.sendMail({
        from: '"Mobiele Bandencentrale" <maddison53@ethereal.email>', // sender address
        to: `beridzegigi19@gmail.com`, // list of receivers
        subject: "Service ✔", // Subject line
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
            .Mobile{
             text-decoration:'underline';
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <h1>Welcome to Our Service!</h1>
            <p>Email: ${email},</p>
            <p class="Mobile" >Mobile No: ${number}</p>
            ${Aanvraag ? `<p>Aanvrag Type: ${Aanvraag}</p>` : ''}
            ${TypeBand ? `<p>TypeBand: ${TypeBand}</p>` : ''}
            ${price ? `<p>Prijs: ${price} €</p>` : ''}
  
            ${desc ? `<p>Bericht: ${desc}</p>` : ''}
            ${Stockage ? Stockage == 1 ?`<p>BANDEN STOCKAGE:1 SEIZOEN </p>` : `<p>BANDEN STOCKAGE:4 SEIZOEN </p>`  : ''}
            ${region ?`<p>Region: ${region == "WestVla" ? "west-vlaanderen" : ''} ${region == "OostVla" ? "OOST-VLAANDEREN" : ''} ${region == "Antwerpen" ? "ANTWERPEN" : ''}</p>` : ''}

            
            

            ${lat2 ? '' : `<p><a href=${locationurl} class="button">Location</a></p>`}
            
            ${lat2 ? `<p><a href=${locationurl2} class="button">Afzet Location</a></p>` : '' }

            ${lat2 ? `<p><a href=${locationurl} class="button">Ophaal Location</a></p>` : '' }
            



          </div>
        </body>
      </html>`, // html body
      });
    
      ("Message sent: %s", console.log(info.messageId) );
      // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
    }
    
    main().catch(console.error);
})


app.listen(4000 , console.log("Server Launched"))