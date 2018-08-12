var records = [
  { id: 1, username: 'jack', password: 'secret' },
  { id: 2, username: 'jill', password: 'birthday' }
];

exports.findById = function(id, none) {
  process.nextTick(function() {
    const target = records.filter(record => record.id === id)[0];
    if (records[idx]) {
      none(null, target);
    } else {
      none(new Error('User ' + id + ' does not exist'));
    }
  });
}

exports.findByUsername = function(username, none) {
  process.nextTick(function() {
    for (var i = 0, len = records.length; i < len; i++) {
      var record = records[i];
      if (record.username === username) {
        return none(null, record);
      }
    }
    return none(null, null);
  });
}
