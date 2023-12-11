class BaseRepo {
  constructor(model) {
    this.model = model;
  }

  async create(dataIn) {
    const data = new this.model(dataIn);
    return await data.save();
  }

  async get() {
    return await this.model.find({}, { __v: 0, password: 0 });
  }

  async getWithPaganation(skip = 0, limit = 10) {
    const count = await this.model.find();
    const data = await this.model
      .find({}, { __v: 0, password: 0 })
      .skip(skip)
      .limit(limit);
    return [{ result: count.length }, data];
  }

  async getById(id) {
    return await this.model.findById(id, { __v: 0, password: 0 });
  }

  async updateById(id, dataUpdate) {
    dataUpdate.updatedAt = new Date(Date.now() + 6 * 60 * 60 * 1000); //GMT+6

    return await this.model
      .findByIdAndUpdate(id, { $set: dataUpdate }, { new: true })
      .select("-__v");
  }

  async deleteById(id) {
    return await this.model.findByIdAndDelete(id);
  }
}

module.exports = BaseRepo;
