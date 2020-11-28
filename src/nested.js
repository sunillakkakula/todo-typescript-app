"use strict";
const product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
};
console.log('ID : ' + product.id + ' , Price : ' + product.price + ' , Desc : ' + product.details.description);
for (const eachtag of product.tags)
    console.log(eachtag);
//# sourceMappingURL=nested.js.map