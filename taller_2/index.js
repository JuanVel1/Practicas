require('dotenv').config();
const accountSID = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const { EmailAddress } = require('@sendgrid/helpers/classes');
const sgMail = require('@sendgrid/mail')
const express = require('express');
const req = require('express/lib/request');
const app = express();
const twilio_client = require('twilio')(accountSID, authToken)
const sgMailSendGrid = require('./src/emailSendGrid/emailSendGrid')


app.post('/api/v1/sendgrid', async(req, res, next)=>{
    try {
      res.json(await sgMailSendGrid.sendOrderSerie(req.body))
    } catch (error) {
      next(error)
    }
  })


