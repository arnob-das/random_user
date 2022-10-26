// import data
let data = require('../data.json')

module.exports.deleteSpecificUser = (req, res, next) => {

    const dbLength = data.length;
    const { _id } = req.params;

    let idPresent = data.find(data => Number(data.id) === Number(_id));

    // if _id is present in data
    if (idPresent) {
        // specific user's position in data(in json file which is an array of objects)
        let deletedUserPosition = data.indexOf(idPresent);

        // delete the specific user's data
        data.splice(deletedUserPosition, 1);

        res.send(data);
        res.end();

    } else {
        res.send("id is not valid");
        res.end();
    }
}