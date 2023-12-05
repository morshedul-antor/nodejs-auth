const BaseRepo = require("../repositories/baseRepo");

class BaseService extends BaseRepo {
  async get() {
    const data = await super.get();

    if (!data || data.length === 0) {
      return [];
    }

    return data;
  }
}

module.exports = BaseService;
