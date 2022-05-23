//store the products array in localstorage as "products"
//store the products array in localstorage as "data"
var data=JSON.parse(localStorage.getItem("data"))||[]
function Product(t,d,p,i){
    this.type=t,
    this.desc=d,
    this.price=p,
    this.image=i
}
document.querySelector("#products").addEventListener("add_product", storeproducts)
function storeproducts(){
  let form=  document.querySelector("#products")
  let desc=form.desc.value
  let type=form.type.value;
  let price=form.price.value;
  let image=form.image.value;
  let pro= new Product(type, desc, price, image )
  data.push(pro)
  localStorage.setItem("data", JSON.stringify(data))
}