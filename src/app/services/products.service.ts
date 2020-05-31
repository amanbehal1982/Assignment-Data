import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productList: Product[] = [
    { imageURL: 'assets/images/Tile_Image.jpg', buyNow: 'Buy Now', price: '$7.50/ton', imageCap: 'kariba redd+ - zimbabwe', mainHeading: 'Reduced Emissions from Deforestation and Degradation', subHeading: '957,842 lbs. offset', content: 'Protects forests and wildlife on the southern shores of Lake Kariba in Zimbabwe, forming a giant biodiversity corridor.' },
    { imageURL: 'assets/images/Tile_Image.jpg', buyNow: null, price: null, imageCap: 'arcata sunnybrae tract - usa', mainHeading: 'Urban Reforestation', subHeading: '13,033 lbs. offset', content: 'Rehabilitating degraded urban and sub-urban areas through reforestation, adding significant greenery and restoring biodiversity.' },
    { imageURL: 'assets/images/Tile_Image.jpg', buyNow: null, price: null, imageCap: 'wolf creek landfill - usa', mainHeading: 'Reduced Emissions from Deforestation and Degradation', subHeading: '957,842 lbs. offset', content: 'Protects forests and wildlife on the southern shores of Lake Kariba in Zimbabwe, forming a giant biodiversity corridor.' },
    { imageURL: 'assets/images/Tile_Image.jpg', buyNow: null, price: null, imageCap: 'terrapass mixed portfolio - mixed', mainHeading: 'Urban Reforestation', subHeading: '13,033 lbs. offset', content: 'Rehabilitating degraded urban and sub-urban areas through reforestation, adding significant greenery and restoring biodiversity.' },
    { imageURL: 'assets/images/Tile_Image.jpg', buyNow: null, price: null, imageCap: 'gaston county landfill - usa', mainHeading: 'Reduced Emissions from Deforestation and Degradation', subHeading: '957,842 lbs. offset', content: 'Protects forests and wildlife on the southern shores of Lake Kariba in Zimbabwe, forming a giant biodiversity corridor.' },
    { imageURL: 'assets/images/Tile_Image.jpg', buyNow: 'Buy Now', price: '$7.50/ton', imageCap: 'myamyn conservation - australia', mainHeading: 'Urban Reforestation', subHeading: '13,033 lbs. offset', content: 'Rehabilitating degraded urban and sub-urban areas through reforestation, adding significant greenery and restoring biodiversity.' },
    { imageURL: 'assets/images/Tile_Image.jpg', buyNow: null, price: null, imageCap: 'natural pact land art - costa rica', mainHeading: 'Reduced Emissions from Deforestation and Degradation', subHeading: '957,842 lbs. offset', content: 'Protects forests and wildlife on the southern shores of Lake Kariba in Zimbabwe, forming a giant biodiversity corridor.' },
    { imageURL: 'assets/images/Tile_Image.jpg', buyNow: 'Buy Now', price: '$7.50/ton', imageCap: 'nature lab urban forestry - canada', mainHeading: 'Urban Reforestation', subHeading: '13,033 lbs. offset', content: 'Rehabilitating degraded urban and sub-urban areas through reforestation, adding significant greenery and restoring biodiversity.' }
  ];

  constructor() { }

  getProductsList(){
    return this.productList;
  }
}
