
import { MenuItem, UserReview } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'starter-pack',
    name: 'STARTER PACK GOURMET',
    description: 'Nuestra insignia: Doble carne de pastura (180g), cheddar ahumado, bacon caramelizado en bourbon y nuestra salsa secreta "X". Incluye papas triple cocción.',
    price: 18.50,
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1000&auto=format&fit=crop',
    category: 'burger',
    tags: ['EXCLUSIVE', 'BEST SELLER']
  },
  {
    id: 'la-bestia',
    name: 'LA BESTIA URBANA',
    description: 'Triple smash, cebolla crispy, pepinillos artesanales y un baño de queso suizo fundido. No apta para cardíacos.',
    price: 21.00,
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1000&auto=format&fit=crop',
    category: 'burger'
  },
  {
    id: 'truffle-soul',
    name: 'TRUFFLE SOUL',
    description: 'Carne seleccionada, pasta de trufas negras, hongos silvestres y rúcula selvática. Refinamiento en el asfalto.',
    price: 24.50,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop',
    category: 'burger'
  }
];

export const REVIEWS: UserReview[] = [
  {
    id: '1',
    user: 'Marcos R.',
    handle: '@mrk_foodie',
    text: 'La salsa secreta es literalmente una droga. Volví tres veces esta semana.',
    image: 'https://picsum.photos/seed/user1/400/400'
  },
  {
    id: '2',
    user: 'Elena G.',
    handle: '@elenag_art',
    text: 'El neobrutalismo no solo está en la web, esa burger es una obra de arte agresiva.',
    image: 'https://picsum.photos/seed/user2/400/400'
  },
  {
    id: '3',
    user: 'Tomi V.',
    handle: '@tomi_vibe',
    text: 'Sin intermediarios llega caliente posta. El packaging es de otro planeta.',
    image: 'https://picsum.photos/seed/user3/400/400'
  }
];
