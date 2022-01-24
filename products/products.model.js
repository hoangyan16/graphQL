const products =[
    {
        id:'redshoe',
        description:'Red Shoe',
        price: 42.12,
        reviews:[]
    },
  {
      id: 'bluejean',
      description:'Blue Jean',
      price: 55.55,
      reviews:[]
  },
];
exports.getAllProducts=()=>{
    return products;
}
exports.getProductByPrice= (min, max)=>{
    return products.filter((product)=>{
        return product.price >= min && product.price <= max;
    })
}
exports.getProductById= (id)=>{
    return products.find(product=> product.id===id);
}
exports.addNewProduct= (id,description, price)=>{
    const newProduct= {
        id,
        description,
        price,
        reviews: []
    }
    products.push(newProduct);
    return newProduct;
}

exports.addNewProductReview= (id,rating, comment)=>{
    const matchedProduct= this.getProductById(id);
    if(matchedProduct){
        const newProductReview= {
            rating,
            comment,
        }
        matchedProduct.reviews.push(newProductReview);
        return newProductReview;
    }
}