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



    const {email , number , desc , lat , lng , Stockage , price , Aanvraag , region , TypeBand , lat2 , lng2 , afzet , chooser , tiresize , tiresize2 , tiresize3 , tiresize4 , tiresize5 , from1 , to1, date1 , from2 , to2, date2 , from3 , to3, date3 , locaties } = req.body
    const nodemailer = require("nodemailer");



    const locationurl = `https://maps.google.com/?q=${lat},${lng}`
    const locationurl2 = `https://maps.google.com/?q=${lat2},${lng2}`
    

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
            .Bandemat{
             display:flex;
             align-items:center;
             gap:10px;
             font-size:18px;
            }
            .Bandemat div{
             padding-left:10px;
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
             ${afzet ? `Afzet Locatioe: ${afzet}` : ''}
            ${desc ? `<p>Bericht: ${desc}</p>` : ''}
            ${Stockage ? Stockage == 1 ?`<p>BANDEN STOCKAGE:1 SEIZOEN </p>` : `<p>BANDEN STOCKAGE:4 SEIZOEN </p>`  : ''}
            ${region ?`<p>Region: ${region == "WestVla" ? "west-vlaanderen" : ''} ${region == "OostVla" ? "OOST-VLAANDEREN" : ''} ${region == "Antwerpen" ? "ANTWERPEN" : ''}</p>` : ''}
            ${locaties ? `<p>Locatie:${locaties}</p>` : ''}
            ${date1 ? `<p> Montagetijd : ${date1} From:${from1} To:${to1}</p>` : ''}
            ${date2 ? `<p> Montagetijd2 : ${date2} From:${from2} To:${to2}</p>` : ''}
            ${date3 ? `<p> Montagetijd3 : ${date3} From:${from3} To:${to3}</p>` : ''}     

            ${tiresize ? `<div class="Bandemat" >Bandenmaat:<div>${tiresize}</div><div>${tiresize2}</div><div>${tiresize3}</div><div>${tiresize4}</div><div>${tiresize5}</div> </div>` : ''}
            ${chooser ?  chooser == 'velvebroken' ? `KIES INDIEN VAN TOEPASSING:Ventiel afgebroken` : `<p> KIES INDIEN VAN TOEPASSING:Zichtbare schade<p>` : ''}
          
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