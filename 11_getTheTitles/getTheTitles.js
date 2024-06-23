const getTheTitles = function(books) {
    titles = [];
    books.map((item) => {
        titles.push(item.title)
   });
   return titles
};

// Do not edit below this line
module.exports = getTheTitles;
