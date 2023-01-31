// const express = require('express');
// let axios = require('axios');
// var app = express();

// app.post('/', function(req, res, next) {
//   try {
//     let results = req.body.developers.map(async d => {
//       return await axios.get(`https://api.github.com/users/${d}`);
//     });
//     let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

//     return res.send(JSON.stringify(out));
//   } catch {
//     next(err);
//   }
// });

// app.listen(3000);



const express = require('express');
let axios = require('axios');
var app = express();

app.post('/', async function(req, res, next) {
  try {
    let results = await Promise.all(
      req.body.developers.map(async d => {
        try {
          return await axios.get(`https://api.github.com/users/${d}`);
        } catch (error) {
          console.error(error);
          return { error: error.message };
        }
      })
    );
    let out = results.map(r => ({
      name: r.data ? r.data.name : undefined,
      bio: r.data ? r.data.bio : undefined,
      error: r.error
    }));

    return res.send(JSON.stringify(out));
  } catch (error) {
    return next(error);
  }
});

app.listen(3000);
