import React from 'react'

const LowStockPage = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Low Stock Alerts</h1>
        <p className="text-gray-600 mt-2">Products with low inventory levels</p>
      </div>

      {/* Page content will go here */}
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-500">Low stock alerts content</p>
      </div>
    </div>
  )
}

export default LowStockPage

