import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FaPlus, FaMinus, FaChevronDown } from 'react-icons/fa';
import Breadcrumb from '../components/Breadcrumb';

const productsData = [
  {
    id: 1,
    img: "/assets/products/p1.webp",
    title: "Portfolio Website Templates",
    price: { old: "$20.00", current: "$10.00" },
    category: "Animal & Pets",
    rating: 4,
    popularity: 100,
    latest: new Date('2025-10-26T10:00:00Z'),
  },
  {
    id: 2,
    img: "/assets/products/p2.webp",
    title: "Nail Art Website Template",
    price: { old: "$20.00", current: "$10.00" },
    category: "Fashion & Beauty",
    rating: 5,
    popularity: 120,
    latest: new Date('2025-10-25T10:00:00Z'),
  },
  {
    id: 3,
    img: "/assets/products/p3.webp",
    title: "Beauty Tips Website Template",
    price: { old: "$20.00", current: "$10.00" },
    category: "Fashion & Beauty",
    rating: 3,
    popularity: 80,
    latest: new Date('2025-10-24T10:00:00Z'),
  },
  {
    id: 4,
    img: "/assets/products/p1.webp",
    title: "Pet Care Website Template",
    price: { old: "$25.00", current: "$12.50" },
    category: "Animal & Pets",
    rating: 5,
    popularity: 150,
    latest: new Date('2025-10-23T10:00:00Z'),
  },
  {
    id: 5,
    img: "/assets/products/p2.webp",
    title: "Modern Art Portfolio",
    price: { old: "$30.00", current: "$15.00" },
    category: "Art & Design",
    rating: 4,
    popularity: 90,
    latest: new Date('2025-10-22T10:00:00Z'),
  },
  {
    id: 6,
    img: "/assets/products/p3.webp",
    title: "Fashion Blog Template",
    price: { old: "$18.00", current: "$9.00" },
    category: "Fashion & Beauty",
    rating: 4,
    popularity: 110,
    latest: new Date('2025-10-21T10:00:00Z'),
  },
];

