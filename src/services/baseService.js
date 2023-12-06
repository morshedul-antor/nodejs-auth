const BaseRepo = require("../repositories/baseRepo");

class BaseService extends BaseRepo {
  async create(dataIn) {
    const data = await super.create(dataIn);
    return data;
  }

  async get() {
    const data = await super.get();

    if (!data || data.length === 0) {
      return [];
    }

    return data;
  }

  async getWithPaganation(skip, limit) {
    const data = await super.getWithPaganation(skip, limit);

    if (!data[1] || data[1].length === 0) {
      return [{ result: 0 }, []];
    }

    return data;
  }

  async getById(id) {
    const data = await super.getById(id);

    if (!data) {
      return [];
    }

    return data;
  }

  async updateById(id) {
    const data = await super.updateById(id);
    return data;
  }

  async deleteById(id) {
    const data = await super.deleteById(id);
    return data;
  }
}

module.exports = BaseService;
