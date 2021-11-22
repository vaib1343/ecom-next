import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import { __error, __success } from "../../../utils/resHandler";
import { verifyToken } from "../../../utils/tokenHelper";
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    switch (req.method) {
        case "POST":
            await accessToken(req, res);
    }
}

const accessToken = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { token } = req.body;
        const verify = verifyToken(token);
        __success(res, {});
    } catch (error) {
        __error(res, error);
    }
};
