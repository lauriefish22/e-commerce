const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }]
    })
    if (!tagData) {
      res.status(400).json({ message: 'No tags were found' })
    } else {
      res.status(200).json(tagData);
    }

  } catch (err) {
    res.status(500).json(err);


  }
});

router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    })
    if (!tagData) {
      res.status(404).json({ message: 'No product with that id' });

    } else {
      res.status(200).json(tagData);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    if (req.body.tag_name) {
      const tagData = await Tag.create({
        tag_name: req.body.tag_name
      })
      res.status(200).json({ message: 'Tag created' })
    } else {
      res.status(400).json
    }
  } catch (err) {
    res.status(500).json(err)
  }
});


router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      }
    })
    if (!tagData) {
      res.status(400).json({ message: 'No product with that id' });
    } else {

      res.status(200).json({ message: 'Updated' })
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!tagData) {
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
