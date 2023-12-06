class BaseRepo {
  constructor(model) {
    this.model = model;
  }

  async create(dataIn) {
    return await this.model.insertOne(dataIn);
  }

  async get() {
    return await this.model.find({}, { __v: 0, password: 0 });
  }

  async getWithPaganation(skip = 0, limit = 10) {
    const dataAll = await this.model.find();
    const data = await this.model
      .find({}, { __v: 0, password: 0 })
      .skip(skip)
      .limit(limit);
    return [{ result: dataAll.length }, data];
  }

  async getById(id) {
    return await this.model.findById(id, { __v: 0, password: 0 });
  }

  async updateById(id, dataUpdate) {
    return await this.model.updateOne(
      { _id: id },
      {
        $set: dataUpdate,
      }
    );
  }

  async deleteById(id) {
    return await this.model.deleteOne({ _id: id });
  }
}

module.exports = BaseRepo;
