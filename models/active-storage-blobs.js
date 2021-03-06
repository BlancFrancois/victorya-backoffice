// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const ActiveStorageBlobs = sequelize.define('active_storage_blobs', {
    key: {
      type: DataTypes.STRING,
    },
    filename: {
      type: DataTypes.STRING,
    },
    contentType: {
      type: DataTypes.STRING,
    },
    metadata: {
      type: DataTypes.STRING,
    },
    byteSize: {
      type: DataTypes.BIGINT,
    },
    checksum: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'active_storage_blobs',
    underscored: true,
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v5/reference-guide/relationships#adding-relationships.
  ActiveStorageBlobs.associate = (models) => {
  };

  return ActiveStorageBlobs;
};
