require('dotenv').config(); 
const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const port = process.env.PORT || 3000;

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);
 
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/message', (req, res) => {
    const twiml = new twilio.twiml.MessagingResponse();

    // Aquí puedes agregar la lógica para procesar el mensaje recibido y agendar la cita

    twiml.message('¡Gracias por tu mensaje! Tu cita ha sido agendada con éxito.');

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
});

app.listen(port, () => {
    console.log(`Servidor activo en el puerto ${port}`);
});
