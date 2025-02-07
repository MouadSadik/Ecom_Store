"use client"
import { useState } from "react";
import { Input } from "@/components/ui/input"; // ShadCN Input
import { Search } from "lucide-react"; // Search Icon
import { useRouter } from "next/router";

// Define Product Type
type Product = {
  src: string;
  title: string;
  description: string;
  price: string;
  category: "man" | "woman" | "kids";
};

// Props for SearchInput
interface SearchInputProps {
  products: Product[];
}

const SearchInput: React.FC<SearchInputProps> = ({ products }) => {
  const [search, setSearch] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const router = useRouter();

  // Handle Search
  const handleSearch = (value: string) => {
    setSearch(value);
    if (value.trim() === "") {
      setFilteredProducts([]);
      return;
    }

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      {/* Search Input */}
      <div className="relative">
        <Input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10 pr-4 py-2 border rounded-lg"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      {/* Search Results Dropdown */}
      {search && (
        <div className="bg-white shadow-md rounded-lg p-3">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.title}
                className="p-2 border-b last:border-none cursor-pointer hover:bg-gray-100"
                onClick={() => router.push(`/${product.category}`)}
              >
                {product.title} <span className="text-sm text-gray-500">({product.category})</span>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No products found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
