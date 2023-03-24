const Router = require("express");

const router = new Router();

const productController = require("../controllers/product.controller");
const categoriesController = require("../controllers/categories.controller");

router.post("/product", productController.createProduct);
router.get("/products", productController.getProducts);
router.get("/products/:id", productController.getOneProduct);
router.put("/products", productController.updateProduct);
router.delete("/products/:id", productController.deleteProduct);

router.get("/categories", categoriesController.getProductCategories);

module.exports = router;
