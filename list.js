const brands= [
    {
        "id": 1,
        "slug": "more",
        "brand_name": "MORE",
        "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_more1677647172.png",
        "search_keyword": "Home Appliances,Home & Kitchen Essentials, Kitchen Appliances, Kitchen Tools,Smartphones, Grooming & Styling,Groceries,Dairy & Breakfast,Instant & Frozen Food,Tea, Coffee & Health Drinks,Top Wear,Bottom Wear,Home & Office Stationery , Kitchen Tools,Cleaning Essentials,Pet Care,Bath, Body & Hair",
        "is_ott_brand": "N",
        "ott_display_website": "N"
    },
    {
    "id": 7,
    "slug": "cafe-coffee-day-online",
    "brand_name": "Cafe Coffee Day Online",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_cafe-coffee-day1677602360.png",
    "search_keyword": "Coffee,Tea,Cold Beverages,Hot Beverages,CCD,Snacks",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 8,
    "slug": "archies-gallery",
    "brand_name": "Archies Gallery",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_archies-gallery1677601742.png",
    "search_keyword": "Cups & Mugs,Handbags,Toys & Games,Greeting Cards,Home Decor,Beauty,Home & Office Stationery,Speaker,Watches,Perfume,Fragrances",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 10,
    "slug": "bata",
    "brand_name": "Bata",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_bata1677601834.png",
    "search_keyword": "Footwear,Loafers,Shoes,Kids Shoes,Men Footwear,Women Footwear,Sneakers,Belts,Boots,Socks",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 11,
    "slug": "benetton",
    "brand_name": "Benetton",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_benetton1677601903.png",
    "search_keyword": "Women Shirt,Men Shirt,Women Footwear,Shirts,Shoes,Top Wear,Bottom Wear,Footwear,Fashion Accessories,Men Footwear,Sneakers,Men Fashion,Boots,Belts,Women Fashion,Men Shoes,Wallet,Bags,Kids Shoes",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 12,
    "slug": "jack-jones",
    "brand_name": "Jack & Jones",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_jack-&-jones1677646364.png",
    "search_keyword": "Men Footwear,Shoes,Top Wear,Men Shirt,Bottom Wear,Kids Shoes,Wallet,Footwear,Men Fashion,Shirts,Boots,Belts",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 13,
    "slug": "veromoda",
    "brand_name": "Veromoda",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_vero_moda1677648030.png",
    "search_keyword": "Women Shirt,Women Fashion,Women Footwear,Belts,Handbag,Shirts,Bags,Top Wear,Kids Shoes,Bottom Wear,Wallets,Footwear,Boots,Shoes,Fashion Accessories",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 14,
    "slug": "only",
    "brand_name": "Only",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_only1677647270.png",
    "search_keyword": "Women Fashion,Men Fashion,Men Shirt,Top Wear,Bottom Wear,Footwear,Bags & Backpacks,Kids Shoes,Women Shirt,Women Footwear,Men Footwear,Wallets,Boots,Fashion Accessories,Belts,Shoes",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 15,
    "slug": "tgif",
    "brand_name": "TGIF",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_tgi-friday_s1677647743.png",
    "search_keyword": "Vegetarian Food,Non Vegetarian Food,Restaurant,Dine-in Restaurant,Pizza,Alcohol,Beer",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 18,
    "slug": "pizza-hut",
    "brand_name": "Pizza Hut",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_pizza-hut1677647510.png",
    "search_keyword": "Pizza,Vegetarian Pizza,Non Vegetarian Pizza,Restaurant,Dine-in Restaurant",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 19,
    "slug": "costa-coffee",
    "brand_name": "Costa Coffee",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_costa-coffee1677603768.png",
    "search_keyword": "Coffee,Tea,Cold Beverages,Hot Beverages",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 20,
    "slug": "kfc",
    "brand_name": "KFC",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_kfc1677646703.png",
    "search_keyword": "Non Vegetarian,Vegetarian,Dine-in Restaurant",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 21,
    "slug": "ferns-n-petals",
    "brand_name": "Ferns N Petals",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_ferns-n-petals1677604171.png",
    "search_keyword": "Cups & Mugs,Flowers,Personalised Gifts,Home Decor,Beauty,Perfume",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 26,
    "slug": "baskin-robbins",
    "brand_name": "Baskin Robbins",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_baskin-robbins1677601803.png",
    "search_keyword": "Ice Cream,Sundaes,Desserts",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 27,
    "slug": "hidesign",
    "brand_name": "Hidesign",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_hidesign1677605747.png",
    "search_keyword": "Bags & Backpacks,Handbags,Wallets,Footwear,Women Accessories,Men Footwear,Belts,Sunglasses,Women Footwear",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 28,
    "slug": "croma",
    "brand_name": "Croma",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_croma1677604016.png",
    "search_keyword": "Home Appliances, Kitchen Appliances,Mobile Phones, Grooming & Styling,Home & Kitchen Essentials,Gaming, Grooming & Personal Care,Headphones,Wireless Headphones,Smart Watches,Earbuds,Earphones,Smartphones,Apple Phone",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 29,
    "slug": "home-centre",
    "brand_name": "Home Centre",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_home-centre1677605791.png",
    "search_keyword": "Home & Living,Home Decor, Kitchen Appliances,Home Appliances",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 30,
    "slug": "levis",
    "brand_name": "Levis",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_levis1677646848.png",
    "search_keyword": "Women Fashion,Fashion Accessories,Men Fashion,Top Wear,Bottom Wear,Footwear,Shoes,Belts,Bags & Backpacks,Kids Shoes,Women Footwear,Kids Fashion,Jackets,Socks,Men Shirt,Wallets,Boots,Women Shirt",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 31,
    "slug": "major-brands-aldo",
    "brand_name": "ALDO-Major Brands",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_aldo-major-brands1677601659.png",
    "search_keyword": "Women Fashion,Men Fashion,Socks,Top Wear,Bottom Wear,Footwear,Bags,Sunglasses,Belts,Boots,Wallets,Fashion Accessories,Handbag,Shoes,Jewellery",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 32,
    "slug": "major-brands-inglot",
    "brand_name": "INGLOT -Major Brands",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_inglot--major-brands1677646328.png",
    "search_keyword": "Makeup,Cosmetics,Makeup Accessories",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 33,
    "slug": "major-brands-charles-keith",
    "brand_name": "CHARLES & KEITH-Major Brands",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_charles-&-keith1677603428.png",
    "search_keyword": "Women Fashion,Women Footwear,Boots,Women Shoes,Belts,Bags,Top Wear,Sunglasses,Bottom Wear,Handbags,Wallets,Footwear,Shoes,Fashion Accessories,Socks",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 35,
    "slug": "major-brands-beverly-hills-polo-club",
    "brand_name": "BEVERLY HILLS POLO CLUB-MajorB",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_beverly-hills-polo-club1677601928.png",
    "search_keyword": "Women Fashion,Shirts,Men Fashion,Wallets,Winterwear,Bags,Top Wear,Bottom Wear,Kids Fashion,Fashion Accessories,Men Shirt,Women Shirt",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 38,
    "slug": "major-brands-la-senza",
    "brand_name": "LA SENZA-Major Brands",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_la-senza1677646817.png",
    "search_keyword": "Women Sleepwear,Lingerie,Swimwear",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 40,
    "slug": "make-my-trip",
    "brand_name": "MakeMyTrip Gift Card",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_make-my-trip1677647102.png",
    "search_keyword": "Flights,International Flights,Domestic Flights,Hotel Booking,Villas & Stays,Bus Tickets,Train Tickets,Resorts,Holidays,Holiday Packages",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 45,
    "slug": "pantaloons",
    "brand_name": "Pantaloons",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_pantaloons1677647289.png",
    "search_keyword": "Men Fashion ,Women Fashion,Women Innerwear,Men Innerwear,Ethnic Wear,Indian Wear,Kids Fashion,Men Shirt,Women Shirt,Shirts,Active Wear,Top Wear,Bottom Wear,Jewellery,Silver Jewellery,Fashion Accessories, Grooming & Personal Care,Makeup & Beauty,Home Decor,Home & Living,Bags & Backpacks,Women Footwear,Men Footwear,Fragrances,Perfume,Footwear,Sneakers,Loafers,Boots,Kids Shoes,Shoes,Lingerie,Sleepwear,Belts,Baby Products,Wallets",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 46,
    "slug": "the-raymond-shop",
    "brand_name": "The Raymond Shop",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_the-raymond-shop1677647926.png",
    "search_keyword": "Shirts,Top Wear,Bottom Wear,Women Clothing,Women Shirt,Men Clothing,Unstitched Fabric,Men Shirt,Formal Suits",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 49,
    "slug": "mainland-china",
    "brand_name": "Mainland China",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_mainland-china1677647034.png",
    "search_keyword": "Vegetarian Food,Non Vegetarian Food,Chinese Food,Restaurant,Dine-in Restaurant",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 50,
    "slug": "sigree",
    "brand_name": "SIGREE",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_sigree1677647662.png",
    "search_keyword": "Vegetarian Food,Non Vegetarian Food,Dine-in Restaurant,Restaurant",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 51,
    "slug": "machaan",
    "brand_name": "Machaan",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_machaan1677646996.png",
    "search_keyword": "Vegetarian Food',Non Vegetarian Food,Restaurant,Dine-in Restaurant",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 52,
    "slug": "oh-calcutta",
    "brand_name": "Oh! Calcutta",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_oh!-calcutta1677647226.png",
    "search_keyword": "Vegetarian Food,Non Vegetarian Food,Restaurant,Dine-In Restaurant",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 53,
    "slug": "sweet-bengal",
    "brand_name": "Sweet Bengal",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_sweet-bengal1677647702.png",
    "search_keyword": "Desserts,Sweets,Dairy Products",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 60,
    "slug": "myntra",
    "brand_name": "Myntra",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_myntra1677647199.png",
    "search_keyword": "Men Fashion,Women Fashion,Women Innerwear,Men Innerwear,Ethnic Wear,Men Shirt,Women Shirt,Active Wear,Top Wear,Bottom Wear,Kids Fashion,Jewellery,Silver Jewellery,Fashion Accessories,Watch Accessories,Personal Care, Grooming & Styling,Furniture,Makeup & Beauty,Bath, Body & Hair,Home Decor,Home & Living,Toys & Games,Bags & Backpacks,Gadgets,Fragrances,Footwear,Women Footwear,Men Footwear,Loafers,Shoes,Kids Shoes,Lingerie,Earphones,Headphones,Sunglasses,Wireless Headphones,Pressure Cookers,Smart Watches,Swimwear,Earbuds,Fitness Band,Sleepwear,Pen,Perfume,Home & Office Stationery,Boots,Sneakers,Belts,Baby Products,Socks",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 61,
    "slug": "titan",
    "brand_name": "Titan",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_titan1677647953.png",
    "search_keyword": "Watch Accessories,Clock,Smart Watches,Smart Bands,Wireless Headphones,Belts,Wallets,Men Watches,Women Watches",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 62,
    "slug": "fastrack",
    "brand_name": "Fastrack",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_fastrack1677604152.png",
    "search_keyword": "Headphones,Smart Watches,Wireless Headphones,Eyeglasses,Watches,Sunglasses,Perfume,Belts,Watch Accessories,Clutches & Wallets,Bags & Backpacks",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 63,
    "slug": "westside",
    "brand_name": "Westside",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_westside1677648114.png",
    "search_keyword": "Ethnic Wear,Indian Wear,Women Fashion,Sneakers,Men Shoes,Men Fashion,Women Shoes,Boots,Belts,Bags,Wallet,Kids Shoes,Shoes,Top Wear,Bottom Wear,Footwear,Fashion Accessories,Men Footwear,Women Footwear,Shirts,Men Shirt,Women Shirt",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 64,
    "slug": "prestige",
    "brand_name": "Prestige",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_prestige1677647564.png",
    "search_keyword": "Kitchen Appliances,Home & Living, Kitchen Tools,Pressure Cooker",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 67,
    "slug": "william-penn",
    "brand_name": "William Penn",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_william-penn1677648133.png",
    "search_keyword": "Pens,Lighter,Bags,Wallets,Gadgets,Belts",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 68,
    "slug": "woodland",
    "brand_name": "Woodland",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_woodland1677648157.png",
    "search_keyword": "Footwear,Women Footwear,Men Footwear,Loafers,Shoes,Kids Shoes,Sneakers,Belts,Boots,Top Wear,Bottom Wear,Men Fashion,Women Fashion,Wallets,Bags & Backpacks,Socks",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 69,
    "slug": "yatra",
    "brand_name": "Yatra.com",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_yatra1677648184.png",
    "search_keyword": "Flights,International Flight,Domestic Flight,Resorts,Bus Tickets,Train Tickets,Holidays,Hotel Booking,Holiday Packages,Villa & Stays",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 70,
    "slug": "major-brands-call-it-spring",
    "brand_name": "CALL IT SPRING-Major Brands",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_call-it-spring1677602386.png",
    "search_keyword": "Men Fashion,Women Fashion,Footwear,Men Footwear,Women Footwear',Shoes,Sneakers,Boots,Handbags",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 71,
    "slug": "dominos-pizza-online",
    "brand_name": "Domino's Pizza Online",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_domino's-pizza-online1677604086.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 72,
    "slug": "euphoria-jewellery-gold-coins",
    "brand_name": "Euphoria Jewellery (TM) gold coins",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_euphoria-jewellery-(tm)-gold-coins1677604131.png",
    "search_keyword": "Gold Coins,Silver Coins,Rings,Earings,Jewellery",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 73,
    "slug": "gant",
    "brand_name": "Gant",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_gant1677603397.png",
    "search_keyword": "Women Fashion,Fashion Accessories,Shirts,Top Wear,Bottom Wear,Footwear,Shoes,Women Footwear,Men Shirt,Wallets,Boots,Women Shirt,Bags & Backpacks,Kids Shoes,Kids Fashion,Jackets,Belts,Socks",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 76,
    "slug": "hush-puppies",
    "brand_name": "Hush Puppies",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_hush-puppies1677646267.png",
    "search_keyword": "Footwear,Women Footwear,Kids Shoes,Sneakers,Loafers,Boots,Shoes,Socks",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 81,
    "slug": "lifestyle",
    "brand_name": "Lifestyle",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_lifestyle1677604107.png",
    "search_keyword": "Men Fashion,Women Fashion,Shirts,Men Shirt,Women Shirt,Footwear,Women Footwear,Men Footwear,Jewellery,Fashion Accessories,Makeup & Beauty,Home Decor,Kids Fashion,Home & Living,Bags & Backpacks,Fragrances,Loafers,Shoes,Kids Shoes,Bath, Body & Hair,Sneakers,Belts,Boots,Baby Products,Lingerie,Sleepwear,Smart Watches,Socks,Ethnic Wear,Silver Jewellery,Necklace & Pendant,Top Wear,Bottom Wear,Men Innerwear,Women Innerwear",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 86,
    "slug": "tanishq",
    "brand_name": "Tanishq",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_tanishq1677647723.png",
    "search_keyword": "Jewellery,Silver Jewellery,Gold Jewellery,Diamond Jewellery,Earings,Rings,Solitaire,Necklaces & Pendants,Gold Coins,Silver Coins",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 87,
    "slug": "helios",
    "brand_name": "Helios",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_helios1677605701.png",
    "search_keyword": "Men Watches,Women Watches,Smart Watches,Watches,Watch Accessories",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 88,
    "slug": "titan-eye-plus",
    "brand_name": "Titan Eye Plus",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_titan1687408048.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 89,
    "slug": "amazon",
    "brand_name": "Amazon",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_amazon1677601689.png",
    "search_keyword": "Women Fashion,Men Fashion,Indian Wear,Jewellery,Men Shirt,Women Shirt,Silver Jewellery,Fashion Accessories,Active Wear,Watch Accessories,Women Innerwear,Top Wear,Men Innerwear,Bottom Wear, Grooming & Styling,Ethnic Wear,Kids Fashion,Furniture,Makeup & Beauty,Bath, Body & Hair,Home Decor,Home & Living,Toys & Games,Bags & Backpacks,Gadgets,Fragrances,Footwear,Women Footwear,Men Footwear,Loafers,Shoes,Kids Shoes,Sneakers,Belts,Boots,Baby Products,Trolley Bags,Home Appliances, Kitchen Appliances,Mobile Phones,Home & Kitchen Essentials,Gaming,Smartphones,Lingerie,Sleepwear,Socks,Apple Phone,Cleaning Essentials,Headphones,Tea, Coffee & Health Drinks,Wireless Headphones,Pet Care,Smart Watches,Home & Office Stationery,Earbuds,Pressure Cooker,Earphones, Kitchen Tools,Speakers,Car Accessories,Fitness Band,Pens,Fitness Equipment,Swimwear",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 90,
    "slug": "fab-hotels",
    "brand_name": "Fab Hotels",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_fab-hotels1677603229.png",
    "search_keyword": "Hotels,Hotel Booking",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 91,
    "slug": "ad",
    "brand_name": "AD",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_ad1677601634.png",
    "search_keyword": "Architecture & Design,Interior Designing,Articles,Magazine",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 92,
    "slug": "gq",
    "brand_name": "GQ",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_gq1677605648.png",
    "search_keyword": "Magazine,Fashion Magazine,Articles",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 93,
    "slug": "vogue",
    "brand_name": "Vogue",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_vogue1677648071.png",
    "search_keyword": "Magazine,Fashion Magazine,Articles,Interior Designing",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 95,
    "slug": "flipkart",
    "brand_name": "Flipkart",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_flipkart1677605602.png",
    "search_keyword": "Women Fashion,Men Shirt,Silver Jewellery,Women Shirt,Fashion Accessories,Active Wear,Watch Accessories,Women Innerwear,Top Wear,Men Innerwear,Bottom Wear, Grooming & Styling,Ethnic Wear,Kids Fashion,Furniture,Home & Living\t,Home Decor,Toys & Games,\tFootwear,Women Footwear,Men Footwear,Loafers,Bags & Backpacks,Gadgets,Fragrances,Make & Beauty,Bath, Body & Hair,Shoes,Kids Shoes,Sneakers,Belts,Boots,Baby Products,Trolley Bags,Home Appliances, Kitchen Appliances,Mobile Phones,Gaming,Smartphones,Apple Phone,Cleaning Essentials,Headphones,Tea, Coffee & Health Drinks,Wireless Headphones,Pet Care,Smart Watches,Home & Office Stationery,Earbuds,Pressure Cooker,Earphones, Kitchen Tools,Speakers,Car Accessories,Fitness Band,Pens,Fitness Equipment,Swimwear,Lingerie,Sleepwear,Socks",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 98,
    "slug": "readers-digest",
    "brand_name": "Reader's Digest",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_reader's-digest1677647622.png",
    "search_keyword": "Magazine,Fashion Magazine,Articles,News",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 99,
    "slug": "harpers-bazaar-india",
    "brand_name": "Harper's Bazaar India",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_harper's-bazaar-india1677605675.png",
    "search_keyword": "Fashion Magazine,Magazine,Articles",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 100,
    "slug": "cosmopolitan-india",
    "brand_name": "Cosmopolitan India",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_cosmopolitan-india1677603668.png",
    "search_keyword": "Magazine,Fashion Magazine,Articles",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 102,
    "slug": "india-today-english",
    "brand_name": "India Today English",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_india-today-english---annual-digital-subscription1677646295.png",
    "search_keyword": null,
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 119,
    "slug": "chaayos",
    "brand_name": "Chaayos",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_chaayos1677603404.png",
    "search_keyword": "Coffee,Tea,Snacks,Cold Beverages,Hot Beverages",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 121,
    "slug": "i-can-stay",
    "brand_name": "I Can Stay",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_icanstay1682661347.png",
    "search_keyword": "Hotels,Hotel Booking,Holidays,Holiday Packages,Spa Services",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 122,
    "slug": "spencers-retail",
    "brand_name": "Spencer's Retail",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_spencer's-retail1677647683.png",
    "search_keyword": "Groceries,Dairy & Breakfast,Tea, Coffee & Health Drinks,Instant & Frozen Food,Baby Care,Pharma, Hygiene & Wellness,Cleaning Essentials,Pet Care,Beauty & Grooming,Cigarette,Liquor,Home & Office Stationery ",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 125,
    "slug": "makemy-trip-holiday",
    "brand_name": "MakeMy Trip Holiday",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_makemy-trip-holiday1677647128.png",
    "search_keyword": "Flights,International Flights,Domestic Flights,Resorts,Villas & Stays,Train Tickets,Bus Tickets,Holidays,Holiday Packages,Hotel Booking",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 126,
    "slug": "makemy-trip-hotel",
    "brand_name": "MakeMy Trip Hotel",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_makemy-trip-hotel1677647158.png",
    "search_keyword": "Flights,International Flights,Domestic Flights,Resorts,Villas & Stays,Holidays,Holiday Packages,Bus Tickets,Train Tickets,Hotel Booking",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 130,
    "slug": "relaxo",
    "brand_name": "Relaxo",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_relaxo1677647643.png",
    "search_keyword": "Footwear,Women Footwear,Men Footwear,Shoes,Loafers,Boots,Kids Shoes,Sneakers",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 131,
    "slug": "bharat-petroleum-vouchers",
    "brand_name": "BPCL",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_bpcl1677602329.png",
    "search_keyword": "Petrol Pump,Diesel",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 134,
    "slug": "celio",
    "brand_name": "Celio",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_celio1677603366.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 137,
    "slug": "kalyan-gold-coins",
    "brand_name": "Kalyan Gold Coins",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_kalyan-jewellers-gold-coins1677646484.png",
    "search_keyword": "Gold Jewellery,Gold Coins",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 138,
    "slug": "pc-jeweller-gold-coin",
    "brand_name": "PC Jeweller Gold Coin",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_pc-jewellers-gold-coins1677647368.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 139,
    "slug": "aurelia",
    "brand_name": "Aurelia",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_aurelia1677601781.png",
    "search_keyword": "Women Fashion,Kurta & Kurtis,Girls Fashion,Earings,Women Footwear,Accessories,Handbags,Ethnic Wear",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 140,
    "slug": "w",
    "brand_name": "W",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_w1677645676.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 141,
    "slug": "kalyan-gold-jewellery",
    "brand_name": "Kalyan Gold Jewellery",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_kalyan-jewellers-gold-jewellery1677646544.png",
    "search_keyword": "Jewellery,Necklaces & Pendants,Rings,Earings,Gold Coins,Gold Jewellery",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 142,
    "slug": "kalyan-diamond-jewellery",
    "brand_name": "Kalyan Diamond Jewellery",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_kalyan-jewellers-diamond-jewellery1677646442.png",
    "search_keyword": "Jewellery,Diamond Jewellery,Necklaces & Pendants,Rings,Earings",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 143,
    "slug": "pc-jeweller-gold",
    "brand_name": "PC Jeweller Gold",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_pc-jewellers-gold-jewellery1677647459.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 144,
    "slug": "pc-jeweller-diamond",
    "brand_name": "PC Jeweller Diamond",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_pc-jewellers-diamond-jewellery1677647330.png",
    "search_keyword": null,
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 145,
    "slug": "kama-ayurveda",
    "brand_name": "Kama Ayurveda",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_kama-ayurveda1677646580.png",
    "search_keyword": "Bath & Body,Skin & Hair Care,Face Care,Body Mist,Fragrance",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 147,
    "slug": "bookmyshow-gift-voucher",
    "brand_name": "BookMyShow",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_bookmyshow1677602075.png",
    "search_keyword": "Movies,Shows,Events,Workshops,Concerts,Standup Comedy,Kids Events,Cinema Hall",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 149,
    "slug": "biba",
    "brand_name": "BIBA",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_biba1677602233.png",
    "search_keyword": "Women Fashion,Girls Fashion,Ethnic Wear,Indian Wear,Women Suits,Footwear,Women Footwear,Handbags",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 150,
    "slug": "pvr",
    "brand_name": "PVR",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_pvr1677647598.png",
    "search_keyword": "Movies,Shows,Cinema Hall",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 152,
    "slug": "ola-cabs",
    "brand_name": "OLA CABS",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_ola_cabs1677647249.png",
    "search_keyword": "Cabs,Taxis,Shuttle,Auto,Bike,Travel",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 153,
    "slug": "beer-cafe",
    "brand_name": "Beer Cafe",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_beer-cafe1677601858.png",
    "search_keyword": "Beer,Alcohol,Vegetarian Food,Non Vegetarian Food,Cafe,Restaurant,Dine-in Restaurant",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 154,
    "slug": "gini-jony",
    "brand_name": "Gini & Jony",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_gini-&-jony1677605626.png",
    "search_keyword": "Kids Fashion,Kids Shoes",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 155,
    "slug": "puma",
    "brand_name": "Puma",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_puma1677647582.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 156,
    "slug": "chicago-pizza",
    "brand_name": "Chicago Pizza",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_chicago-pizza1677603457.png",
    "search_keyword": "Pizza,Vegetarian Pizza, Non Vegetarian Pizza,Restaurant",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 159,
    "slug": "points-for-good",
    "brand_name": "Points for Good",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_points-for-good1677647538.png",
    "search_keyword": "Donation,Community Growth",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 160,
    "slug": "apollo-pharmacy",
    "brand_name": "Apollo Pharmacy",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_apollo1677601722.png",
    "search_keyword": "Medicines,Baby Care,Skin & Hair Care,Health & Wellness,Oral Care,Beauty & Grooming,Doctor Consultation,Fragrances,Feminine Hygiene,Vitamins & Suppliments,Personal Care,Full Body Check Up,Lab Tests,Nutrition",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 161,
    "slug": "luxe-gift-card",
    "brand_name": "Luxe Gift Card",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_luxe1677646973.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 162,
    "slug": "the-body-shop",
    "brand_name": "The Body Shop",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_the-body-shop1677647841.png",
    "search_keyword": "Bath & Body,Makeup & Beauty,Face Care,Skin & Hair Care,Fragrance",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 163,
    "slug": "hp-petro-gift-vouchers",
    "brand_name": "HP Petro PAYCODE",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_hp-petro-paycode1677646240.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 164,
    "slug": "bigbasket",
    "brand_name": "BigBasket",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_bigbasket1677602262.png",
    "search_keyword": "Groceries,Dairy & Breakfast,Tea, Coffee & Health Drinks,Baby Care,Pharma, Hygiene & Wellness,Cleaning Essentials,Home & Office Stationery ,Pet Care,Beauty & Grooming,Ice Cream",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 165,
    "slug": "uber",
    "brand_name": "UBER",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_uber1677648006.png",
    "search_keyword": "Cabs,Taxis,Bike,Shuttle,Auto,Travel",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 167,
    "slug": "jockey",
    "brand_name": "Jockey",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_jockey1677646388.png",
    "search_keyword": "Inner Wear,Men Fashion,Women Fashion,Bottom Wear,Top Wear,Active Wear,Jackets,Socks",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 173,
    "slug": "ketan-diamonds-diamond-jewellery",
    "brand_name": "Ketan Diamonds Diamond Jewellery",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_ketan-diamonds-diamond-jewellery1677646621.png",
    "search_keyword": "Jewellery,Gold Jewellery,Diamond Jewellery,Rings,Necklaces & Pendants,Gold Coins,Earings",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 174,
    "slug": "ketan-diamonds-gold-jewellery",
    "brand_name": "Ketan Diamonds Gold Jewellery",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_ketan-diamonds-gold-jewellery1677646674.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 183,
    "slug": "kiehls",
    "brand_name": "Kiehls",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_kiehls1677646777.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 191,
    "slug": "fabindia",
    "brand_name": "Fabindia",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_fabindia1677603245.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 192,
    "slug": "ketan-diamonds-gold-coin",
    "brand_name": "Ketan Diamonds Gold Coin",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_ketan-diamond-gold-coin1677603732.png",
    "search_keyword": "Gold Coins",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 217,
    "slug": "luxe-gift-card-armani-exchange",
    "brand_name": "Armani Exchange-Luxe Gift Card",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_armani-exchange-luxe-gift-card1677601633.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 219,
    "slug": "luxe-gift-card-coach",
    "brand_name": "Coach-Luxe Gift Card",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_coach1682922188.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 220,
    "slug": "luxe-gift-card-gas",
    "brand_name": "GAS-Luxe Gift Card",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_gas1677603410.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 221,
    "slug": "luxe-gift-card-hamleys",
    "brand_name": "Hamleys-Luxe Gift Card",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_hamleys1677603465.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 225,
    "slug": "luxe-gift-card-satya-paul",
    "brand_name": "Satya Paul- Luxe Gift Card",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_satya-paul1677604561.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 226,
    "slug": "luxe-gift-card-mothercare",
    "brand_name": "Mothercare-Luxe Gift Card",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_mothercare1677604232.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 227,
    "slug": "luxe-gift-card-superdry",
    "brand_name": "Superdry-Luxe Gift Card",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_superdry-luxe-gift-card1677604975.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 228,
    "slug": "luxe-gift-card-steve-madden",
    "brand_name": "Steve Madden-Luxe Gift Card",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_steve-madden-luxe-gift-card1677604956.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 235,
    "slug": "zee5",
    "brand_name": "ZEE5",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_zee51677605502.png",
    "search_keyword": "TV Shows,Channels,Movies,LIVE Sports,Documentaries,Web Series,News",
    "is_ott_brand": "Y",
    "ott_display_website": "Y"
    },
    {
    "id": 241,
    "slug": "the-man-company",
    "brand_name": "The Man Company",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_the-man-company1677605055.png",
    "search_keyword": "Men Grooming,Body Mist,Bath, Body & Hair,Skin & Hair Care,Fragrances",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 242,
    "slug": "blinkit",
    "brand_name": "Blinkit",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_blinkit1677601881.png",
    "search_keyword": "Groceries,Dairy & Breakfast,Instant & Frozen Food,Baby Care,Pharma, Hygiene & Wellness,Cleaning Essentials,Home & Office Stationery ,Pet Care,Beauty & Grooming,Ice Cream",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 244,
    "slug": "candere-gold-coin",
    "brand_name": "Candere Gold Coin",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_candere-gold-coin1677602274.png",
    "search_keyword": null,
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 245,
    "slug": "candere-gold-jewellery",
    "brand_name": "Candere Gold Jewellery",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_candere-gold-jewellery1677602290.png",
    "search_keyword": null,
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 246,
    "slug": "candere-diamond-jewellery",
    "brand_name": "Candere Diamond Jewellery",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_candere-diamond-jewellery1677602256.png",
    "search_keyword": null,
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 247,
    "slug": "skullcandy",
    "brand_name": "Skullcandy",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_skullcandy1677604668.png",
    "search_keyword": "Headphones,Speakers,Earbuds,Earphones,Gaming",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 248,
    "slug": "blaupunkt",
    "brand_name": "Blaupunkt",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_blaupunkt1677601866.png",
    "search_keyword": "Earbuds,Earphones,Smart Watch,Headphones,Fitness Band,Wireless Headphones,Mobile Accessories,Speakers,Car Accessories",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 250,
    "slug": "netmeds",
    "brand_name": "Netmeds",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_netmeds1677604272.png",
    "search_keyword": "Medicines,Skin & Hair Care,Frangrances,Vitamins & Suppliments,Makeup & Beauty,Baby Care,Oral Care,Beauty & Groom,Feminine Hygiene,Personal Care,Lab Test,Nutrition",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 253,
    "slug": "elleven",
    "brand_name": "Elleven",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_elleven1677602851.png",
    "search_keyword": "Women Fashion,Bottom Wear",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 257,
    "slug": "sonyliv",
    "brand_name": "SonyLIV",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_sony-liv1677604686.png",
    "search_keyword": "TV Shows,Channels,Movies,LIVE Sports,News,Documentaries,Web Series",
    "is_ott_brand": "Y",
    "ott_display_website": "Y"
    },
    {
    "id": 258,
    "slug": "max",
    "brand_name": "MAX",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_max1677604164.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 260,
    "slug": "seniority",
    "brand_name": "Seniority",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_logo1685528199.png",
    "search_keyword": "Senior Care Products,Healthcare,Supplements",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 263,
    "slug": "skechers",
    "brand_name": "Skechers",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_skechers1677604640.png",
    "search_keyword": "Footwear,Women Footwear,Men Footwear,Loafers,Shoes,Kids Shoes,Sneakers,Belts,Boots,Bags,Jackets",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 265,
    "slug": "decathlon",
    "brand_name": "Decathlon",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_decathlon1677602787.png",
    "search_keyword": "Activewear,Women Fashion,Men Fashion,Gym Equipments,Travel Accessories,Camping Tents,Jackets,Top Wear,Bottom Wear,Footwear,Men Footwear,Women Footwear,Shoes,Belts",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 273,
    "slug": "hindustan-times--english",
    "brand_name": "Hindustan Times- English",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_hindustan-times--english1677603530.png",
    "search_keyword": "Newspaper,News,Articcles,English Newspaper",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 274,
    "slug": "hindustan--hindi",
    "brand_name": "Hindustan- Hindi",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_hindustan--hindi1677603516.png",
    "search_keyword": "Newspaper,News,Hindi Newspaper,Hindi News",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 275,
    "slug": "tata-cliq",
    "brand_name": "TATA CLiQ",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_tata-cliq1677605029.png",
    "search_keyword": "Men Fashion,Women Fashion,Women Innerwear,Men Innerwear,Ethnic Wear,Men Shirt,Women Shirt,Active Wear,Top Wear,Bottom Wear,Kids Fashion,Jewellery,Silver Jewellery,Fashion Accessories,Watch Accessories,Bath, Body & Hair,Furniture,Make & Beauty,Home Decor,Home & Living,Toys & Games,Bags & Backpacks,Gadgets,Fragrances,Footwear,Men Footwear,Women Footwear,Loafers,Shoes,Kids Shoes,Sneakers,Belts,Boots,Baby Products,Coffee Powder,Trolley Bags,Lingerie,Headphones,Wireless Headphones,Smart Watches,Sleepwear,Socks",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 277,
    "slug": "hotstar",
    "brand_name": "Hotstar",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_hotstar1677603632.png",
    "search_keyword": "TV Shows,Channels,Movies,LIVE Sports,News,Documentaries,Web Series,Disney",
    "is_ott_brand": "Y",
    "ott_display_website": "Y"
    },
    {
    "id": 280,
    "slug": "docubay",
    "brand_name": "DocuBay",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_docubay1682922338.png",
    "search_keyword": "Documentaries",
    "is_ott_brand": "Y",
    "ott_display_website": "Y"
    },
    {
    "id": 284,
    "slug": "amazon-ppc",
    "brand_name": "Amazon Prime",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_amazon-prime1677601605.png",
    "search_keyword": "TV Shows,Channels,Movies,LIVE Sports,Documentaries,Web Series",
    "is_ott_brand": "Y",
    "ott_display_website": "N"
    },
    {
    "id": 298,
    "slug": "luxe-gift-card-brooks-brothers",
    "brand_name": "Brooks Brothers -Luxe Gift Card",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_brooks-brothers--luxe-gift-card1677602178.png",
    "search_keyword": "Women Fashion,Belts,Men Fashion,Shoes,Shirts,Women Shirt,Men Shirt,Top Wear,Bottom Wear",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 305,
    "slug": "luxe-gift-card-gstar-raw",
    "brand_name": "G-STAR-Luxe Gift Card",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_g-star-raw1629368068.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 311,
    "slug": "luxe-gift-card-scotch-soda",
    "brand_name": "Scotch & Soda -Luxe Gift Card",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_scotch-&-soda1677604597.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 315,
    "slug": "luxe-gift-card---replay",
    "brand_name": "Replay- Luxe Gift Card",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_replay--luxe-gift-card1677604542.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 319,
    "slug": "luxe-gift-card---dune",
    "brand_name": "Dune-Luxe Gift Card",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_dune1677602831.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 330,
    "slug": "bath-&-body-works",
    "brand_name": "Bath & Body Works-Major Brands",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_bath-&-body-works1677601820.png",
    "search_keyword": null,
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 331,
    "slug": "dreamfolks",
    "brand_name": "Dreamfolks",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_dreamfolks1677665040.png",
    "search_keyword": "Lounge Access,Airtport Meet & Assist Services,Airport Transfer Service,Duty Free",
    "is_ott_brand": "Y",
    "ott_display_website": "Y"
    },
    {
    "id": 340,
    "slug": "lifestyle-online",
    "brand_name": "Lifestyle Online",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_lifestyle-(online)1677604093.png",
    "search_keyword": "Men Fashion,Women Fashion,Ethnic Wear,Men Shirt,Women Shirt,Shirts,Kids Fashion,Active Wear,Jewellery,Fashion Accessories,Makeup & Beauty,Bath, Body & Hair,Home Decor,Home & Living,Silver Jewellery,Bags & Backpacks,Fragrances,Footwear,Women Footwear,Men Footwear,Loafers,Shoes,Kids Shoes,Sneakers,Bags,Boots ,Baby Products,Lingerie,Smart Watches,Sleep Wear,Necklace & Pendants,Men Innerwear,Women Innerwear,Top Wear,Bottom Wear",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 342,
    "slug": "home-centre-online",
    "brand_name": "Home Centre Online",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_home-centre-(online)1677603586.png",
    "search_keyword": "Kitchen Appliances,Home Appliances,Home Decor,Home & Living",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 345,
    "slug": "swiggy-gv",
    "brand_name": "Swiggy Money Voucher",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_swiggy-money-voucher1677605005.png",
    "search_keyword": "Groceries,Dairy & Breakfast,Instant & Frozen Food,Baby Care,Cleaning Essentials,Home & Office Stationery,Pet Care,Beauty & Grooming,Ice-Cream,Restaurant,Dine-In Restaurant,Delivery,Vegetarian Food,Non-Vegetarian Food",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 346,
    "slug": "taj-hotels",
    "brand_name": "Taj Experiences",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_taj1677654611.png",
    "search_keyword": "Hotels,Hotel Booking,Resort,Fine Dining,Holidays,Holiday Packages,Spa Services",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 347,
    "slug": "vijay-sales",
    "brand_name": "Vijay Sales",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_vijay-sales1677605300.png",
    "search_keyword": "Home Appliances, Kitchen Appliances,Mobile Phones, Grooming & Styling,Gaming,Home & Kitchen Essentials,Smartphones,Apple Phones, Grooming & Personal Care,Headphones,Wireless Headphones,Smart Watches,Earphones,Earbuds",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 348,
    "slug": "healthians",
    "brand_name": "Healthians",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_healthians1677603497.png",
    "search_keyword": "Full Body Check Up,Doctor Consultation",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 350,
    "slug": "shemaroo-entertainment-ltd",
    "brand_name": "SHEMAROO ENTERTAINMENT LTD",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_shemaroo_me1677604613.png",
    "search_keyword": "",
    "is_ott_brand": "Y",
    "ott_display_website": "Y"
    },
    {
    "id": 352,
    "slug": "gyftr-entertainment-platinum",
    "brand_name": "GyFTR Entertainment Platinum",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_gyftr-entertainment1677603450.png",
    "search_keyword": null,
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 354,
    "slug": "mia",
    "brand_name": "MIA",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_mia1677604218.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 355,
    "slug": "skinn",
    "brand_name": "Skinn",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_skinn1677604654.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 356,
    "slug": "titan-minimals",
    "brand_name": "Titan Minimals",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_titan-minimals1677605083.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 357,
    "slug": "fastrack-bags",
    "brand_name": "Fastrack Bags",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_fastrack-bags1677603260.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 361,
    "slug": "chumbak",
    "brand_name": "Chumbak",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_chumbak1677602321.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 362,
    "slug": "bluestone-diamond",
    "brand_name": "BlueStone Diamond",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_bluestone-diamond1677601997.png",
    "search_keyword": "Jewellery,Diamond Jewellery,Necklaces & Pendants,Rings,Earings",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 363,
    "slug": "bluestone-gold",
    "brand_name": "BlueStone Gold",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_bluestone-gold1677602032.png",
    "search_keyword": "Jewellery,Gold Jewellery,Diamond Jewellery,Necklaces & Pendants,Rings,Earings,Gold Coins",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 364,
    "slug": "bluestone-gold-jewellery",
    "brand_name": "BlueStone Gold Jewellery",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_bluestone-gold-jewellery1677602015.png",
    "search_keyword": "Jewellery,Gold Jewellery,Diamond Jewellery,Necklaces & Pendants,Rings,Earings,Gold Coins",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 367,
    "slug": "giva",
    "brand_name": "GIVA",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_giva-logo1677603423.png",
    "search_keyword": "Jewellery,Gold Jewellery,Silver Jewellery,Rings,Earings,Necklaces & Pendants",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 368,
    "slug": "reliance-my-jio-store",
    "brand_name": "Reliance My Jio Store",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_reliance-my-jio-store1677604449.png",
    "search_keyword": "Mobile Recharge,Prepaid,Postpaid,SIM",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 369,
    "slug": "reliance-digital",
    "brand_name": "Reliance Digital",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_reliance-digital1677604408.png",
    "search_keyword": "Home Appliances,Home & Kitchen Essentials,Smartphones\tHeadphones, Kitchen Appliances,Smartphones,Apple Phones,Wireless Headphones,Mobile Phones,Smart Watches, Grooming & Personal Care, Grooming & Styling\tGaming,Earbuds,Earphones,Bags",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 370,
    "slug": "reliance-trends-footwear",
    "brand_name": "Reliance Trends Footwear",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_reliance-trends-footwear1677604495.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 371,
    "slug": "reliance-trends",
    "brand_name": "Reliance Trends",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_reliance-trends1677604515.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 372,
    "slug": "reliance-smart-point",
    "brand_name": "Reliance Smart Point",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_reliance-smart-point1677604464.png",
    "search_keyword": "Tea, Coffee & Health Drinks,Baby Care,Cleaning Essentials,Home & Office Stationery,Pet Care,Beauty & Grooming,Pharma, Hygiene & Wellness",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 373,
    "slug": "reliance-smart",
    "brand_name": "Reliance Smart",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_reliance-smart1677604479.png",
    "search_keyword": "Tea, Coffee & Health Drinks,Baby Care,Pharma, Hygiene & Wellness,Cleaning Essentials,Home & Office Stationery,Pet Care,Beauty & Grooming",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 374,
    "slug": "reliance-project-eve",
    "brand_name": "Reliance Project Eve",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_projecteve1677604391.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 378,
    "slug": "makemy-trip-luxury-gateway",
    "brand_name": "MakeMy Trip Luxury Gateway",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_makemytrip-luxury-gateway1677604136.png",
    "search_keyword": "Flights,International Flights,Domestic Flights,Resorts,Holidays,Holiday Packages,Hotel Booking,Bus Tickets,Train Tickets,Villas & Stays",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 379,
    "slug": "finusmart-suraksha",
    "brand_name": "FinuSmart Suraksha",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_finusmart-suraksha1677603287.png",
    "search_keyword": "Health,Insurance Benefit",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 380,
    "slug": "finusmart-easy-cash",
    "brand_name": " FinuSmart Easy Cash",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_finusmart-easy-cash1677603273.png",
    "search_keyword": "Healthcare,Insurance Benefits",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 383,
    "slug": "barbeque-nation",
    "brand_name": "Barbeque Nation",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_barbeque-nation1677601807.png",
    "search_keyword": "Vegetarian Food,Non Vegetarian Food,Restaurant,Buffet,Dine-in Restaurant",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 384,
    "slug": "forbes",
    "brand_name": "Forbes",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_forbes1677603317.png",
    "search_keyword": "Magazine,News,Business Magazine,Articles",
    "is_ott_brand": "Y",
    "ott_display_website": "Y"
    },
    {
    "id": 385,
    "slug": "medibuddy",
    "brand_name": "MediBuddy",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_medibuddy1677604182.png",
    "search_keyword": "Full Body Check Up,Lab Test,Medicines,Doctor Consultation",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 386,
    "slug": "myupchar-medicines",
    "brand_name": "myUpchar Medicines",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_myupchar-medicines1677604258.png",
    "search_keyword": "Health & Wellness,Medicines,Nutrition",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 388,
    "slug": "organic-india",
    "brand_name": "ORGANIC INDIA",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_organic-india1677604324.png",
    "search_keyword": "Suppliments,Herbal Suppliments,Health & Wellness,Nutrition,Face Care,Body Care",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 392,
    "slug": "reliance-jewels",
    "brand_name": "Reliance Jewels",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_reliance-jewels1677604436.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 393,
    "slug": "euphoria-jewellery-silver-coin",
    "brand_name": "Euphoria Jewellery Silver Coin",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_euphoria-jewellery-silver-coin1677603216.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 394,
    "slug": "wildcraft",
    "brand_name": "Wildcraft",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_wildcraft1677605438.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 396,
    "slug": "cultpass-pro-elite",
    "brand_name": "cultpass Pro/Elite",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_cultpass-pro-elite1677602390.png",
    "search_keyword": "Gym Membership,Fitness Studio,Weight Management",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 397,
    "slug": "cultsport",
    "brand_name": "cultsport",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_cultsport1677602626.png",
    "search_keyword": "Bags & Backpacks,Top Wear,Sports,Bottom Wear,Footwear,Fitness Equipments,Gym Membership,Jackets,Trolley Bags,Active Wear,Swimwear",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 404,
    "slug": "cafe-delhi-heights",
    "brand_name": "Cafe Delhi Heights",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_cdh1677665028.png",
    "search_keyword": "Vegetarian Food,Non Vegetarian Food,Restaurant,Dine-in Restaurant",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 406,
    "slug": "wow-momo",
    "brand_name": "Wow!Momo",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_wow!momo1677605480.png",
    "search_keyword": "Momos,Vegetarian Momos,Non Vegetarian Momos,Vegetarian Food,Non Vegetarian Food,Restaurant",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 407,
    "slug": "wow-china",
    "brand_name": "Wow!China",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_wow!china1677605465.png",
    "search_keyword": "Non Vegetarian Food,Vegetarian Food,Restaurant,Dine-in Restaurant,Chinese Food",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 413,
    "slug": "truefitt-&-hill",
    "brand_name": "TRUEFITT & HILL",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_truefitt-&-hill1677605125.png",
    "search_keyword": "Men Grooming,Body Mist,Bath, Body & Hair,Skin & Hair Care,Fragrances",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 414,
    "slug": "braingymjr",
    "brand_name": "BrainGymJr",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_braingym1677602109.png",
    "search_keyword": "Kids Education,Kids Online Learning,Kids Educational Stories",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 415,
    "slug": "audible",
    "brand_name": "Audible",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_audible1677601663.png",
    "search_keyword": "Audio Books,Podcasts",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 416,
    "slug": "estele",
    "brand_name": "Estele",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_estele1677602865.png",
    "search_keyword": "Gold Jewellery,Jewellery,Silver Jewellery,Rings,Earings,Necklaces & Pendants",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 420,
    "slug": "timezone",
    "brand_name": "Timezone",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_timezone1677605069.png",
    "search_keyword": "Gaming,Arcade,Kids Parties,Corporate Parties",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 421,
    "slug": "gaanaplus",
    "brand_name": "Gaana",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_gaana1677603372.png",
    "search_keyword": "Songs,Music,Podcasts,Radio",
    "is_ott_brand": "Y",
    "ott_display_website": "Y"
    },
    {
    "id": 422,
    "slug": "jiosaavn",
    "brand_name": "JioSaavn",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_jiosaavn1677665074.png",
    "search_keyword": "Songs,Music,Podcasts,Radio",
    "is_ott_brand": "Y",
    "ott_display_website": "Y"
    },
    {
    "id": 423,
    "slug": "teamonk",
    "brand_name": "Teamonk",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_teamonk1677605041.png",
    "search_keyword": "Tea,Weight Management",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 424,
    "slug": "bombay-shaving-company",
    "brand_name": "BOMBAY SHAVING COMPANY",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_bombay-shaving-company1677602047.png",
    "search_keyword": "Men Grooming,Bath, Body & Hair,Body Mist,Skin & Hair Care,Fragrances",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 425,
    "slug": "wonderchef",
    "brand_name": "Wonderchef",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_wonderchef1677605454.png",
    "search_keyword": "Kitchen Appliances,Home & Living, Kitchen Tools ,Pressure Cooker",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 426,
    "slug": "voot-select",
    "brand_name": "Voot Select",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_voot-select1677605427.png",
    "search_keyword": "TV Shows,Channels,News,Reality Shows,Movies,Documentaries,Web Series,LIVE Sports",
    "is_ott_brand": "Y",
    "ott_display_website": "Y"
    },
    {
    "id": 427,
    "slug": "voot-kids",
    "brand_name": "Voot Kids",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_voot---kids1677605316.png",
    "search_keyword": "Kids Entertainment,Kids Education,Kids Movies,Cartoons",
    "is_ott_brand": "Y",
    "ott_display_website": "Y"
    },
    {
    "id": 429,
    "slug": "itc-hotels",
    "brand_name": "ITC Hotels",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_itc-hotels1677603662.png",
    "search_keyword": "Hotels,Hotel Booking,Fine Dining,Holidays,Holiday Packages,Spa Services",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 432,
    "slug": "beyoung",
    "brand_name": "Beyoung",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_beyoung1677601850.png",
    "search_keyword": "Men Shirt,Women Fashion,Women Shirt,Shirts,Top Wear,Fashion Accessories,Bottom Wear,Mobile Accessories,Men Fashion",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 433,
    "slug": "hoi-choi",
    "brand_name": "Hoi Choi",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_logo_hoichoi-logo_red_16716345490381659437991.jpeg",
    "search_keyword": null,
    "is_ott_brand": "Y",
    "ott_display_website": "Y"
    },
    {
    "id": 434,
    "slug": "play-n-learn",
    "brand_name": "Play ‘N’ Learn",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_play-n-learn1677604366.png",
    "search_keyword": "Kids Parties,Kids Games,Play Area",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 435,
    "slug": "hammer",
    "brand_name": "Hammer",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_hammer1677603478.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 436,
    "slug": "avast",
    "brand_name": "Avast",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_avast1677601766.png",
    "search_keyword": "Anti Virus,Cyber Security,Anti Malware",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 437,
    "slug": "vaango",
    "brand_name": "Vaango",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_vaango1677605278.png",
    "search_keyword": "Vegetarian Food,Non Vegetarian Food,Restaurant,Dine-in Restaurant,South Indian Food",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 438,
    "slug": "veridicus",
    "brand_name": "Veridicus",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_veridicus1677605290.png",
    "search_keyword": "Health & Wellness,Baby Products,Nutrition",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 439,
    "slug": "swiggy-instamart",
    "brand_name": "Swiggy Instamart",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_swiggy-instamart1677604991.png",
    "search_keyword": "Dairy & Breakfast,Groceries,Tea, Coffee & Health Drinks,Baby Care,Pharma, Hygiene & Wellness,Cleaning Essentials,Home & Office Stationery ,Pet Care,Instant & Frozen Food,Beauty & Grooming,Ice Cream",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 440,
    "slug": "beauty-scentiments",
    "brand_name": "Beauty Scentiments",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_beauty-scentiments1677601835.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 441,
    "slug": "corseca",
    "brand_name": "Corseca",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_just-corseca1677603710.png",
    "search_keyword": "Smart Watches,Earphones,Speakers\tEarbuds,Headphones,Wireless Headphones,Mobile Accessories,Eyewear",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 454,
    "slug": "daily-objects",
    "brand_name": "Daily Objects",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_dailyobjects1677602773.png",
    "search_keyword": "Mobile Accessories,Office Accessories,Watch Accessories,Wallet,Stationery,Home Decor",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 455,
    "slug": "balenzia",
    "brand_name": "Balenzia",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_balenzia1677601789.png",
    "search_keyword": "Socks,Women Socks,Men Socks,Kids Socks",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 461,
    "slug": "auric",
    "brand_name": "Auric",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_auric1677601691.png",
    "search_keyword": "Supplements,Weight Management,Tea",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 462,
    "slug": "truly-blessed",
    "brand_name": "Truly Blessed",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_truly-blessed1677605157.png",
    "search_keyword": "Baby Products",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 464,
    "slug": "mx-player",
    "brand_name": "MX Player",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_mx-player1677604244.png",
    "search_keyword": "TV Shows,Channels,Movies,LIVE Sports,Documentaries,News,Web Series",
    "is_ott_brand": "Y",
    "ott_display_website": "Y"
    },
    {
    "id": 465,
    "slug": "hyperice",
    "brand_name": "Hyperice",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_hyperice1677603647.png",
    "search_keyword": "Electronics,Health & Wellness",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 466,
    "slug": "glam-studio",
    "brand_name": "Glam Studio",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_glam-studio1677603437.png",
    "search_keyword": "Salon Services,Body Spa,Makeup Services, Grooming Services,Skin & Hair Care Services",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 469,
    "slug": "arrow",
    "brand_name": "Arrow",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_arrow1677601649.png",
    "search_keyword": "Men Fashion,Wallets,Formal Suit,Bags & Backpacks,Men Shirt,Top Wear,Shirts,Bottom Wear,Belts,Shoes",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 470,
    "slug": "amazon-shopping-voucher",
    "brand_name": "Amazon Shopping Voucher",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_amazon-shopping-voucher1677601618.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 471,
    "slug": "freecultr",
    "brand_name": "Freecultr",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_freecultr1677603332.png",
    "search_keyword": "Men Fashion,Gym Accessories,Women Fashion,Bottom Wear,Active Wear,Men Innerwear,Women Innerware,Sleepwear,Socks",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 472,
    "slug": "troll-beads",
    "brand_name": "Troll Beads",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_troll-beads1677605107.png",
    "search_keyword": "Jewellery,Silver Jewellery,Necklaces & Pendants,Rings,Earings",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 473,
    "slug": "v-mart",
    "brand_name": "V Mart",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_v-mart1677605258.png",
    "search_keyword": "Shoes,Baby Products,Socks,Men Fashion,Women Fashion,Top Wear,Bottom Wear,Ethnic Wear,Men Shirt,Women Shirt,Active Wear,Kids Fashion,Footwear,Women Footwear,Fashion Accessories,Loafers,Men Footwear,Bags & Backpacks,Gadgets,Home & Living,Toys & Games,Home Decor,Kids Shoes,Smart Watches,Lingerie,Sneakers,Belts,Boots,Earbuds,Sleepwear,Earphones",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 474,
    "slug": "airtel-xstream",
    "brand_name": "Airtel Xstream",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_airtel-xstream1677601535.png",
    "search_keyword": "TV Shows,Channels,Movies,LIVE Sports,News,Documentaries,Web Series",
    "is_ott_brand": "Y",
    "ott_display_website": "Y"
    },
    {
    "id": 475,
    "slug": "wynk-music",
    "brand_name": "Wynk Music",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_wynk1677605492.png",
    "search_keyword": "Songs,Music,Podcasts,Radio",
    "is_ott_brand": "Y",
    "ott_display_website": "Y"
    },
    {
    "id": 478,
    "slug": "nykaa",
    "brand_name": "Nykaa",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_nykaa1677604298.png",
    "search_keyword": "Makeup & Beauty,Bath & Body,Perfume,Health & Wellness,Cosmetic Products,Personal Care,Body Mist,Baby Care,Skin & Hair Care, Grooming & Styling,Nutritional Supplements,Makeup Accessories,Weight Management,Fragrances,Beauty Products,Feminine Hygiene,Beauty Services",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 479,
    "slug": "fitpass",
    "brand_name": "FITPASS",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_fitpasss1677603301.png",
    "search_keyword": "Gym Membership,Fitness Studio,Weight Management",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 480,
    "slug": "zomato-gift-card",
    "brand_name": "Zomato Gift Card",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_zomato-gift-card1677605515.png",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 481,
    "slug": "pee-safe",
    "brand_name": "Pee Safe",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_peesafe1677604337.png",
    "search_keyword": "Health & Wellness,Feminine Hygiene",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 482,
    "slug": "ustraa",
    "brand_name": "Ustraa",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_ustraa1677605207.png",
    "search_keyword": "Men Grooming,Body Mist,Bath, Body & Hair,Skin & Hair Care,Fragrance",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 483,
    "slug": "pilgrim",
    "brand_name": "Pilgrim",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_pilgrim1677604352.png",
    "search_keyword": null,
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 484,
    "slug": "love-beauty-and-planet",
    "brand_name": "Love Beauty & Planet",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_abc1682497833.jpeg",
    "search_keyword": "Bath & Body,Skin & Hair Care,Body Care,Face Care",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 485,
    "slug": "simple",
    "brand_name": "Simple",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_simple-logo-011677604626.png",
    "search_keyword": "Skin & Hair Care,Bath & Body",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 486,
    "slug": "unlimited",
    "brand_name": "Unlimited",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_logo_unlimited16776051711679986068.webp",
    "search_keyword": "Women Fashion,Men Fashion,Indian Wear,Kids Fashion,Active Wear,Women Shirt,Men Shirt,Shirts",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 487,
    "slug": "swiss-beauty",
    "brand_name": "SWISS BEAUTY",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_swiss-beauty1677605018.png",
    "search_keyword": "Cosmetics,Makeup & Beauty,Makeup Accessories",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 488,
    "slug": "bewakoof",
    "brand_name": "Bewakoof",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_bewakoof1677665013.png",
    "search_keyword": "Women Fashion,Men Fashion,Shoes, Top Wear, Bottom Wear,Footwear,Active Wear,Bags & Backpacks,Women Footwear,Men Footwear,Belts,Boots,Fashion Accessories,Socks",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 489,
    "slug": "healthifyme-smart-plan-3-months",
    "brand_name": "HealthifyMe Smart Plan",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_healthifyme1677665057.png",
    "search_keyword": "Health & Wellness,Doctor Consultation,Weight Management",
    "is_ott_brand": "Y",
    "ott_display_website": "Y"
    },
    {
    "id": 491,
    "slug": "victorias-secret-major-brands",
    "brand_name": "Victoria's Secret - Major Brands",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_victoria-s1677654626.png",
    "search_keyword": "Body Mist,Women Sleepwear,Lingerie,Fragrances,Bags & Bagpacks,Bodycare,Fashion Accessories",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 492,
    "slug": "american-tourister",
    "brand_name": "American Tourister",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_logo1678103450.png",
    "search_keyword": "Trolley Bags,Bags & Backpacks",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 493,
    "slug": "samsonite",
    "brand_name": "Samsonite",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_logo1678103803.png",
    "search_keyword": "Trolley Bags,Bags & Backpacks",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 495,
    "slug": "star-bazaar",
    "brand_name": "STAR BAZAAR",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_logo1677818784.png",
    "search_keyword": "Home Decor,Home & Living,Perfume,Pressure Cooker, Kitchen Appliances,Home Appliances,Groceries",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 496,
    "slug": "dpauls",
    "brand_name": "DPauls",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_logo1679030191.png",
    "search_keyword": "Flights,International Flights,Domestic Flights,Resorts,Villas & Stays,Holidays,Holiday Packages,Bus Tickets,Train Tickets,Hotel Booking",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 497,
    "slug": "melorra-gold-coin",
    "brand_name": "Melorra Gold Coin",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_logo1679487757.png",
    "search_keyword": "Gold Coins",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 498,
    "slug": "melorra-gold-jewellery",
    "brand_name": "Melorra Gold Jewellery",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_logo1679488459.png",
    "search_keyword": "Jewellery,Silver Jewellery,Necklaces & Pendants,Gold Jewellery,Gold Earings,Rings,Earings,Gold Rings",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 499,
    "slug": "melorra-diamond-jewellery",
    "brand_name": "Melorra Diamond Jewellery",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_logo1679488612.png",
    "search_keyword": "Jewellery,Silver Jewellery,Necklaces & Pendants,Diamond Jewellery,Earings,Rings,Diamond Rings,Diamond Earings",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 500,
    "slug": "renee-cosmetics",
    "brand_name": "Renee Cosmetics",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_logo1680607411.png",
    "search_keyword": "Makeup,Cosmetics,Makeup Accessories",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 501,
    "slug": "discovery-plus",
    "brand_name": "Discovery Plus",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_logo1680694955.png",
    "search_keyword": "Wildlife Documentaries,Documentaries,Discovery Channel,Channel",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 504,
    "slug": "superbottoms",
    "brand_name": "Superbottoms",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_logo1681895085.png",
    "search_keyword": "Baby Care,Baby Products",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 505,
    "slug": "amazon-prime-voucher",
    "brand_name": "Amazon Prime Voucher",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_logo1682510051.png",
    "search_keyword": "TV Shows,Channels,Movies,LIVE Sports,Documentaries,Web Series",
    "is_ott_brand": "Y",
    "ott_display_website": "Y"
    },
    {
    "id": 508,
    "slug": "smile-foundation",
    "brand_name": "Smile Foundation",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_logo1682503311.png",
    "search_keyword": "NGO",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 513,
    "slug": "max-fashion-online",
    "brand_name": "Max Fashion Online",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_logo_max-online16776041511685085701.webp",
    "search_keyword": "",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 514,
    "slug": "cleartrip-hotel",
    "brand_name": "Cleartrip Hotel",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_cleartrip1684388413.png",
    "search_keyword": "Flights,Domestic Flights,International Flights,Resorts,Villas & Stays,Holidays,Holiday Packages,Bus Tickets,Train Tickets,Hotel Booking",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 515,
    "slug": "cleartrip-generic",
    "brand_name": "Cleartrip Generic",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_cleartrip1684388414.png",
    "search_keyword": "Flights,Domestic Flights,International Flighs,Hotel Booking,Bus Tickets,Train Tickets,Resorts,Villas & Stays,Holidays,Holiday Packages",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 516,
    "slug": "healthkart",
    "brand_name": "HealthKart",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_logo1684758229.png",
    "search_keyword": "Health & Wellness,Weight Management,Suppliments,Nutrition",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 517,
    "slug": "gnc",
    "brand_name": "GNC",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_gnc-logo1684990338.png",
    "search_keyword": "Health & Wellness,Supplements,Sports Nutrition",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    },
    {
    "id": 518,
    "slug": "the-skin-story",
    "brand_name": "The Skin Story",
    "logo": "https://cdn.gyftr.com/gyftrweb/brands/logo_tss-logo1685528772.png",
    "search_keyword": "Skin & Hair Care,Makeup & Beauty,Face Care,Bath & Body",
    "is_ott_brand": "N",
    "ott_display_website": "N"
    }
    ];

    export default brands;
    