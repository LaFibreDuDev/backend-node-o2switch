import 'dotenv/config';
import { join } from 'node:path';
import { readFileSync } from 'node:fs';
import { sequelize } from '../../models/associations.js';

async function seedTables() {
    const sql = readFileSync(
        join(import.meta.dirname, '../../../data/seed.sql'),
        'utf8'
    );
    await sequelize.query(sql);
}

(async () => {
    try {
        await seedTables();
        console.log('ok');
        process.exit();
    } catch (error) {
        console.log(error.message);
    }
})();