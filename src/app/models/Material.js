import Sequelize, { Model } from 'sequelize';

class Material extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          field: 'MATE_ID',
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          field: 'MATE_NAME',
          allowNull: false,
        },
        packing: {
          type: Sequelize.DECIMAL,
          field: 'MATE_PACKING',
          allowNull: false,
        },
        amount: {
          type: Sequelize.STRING,
          field: 'MATE_AMOUNT',
          allowNull: false,
        },
        observation: {
          type: Sequelize.STRING,
          field: 'MATE_OBSERVATION',
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false, // Incluído para não usar createdAt e updatedAt. Se for necessário me avisa pra atualizar a base
        tableName: 'MATERIAL',
      }
    );
  }
}

export default Material;
