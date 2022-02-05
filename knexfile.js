module.exports = {
    development: {
        client: 'postgresql',
        connection: {
            database: 'documents',
            user: 'postgres',
            password: 'Admin123'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations',
            loadExtensions: ['.ts']
        }
    },
    staging: {
        client: 'postgresql',
        connection: {
            database: 'documents',
            user: 'postgres',
            password: 'Admin123'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations',
            loadExtensions: ['.ts']
        }
    },
    production: {
        client: 'postgresql',
        connection: {
            database: 'documents',
            user: 'postgres',
            password: 'Admin123'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: '$knex_migrations',
            loadExtensions: ['.ts']
        }
    }
};
