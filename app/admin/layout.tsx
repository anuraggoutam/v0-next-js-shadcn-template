'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface AdminLayoutProps {
  children: React.ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const pathname = usePathname()

  const menuItems = [
    {
      title: 'Dashboard',
      href: '/admin/dashboard',
      icon: '📊',
    },
    {
      title: 'Products',
      href: '/admin/products',
      icon: '📦',
      children: [
        { title: 'All Products', href: '/admin/products' },
        { title: 'Add Product', href: '/admin/products/new' },
        { title: 'Variants', href: '/admin/products/variants' },
        { title: 'Bundles', href: '/admin/products/bundles' },
        { title: 'Collections', href: '/admin/products/collections' },
      ],
    },
    {
      title: 'Inventory',
      href: '/admin/inventory',
      icon: '📋',
      children: [
        { title: 'Overview', href: '/admin/inventory' },
        { title: 'Stock Movements', href: '/admin/inventory/movements' },
        { title: 'Transfers', href: '/admin/inventory/transfers' },
        { title: 'Warehouses', href: '/admin/inventory/warehouses' },
        { title: 'Low Stock', href: '/admin/inventory/low-stock' },
      ],
    },
    {
      title: 'Orders',
      href: '/admin/orders',
      icon: '🛒',
    },
    {
      title: 'Returns',
      href: '/admin/returns',
      icon: '↩️',
    },
    {
      title: 'Customers',
      href: '/admin/customers',
      icon: '👥',
    },
    {
      title: 'Catalog',
      href: '/admin/catalog',
      icon: '📚',
      children: [
        { title: 'Categories', href: '/admin/categories' },
        { title: 'Brands', href: '/admin/brands' },
        { title: 'Tags', href: '/admin/catalog/tags' },
      ],
    },
    {
      title: 'Marketing',
      href: '/admin/marketing',
      icon: '📢',
      children: [
        { title: 'Discounts', href: '/admin/marketing/discounts' },
        { title: 'Price Rules', href: '/admin/marketing/price-rules' },
        { title: 'Promotions', href: '/admin/marketing/promotions' },
      ],
    },
    {
      title: 'Content',
      href: '/admin/content',
      icon: '📝',
    },
    {
      title: 'Support',
      href: '/admin/support',
      icon: '🎫',
    },
    {
      title: 'Reports',
      href: '/admin/reports',
      icon: '📈',
      children: [
        { title: 'Sales', href: '/admin/reports/sales' },
        { title: 'Inventory', href: '/admin/reports/inventory' },
        { title: 'Customers', href: '/admin/reports/customers' },
      ],
    },
    {
      title: 'Settings',
      href: '/admin/settings',
      icon: '⚙️',
      children: [
        { title: 'General', href: '/admin/settings/general' },
        { title: 'Shipping', href: '/admin/settings/shipping' },
        { title: 'Taxes', href: '/admin/settings/taxes' },
        { title: 'Warehouses', href: '/admin/settings/warehouses' },
        { title: 'Staff', href: '/admin/settings/staff' },
      ],
    },
  ]

  const isActive = (href: string) => {
    return pathname === href || pathname?.startsWith(href + '/')
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        {/* Logo/Header */}
        <div className="p-6 border-b border-gray-800">
          <Link href="/admin/dashboard" className="text-2xl font-bold">
            Admin Panel
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span className="flex-1">{item.title}</span>
                </Link>
                {item.children && isActive(item.href) && (
                  <ul className="ml-8 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
                            isActive(child.href)
                              ? 'bg-gray-800 text-white'
                              : 'text-gray-400 hover:bg-gray-800 hover:text-gray-300'
                          }`}
                        >
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-800">
          <Link
            href="/"
            className="block text-sm text-gray-400 hover:text-white transition-colors"
          >
            ← Back to Store
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-900">
              {menuItems.find((item) => isActive(item.href))?.title || 'Admin'}
            </h1>
            <div className="flex items-center gap-4">
              {/* Notifications, User Menu, etc. */}
              <button className="p-2 text-gray-600 hover:text-gray-900">
                🔔
              </button>
              <div className="h-8 w-8 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  )
}

export default AdminLayout
