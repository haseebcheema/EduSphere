import loginUser from "../services/auth.service.js";
import generateToken from "../services/token.service.js";

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await loginUser(email, password);
      const token = generateToken(user);
      res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'Strict' });
      res.status(200).json({ message: 'Login successful!' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

export default login;