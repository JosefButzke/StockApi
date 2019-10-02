import Sequelize from 'sequelize';

import Material from '../app/models/Material';

import databaseConfig from '../config/database';

const models = [Material];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
