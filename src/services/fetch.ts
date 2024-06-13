import { Category } from '../types/category'
import { Product } from '../types/product'
import {Cart} from '../types/cart'

const BASE = 'http://localhost:7778/api'

export async function fetchCategories(): Promise<Category[]> {
    const res = await fetch(`${BASE}/category`)
    if (!res.ok) throw new Error('Ошибка загрузки категорий')
    return res.json()
}

export async function fetchProduct(): Promise<Product[]> {
    const res = await fetch(`${BASE}/product`)
    if (!res.ok) throw new Error('Ошибка загрузки товара')
    return res.json()
}

export async function fetchCart(): Promise<Cart[]> {
    const res = await fetch(`${BASE}/cart`);
    if (!res.ok) throw new Error('Ошибка загрузки корзины');
    return res.json();
  }