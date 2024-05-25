const product = require("../models/product");

const getAllProducts = async(req, res) => {
    const { name,ImageData,description } = req.query;
    const queryObject = {};

    if(name){
        queryObject.name = name;
    }

    if(ImageData){
        queryObject.ImageData = ImageData ;
    }

    if(description){
        queryObject.description = description;
    }

    let apiData = product.find(queryObject);

    if(sort){
        let sortFix = sort.replace("," , " ");
        apiData = apiData.sort(sortFix);
    }

    if(select){
        //let selectFix = select.replace("," , " ");
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 10;

    let skip = (page - 1) * limit;

    apiData = apiData.skip(skip).limit(limit);

    const products = await apiData;
    res.status(200).json({ products, nbHits: products.length });
};

const getAllProductsTesting = async(req, res) => {
    const { name,ImageData,description } = req.query;
    const queryObject = {};

    if(name){
        queryObject.name = name;
    }

    if(ImageData){
        queryObject.ImageData = ImageData ;
    }

    if(description){
        queryObject.description = description;
    }

    let apiData = product.find(queryObject);

    if(sort){
        let sortFix = sort.replace("," , " ");
        apiData = apiData.sort(sortFix);
    }

    if(select){
        //let selectFix = select.replace("," , " ");
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 10;

    let skip = (page - 1) * limit;

    apiData = apiData.skip(skip).limit(limit);

    const products = await apiData;
    res.status(200).json({ products, nbHits: products.length });
};

module.exports = {getAllProducts, getAllProductsTesting};
