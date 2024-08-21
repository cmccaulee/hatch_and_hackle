import UserModel from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const UserController = {
    "register": async (req, res) => {
        try {
            const newUser = await UserModel.create(req.body);
            const userToken = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
            return res
                .cookie('userToken', userToken, { "httpOnly": true })
                .status(201)
                .json(newUser);
        } catch (err) {
            res.status(400).json(err);
        }
    },
    "logout": async (req, res) => {
        res.clearCookie('userToken');
        return res.status(200).json({ message: "Logged out successfully" });
    },
    "login": async (req, res) => {
        try {
            const user = await UserModel.findOne({ "email": req.body.email });

            if (!user) {
                return res.status(400).json({ "errors": "Invalid credentials" });
            }

            const isCorrectPassword = await bcrypt.compare(req.body.password, user.password);

            if (!isCorrectPassword) {
                return res.status(400).json({ "errors": "Invalid credentials" });
            }

            const userToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
            return res
                .cookie('userToken', userToken, { "httpOnly": true })
                .status(200)
                .json(user);
        }
        catch (err) {
            res.status(400).json(err);
        }
    },

}
export default UserController;