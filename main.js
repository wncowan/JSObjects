let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 function studentsLoop(arr){
     arr.forEach(function(value){
         console.log("name: ", value["name"], "cohort: ", value["cohort"])
     })
 }

 function companyLoop(obj){
     for(var key in obj){
         console.log(key);
         var counter = 1;
         obj[key].forEach(function(value){
             console.log(counter + "--" + value["last_name"], value["first_name"]);
             counter++;
         })
     }
 }



 companyLoop(users);