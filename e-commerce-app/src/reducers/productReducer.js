const initState = {
    products : [{
        "product_id": "7230192374",
        "product_name": "5 Series",
        "product_brand": "BMW",
        "rating": 1.4,
        "price": 249.14
      }, {
        "product_id": "4195824796",
        "product_name": "Econoline E150",
        "product_brand": "Ford",
        "rating": 2.2,
        "price": 216.62
      }, {
        "product_id": "5574995972",
        "product_name": "Avalanche 1500",
        "product_brand": "Chevrolet",
        "rating": 4.2,
        "price": 363.06
      }, {
        "product_id": "4491876703",
        "product_name": "2500 Club Coupe",
        "product_brand": "GMC",
        "rating": 3.5,
        "price": 201.11
      }, {
        "product_id": "1923695282",
        "product_name": "Riviera",
        "product_brand": "Buick",
        "rating": 2.2,
        "price": 106.82
      }, {
        "product_id": "7017611942",
        "product_name": "F150",
        "product_brand": "Ford",
        "rating": 1.4,
        "price": 498.66
      }, {
        "product_id": "9007580760",
        "product_name": "Highlander",
        "product_brand": "Toyota",
        "rating": 1.8,
        "price": 227.32
      }, {
        "product_id": "1688302700",
        "product_name": "Silverado 2500",
        "product_brand": "Chevrolet",
        "rating": 3.2,
        "price": 360.88
      }, {
        "product_id": "1601148984",
        "product_name": "Cabriolet",
        "product_brand": "Audi",
        "rating": 1.6,
        "price": "416.97"
      }, {
        "product_id": "2677544865",
        "product_name": "Cutlass",
        "product_brand": "Oldsmobile",
        "rating": 4.3,
        "price": 226.60
      }],
    total : 0
}

const productReducer = (state = initState, action) => {
    switch(action.type){
        case "UPDATE_PRODUCTS":
            return {products : [...state.products, ...action.products], total : state.total + action.total };
        default:
            return state;
    }
} 

export default productReducer;