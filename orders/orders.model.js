const orders=[
    {
        date: '2022-01-23',
        subtotal: 87.22,
        items:[
            {
                product:{
                    id: 'redshoe',
                    description:'Old Red Shoe',
                    price: 45.2
                },
                quantity: 2
            }
        ]
    }
  ]
function getAllOrders(){
    return orders
}
module.exports={
    getAllOrders,
}