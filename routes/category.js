const express = require('express');
const router = express.Router();

const {
  create,
  categoryById,
  read,
  update,
  remove,
  list
} = require('../controllers/category');
const { requireSignIn, isAuth, isAdmin } = require('../controllers/auth');
const { userById } = require('../controllers/user');

router.get('/category/:categoryId', read);
router.post('/category/create/:userId', requireSignIn, isAuth, isAdmin, create);
// router.put('/category/:categoryUpdateId/:userId', requireSignIn, isAuth, isAdmin, update);
router.put(
  '/category/:categoryId/:userId',
  requireSignIn,
  isAuth,
  isAdmin,
  update
);

router.delete(
  '/category/:categoryId/:userId',
  requireSignIn,
  isAuth,
  isAdmin,
  remove
);
router.get('/categories', list);

router.param('categoryId', categoryById);
router.param('userId', userById);

module.exports = router;
