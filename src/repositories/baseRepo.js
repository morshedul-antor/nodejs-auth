class BaseRepo {
  constructor(model) {
    this.model = model;
  }

  async get() {
    const data = await this.model.find({}, { __v: 0, password: 0 });
    return data;
  }

  async getWithPaganation(skip = 0, limit = 10) {
    const dataAll = await this.model.find();
    const data = await this.model.find({}, { __v: 0, password: 0 });
    return data;
  }
}

module.exports = BaseRepo;
