const productService = require("../services/product.service");

class ProductController {
  async createProduct(req, res) {
    try {
      const product = await productService.createProduct(req.body);
      res.json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getProducts(req, res) {
    try {
      const products = await productService.getProducts(req.query.categoryId, req.query.searchQuery);
      res.json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getOneProduct(req, res) {
    try {
      const product = await productService.getOneProduct(req.params.id);
      res.json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async updateProduct(req, res) {
    try {
      const product = await productService.updateProduct(req.body);
      res.json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async deleteProduct(req, res) {
    try {
      const product = await productService.deleteProduct(req.params.id);
      res.json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = new ProductController();
