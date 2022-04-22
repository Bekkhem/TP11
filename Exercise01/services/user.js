const Users = require("../models/users")

const findById = async(id) => {
    try {
        const user = await Users.findById(id);
        return user;
    } catch (err) {
        throw "User is not found"
    }
}

const findAll = async() => {
    // to do
    try {
        const allUsers = await Users.find({});
        return {
            success: true,
            message: "All user",
            data: allUsers
        };
    } catch (err) {
        return {
            success: false,
            error: err || 'error'
        }
    }

}

const updatePass = async(updateByPass) => {
    // to do
    const { _id, newpassword } = updateByPass;
    const updateuserPass = await Users.findByIdAndUpdate(_id, {
        newpassword
    });
    console.log("updated");
    return {
        success: true,
        message: "User successfull!",
        data: updateuserPass
    };
    // const updatepass = await Users.findOneAndUpdate({})
}

const update = async(updateUsers) => {
    // to do
    const { _id, username, firstName, lastName } = updateUsers;
    const updateUser = await Users.findByIdAndUpdate(_id, {
        username,
        firstName,
        lastName,
    });
    console.log("updated");
    return {
        success: true,
        message: "User successfull!",
        data: updateUser
    };
}

const remove = async(id) => {
    // to do
    const removeUser = await Users.findByIdAndRemove(id);
    console.log("Removed");
    return {
        success: true,
        data: removeUser,
        message: "delete is successfull"
    };
}

module.exports = {
    findById,
    updatePass,
    update,
    remove,
    findAll
}