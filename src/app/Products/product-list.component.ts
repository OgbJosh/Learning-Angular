
import {Component, OnInit} from "@angular/core"
import {IProducts} from "./products"

@Component({
  selector: "product-list",
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductComponent implements OnInit {
  pageTitle: string = "Product List"
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProducts[];
  products: IProducts[]=[
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2019",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "https://www.gstatic.com/webp/gallery3/1.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2019",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "https://www.gstatic.com/webp/gallery3/2_webp_ll.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2019",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "https://www.gstatic.com/webp/gallery3/3.png"
    },
    {
      "productId": 8,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2019",
      "description": "15-inch steel blade hand saw",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "https://www.gstatic.com/webp/gallery3/4.png"
    },
    {
      "productId": 10,
      "productName": "Video Game Controller",
      "productCode": "GMG-0042",
      "releaseDate": "October 15, 2018",
      "description": "Standard two-button video game controller",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "https://www.gstatic.com/webp/gallery3/5_webp_a.png"
    }
];

toggleImage(): void {
  this.showImage = !this.showImage
  };

ngOninit(): void {

  }

  constructor() {
    this.filteredProducts = this.products;
    //this.listFilter = 'cart'
  }

  performFilter(filterBy: string): IProducts[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProducts)=>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1)
  }
}
