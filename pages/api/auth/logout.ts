import { NextApiRequest, NextApiResponse } from "next";
import { __error } from "../../../utils/resHandler";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    switch (req.method) {
        case "POST":
            await logout(req, res);
    }
}

const logout = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        
    } catch (error) {
        console.log(error);
        __error(res, error);
    }
};
