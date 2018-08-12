var express = require('express');
var login = require('connect-ensure-login');
var router = express.Router();

router.get('/',
  login.ensureLoggedIn(), // ログイン画面に飛ぶように
  function(req, res){
    res.render('profile', { user: req.user });
  }
);

module.exports = router;
