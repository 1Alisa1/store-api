const db = require("../db");

class CategoriesService {
  async getCategories() {
    const categories = await db.query(`SELECT * FROM categories`);
    return categories.rows;
  }
}

module.exports = new CategoriesService();
