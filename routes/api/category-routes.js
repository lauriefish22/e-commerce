const router = require('express').Router();
const { Category, Product } = require('../../models');


// finding all categories
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }

});

// finding a category by its `id` value
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// creating a new category
router.post('/', async (req, res) => {
  // create a new category
  try {
    if (req.body.category_name) {
      const categoryData = Category.create({
        category_name: req.body.category_name
      })
      res.status(200).json({ message: 'Category has been created' })
    } else {
      res.status(400).json({ message: 'You need a category' })
    }
  } catch (err) {
    res.status(500).json(err)
  }
});

// updating a category by its `id` value
router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    if (!categoryData) {
      res.status(400).json({ message: 'No category with this id exists' })
    }
    res.status(200).json({ message: 'Category has been updated' })
  } catch (err) {
    res.status(500).json(err)
  }
});

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.delete(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData[0]) {
      res.status(400)
        .json({ message: 'Category does not exist' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
