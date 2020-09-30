import passwordGenerator from 'password-generator';
import Mail from '../lib/Mail';

export default {
    async store(req, res) {
        const { name, email } = req.body;

        const user = {
            name,
            email,
            password: passwordGenerator(15, false)
        };

        try {
            await Mail.sendMail({
            from: 'Ju <contatoju@ju.com.br>',
            to: `${name} <${email}>`,
            subject: 'Cadastro de usuário',
            html: `Olá, ${name}, tudo bem com você??`
        })

        } catch (error) {
            console.error(error);
        }
         
        return res.json(user);
    }
}