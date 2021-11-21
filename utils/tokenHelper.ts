import jwt from "jsonwebtoken";
const tokenGenerator = (data) => {
    const token = jwt.sign({ data }, process.env.SECRET_KEY, {
        expiresIn: "2h",
    });
    return token;
};

const verifyToken = (token) => {
    const Veritoken = jwt.verify(token, process.env.SECRET_KEY);
    return Veritoken;
};

export { verifyToken, tokenGenerator };
