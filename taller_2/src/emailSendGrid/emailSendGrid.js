const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

//SMS DE TEXTO
twilio_client.messages.create({
    body:"Prueba desde la app del uso de twilio",
    from:"+19705508052",
    to:"+573133186248"
  }).then(message=>console.log(`mensaje enviado ${message.sid}`))
  

function sendEmailConfirmation(CustomerName, orderNroSerie) {
  return `
          <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
      <body>
          <div class="row">
              <div class="col">
                  <label>
                      Prueba desde la app
                  </label>
              </div>
          </div>
          <div class="row">
              <p>
                  <small>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi totam architecto velit numquam optio quis quidem eius. Voluptas quos aperiam iusto voluptatem voluptatum, eos possimus dolorum sed, sequi molestiae ipsa.l
                  </small>
              </p>
          </div>
      </body>
      </html>
  `
}

function getmessage(emailParams) {
    return{
        to:emailParams.toEmail,
        from:'juan.1701812756@ucaldas.edu.co',
        subject:'Confirmacion pedido serie Nombreserie',
        text:`Cordial saludo,${emailParams.customerName}, te confirmamos la recepcion de tu  y se  ha generado una factura con orden de compra
        ${emailParams.orderNroSerie}.
        Agradecemos tu compra.`,
        html:sendEmailConfirmation(
            emailParams.customerName,
            emailParams.orderNroSerie
        )
    }
}


async function sendOrderSerie(emailParams) {
  try {
      await sgMail.send(getmessage(emailParams));
      return{message:'Confirmacion  de pedido recibido, ha sido enviada'};
  } catch (error) {
      const message = 'No se pudo enviar la orden de compra al cliente.';
      console.error(message);
      console.error(error);

      if(error.response) console.error(error.response.body);
      return {message};
  }
}

(async()=>{
    console.log('Se ha enviado el correo electronico');
    await sendOrderSerie();
})

module.exports = {sendOrderSerie}