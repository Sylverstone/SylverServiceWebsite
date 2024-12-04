
import dotenv from 'dotenv';

dotenv.config();
import nodemailer from 'nodemailer';

export default function sendmail(dataForm) {
    console.log('Envoyer depuis :', process.env.EMAILOUT);
    
    const transporteur = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
            user: process.env.EMAILIN,
            pass: process.env.PASSWORD,
        },
    });
        
    const html = `<h1>Email Automatique :)</h1>
                  <ul>
                      <li>Nom : ${dataForm.Nom}</li>
                      <li>Prénom : ${dataForm.Prenom}</li>
                      <li>Email : ${dataForm.email}</li>
                      <li>Type d'individu : ${dataForm.TypeEntreprise}</li>
                      <li>Message : ${dataForm.textZone}</li>
                  </ul>`;

    const mailOptions = {
        from: process.env.EMAILIN,
        to: process.env.EMAILOUT,
        subject: "Formulaire Sylver Service",
        html: html,
    };

    let bool = true;
    transporteur.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erreur lors de l\'envoi :', error);
            bool = false;
        } 
    });
    return bool;
}