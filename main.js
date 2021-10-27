function Car(id, name){
  this.id = id,
  this.name = name
}

function renderList(list){
  list.forEach(car => {
    const ferrari = new Car(car.Model_ID, car.Model_Name)
    let list = document.getElementById('ferrari-list');
    let node = document.createElement('span');
    node.innerText = `${ferrari.name}`;
    list.appendChild(node);
  })
}

fetch('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/ferrari?format=json', {
}).then(async res => {
  const data = await res.json();
  const carList = data.Results;
  renderList(carList);
});