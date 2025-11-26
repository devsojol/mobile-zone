"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";

export default function Navbar() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <nav className="shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <Link href="/" className="font-bold text-2xl text-gray-800">
          Mobile Zone
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-500 transition">
            Home
          </Link>
          <Link href="/items" className="hover:text-blue-500 transition">
            Items
          </Link>
          <Link href="/add-product" className="hover:text-blue-500 transition">
            Add Product
          </Link>
          <Link
            href="/manage-products"
            className="hover:text-blue-500 transition"
          >
            Manage Products
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          {session ? (
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="bg-gray-100 px-3 py-1 rounded hover:bg-gray-200 transition"
              >
                {session.user.name}
              </button>
              {open && (
                <div className="absolute right-0 mt-2 bg-white shadow rounded py-2 w-44">
                  <Link
                    href="/add-product"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Add Product
                  </Link>
                  <Link
                    href="/manage-products"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Manage Products
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200 transition"
          >
            Menu
          </button>
          {open && (
            <div className="flex flex-col mt-2 space-y-1 bg-white p-2 shadow rounded">
              <Link href="/" className="hover:bg-gray-100 px-2 py-1 rounded">
                Home
              </Link>
              <Link
                href="/items"
                className="hover:bg-gray-100 px-2 py-1 rounded"
              >
                Items
              </Link>
              <Link
                href="/add-product"
                className="hover:bg-gray-100 px-2 py-1 rounded"
              >
                Add Product
              </Link>
              <Link
                href="/manage-products"
                className="hover:bg-gray-100 px-2 py-1 rounded"
              >
                Manage Products
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
