let data = require("../data.json");
module.exports.saveRandomUser = (req, res, next) => {

    const { id, gender, name, contact, address, photoUrl } = req.body;

    if (id && (id > data.length) && gender && name && contact && address && photoUrl) {
        data.push(req.body);
        res.send(req.body);
        res.end();
    }
    else {
        res.send("can not save data due to insufficient property in json data");
        res.end();
    }


}