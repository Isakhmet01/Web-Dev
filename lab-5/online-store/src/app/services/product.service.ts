import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  private readonly products: Product[] = [
    // Smartphones (categoryId: 1)
    {
      id: 1,
      name: 'iPhone 15 (128GB)',
      description: 'Apple smartphone, 128GB storage.',
      price: 499990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/search/?text=iPhone%2015%20128GB',
      likes: 0,
      categoryId: 1
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      description: 'Flagship Samsung smartphone.',
      price: 449990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p6b/pc0/1610157.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p6b/pc0/1610157.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p80/pc3/1610164.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9c/pc3/1610165.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/search/?text=Samsung%20Galaxy%20S24',
      likes: 0,
      categoryId: 1
    },
    {
      id: 3,
      name: 'Xiaomi Redmi Note 13',
      description: 'Popular mid-range Xiaomi phone.',
      price: 129990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p77/pdd/15562935.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p77/pdd/15562935.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p5b/pdd/15562936.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p07/pdd/15562939.png?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/search/?text=Redmi%20Note%2013',
      likes: 0,
      categoryId: 1
    },
    {
      id: 4,
      name: 'Google Pixel 8',
      description: 'Google smart with clean Android.',
      price: 379990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha9/h56/86037204172830.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha9/h56/86037204172830.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h68/hbd/86037204205598.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc3/h37/86037204238366.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/search/?text=Google%20Pixel%208',
      likes: 0,
      categoryId: 1
    },
    {
      id: 5,
      name: 'realme 12 Pro',
      description: 'Realme smart with good camera.',
      price: 169990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe2/p1f/79513145.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pe2/p1f/79513145.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p76/pdb/67660229.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p99/pd8/67660234.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/search/?text=realme%2012%20Pro',
      likes: 0,
      categoryId: 1
    },

    // Laptops (categoryId: 2)
    {
      id: 6,
      name: 'MacBook Air M2 (13")',
      description: 'Light laptop for study and work.',
      price: 599990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0a/h85/64213178351646.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/search/?text=MacBook%20Air%20M2%2013',
      likes: 0,
      categoryId: 2
    },
    {
      id: 7,
      name: 'Lenovo IdeaPad 3',
      description: 'Budget laptop for everyday tasks.',
      price: 229990,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h2f/h20/64231858077726.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he0/he8/64231929446430.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/search/?text=Lenovo%20IdeaPad%203%20laptop',
      likes: 0,
      categoryId: 2
    },
    {
      id: 8,
      name: 'ASUS TUF Gaming',
      description: 'Gaming laptop with powerful GPU.',
      price: 499990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4f/h76/86511130116126.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h4f/h76/86511130116126.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h43/h2c/86511130247198.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc9/h99/86511130312734.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/search/?text=ASUS%20TUF%20Gaming%20laptop',
      likes: 0,
      categoryId: 2
    },
    {
      id: 9,
      name: 'HP Pavilion 15',
      description: 'Balanced laptop for work/study.',
      price: 299990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p80/pae/95714977.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p80/pae/95714977.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p47/pae/95714979.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p64/pae/95714978.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/search/?text=HP%20Pavilion%2015%20laptop',
      likes: 0,
      categoryId: 2
    },
    {
      id: 10,
      name: 'Acer Nitro V 15',
      description: 'Gaming laptop series Acer Nitro.',
      price: 459990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcd/hc0/85042181013534.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcd/hc0/85042181013534.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc8/h8e/85042181079070.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h7a/had/85042181144606.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/search/?text=Acer%20Nitro%20V%2015',
      likes: 0,
      categoryId: 2
    },

    // Headphones (categoryId: 3)
    {
      id: 11,
      name: 'AirPods Pro (2nd gen)',
      description: 'Apple wireless earbuds with ANC.',
      price: 129990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/search/?text=AirPods%20Pro%202',
      likes: 0,
      categoryId: 3
    },
    {
      id: 12,
      name: 'Sony WH-1000XM5',
      description: 'Top ANC over-ear headphones.',
      price: 199990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h22/h56/64476310306846.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h22/h56/64476310306846.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9a/pa4/10606243.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb6/pa4/10606244.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/search/?text=Sony%20WH-1000XM5',
      likes: 0,
      categoryId: 3
    },
    {
      id: 13,
      name: 'JBL Tune 510BT',
      description: 'Affordable wireless on-ear JBL.',
      price: 19990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hef/h29/64030233788446.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hef/h29/64030233788446.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h36/ha0/64030236114974.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he5/he2/64030238048286.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/search/?text=JBL%20Tune%20510BT',
      likes: 0,
      categoryId: 3
    },
    {
      id: 14,
      name: 'Samsung Galaxy Buds2 Pro',
      description: 'Samsung true wireless earbuds.',
      price: 89990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8a/ha5/87077988630558.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h8a/ha5/87077988630558.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h79/hdf/87077988368414.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h95/87077988499486.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/search/?text=Galaxy%20Buds2%20Pro',
      likes: 0,
      categoryId: 3
    },
    {
      id: 15,
      name: 'HyperX Cloud II',
      description: 'Gaming headset with mic.',
      price: 49990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h72/he2/63770832764958.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h72/he2/63770832764958.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5a/h48/63770834305054.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h33/hb1/63770833649694.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/search/?text=HyperX%20Cloud%20II',
      likes: 0,
      categoryId: 3
    },

    // Tablets (categoryId: 4)
    {
      id: 16,
      name: 'iPad 10th Gen (64GB)',
      description: 'Apple tablet for study and media.',
      price: 229990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h60/ha0/82273262862366.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h60/ha0/82273262862366.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h34/hab/82272914505758.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb7/h2d/82272914571294.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/search/?text=iPad%2010%2064GB',
      likes: 0,
      categoryId: 4
    },
    {
      id: 17,
      name: 'Samsung Galaxy Tab S9',
      description: 'Premium Android tablet.',
      price: 399990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h39/hbe/82782264557598.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h39/hbe/82782264557598.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf8/pae/78315321.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p87/pae/78315325.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/search/?text=Galaxy%20Tab%20S9',
      likes: 0,
      categoryId: 4
    },
    {
      id: 18,
      name: 'Xiaomi Pad 6',
      description: 'Android tablet with good display.',
      price: 169990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p21/p0b/75463810.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p21/p0b/75463810.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pcd/p0a/75463813.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p5c/p0a/75463817.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/search/?text=Xiaomi%20Pad%206',
      likes: 0,
      categoryId: 4
    },
    {
      id: 19,
      name: 'Huawei MatePad 11',
      description: 'Tablet with stylus support.',
      price: 189990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p7f/p08/65766347.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p7f/p08/65766347.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7c/p15/65766381.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p98/p15/65766382.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/search/?text=Huawei%20MatePad%2011',
      likes: 0,
      categoryId: 4
    },
    {
      id: 20,
      name: 'Lenovo Tab P11',
      description: 'Balanced tablet for everyday use.',
      price: 139990,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hed/h72/79994504445982.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hed/h72/79994504445982.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb7/hdb/79994503921694.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc4/h5b/79994504183838.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/search/?text=Lenovo%20Tab%20P11',
      likes: 0,
      categoryId: 4
    },
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProducts(): Product[] {
    return this.products;
  }
}
