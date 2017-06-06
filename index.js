'use strict';

let users = [
  { name: "Fake User 0", id: 0 },
  { name: "Fake User 1", id: 1 },
  { name: "Fake User 2", id: 2 },
  { name: "Fake User 3", id: 3 },
  { name: "Fake User 4", id: 4 },
  { name: "Fake User 5", id: 5 },
  { name: "Fake User 6", id: 6 },
  { name: "Fake User 7", id: 7 },
  { name: "Fake User 8", id: 8 },
  { name: "Fake User 9", id: 9 },
  { name: "Fake User 10", id: 10 },
  { name: "Fake User 11", id: 11 },
  { name: "Fake User 12", id: 12 },
  { name: "Fake User 13", id: 13 },
  { name: "Fake User 14", id: 14 },
  { name: "Fake User 15", id: 15 },
  { name: "Fake User 16", id: 16 },
  { name: "Fake User 17", id: 17 },
  { name: "Fake User 18", id: 18 },
  { name: "Fake User 19", id: 19 },
  { name: "Fake User 20", id: 20 },
  { name: "Fake User 21", id: 21 },
  { name: "Fake User 22", id: 22 },
  { name: "Fake User 23", id: 23 },
  { name: "Fake User 24", id: 24 },
  { name: "Fake User 25", id: 25 },
  { name: "Fake User 26", id: 26 },
  { name: "Fake User 27", id: 27 },
  { name: "Fake User 28", id: 28 },
  { name: "Fake User 29", id: 29 },
  { name: "Fake User 30", id: 30 },
  { name: "Fake User 31", id: 31 },
  { name: "Fake User 32", id: 32 },
  { name: "Fake User 33", id: 33 },
  { name: "Fake User 34", id: 34 },
  { name: "Fake User 35", id: 35 },
  { name: "Fake User 36", id: 36 },
  { name: "Fake User 37", id: 37 },
  { name: "Fake User 38", id: 38 },
  { name: "Fake User 39", id: 39 },
  { name: "Fake User 40", id: 40 },
  { name: "Fake User 41", id: 41 },
  { name: "Fake User 42", id: 42 },
  { name: "Fake User 43", id: 43 },
  { name: "Fake User 44", id: 44 },
  { name: "Fake User 45", id: 45 },
  { name: "Fake User 46", id: 46 },
  { name: "Fake User 47", id: 47 },
  { name: "Fake User 48", id: 48 },
  { name: "Fake User 49", id: 49 },
  { name: "Fake User 50", id: 50 },
  { name: "Fake User 51", id: 51 },
  { name: "Fake User 52", id: 52 },
  { name: "Fake User 53", id: 53 },
  { name: "Fake User 54", id: 54 },
  { name: "Fake User 55", id: 55 },
  { name: "Fake User 56", id: 56 },
  { name: "Fake User 57", id: 57 },
  { name: "Fake User 58", id: 58 },
  { name: "Fake User 59", id: 59 },
  { name: "Fake User 60", id: 60 },
  { name: "Fake User 61", id: 61 },
  { name: "Fake User 62", id: 62 },
  { name: "Fake User 63", id: 63 },
  { name: "Fake User 64", id: 64 },
  { name: "Fake User 65", id: 65 },
  { name: "Fake User 66", id: 66 },
  { name: "Fake User 67", id: 67 },
  { name: "Fake User 68", id: 68 },
  { name: "Fake User 69", id: 69 },
  { name: "Fake User 70", id: 70 },
  { name: "Fake User 71", id: 71 },
  { name: "Fake User 72", id: 72 },
  { name: "Fake User 73", id: 73 },
  { name: "Fake User 74", id: 74 },
  { name: "Fake User 75", id: 75 },
  { name: "Fake User 76", id: 76 },
  { name: "Fake User 77", id: 77 },
  { name: "Fake User 78", id: 78 },
  { name: "Fake User 79", id: 79 },
  { name: "Fake User 80", id: 80 },
  { name: "Fake User 81", id: 81 },
  { name: "Fake User 82", id: 82 },
  { name: "Fake User 83", id: 83 },
  { name: "Fake User 84", id: 84 },
  { name: "Fake User 85", id: 85 },
  { name: "Fake User 86", id: 86 },
  { name: "Fake User 87", id: 87 },
  { name: "Fake User 88", id: 88 },
  { name: "Fake User 89", id: 89 },
  { name: "Fake User 90", id: 90 },
  { name: "Fake User 91", id: 91 },
  { name: "Fake User 92", id: 92 },
  { name: "Fake User 93", id: 93 },
  { name: "Fake User 94", id: 94 },
  { name: "Fake User 95", id: 95 },
  { name: "Fake User 96", id: 96 },
  { name: "Fake User 97", id: 97 },
  { name: "Fake User 98", id: 98 },
  { name: "Fake User 99", id: 99 }
];

function processUser(id) {
  let random = (Math.floor(Math.random() * 10) + 1) * 100;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Waited: ', random);

      resolve(id);
    }, random);
  });
}

function startRecursive() {
  // Fetch 10 users from the array
  // Call processUser(users[i].id)
  // Process those 10 users in parallel
  // Wait for those 10 to finish processing
  // Then sum the result of the promise
  // Then recursivly run the next 10 users...
  // Until the `users` array is empty

  // Then finally spit out total collect sum .
  // Your response should be "Total: 4950"

  let temporal, chunk = 10, chunksPromises = [];
  while (users.length) {
    temporal = users.splice(0, chunk);

    let chunkPromises = temporal.map(user => processUser(user.id));

    chunksPromises.push(Promise.all(chunkPromises).then(chunkTotals => {
      return chunkTotals.reduce((sum, x) => sum + x);
    }));
  }

  return Promise.all(chunksPromises).then(chunkTotals => chunkTotals.reduce((sum, x) => sum + x))
}

startRecursive()
  .then(total => {
    console.log('Total: ', total);
  });



