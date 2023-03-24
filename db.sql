create TABLE categories (
  categoryId SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

create TABLE product (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  description VARCHAR(255),
  price VARCHAR(255),
  image VARCHAR(255),
  categoryId VARCHAR(255),
  CONSTRAINT fk_product_categories
    FOREIGN KEY(categoryId) 
	    REFERENCES categories(categoryId)
);