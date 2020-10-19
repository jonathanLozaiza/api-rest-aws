import jwt from 'jsonwebtoken'

export function auth(req, res, next) {
    //read token
    const token = req.header('x-auth-token')

    if (!token) {
        return res.status(400).json({ mgs: "token not found, invalid access" });
    }

    //validation of token
    try {
        const hash = jwt.verify(token, 'secretWord');
        req.user = hash.user;
        next();
    } catch (error) {
        res.status(401).json({ mgs: "Token invalid" })
    }
}