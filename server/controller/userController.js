import User from "../models/userModel";

const allUserHandler = async (req, res) => {
    const allUser = await User.find({});
    return res.json(allUser);
}

const userFindByIdHandler = async (req, res) => {

    const user = await User.findByIdAndOne(req.param.id);

    if (!user) return res.status(401).json({ message: "user not found" })

    return res.status(200).json(user);
}


const updateUserByIdHandler = async (req, res) => {

    const user = await User.upadateById(req.param.id);

    if (!user) return res.status(401).json({ message: "user not found" })

    return res.status(200).json(user);
}


const deleteUserByIdHandler = async (req, res) => {

    const user = await User.deleteById(req.param.id);

    if (!user) return res.status(401).json({ message: "user not found" })

    return res.json(user);
}

const createUserhandler = async (req, res) => {

    const { name, email, age } = req.body;

    if (!name || !email || age) {
        return res.status(400).json({ message: 'Require' })
    }

    const user = await User.Create({
        name: name,
        email: email,
        age: age,
    });

    return res.status(200).json(user, { message: "User Successfully Created" })
}

export { allUserHandler, userFindByIdHandler, updateUserByIdHandler, deleteUserByIdHandler, createUserhandler }