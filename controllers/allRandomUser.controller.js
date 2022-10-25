// import data
const data = require('../data.json')

module.exports.getAllRamdomUsers = (req, res, next) => {

    const { max } = req.query;

    // if "max" query parameter is present
    if (max) {
        // slice data to max limit
        const maxData = data.slice(0, max);
        res.send(maxData);

        // res.status(200).send({
        //     status: 1,
        //     success: ture,
        //     message: "Success",
        //     data: maxData
        // });

        res.end();

    } else {
        // send all data of random users
        res.send(data);

        // res.status(200).send({
        //     status: 1,
        //     success: ture,
        //     message: "Success",
        //     data: data
        // });

        res.end();
    }



}