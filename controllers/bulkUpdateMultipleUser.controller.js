let data = require("../data.json");

module.exports.bulkUpdateMultipleUser = (req, res, next) => {

    let _ids = req.body;
    let bodyIsValid = true;

    _ids.map(_id => {
        let idPresent = data.find(data => Number(data.id) === Number(_id));
        if (idPresent === undefined) {
            // if all ids are not valid
            bodyIsValid = false;
        }
    })

    if (bodyIsValid) {
        _ids.map(_id => {
            let idPresent = data.find(data => Number(data.id) === Number(_id));
            let updateUserPosition = data.indexOf(idPresent);
            data[updateUserPosition].address = "Dhaka, Bangladesh";
        })
        res.send(data);
        res.end();
    } else {
        res.send("ids are not valid");
        res.end();
    }
}