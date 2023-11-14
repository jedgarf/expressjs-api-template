const authModel = (sequelize, Sequelize) => {
    const Auth = sequelize.define("users", {
        id : {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },        
        created_at: {
            type: 'TIMESTAMP',
            allowNull: true
        },
        updated_at:{
            type: 'TIMESTAMP',
            allowNull: true
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        first_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        last_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        token: {
            type: Sequelize.STRING
        },
        is_active: {
            type: Sequelize.BOOLEAN,
            defaultValue: 1
        }
    });

    return Auth;
};

export default authModel;