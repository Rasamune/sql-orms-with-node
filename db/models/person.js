const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class Person extends Sequelize.Model {}

    Person.init({
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, { sequelize });

    return Person;
}