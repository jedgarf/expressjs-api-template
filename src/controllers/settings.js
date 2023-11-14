// Models
const db = require("../models");

// initialize variables
const Op = db.Sequelize.Op;


const getMenus = async (req, res) => {
    
    var { id } = req.params;
    var type = req.query.type || 'FEATURE';
    var is_active = req.query.is_active || 1;

    try {

        if (id) {
            var condition = { id: parseInt(id), type: type, is_active: is_active };
            var menus = await db.menusModel.findAll({ where: condition });
        } else {
            var condition = { type: type, is_active: is_active };
            var menus = await db.menusModel.findAll({ where: condition });
        }

        if (menus.length > 0) {
            res.status(200);
            res.json({'data': menus});
        } else {
            res.status(200);
            res.json({ message: "No records found." });
        }

    } catch (error) {
        res.status(500);
        res.json({ message: error.stack });
    }
    res.end();

}

const getSubMenus = async (req, res) => {
    
    var { id } = req.params;
    var is_active = req.query.is_active || 1;

    try {

        if (id) {
            var condition = { id: parseInt(id), is_active: is_active };
            var sub_menus = await db.subMenusModel.findAll({ where: condition });
        } else {
            var condition = { is_active: is_active };
            var sub_menus = await db.subMenusModel.findAll({ where: condition });
        }

        if (sub_menus.length > 0) {
            res.status(200);
            res.json({'data': sub_menus});
        } else {
            res.status(200);
            res.json({ message: "No records found." });
        }

    } catch (error) {
        res.status(500);
        res.json({ message: error.stack });
    }
    res.end();

}

module.exports = {
    getMenus,
    getSubMenus
};