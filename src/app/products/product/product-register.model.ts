export class ProductRegister{
    title: string;
    price: number;
    description: string;
    categoryId: number;
    images: string[];

    constructor(productRegister: ProductRegister){
      this.title = productRegister.title;
      this.price = productRegister.price;
      this.description = productRegister.description;
      this.categoryId = productRegister.categoryId;
      this.images = productRegister.images || ["https://placeimg.com/640/480/any"];
    }

}
