'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { Card } from '../ui/card'
import { Icon } from '@iconify/react'

type Product = {
  id: number
  name: string
  image: string
  totalSales: number
  stock: number
  threshold: number
}

const products: Product[] = [
  {
    id: 1,
    name: 'Aspirin 500mg',
    image: '/images/top-products/1.png',
    totalSales: 13460,
    stock: 450,
    threshold: 100,
  },
  {
    id: 2,
    name: 'Paracetamol 650mg',
    image: '/images/top-products/2.png',
    totalSales: 9820,
    stock: 90,
    threshold: 100,
  },
  {
    id: 3,
    name: 'Vitamin C 1000mg',
    image: '/images/top-products/3.png',
    totalSales: 7560,
    stock: 600,
    threshold: 150,
  },
  {
    id: 4,
    name: 'Vitamin C 1000mg',
    image: '/images/top-products/4.png',
    totalSales: 7560,
    stock: 600,
    threshold: 150,
  },
]

export default function TopSaleProduct() {
  return (
    <Card className="cardBox h-auto">
      <div className="flex justify-between">
        <div>
          <h3 className="mainHead">Inventory Status</h3>
          <h2 className="headValue tracking-tight">Top Sale Product</h2>
        </div>
        <button className="boxButton">
          <Icon icon="tabler:dots" className="text-xl" />
        </button>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        spaceBetween={20}
        slidesPerView={1}
      >
        {products.map((product) => {
          const isLowStock = product.stock < product.threshold

          return (
            <SwiperSlide key={product.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

                {/* Product Info */}
                <div>
                  <span
                    className={`inline-block px-4 py-1 text-sm rounded-full mb-4
                      ${isLowStock
                        ? 'bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-400'
                        : 'bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400'
                      }`}
                  >
                    {isLowStock ? 'Low Stock' : 'In Stock'}
                  </span>

                  <h2 className="text-2xl font-bold 
                    text-gray-900 
                    dark:text-white mb-2">
                    {product.name}
                  </h2>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    Monthly Sales: ${product.totalSales.toLocaleString()}
                  </p>

                  <div className="text-sm 
                    text-gray-700 
                    dark:text-gray-300 mb-2">
                    Stock: {product.stock} units
                  </div>

                  {/* Stock Progress */}
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500
                        ${isLowStock ? 'bg-red-500' : 'bg-blue-600'}
                      `}
                      style={{
                        width: `${Math.min(
                          (product.stock / product.threshold) * 100,
                          100
                        )}%`,
                      }}
                    />
                  </div>
                </div>

                {/* Image */}
                <div className="flex justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-48 h-48 object-contain drop-shadow-lg"
                  />
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Card>
  )
}
