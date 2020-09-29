export default {
    async store(req, res) {
        const { name, email } = req.body;

        const user = {
            name,
            email,
            password: '123'
        };
        return res.json(user);
    }
}