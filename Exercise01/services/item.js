const Items = require("../models/items")

const findById = async(id) => {

    try {
        const item = await Items.findById(id);
        return {
            success: true,
            data: {
                item
            }
        };
    } catch (err) {
        return {
            success: false,
            error: err || 'error'
        }
    }
}

const findAll = async() => {
    // to do
    try {
        const allItem = await Items.find({});
        return {
            success: true,
            data: allItem
        };
    } catch (err) {
        return {
            success: false,
            error: err || 'error'
        }
    }
}

const create = async(newItem) => {
    const createItem = await Items.create(newItem);
    return {
        success: true,
        message: "Create Item successfull",
        data: createItem
    };
}

const update = async(updateItem) => {
    // to do
    const { _id, name, desc, imageUrl } = updateItem;
    const updatenewItem = await Items.findByIdAndUpdate(_id, {
        name: name,
        desc: desc,
        imageUrl: imageUrl
    });
    return {
        success: true,
        message: "Update Item successfull",
        data: updatenewItem
    };

}

const remove = async(id) => {
    // to doF
    const removeItem = await Items.findByIdAndRemove(id);
    console.log("Removed");
    return {
        success: true,
        message: "delete is successfull",
        data: removeItem
    };
}

module.exports = {
    findById,
    update,
    remove,
    findAll,
    create
}