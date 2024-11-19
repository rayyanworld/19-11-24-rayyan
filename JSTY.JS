
class employee{
    id;
    name;
    age;
    price;
pro(id,name,age,price){
    this.id=id
    this.name=name
    this.age=age
    this.price=price
    document.write("<h1 style='color: red; text-align:center;'>"+"ID:-"+this.id+"<br>"+"NAME:-"+this.name+"<br>"
        +"AGE:-"+this.age+"<br>"+"PRICE:-"+this.price+"<br>"+"</h1>")
}
}
var rayyan=new employee()
rayyan.pro(111,"rayyan",50,5165456)
