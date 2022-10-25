// import data
const data = require('../data.json')

module.exports.getRamdomUser = (req, res, next) => {
    // db(array of objects from json file) length
    let dbLength = data.length;

    // generate ramdom number from 1 to database(array of objects from json file) length
    const ramdomUserId = Math.floor((Math.random() * dbLength) + 1);

    // find random user data
    const randomUserData = data.find(data => Number(data.id) === Number(ramdomUserId));

    // res.status(200).send({
    //     status: 1,
    //     success: ture,
    //     message: "Success",
    //     data: randomUserData
    // });
    res.send(randomUserData);
    res.end();
}