const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  // find all products
  try {
    const productData = await Product.findAll({
      include: [{ model: Category }, { model: Tag }],

    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);


  }
}),

  router.get('/:id', async (req, res) => {
    // find a single product by its `id`
    try {
      const productData = await Product.findByPk(req.params.id, {
        include: [{ model: Category }, { model: Tag }],
      });
      if (!productData) {
        res.status(404).json({ message: 'No product with that id' });
        return;
      }
      res.status(200).json(productData);
    } catch (err) {
      res.status(500).json(err);
    }
  }),
  // be sure to include its associated Category and Tag data


  // create new product
  router.post('/', async (req, res) => {

    Product.create(req.body)
    try {
      const productData = await Product.create(req.body);
      res.status(200).json(tagData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  });

// update product
router.put('/:id', async (req, res) => {
  // update product data
  try {
    const productData = await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!tagData[0]) {
      res
        .status(400)
        .json({ message: 'No tag found' });
      return;
    }
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const productData = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!productData) {
      res
        .status(400)
        .json({ message: 'No product found' });
      return;
    }
    res.status(200).json({ message: 'Product has been deleted' });
  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;
