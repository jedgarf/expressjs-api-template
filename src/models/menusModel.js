const menusModel = (sequelize, Sequelize) => {
    const Menus = sequelize.define("menus", {
        created_at: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updated_at:{
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
            allowNull: false
        },
        code: {
            type: Sequelize.STRING
        },
        search_code: {
            type: Sequelize.STRING
        },
        icon: {
            type: Sequelize.TEXT
        },
        name: {
            type: Sequelize.STRING
        },
        link: {
            type: Sequelize.STRING
        },
        type: {
            type: Sequelize.STRING
        },
        sequence: {
            type: Sequelize.INTEGER
        },
        is_dev: {
            type: Sequelize.INTEGER
        },
        badge_message: {
            type: Sequelize.STRING
        },
        is_active: {
            type: Sequelize.BOOLEAN
        }
    });

    return Menus;
};

export default menusModel;