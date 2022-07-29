const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', async (req, res) => {
  // Find all categories
  try {
    const categoryData = await Category.findAll({ include: Product });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // Find category by ID
  try {
    const categoryData = await Category.findByPk(req.params.id, { include: Product });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  // Create new category
  try {
    const createCategory = await Category.create(req.body);
    res.status(200).json(createCategory);
  } catch (err) {
    res.status(400).json({ message: 'POST has failed.' })
  }
});

router.put('/:id', async (req, res) => {
  // Update category by ID
  try {
    const updateCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      }
    });
    res.status(200).json(updateCategory);
  } catch (error) {
    res.status(400).json({ message: 'Update has failed' })
  }

});

router.delete('/:id', async (req, res) => {
  // Remove category by ID
  try {
    const removeCategory = await Category.destroy({
      where: {
        id: req.params.id,
      }
    });
    res.status(200).json(removeCategory);
  } catch (error) {
    res.status(400).json({ message: 'Update has failed' })
  }
});

module.exports = router;
