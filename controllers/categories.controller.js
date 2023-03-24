const categoriesService = require("../services/categories.service");

class CategoriesController {
  async getProductCategories(req, res) {
    try {
      const categories = await categoriesService.getCategories();
      res.json(categories);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = new CategoriesController();
