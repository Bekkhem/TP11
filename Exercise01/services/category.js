const Categories = require("../models/categories")

const findById = async(id) => {
    const findCate = await Categories.findById(id);
    return {
        success: true,
        message: "Categories found by id " + id,
        data: findCate
    };
}

const findAll = async() => {
    // to do 
    try {
        const allCate = await Categories.find({});
        return {
            success: true,
            message: "All Categories",
            data: allCate
        };
    } catch (err) {
        return {
            success: false,
            error: err || 'error'
        }
    }

}

const create = async(newCategory) => {
    const createCate = await Categories.create(newCategory);
    return {
        success: true,
        message: "Create Categories successfull!",
        data: createCate
    };
}

const update = async(updateCategory) => {
    // to do
    const { _id, name, desc, imageUrl } = updateCategory;
    const updateCate = await Categories.findByIdAndUpdate(_id, {
        name,
        desc,
        imageUrl
    });
    console.log("updated");
    return {
        success: true,
        message: "Up Categories successfull!",
        data: updateCate
    };
}


const remove = async(id) => {
    // to doF
    const removeCate = await Categories.findByIdAndRemove(id);
    console.log("Removed");
    return {
        success: true,
        data: removeCate,
        message: "delete is successfull"
    };
}

module.exports = {
    findById,
    update,
    remove,
    findAll,
    create
}