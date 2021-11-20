import bcrypt from "bcryptjs";

const verifyPassword = async (
    password: string,
    newPassword: string
): Promise<boolean> => {
    const verify = await bcrypt.compare(password, newPassword);
    return verify;
};

const generatePassword = async (password: string): Promise<String> => {
    const genPass = await bcrypt.hash(password, 10);
    return genPass;
};

export { verifyPassword, generatePassword };
