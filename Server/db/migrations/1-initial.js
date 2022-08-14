'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "properties", deps: []
 * createTable "locations", deps: [properties]
 * createTable "reviews_summaries", deps: [properties]
 *
 **/

var info = {
    "revision": 1,
    "name": "initial",
    "created": "2022-08-14T21:11:37.652Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "properties",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "uuid": {
                    "type": Sequelize.UUID,
                    "field": "uuid",
                    "unique": true,
                    "defaultValue": Sequelize.UUIDV4
                },
                "name": {
                    "type": Sequelize.STRING,
                    "field": "name"
                },
                "image": {
                    "type": Sequelize.STRING,
                    "field": "image"
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "created_at",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updated_at",
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "locations",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "country": {
                    "type": Sequelize.STRING,
                    "field": "country"
                },
                "address": {
                    "type": Sequelize.STRING,
                    "field": "address"
                },
                "latLng": {
                    "type": Sequelize.JSON,
                    "field": "lat_lng"
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "created_at",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updated_at",
                    "allowNull": false
                },
                "PropertyId": {
                    "type": Sequelize.INTEGER,
                    "field": "property_id",
                    "onUpdate": "CASCADE",
                    "onDelete": "SET NULL",
                    "references": {
                        "model": "properties",
                        "key": "id"
                    },
                    "allowNull": true
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "reviews_summaries",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "score": {
                    "type": Sequelize.INTEGER,
                    "field": "score"
                },
                "scoreDescription": {
                    "type": Sequelize.STRING,
                    "field": "score_description"
                },
                "text": {
                    "type": Sequelize.STRING,
                    "field": "text"
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "created_at",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updated_at",
                    "allowNull": false
                },
                "PropertyId": {
                    "type": Sequelize.INTEGER,
                    "field": "property_id",
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "references": {
                        "model": "properties",
                        "key": "id"
                    },
                    "allowNull": true
                }
            },
            {}
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
