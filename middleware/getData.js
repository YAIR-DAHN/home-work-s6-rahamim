
// ייבוא המודולים
let fs = require('fs');



// פונקציה ליצירת קובץ ג'ייסון
 function makeJson(data) {
     fs.writeFile('products.json', JSON.stringify(data), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}

// פונקציה לקבלת המידע מהאתר
getData = (req, res, next) => {
     fetch('https://dummyjson.com/products')
        .then(res => res.json())
      .then(makeJson);

        next();
};


module.exports = getData;