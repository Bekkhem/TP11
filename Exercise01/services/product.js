const Products = require("../models/products")

const findById = async(id) => {
    try {
        const product = await Products.findById(id);
        return {
            success: true,
            message: "Products found by Id: " + id,
            data: product

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
        const allProducts = await Products.find({});
        return {
            success: true,
            data: allProducts
        };
    } catch (err) {
        return {
            success: false,
            error: err || 'error'
        }
    }
}

const create = async(newProduct) => {
    const createProduct = await Products.create(newProduct);
    return {
        success: true,
        message: "Products create successfull",
        data: createProduct
    };
}

const update = async(updateProducts) => {
    // to do
    const { _id, title, category, item, user, imageUrl, desc } = updateProducts;
    const updatenewProducts = await Products.findByIdAndUpdate(_id, {
        title,
        category,
        item,
        user,
        imageUrl,
        desc
    });
    console.log("updated");
    return {
        success: true,
        message: "Update is successfull",
        data: updatenewProducts
    };
}

const remove = async(id) => {
    // to doF
    const removeProducts = await Products.findByIdAndRemove(id);
    console.log("Removed");
    return {
        success: true,
        message: "delete is successfull",
        data: removeProducts
    };
}

module.exports = {
    findById,
    update,
    remove,
    findAll,
    create
}