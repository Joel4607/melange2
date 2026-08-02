import React from 'react';
import { MapPin, ShoppingBag, Pill, Package, Clock, ShieldCheck, Wallet } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen max-w-md mx-auto bg-gray-50 flex flex-col relative pb-20 shadow-xl">
      
      {/* 1. Header Section */}
      <div className="bg-[#166534] text-white p-6 rounded-b-3xl shadow-md">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">MÉLANGE</h1>
            <p className="text-sm text-green-100 flex items-center mt-1">
              <MapPin size={14} className="mr-1" /> UG Legon Campus
            </p>
          </div>
          <div className="bg-white/20 p-2 rounded-full">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-green-800 font-bold">
              JS
            </div>
          </div>
        </div>

        {/* Simulated Wallet Card */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-2xl p-4 shadow-lg text-white">
          <p className="text-sm opacity-90 mb-1">Simulated Wallet Balance</p>
          <div className="flex justify-between items-end">
            <h2 className="text-3xl font-bold">GHS 150.00</h2>
            <button className="bg-white text-orange-600 px-3 py-1 rounded-full text-sm font-semibold hover:bg-orange-50 transition">
              Top Up
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Services Grid */}
      <div className="p-5 flex-1">
        <h3 className="text-lg font-bold text-gray-800 mb-4">What do you need today?</h3>
        
        <div className="grid grid-cols-2 gap-4">
          
          {/* Card 1: Madina Market */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center cursor-pointer hover:border-green-500 transition">
            <div className="bg-green-100 p-3 rounded-full mb-3 text-green-700">
              <ShoppingBag size={24} />
            </div>
            <h4 className="font-semibold text-gray-800 text-sm">Madina Market</h4>
            <p className="text-xs text-gray-500 mt-1">Heavy groceries & provisions</p>
          </div>

          {/* Card 2: Campus Errand */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center cursor-pointer hover:border-green-500 transition">
            <div className="bg-orange-100 p-3 rounded-full mb-3 text-orange-600">
              <Package size={24} />
            </div>
            <h4 className="font-semibold text-gray-800 text-sm">Campus Drop-off</h4>
            <p className="text-xs text-gray-500 mt-1">Hostel to Library deliveries</p>
          </div>

          {/* Card 3: Night Market */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center cursor-pointer hover:border-green-500 transition">
            <div className="bg-blue-100 p-3 rounded-full mb-3 text-blue-600">
              <Clock size={24} />
            </div>
            <h4 className="font-semibold text-gray-800 text-sm">Night Market</h4>
            <p className="text-xs text-gray-500 mt-1">Late night food runs</p>
          </div>

          {/* Card 4: Pharmacy */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center cursor-pointer hover:border-green-500 transition">
            <div className="bg-red-100 p-3 rounded-full mb-3 text-red-600">
              <Pill size={24} />
            </div>
            <h4 className="font-semibold text-gray-800 text-sm">Pharmacy</h4>
            <p className="text-xs text-gray-500 mt-1">Meds & toiletries pickup</p>
          </div>

        </div>

        {/* 3. Trust Banner (From the Flyer) */}
        <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-4 flex items-center">
          <ShieldCheck className="text-green-600 mr-3 shrink-0" size={28} />
          <div>
            <h4 className="text-green-800 font-bold text-sm">I run it, so you don't have to.</h4>
            <p className="text-green-700 text-xs mt-1">Save time. Reduce stress. Get more done.</p>
          </div>
        </div>
      </div>

      {/* 4. Bottom Navigation Bar */}
      <div className="fixed bottom-0 w-full max-w-md bg-white border-t border-gray-200 flex justify-around p-3 pb-5">
        <button className="flex flex-col items-center text-green-700">
          <MapPin size={20} />
          <span className="text-[10px] mt-1 font-semibold">Home</span>
        </button>
        <button className="flex flex-col items-center text-gray-400 hover:text-green-700 transition">
          <ShoppingBag size={20} />
          <span className="text-[10px] mt-1 font-semibold">Orders</span>
        </button>
        <button className="flex flex-col items-center text-gray-400 hover:text-green-700 transition">
          <Wallet size={20} />
          <span className="text-[10px] mt-1 font-semibold">Wallet</span>
        </button>
      </div>

    </main>
  );
}