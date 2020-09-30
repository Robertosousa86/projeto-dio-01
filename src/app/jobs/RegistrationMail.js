import Mail from '../lib/Mail';

export default {
    key: 'Registration',
    options: {
        delay: 5000,
        priority: 3
    },

    async handle ({ data }) {
        const { user } = data;

        try {
            await Mail.sendMail({
            from: 'Ju <contatoju@ju.com.br>',
            to: `${user.name} <${user.email}>`,
            subject: 'Cadastro de usuário',
            html: `Olá, ${user.name}, tudo bem com você??`
        });

        } catch (error) {
            console.error(error);
        }
    }


}
/*

         

*/