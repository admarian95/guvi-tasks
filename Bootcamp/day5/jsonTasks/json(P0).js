var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [
    {
    name: 'bar',
    activities: ['be grumpy', 'eat bread omblet'],
    weight: 8,
    furcolor: 'white'
    }, 
    {
    name: 'foo',
    activities: ['sleep', 'pre-sleep naps'],
    weight: 3
    }
    ]
   }
/*1  Add height and weight to Fluffy */
   if(cat.name==='Fluffy'){
       cat.height="100cm";
       cat.weight= 40;
   }

/*2  Fluffy name is spelled wrongly. Update it to Fluffyy */
cat.name = 'Fluffyy'


//3  List all the activities of Fluffyy’s catFriends.

   for(let i=0;i<cat.catFriends.length;i++){
       console.log(cat.catFriends[i].activities);
   }


   // 4 Print the catFriends names

   for(let i=0;i<cat.catFriends.length;i++){
  console.log(cat.catFriends[i].name);
}

// 5 Print the total weight of catFriends

for(let i=0;i<cat.catFriends.length;i++){
    console.log(cat.catFriends[i].weight);
  }

// 6 Print the total activities of all cats
for(let i=0;i<cat.catFriends.length;i++){
    console.log(cat.catFriends[i].activities.length);
}

// 7 Add 2 more activities to bar & foo cats

for(let i=0;i<cat.catFriends.length;i++){
    console.log(cat.catFriends[i].activities.push('abc','cdef'));
}


// 8 Update the fur color of bar

for(let i=0;i<cat.catFriends.length;i++){
    if(cat.catFriends[i].name == "bar"){
        cat.catFriends[i].furcolor = "brown";
    }
}
console.log(cat);