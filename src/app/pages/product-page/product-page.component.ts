import {Component} from "@angular/core";
import {products} from "../../data/product";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent {
  products = products
}
