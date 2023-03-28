const db = require("../db");

class ProductService {
  async getProducts(categoryId, searchQuery) {
    let sqlQuery = `SELECT * FROM product`;
    const sqlValues = [];

    if (categoryId && searchQuery) {
      sqlQuery += ` WHERE categoryId = $1 AND title ILIKE '%${searchQuery}%'`;
      sqlValues.push(parseInt(categoryId));
    } else if (searchQuery) {
      sqlQuery += ` WHERE title ILIKE '%${searchQuery}%'`;
    } else if (categoryId) {
      sqlQuery += ` WHERE categoryId = $1`;
      sqlValues.push(parseInt(categoryId));
    }

    const products = await db.query(sqlQuery, sqlValues);
    return products.rows;
  }

  async getOneProduct(id) {
    const product = await db.query(`SELECT * FROM product where id = $1`, [id]);
    return product.rows[0];
  }

  async createProduct(product) {
    const { title, description, price, image, category } = product;
    const newProduct = await db.query(
      `INSERT INTO product (title, description, price, image, category) values ($1, $2, $3, $4, $5) RETURNING *`,
      [title, description, price, image, category]
    );
    return newProduct.rows[0];
  }

  async updateProduct(product) {
    const { id, title, description, price, image, category } = product;
    const updatedProduct = await db.query(
      `UPDATE product set title = $1, description = $2, price = $3, image = $4, category = $5 WHERE id = $6 RETURNING *`,
      [title, description, price, image, category, id]
    );
    return updatedProduct.rows[0];
  }

  async deleteProduct(id) {
    const product = await db.query(`DELETE FROM product where id = $1`, [id]);
    return product.rows[0];
  }
}

module.exports = new ProductService();
