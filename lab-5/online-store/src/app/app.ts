import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product } from './models/product.model';
import { Category } from './models/category.model';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {
  categories: Category[] = [];
  selectedCategoryId: number | null = null;

  allProducts: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
    this.allProducts = this.productService.getProducts();
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;
    this.filteredProducts = this.allProducts.filter(p => p.categoryId === id);
  }

  handleDelete(id: number) {
    this.allProducts = this.allProducts.filter(p => p.id !== id);

    if (this.selectedCategoryId !== null) {
      this.filteredProducts = this.allProducts.filter(
        p => p.categoryId === this.selectedCategoryId
      );
    }
  }
}

