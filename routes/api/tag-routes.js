const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');


router.get('/', async (req, res) => {
  // Find all tags
  try {
    const tagData = await Tag
      .findAll({ include: Product });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // Find single tag by ID
  try {
    const tagData = await Tag.findByPk(req.params.id, { include: Product });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  // Create a new tag
  try {
    const createTag = await Tag.create(req.body);
    res.status(200).json(createTag);
  } catch (error) {
    res.status(400).json({ message: 'Update has failed' })
  }
});

router.put('/:id', async (req, res) => {
  // Update tag name by ID
  try {
    const updateTag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      }
    });
    res.status(200).json(updateTag);
  } catch (error) {
    res.status(400).json({ message: 'Update has failed' })
  }
});

router.delete('/:id', async (req, res) => {
  // Delete tag by ID
  try {
    const removeTag = await Tag.destroy({
      where: {
        id: req.params.id,
      }
    });
    res.status(200).json(removeTag);
  } catch (error) {
    res.status(400).json({ message: 'Update has failed' })
  }
});

module.exports = router;
