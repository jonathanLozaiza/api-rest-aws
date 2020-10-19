import Users from "../models/Users";
import bcryptjs from "bcryptjs";


export async function createUser(req, res) {

    const { role, name, email, password } = req.body;

    try {

        //user unique
        let user = await Users.findOne({
            where: {
                email
            }
        });

        if (user) {
            return res.status(400).json({ msg: "user already exists" });
        }

        //Hash password
        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password, salt);

        //create user in database
        user = await Users.create({
            role,
            name,
            email,
            password: hashPassword
        }, {
            fields: [
                'role',
                'name',
                'email',
                'password'
            ]
        });

        if (user) {
            return res.status(200).json({
                msg: "user created successfully",
                date: user
            })
        }


    } catch (error) {
        console.log(error);
        res.status(400).send("ERROR");
    }
}