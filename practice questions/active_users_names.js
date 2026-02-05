const users = [
  {name:"A", active:true},
  {name:"B", active:false},
  {name:"C", active:true}
];

console.log(users.filter(u => u.active).map(u => u.name));
