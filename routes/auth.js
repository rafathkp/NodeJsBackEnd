const express = require('express');
const router = express.Router();

const {
  signup,
  signIn,
  signout,
  requireSignIn
} = require('../controllers/auth');
const { userSignupValidator } = require('../validator');

router.post('/signup', userSignupValidator, signup);
router.post('/signIn', signIn);
router.get('/signout', signout);

module.exports = router;
