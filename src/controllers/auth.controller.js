import Users from "../models/Users";
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken';
import sendResetLink from '../emails/sendEmail';


export async function signIn(req, res) {

    const { email, password } = req.body;

    try {
        let user = await Users.findOne({
            where: {
                email
            }
        });

        if (!user) {
            return res.status(400).json({ msg: "user not found" });
        }

        //verify password
        const passVerify = await bcryptjs.compare(password, user.password);
        if (!passVerify) {
            return res.status(400).json({ msg: "password invalid" })
        }

        //create and sign JWT
        const payload = {
            user: { id: user.id }
        }

        //sign JWT
        jwt.sign(payload, 'secretWord', {
            expiresIn: '1h'
        }, (error, token) => {
            if (error) throw error;
            res.json({ token })

        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: "error"
        })
    }


}

// get registered user
export async function userAutenticate(req, res) {

    try {
        const user = await Users.findOne({
            attributes: ['id', 'role', 'name'],
            where: {
                id: req.user.id
            }
        })
        res.json({ user })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'ERROR' })
    }
}


export async function forgetPass(req, res) {
    const { email } = req.body;
    console.log(email);
    try {
        const thisUser = await Users.findOne({
            where: {
                email
            }
        });

        if (thisUser) {
            const id = thisUser.id;
            const request = {
                id,
                email: thisUser.email,
            };

            sendResetLink(thisUser.email, id);
        }
        res.status(200).json({ msg: "successfully" });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};