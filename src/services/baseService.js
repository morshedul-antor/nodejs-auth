const BaseRepo = require("../repositories/baseRepo");

class BaseService {
  constructor(model) {
    this.repo = new BaseRepo(model);
  }

  async create(dataIn) {
    const data = await this.repo.create(dataIn);
    if (!data) {
      throw new Error("Something went wrong!");
    }

    return data;
  }

  async get() {
    const data = await this.repo.get();
    if (!data || data.length === 0) {
      return [];
    }

    return data;
  }

  async getWithPaganation(skip, limit) {
    const data = await this.repo.getWithPaganation(skip, limit);
    if (!data[1] || data[1].length === 0) {
      return [{ result: 0 }, []];
    }

    return data;
  }

  async getById(id) {
    const data = await this.repo.getById(id);
    if (!data) {
      return [];
    }

    return data;
  }

  async getByKey(key) {
    const data = await this.repo.getByKey(key);
    if (!data) {
      throw new Error("No data found!");
    }

    return data;
  }

  async updateById(id, dataUpdate) {
    const doc = await this.repo.getById(id);
    if (!doc) {
      throw new Error("No data found!");
    }

    const data = await this.repo.updateById(id, dataUpdate);
    if (!data) {
      throw new Error("Something went wrong!");
    }

    return data;
  }

  async deleteById(id) {
    const doc = await this.repo.getById(id);
    if (!doc) {
      throw new Error("No data found!");
    }

    const data = await this.repo.deleteById(id);
    if (!data) {
      throw new Error("Something went wrong!");
    }

    return { success: true, message: "Successfully deleted!" };
  }
}

module.exports = BaseService;
