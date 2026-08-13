import { useState } from "react";
import { motion } from "motion/react";
import { Gift, Tag, Ticket, Search } from "lucide-react";
import { BottomNav } from "../components/BottomNav";
import { Button } from "../components/Button";

const categories = ["All", "Food", "Shopping", "Entertainment", "Travel"];

const offers = [
  {
    id: 1,
    brand: "McDonald's",
    offer: "50% Off on Large Meal",
    image: "🍔",
    points: 150,
    category: "Food",
    discount: "50%",
    validUntil: "Apr 20, 2026"
  },
  {
    id: 2,
    brand: "Careem",
    offer: "PKR 200 Off on Ride",
    image: "🚗",
    points: 100,
    category: "Travel",
    discount: "PKR 200",
    validUntil: "Apr 15, 2026"
  },
  {
    id: 3,
    brand: "Cinema Gold",
    offer: "Free Movie Ticket",
    image: "🎬",
    points: 200,
    category: "Entertainment",
    discount: "1 Free",
    validUntil: "Apr 30, 2026"
  },
  {
    id: 4,
    brand: "Khaadi",
    offer: "20% Off on Purchase",
    image: "👗",
    points: 250,
    category: "Shopping",
    discount: "20%",
    validUntil: "Apr 25, 2026"
  },
  {
    id: 5,
    brand: "Pizza Hut",
    offer: "Buy 1 Get 1 Free",
    image: "🍕",
    points: 180,
    category: "Food",
    discount: "BOGO",
    validUntil: "Apr 18, 2026"
  },
  {
    id: 6,
    brand: "Daraz",
    offer: "PKR 500 Voucher",
    image: "🛍️",
    points: 300,
    category: "Shopping",
    discount: "PKR 500",
    validUntil: "Apr 22, 2026"
  }
];

export function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const userPoints = 1245;

  const filteredOffers = selectedCategory === "All" 
    ? offers 
    : offers.filter(offer => offer.category === selectedCategory);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pb-20">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 px-6 py-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 backdrop-blur rounded-full p-3">
                  <Gift className="w-6 h-6" />
                </div>
                <h1 className="text-2xl font-black">Marketplace</h1>
              </div>
              <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-full">
                <p className="font-bold">{userPoints} pts</p>
              </div>
            </div>

            {/* Search bar */}
            <div className="bg-white/20 backdrop-blur rounded-2xl px-4 py-3 flex items-center gap-3">
              <Search className="w-5 h-5 text-white/80" />
              <input
                type="text"
                placeholder="Search offers..."
                className="bg-transparent flex-1 text-white placeholder-white/60 outline-none"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="px-6 py-4 overflow-x-auto">
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Offers grid */}
          <div className="px-6 pb-6">
            <div className="grid grid-cols-1 gap-4">
              {filteredOffers.map((offer, index) => (
                <motion.div
                  key={offer.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <div className="p-5">
                    <div className="flex gap-4 mb-4">
                      {/* Brand logo */}
                      <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl w-20 h-20 flex items-center justify-center text-4xl flex-shrink-0">
                        {offer.image}
                      </div>

                      {/* Offer details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="font-black text-gray-800 text-lg">
                            {offer.brand}
                          </h3>
                          <div className="bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-bold whitespace-nowrap">
                            {offer.discount}
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-2 line-clamp-2">
                          {offer.offer}
                        </p>

                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Tag className="w-3 h-3" />
                          <span>Valid until {offer.validUntil}</span>
                        </div>
                      </div>
                    </div>

                    {/* Redeem section */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <div className="flex-1 flex items-center gap-2">
                        <Ticket className="w-5 h-5 text-purple-600" />
                        <div>
                          <p className="text-xs text-gray-600">Redeem for</p>
                          <p className="font-black text-purple-600 text-lg">{offer.points} pts</p>
                        </div>
                      </div>

                      <Button
                        disabled={userPoints < offer.points}
                        className="px-6 py-2"
                      >
                        {userPoints < offer.points ? "Not enough" : "Redeem"}
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredOffers.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No offers found in this category</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <BottomNav />
    </>
  );
}
