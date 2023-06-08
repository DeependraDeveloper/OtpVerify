# OtpVerify'

Otp verification using twilio 


    /* Twilio code  
     await client.verify.v2
      .services(process.env.SERVICE_SID)
      .verifications.create({ to: `+91${phone}`, channel: "sms" })
      .then((verification) => {
        return res
         .status(200)
         .json({ message: `otp was successfully sent to ${verification.to}`});
      })
      .catch((err) => {
        return res.status(422).json({ message: err.message });
      });
    */


 /* Twilio Code
     let parameter = await client.verify.v2
       .services(process.env.SERVICE_SID)
       .verificationChecks.create({ to: `+91${phone}`, code: otp })
       .then((verification_check) => {
         return verification_check.status;
       })
       .catch((err) => {
         return err.message;
       });
       

    let parameter = await client.verify.v2
      .services(process.env.SERVICE_SID)
      .verificationChecks.create({ to: `+91${phone}`, code: otp })
      .then((verification_check) => {
        return verification_check.status;
      })
      .catch((err) => {
        return err.message;
      });
      */
