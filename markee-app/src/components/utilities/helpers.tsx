import { DropdownMenu } from '@radix-ui/themes'

import img1 from '../../assets/img-card1.jpg'
import img2 from '../../assets/img-card2.jpg'
import img3 from '../../assets/img-card3.jpg'
import img4 from '../../assets/img-card4.jpg'
import img5 from '../../assets/img-card5.jpg'
import img6 from '../../assets/img-card6.jpg'
import img7 from '../../assets/img-card7.jpg'
import img8 from '../../assets/free-stock.jpg'

export const Images = [img1, img2, img3, img4, img5, img6, img7, img8]

export function getRandomElement(arr: any) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

export const Years = [2021, 2022, 2023, 2024]
export const Quarters = ["I", "II", "III", "IV"]
export const Products = ["Hotels", "Suites", "Webinar Halls", "Beach Property", "Adventure Camp", "Home Stay", "Luxury Accommodation", "Priority Service", "Palace Stays", "Heritage Property", "Resorts", "Resto-bars", "Co brand - Credit Card"]
export const Status = ["Live Campaign", "Pending Launch", "Completed Campaigns", "In Development"]
export const Languages = ["English", "Hebrew", "Spanish"]

export const Locations = [
    { id: 'en-us', name: 'United States' },
    { id: 'en-uk', name: 'United Kingdom' },
    { id: 'en-ca', name: 'Canada' },
    { id: 'en-au', name: 'Australia' },
    { id: 'en-nz', name: 'New Zealand' },
    { id: 'en-ie', name: 'Ireland' },
    { id: 'he-il', name: 'Israel' },
    { id: 'es-es', name: 'Spain' },
    { id: 'es-mx', name: 'Mexico' },
    { id: 'es-ar', name: 'Argentina' },
    { id: 'es-co', name: 'Colombia' },
    { id: 'es-cl', name: 'Chile' },
    { id: 'es-pe', name: 'Peru' },
    { id: 'es-ve', name: 'Venezuela' },
    { id: 'es-ec', name: 'Ecuador' }
];
export function formatCurrency(number: any) {
    if (isNaN(number) || number === null || number === undefined) {
      return '$0';
    }
  
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD',
      minimumFractionDigits: number % 1 === 0 ? 0 : 2,
      maximumFractionDigits: 2
    }).format(number);
  }
  
  export function formatNumber(number: any) {
    if (isNaN(number) || number === null || number === undefined) {
      return '0';
    }
  
    return new Intl.NumberFormat('en-US').format(number);
  }
  