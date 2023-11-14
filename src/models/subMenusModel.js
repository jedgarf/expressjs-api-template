const subMenusModel = (sequelize, Sequelize) => {
    const SubMenus = sequelize.define("sub_menus", {
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
        menu_id: {
            type: Sequelize.INTEGER
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
        full_name: {
            type: Sequelize.STRING
        },
        link: {
            type: Sequelize.STRING
        },
        sequence: {
            type: Sequelize.INTEGER
        },
        is_main: {
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

    return SubMenus;
};

export default subMenusModel;