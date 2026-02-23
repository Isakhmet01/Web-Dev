import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  readonly product = input.required<Product>();

  deleteProduct = output<number>();

  currentImageIndex = 0;

  selectImage(index: number) {
    this.currentImageIndex = index;
  }

  like() {
    this.product().likes += 1;
  }

  onDelete() {
    this.deleteProduct.emit(this.product().id);
  }

  shareWhatsApp() {
    const url = encodeURIComponent(this.product().link);
    window.open(`https://wa.me/?text=Check%20out%20this%20product:%20${url}`, '_blank');
  }

  shareTelegram() {
    const url = encodeURIComponent(this.product().link);
    window.open(`https://t.me/share/url?url=${url}`, '_blank');
  }
}
