
const accountSid = 'ACdf4c6d341715dc999179021fd39626d7';
const authToken = '8d1bf31b89df82ff5ccde9f4177ea59f';
const twilioClient = require('twilio')(accountSid,authToken)

const numbers = '0123456789'

function generateOTP(){
    let OTP = '';
    for(let i =0; i<6;i++){
        OTP += numbers[Math.floor(Math.random()*10)]
    }
    return OTP
}


exports.sendSmsToNumber = async(req,res,next) => {
    try{
        const {phoneNumber} = req.body
        if(!phoneNumber){
            return res.status(400).json({error:"Phone Number is required"})
        }
        const OTP = generateOTP()
        await twilioClient.messages
        .create({
            body:`Hi,Your one time password for account verification is ${OTP}`,
            to:phoneNumber,
            from:"+16204079176"
        })
        return res.status(200).json({message:"Message Sent Successfuly"})
    }
    catch(err){
        console.log(err)
        return res.status(400).json({message:"Something went wrong"})
    }
}