const ShopByIndustry = () => {
  const [filters, setFilters] = useState({
    industries: [],
    minPrice: '1',
    maxPrice: '15',
    rating: 0,
  });
  const [openFilters, setOpenFilters] = useState({
    industries: true,
    price: true,
    rating: true,
  });
  const [sortBy, setSortBy] = useState('default');
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const priceSliderRef = useRef(null);

  // Define the total price range for the slider
  const MIN_PRICE_RANGE = 1;
  const MAX_PRICE_RANGE = 15; // Let's assume a max of $50 for the slider range

  const minPricePercent = ((Math.max(parseFloat(filters.minPrice), MIN_PRICE_RANGE) - MIN_PRICE_RANGE) / (MAX_PRICE_RANGE - MIN_PRICE_RANGE)) * 100;
  const maxPricePercent = ((Math.min(parseFloat(filters.maxPrice), MAX_PRICE_RANGE) - MIN_PRICE_RANGE) / (MAX_PRICE_RANGE - MIN_PRICE_RANGE)) * 100;

  // Define the desired order for industries
  const industryOrder = ["Animal & Pets", "Art & Design", "Fashion & Beauty"];

  // Dynamically generate industry counts
  const industryCounts = productsData.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {});

  // Create the list of available industries in the desired order
  const availableIndustries = industryOrder
    .map(name => ({ name, count: industryCounts[name] || 0 }));


  useEffect(() => {
    let tempProducts = [...productsData];

    // Filter by industries
    if (filters.industries.length > 0) {
      tempProducts = tempProducts.filter(product =>
        filters.industries.includes(product.category)
      );
    }

    // Filter by price
    const minPrice = parseFloat(filters.minPrice);
    const maxPrice = parseFloat(filters.maxPrice);
    if (!isNaN(minPrice)) {
      tempProducts = tempProducts.filter(product => parseFloat(product.price.current.replace('$', '')) >= minPrice);
    }
    if (!isNaN(maxPrice)) {
      tempProducts = tempProducts.filter(product => parseFloat(product.price.current.replace('$', '')) <= maxPrice);
    }

    // Filter by rating
    if (filters.rating > 0) {
      tempProducts = tempProducts.filter(product => product.rating >= filters.rating);
    }

    // Sort products
    tempProducts.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return parseFloat(a.price.current.replace('$', '')) - parseFloat(b.price.current.replace('$', ''));
        case 'price-desc':
          return parseFloat(b.price.current.replace('$', '')) - parseFloat(a.price.current.replace('$', ''));
        case 'popularity':
          return b.popularity - a.popularity;
        case 'average-rating':
          return b.rating - a.rating;
        case 'latest':
          return b.latest.getTime() - a.latest.getTime();
        default:
          return 0;
      }
    });

    setFilteredProducts(tempProducts);
  }, [filters, sortBy]);

  const handleFilterChange = (type, value) => {
    setFilters(prev => {
      if (type === 'industries') {
        const newIndustries = prev.industries.includes(value)
          ? prev.industries.filter(item => item !== value)
          : [...prev.industries, value];
        return { ...prev, industries: newIndustries };
      } else if (type === 'rating') {
        return { ...prev, rating: value };
      }
      return prev;
    });
  };

  const handlePriceInputChange = (e, type) => {
    setFilters(prev => ({ ...prev, [type]: e.target.value }));
  };

  const applyPriceFilter = (e, type) => {
    if (e.key === 'Enter' || e.type === 'blur') {
      setFilters(prev => ({ ...prev, [type]: e.target.value }));
    }
  };

  const handleSliderDrag = useCallback((e, handleType) => {
    if (!priceSliderRef.current) return;

    const sliderRect = priceSliderRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    let newPercent = ((clientX - sliderRect.left) / sliderRect.width) * 100;
    newPercent = Math.max(0, Math.min(100, newPercent));

    const newPrice = Math.round(MIN_PRICE_RANGE + (newPercent / 100) * (MAX_PRICE_RANGE - MIN_PRICE_RANGE));

    setFilters(prev => {
      if (handleType === 'min') {
        const newMinPrice = Math.min(newPrice, parseFloat(prev.maxPrice));
        return { ...prev, minPrice: newMinPrice.toString() };
      } else { // max
        const newMaxPrice = Math.max(newPrice, parseFloat(prev.minPrice));
        return { ...prev, maxPrice: newMaxPrice.toString() };
      }
    });
  }, [MAX_PRICE_RANGE, MIN_PRICE_RANGE]);

  const createSliderHandler = (handleType) => (e) => {
    e.preventDefault();
    const onMouseMove = (moveEvent) => handleSliderDrag(moveEvent, handleType);
    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('touchmove', onMouseMove);
      document.removeEventListener('touchend', onMouseUp);
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('touchmove', onMouseMove);
    document.addEventListener('touchend', onMouseUp);
  };




  const toggleFilterSection = (section) => {
    setOpenFilters(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <>
      <section className="relative w-full h-[120px] bg-left lg:h-96 mb-2 sm:mb-0 mt-16 md:mt-20 px-6 md:py-24 bg-cover bg-no-repeat lg:bg-top"
        style={{ backgroundImage: `url("/assets/banner-portfolio.webp")` }} >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#221e1f]/90 mix-blend-multiply"></div>
        <Breadcrumb />
      </section>

      <div className="max-w-[1290px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[25%_75%] gap-8">
          {/* Left Column - Filters (25%) */}
          <div className="lg:col-span-1 max-h-[700px] border border-gray-200 pt-12 px-8">
            {/* Industries Filter */}
            <div className="mb-8 p-4 bg-white">
              <div className="flex justify-between items-center mb-4 cursor-pointer" onClick={() => toggleFilterSection('industries')}>
                <h3 className="text-lg font-semibold text-[#221e1f]">Industries</h3>
                {openFilters.industries ? <FaMinus /> : <FaPlus />}
              </div>
              {openFilters.industries && (
                <div className="space-y-2">
                  {availableIndustries.map(industry => (
                    <label key={industry.name} className="flex items-center text-[#777777]">
                      <input
                        type="checkbox"
                        value={industry.name}
                        checked={filters.industries.includes(industry.name)}
                        onChange={() => handleFilterChange('industries', industry.name)}
                        className="mr-2"
                      />
                      {industry.name} ({industry.count})
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Price Filter */}
            <div className="mb-8 p-4 bg-white">
              <div className="flex justify-between items-center mb-4 cursor-pointer" onClick={() => toggleFilterSection('price')}>
                <h3 className="text-lg font-semibold text-[#221e1f]">Price</h3>
                {openFilters.price ? <FaMinus /> : <FaPlus />}
              </div>
              {openFilters.price && (
                <div className="space-y-4">
                  <div ref={priceSliderRef} className="h-3 bg-gray-200 border border-black rounded-full relative mx-2 my-4">
                    {/* Highlighted Range */}
                    <div
                      className="absolute h-full rounded-full mx-10"
                      style={{ left: `${minPricePercent}%`, right: `${100 - maxPricePercent}%` }}
                    ></div>
                    {/* Min Handle */}
                    <div
                      className="absolute w-5 h-5 bg-white border border-black -mt-1.5 cursor-pointer"
                      style={{ left: `calc(${minPricePercent}% - 8px)` }}
                      onMouseDown={createSliderHandler('min')}
                      onTouchStart={createSliderHandler('min')}
                    ></div>
                    {/* Max Handle */}
                    <div
                      className="absolute w-5 h-5 bg-white border border-black -mt-1.5 cursor-pointer"
                      style={{ left: `calc(${maxPricePercent}% - 8px)` }}
                      onMouseDown={createSliderHandler('max')}
                      onTouchStart={createSliderHandler('max')}
                    ></div>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-[#777777]">$</span>
                    <input
                      type="number"
                      placeholder="Min"
                      value={filters.minPrice}
                      onChange={(e) => handlePriceInputChange(e, 'minPrice')}
                      onBlur={(e) => applyPriceFilter(e, 'minPrice')}
                      onKeyDown={(e) => applyPriceFilter(e, 'minPrice')}
                      className="w-1/4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#1b75bb] text-[#777777]"
                    />
                    <span className="text-[#777777]">-</span>
                    <input
                      type="number"
                      placeholder="Max"
                      value={filters.maxPrice}
                      onChange={(e) => handlePriceInputChange(e, 'maxPrice')}
                      onBlur={(e) => applyPriceFilter(e, 'maxPrice')}
                      onKeyDown={(e) => applyPriceFilter(e, 'maxPrice')}
                      className="w-1/4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#1b75bb] text-[#777777]"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Rating Filter */}
            <div className=" p-4 bg-white">
              <div className="flex justify-between items-center mb-4 cursor-pointer" onClick={() => toggleFilterSection('rating')}>
                <h3 className="text-lg font-semibold text-[#221e1f]">Rating</h3>
                {openFilters.rating ? <FaMinus /> : <FaPlus />}
              </div>
              {openFilters.rating && (
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map(star => (
                    <label key={star} className="flex items-center text-[#777777]">
                      <input
                        type="checkbox"
                        value={star}
                        checked={filters.rating === star}
                        onChange={() => handleFilterChange('rating', star)}
                        className="mr-2"
                      />
                      {star} and up
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Products Display (75%) */}
          <div className="lg:col-span-1">
            {/* Products Header and Sorting */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 p-1 bg-white">
              <p className="text-[#858585] text-sm sm:text-base mb-2 sm:mb-0">
                Showing all {productsData.length} results
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="block appearance-none w-full text-[#858585] py-2 px-4 pr-8 text-sm sm:text-base"
                >
                  <option value="default">Default Sorting</option>
                  <option value="popularity">Sort by Popularity</option>
                  <option value="average-rating">Sort by average rating</option>
                  <option value="latest">Sort by Latest</option>
                  <option value="price-asc">Sort by price: low to high</option>
                  <option value="price-desc">Sort by price: high to low</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FaChevronDown className="text-xs" />
                </div>
              </div>
            </div>

            {/* Product Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((card, i) => (
                <div
                  key={card.id}
                  className="relative max-w-[292px] bg-white overflow-hidden hover:shadow-lg transition-all duration-500"
                >
                  {/* -50% Label */}
                  <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 z-10">
                    -50%
                  </div>

                  {/* Image */}
                  <div className="overflow-hidden group">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                  </div>

                  {/* Text */}
                  <div className="p-5 text-center">
                    <h3 className="text-base font-semibold text-[#221e1f] mb-2">
                      {card.title}
                    </h3>
                    <p className="text-[#777777] text-[15px]">{card.price.current}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default ShopByIndustry
