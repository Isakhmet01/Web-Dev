import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
    imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  // products: Product[] = [
  //   {
  //     id: 1,
  //     name: 'iPhone 15',
  //     description: 'Latest Apple smartphone',
  //     price: 500000,
  //     rating: 4.8,
  //     image: 'https://picsum.photos/200',
  //     images: [],
  //     link: 'https://kaspi.kz'
  //   }
  // ];
  products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'You won\'t regret buying it.',
      price: 10000,
      rating: 4.5,
      image: 'https://picsum.photos/seed/p1/400/300',
      images: [
        'https://picsum.photos/seed/p1a/400/300',
        'https://picsum.photos/seed/p1b/400/300',
        'https://picsum.photos/seed/p1c/400/300',
      ],
      link: 'https://kaspi.kz'
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'You won\'t regret buying it.',
      price: 20000,
      rating: 4.2,
      image: 'https://picsum.photos/seed/p2/400/300',
      images: [
        'https://picsum.photos/seed/p2a/400/300',
        'https://picsum.photos/seed/p2b/400/300',
        'https://picsum.photos/seed/p2c/400/300',
      ],
      link: 'https://kaspi.kz'
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'You won\'t regret buying it.',
      price: 30000,
      rating: 4.7,
      image: 'https://picsum.photos/seed/p3/400/300',
      images: [
        'https://picsum.photos/seed/p3a/400/300',
        'https://picsum.photos/seed/p3b/400/300',
        'https://picsum.photos/seed/p3c/400/300',
      ],
      link: 'https://kaspi.kz'
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'You won\'t regret buying it.',
      price: 40000,
      rating: 4.0,
      image: 'https://picsum.photos/seed/p4/400/300',
      images: [
        'https://picsum.photos/seed/p4a/400/300',
        'https://picsum.photos/seed/p4b/400/300',
        'https://picsum.photos/seed/p4c/400/300',
      ],
      link: 'https://kaspi.kz'
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'You won\'t regret buying it.',
      price: 50000,
      rating: 4.9,
      image: 'https://picsum.photos/seed/p5/400/300',
      images: [
        'https://picsum.photos/seed/p5a/400/300',
        'https://picsum.photos/seed/p5b/400/300',
        'https://picsum.photos/seed/p5c/400/300',
      ],
      link: 'https://kaspi.kz'
    },
    {
      id: 6,
      name: 'Product 6',
      description: 'You won\'t regret buying it.',
      price: 60000,
      rating: 4.3,
      image: 'https://picsum.photos/seed/p6/400/300',
      images: [
        'https://picsum.photos/seed/p6a/400/300',
        'https://picsum.photos/seed/p6b/400/300',
        'https://picsum.photos/seed/p6c/400/300',
      ],
      link: 'https://kaspi.kz'
    },
    {
      id: 7,
      name: 'Product 7',
      description: 'You won\'t regret buying it.',
      price: 70000,
      rating: 4.6,
      image: 'https://picsum.photos/seed/p7/400/300',
      images: [
        'https://picsum.photos/seed/p7a/400/300',
        'https://picsum.photos/seed/p7b/400/300',
        'https://picsum.photos/seed/p7c/400/300',
      ],
      link: 'https://kaspi.kz'
    },
    {
      id: 8,
      name: 'Product 8',
      description: 'You won\'t regret buying it.',
      price: 80000,
      rating: 4.1,
      image: 'https://picsum.photos/seed/p8/400/300',
      images: [
        'https://picsum.photos/seed/p8a/400/300',
        'https://picsum.photos/seed/p8b/400/300',
        'https://picsum.photos/seed/p8c/400/300',
      ],
      link: 'https://kaspi.kz'
    },
    {
      id: 9,
      name: 'Product 9',
      description: 'You won\'t regret buying it.',
      price: 90000,
      rating: 4.4,
      image: 'https://picsum.photos/seed/p9/400/300',
      images: [
        'https://picsum.photos/seed/p9a/400/300',
        'https://picsum.photos/seed/p9b/400/300',
        'https://picsum.photos/seed/p9c/400/300',
      ],
      link: 'https://kaspi.kz'
    },
    {
      id: 10,
      name: 'Product 10',
      description: 'You won\'t regret buying it.',
      price: 100000,
      rating: 4.8,
      image: 'https://picsum.photos/seed/p10/400/300',
      images: [
        'https://picsum.photos/seed/p10a/400/300',
        'https://picsum.photos/seed/p10b/400/300',
        'https://picsum.photos/seed/p10c/400/300',
      ],
      link: 'https://kaspi.kz'
    },
  ];

}
