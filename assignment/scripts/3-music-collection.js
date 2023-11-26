console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
console.log('Hello');

//[x]- Create an empty array named `myCollection`.
let myCollection = [];

//[x]- Create a new object having the above properties.
const myAlbums = {
  title: 'Master of Reality',
  artist: 'Black Sabbath',
  yearPublished: 1971,
};

const myAlbums2 = {
  title: 'Master of Reality 2',
  artist: 'Black Sabbath 2',
  yearPublished: 1972,
};

const myAlbums3 = {
  title: 'Master of Reality 3',
  artist: 'Black Sabbath 3',
  yearPublished: 1973,
};

const myAlbums4 = {
  title: 'Master of Reality 4',
  artist: 'Black Sabbath 4',
  yearPublished: 1974,
};
const myAlbums5 = {
  title: 'Master of Reality 5',
  artist: 'Black Sabbath 5',
  yearPublished: 1975,
};
const myAlbums6 = {
  title: 'Master of Reality 6',
  artist: 'Black Sabbath 6',
  yearPublished: 1976,
};

//[x]- Create a function named `addToCollection`. It should have this basic structure:
function addToCollection(collectionArray, title, artist, yearPublished) {
  let collectionObj = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  };

  collectionArray.push(collectionObj);
  return collectionObj;
}
// console.log('Album 1', addToCollection(myCollection, myAlbums.title, myAlbums.artist, myAlbums.yearPublished));
// console.log('Album 2', addToCollection(myCollection, myAlbums2.title, myAlbums2.artist, myAlbums2.yearPublished));
// console.log('Album 3', addToCollection(myCollection, myAlbums3.title, myAlbums3.artist, myAlbums3.yearPublished));
// console.log('Album 4', addToCollection(myCollection, myAlbums4.title, myAlbums4.artist, myAlbums4.yearPublished));
// console.log('Album 5', addToCollection(myCollection, myAlbums5.title, myAlbums5.artist, myAlbums5.yearPublished));
console.log('Album 6', addToCollection(myCollection, myAlbums6.title, myAlbums6.artist, myAlbums6.yearPublished));
console.log('Album 6', addToCollection(myCollection, 'Master of Puppets', 'Metallica', 1986 ));

console.log("Entire collection album ALL: " + JSON.stringify(myCollection));










// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
