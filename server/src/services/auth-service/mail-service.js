import {createTransport} from "nodemailer"
import constants from "../../constants"

class MailService {
    constructor(){
        this.transporter = createTransport({
            host:constants.SMTP_HOST,
            port: constants.SMTP_PORT,
             tls: {
        rejectUnauthorized: false,
        minVersion: "TLSv1.2"
    },
            secure:true,
            auth:{
                user:constants.SMTP_USER,
                pass:constants.SMTP_PASSWORD
            }
        })
    }
    async sendActivationEmail(to,link){
        await this.transporter.sendMail({
            from:constants.SMTP_USER,
            to,
            subject:'Accaunt activation code',
            text:`your activation code ${link}`,
            html:`  
             <div>
            <h1>YOUR ACTIVATION CODE </h1>
            <a href="${link}">${link}</a>
             </div>`
        })
    }
}
export default new MailService()