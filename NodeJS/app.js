const express = require('express');
const data = require('./data');

// Initialize App
const app = express();

//Use this one!
app.get('/filter/:filter_1/:filter_2/:filter_3/:filter_4/', (req, res, next) => {

const filters = [req.params['filter_1'],req.params['filter_2'],req.params['filter_3'],req.params['filter_4']];

  const filteredUsers = data.filter(user => {
    let isValid = false;
    for (key in filters) {
      //console.log(key, user[key], filters[key]);



      for (var i = 0; i < 4; i++) {
        console.log(key, user["tags"][i], filters[key]);
        if (filters[key] == user["tags"][i]) {
          isValid = true;
          console.log("true");
        } else {
          //isValid = false;
        }
      }
      }

    return isValid;
  });
  res.send(filteredUsers);
});

app.use('/search/', (req, res, next) => {
  const filters = req.query;
  const filteredUsers = data.filter(user => {
    let isValid = true;
    for (key in filters) {
      console.log(key, user[key], filters[key]);
      isValid = isValid && user[key].includes(filters[key]);
    }
    return isValid;
  });
  res.send(filteredUsers);
});


// Assign route
//One filter
app.use('/filter2/', (req, res, next) => {
  const filters = req.query;



  const filteredUsers = data.filter(user => {
    let isValid = true;
    for (key in filters) {
      console.log(key, user[key], filters[key]);
      isValid = isValid && user[key] == filters[key];
    }
    return isValid;
  });
  res.send(filteredUsers);
});

//Multiple filters but one key
app.use('/filter-old/', (req, res, next) => {
  const filters = req.query;
  const filteredUsers = data.filter(user => {
    let isValid = true;
    for (key in filters) {
      console.log(key, user[key], filters[key]);
      for (var i = 0; i < 4; i++) {
        if (user[key].indexOf(filters[key]) > -1) {
          isValid = true;
        } else {
          isValid = false;
        }
      }


    }
    return isValid;

  });
  res.send(filteredUsers);
});


//Multiple filters and Multiple keys
app.use('/filter/', (req, res, next) => {
  const filters = req.query;
  const filteredUsers = data.filter(user => {
    let isValid = true;
    for (key in filters) {
      console.log(key, user[key], filters[key]);
      for (var i = 0; i < 4; i++) {
        if (user[key].indexOf(filters[key]) > -1) {
          isValid = true;
        } else {
          isValid = false;
        }
      }


    }
    return isValid;

  });
  res.send(filteredUsers);
});

app.use('/searchOld/', (req, res, next) => {
  const filters = req.query;
  const filteredUsers = data.filter(user => {
    let isValid = true;
    for (key in filters) {
      console.log(key, user[key], filters[key]);
      isValid = isValid && user[key].includes(filters[key]);
    }
    return isValid;
  });
  res.send(filteredUsers);
});

// Start server on PORT 5000
app.listen(5000, () => {
  console.log('Server started!');
});
