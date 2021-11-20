import connectDB from "../../../utils/dbConnect";
import { NextApiRequest, NextApiResponse } from "next";
import { __error, __success } from "../../../utils/resHandler";
import User from '../../../models/user.model'

connectDB();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case "POST":
            Login(req, res);
    }
}

const Login = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { email, password } = req.body;
        const userCheck = await User.find({email});
        
        __success(res, { email, password });
    } catch (error) {
        __error(res, error);
    }
};
