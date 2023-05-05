# e-commerce

## SITE

-   [Recording](https://drive.google.com/file/d/1XEz3QELnXeSal_Oh2KS3lpqoS1ZTWsvw/view)

## Description

This project uses Mysql and Sequelize in the backend to be able to display products, tags and categories for the user. Insomnia was used to test the get, post and put requests.

## Technology Used and Credit

-   [Express](https://expressjs.com/)
-   [NodeJS](https://nodejs.org/en)
-   [Sequelize](https://sequelize.org/)
-   [MySql](https://dev.mysql.com/doc/refman/8.0/en/)
-   [Insomnia](https://insomnia.rest/download)

## Installations

-   NodeJS
-   Express
-   Sequelize
-   Mysql
-   Dotenv

## Code Example

This is a snippet of code is an example of how we are able to reach the categories. Using the same method, we are able to find products and tags as well.

```router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }

});

```

## Learning Points

This was a great opportunity to learn more about MySql and sequelize and how these are great tools to access information in databases.
