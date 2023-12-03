export const Get_data_products = (productsData, categoriesData) => {
    let transformedProducts = [];

    productsData.forEach((element) => {
        let product = {
            id: element.id,
            title: element.title,
            description: element.description,
            image: element.image,
            price: element.price,
            category: categoriesData.find((cat) => cat.id === element.categoryId)?.name,
            discount_price: element.discount_price,
            discount: element.discount
        };
        transformedProducts.push(product);
    });

    return transformedProducts;
};