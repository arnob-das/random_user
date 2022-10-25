let data = require('../data.json')

module.exports.updateSpecificUser = (req, res, next) => {
    let { _id } = req.params;
    const { name, contact, gender, address, photoUrl, } = req.body;

    if (_id >= 1 && _id <= data.length) {
        const specificUserData = data.find(data => data.id == _id);
        console.log(specificUserData);

        if (name) {
            specificUserData.name = name;
        }
        if (contact) {
            specificUserData.contact = contact;
        }
        if (gender) {
            specificUserData.gender = gender;
        }
        if (address) {
            specificUserData.address = address;
        }
        if (photoUrl) {
            specificUserData.photoUrl = photoUrl;
        }

        res.send(specificUserData);
        res.end();
    } else {
        res.send("Wrong ID or Wrong Input");
        res.end();
    }


}