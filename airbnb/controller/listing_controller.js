const listingModel = require('../model/listing_model');

const getListingModel = async (req, res) => {
    try {
        const data = await listingModel.find();
        res.render("listings/index", { data });
    } catch (error) {
        return res.json({ status: false, error: error.message });
    }
}

const getListingById = async (req, res) => {
    try {
        var id = req.params.id;
        const data = await listingModel.findById(id);
        res.render("listings/particular", { data });
    } catch (error) {
        return res.json({ status: false, error: error.message });
    }
}

const postListingData = async (req, res) => {
    try {
        var { title, description, image, price, location, country } = req.body;
        var data1 = new listingModel({
            title,
            description,
            image,
            price, location, country,
        });
        const result = await data1.save();
        const data = await listingModel.find();
        return res.render("listings/index", { data });
    } catch (error) {
        return res.json({ status: false, error: error.message });
    }
}

const postListingDataMultiple = async (req, res) => {
    try {
        const listings = req.body;
        if (!Array.isArray(listings)) {
            return res.status(400).json({ status: false, message: "Expected an array of listings" });
        }

        const result = await listingModel.insertMany(listings);
        return res.json({ status: true, result: result });
    } catch (error) {
        return res.status(500).json({ status: false, error: error.message });
    }
};

const renderEditForm = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await listingModel.findById(id);
        if (!data) return res.status(404).send('Listing not found');
        res.render("listings/update", { data });
    } catch (error) {
        return res.json({ status: false, error: error.message });
    }
};

const updateListingData = async (req, res) => {
    try {
        const userId = req.params.id;
        const { title, description, image, price, location, country } = req.body;
        console.log(req.body);

        const updatedData = {};
        if (title) updatedData.title = title;
        if (description) updatedData.description = description;
        if (image) updatedData.image = image;
        if (price) updatedData.price = price;
        if (location) updatedData.location = location;
        if (country) updatedData.country = country;

        await listingModel.findByIdAndUpdate(
            userId,
            updatedData,
            {
                new: true,
                runValidators: true,
            }
        );

        var data = await listingModel.find();

        return res.render("listings/index", { data });
    } catch (error) {
        return res.json({ status: false, error: error.message });
    }
};


const deleteListingData = async (req, res) => {
    try {
        var id = req.params.id;
        await listingModel.findByIdAndDelete(id);
        const data = await listingModel.find();
        return res.render("listings/index", { data });
    } catch (error) {
        return res.json({ status: false, error: error.message });
    }
}

module.exports = {
    getListingModel,
    renderEditForm,
    postListingDataMultiple,
    getListingById,
    postListingData,
    updateListingData,
    deleteListingData,
}