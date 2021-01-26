const db = require('./db');
const { Movie, Person } = db.models;

(async () => {
    // Synce 'Movies' table
    await db.sequelize.sync({ force: true });

    try {
        // await sequelize.authenticate();
        // console.log('Connection to the database succesful!');

        // await Movie.create({
        //     title: "Toy Story"
        // });

        // await Movie.create({
        //     title: "The Incredibles"
        // });

        await Promise.all([
            Movie.create({
                title: "Toy Story",
                runtime: 81,
                releaseDate: '1995-11-22',
                isAvailableOnVHS: true
            }),
            Movie.create({
                title: "The Incredibles",
                runtime: 115,
                releaseDate: '2004-04-14',
                isAvailableOnVHS: true
            })
        ]);

        await Person.create({
            firstName: "Christopher",
            lastName: "Jaeger"
        });
        
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            const errors = error.errors.map(err => err.message);
            console.log('Validation errors: ', errors);
        } else {
            throw error;
        }
    }
})();