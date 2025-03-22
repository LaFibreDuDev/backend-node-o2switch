import 'dotenv/config';
import { sequelize } from '../../models/associations.js';

async function createTables() {
    await sequelize.sync({ force: true });
}

(async () => {
    try {
        await createTables();
        process.exit();
    } catch (error) {
        console.log(error);
    }
})();