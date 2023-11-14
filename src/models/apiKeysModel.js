const apiKeysModel = (sequelize, Sequelize) => {
    const ApiKeys = sequelize.define("valid_api_keys", {
        created_at: {
            type: Sequelize.STRING
        },
        api_key: {
            type: Sequelize.STRING
        },
        class: {
            type: Sequelize.STRING
        },
        is_active: {
            type: Sequelize.BOOLEAN
        }
    });

    return ApiKeys;
};

export default apiKeysModel;