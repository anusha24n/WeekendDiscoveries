const tripsData = [
  {
    id: 1,
    title: "Leavenworth",
    description: "A Bavarian-style village with stunning mountain views.",
    image: "/assets/Leavenworth.jpg",
    alt: "People walking along a street in Leavenworth, with Bavarian-style buildings and a festive atmosphere",
    travelTime: 2,
    distance: "117 miles",
    activities: ["Shopping", "Hiking", "Dining"],
    highlight:
      "Known for its Bavarian architecture and festivals, including Oktoberfest.",
    additionalDescriptions: [
      "Wander through streets adorned with hanging flower baskets and painted murals that immerse you in Old-World European charm.",
      "Enjoy seasonal celebrations like the Christkindlmarkt and the Village of Lights, which transform the town into a winter wonderland.",
      "Venture onto nearby trails to discover crystal-clear alpine lakes, dense evergreen forests, and panoramic mountain ridges.",
    ],
    details: {
      bestStays: [
        {
          name: "Posthotel Leavenworth",
          type: "Luxury Hotel",
          description:
            "An adults-only hotel offering a serene environment with European-style spa amenities, riverside views, and close proximity to downtown attractions.",
        },
        {
          name: "Bavarian Lodge",
          type: "Lodge",
          description:
            "A Bavarian-themed lodge featuring cozy rooms, complimentary breakfast, and convenient access to Leavenworth's shops and restaurants.",
        },
      ],
      airbnb: [
        {
          name: "Cozy Place",
          description:
            "An adorable rental with historic character, located less than a 5-minute walk from downtown Leavenworth and offering access to the Wenatchee River.",
        },
        {
          name: "Little Bear A-frame",
          description:
            "A dreamy A-frame cabin with a cedar hot tub, situated 3 minutes from the Wenatchee River and 25 minutes from Leavenworth, ideal for a mountain getaway.",
        },
      ],
      restaurants: [
        "Munchen Haus",
        "South Leavenworth",
        "Icicle Brewing Company",
      ],
      restrooms: ["Downtown Public Restrooms", "Festhalle Restrooms"],
      hiddenSpots: ["Waterfront Park Trail", "Icicle Creek Canyon"],
      funActivities: [
        "Tubing on the Wenatchee River",
        "Horse-Drawn Sleigh Rides",
      ],
      gasStations: ["Leavenworth Chevron", "Shell Station"],
      coffeeShops: ["J5 Coffee", "Argonaut Espresso"],
    },
  },
  {
    id: 2,
    title: "Poulsbo",
    description:
      "A charming Scandinavian-themed waterfront town with picturesque views, and rich cultural heritage.",
    image: "/assets/Poulsbo.jpg",
    alt: "Aerial view of houses near a mountain in Poulsbo, known for its Scandinavian charm",
    travelTime: 1,
    distance: "30 miles",
    activities: ["Kayaking", "Dining", "Local Markets"],
    highlight:
      "Famous for its waterfront views, bakeries, and Viking heritage.",
    additionalDescriptions: [
      "Stroll along the marina’s edge to watch fishing boats and pleasure craft bob gently in the harbor.",
      "Explore quaint storefronts featuring Nordic handicrafts, local antiques, and artisan bakeries offering kringle and lefse.",
      "Immerse yourself in the town’s Viking spirit during annual festivals and cultural events that celebrate Poulsbo’s Scandinavian roots.",
    ],
    details: {
      bestStays: [
        {
          name: "GuestHouse Inn",
          type: "Hotel",
        },
        {
          name: "Poulsbo Marina Airbnb",
          type: "Private Rental",
        },
      ],
      airbnb: [
        {
          name: "Seaside Cottage Retreat",
        },
        {
          name: "Cozy Viking Cottage",
        },
      ],
      restaurants: [
        "Sluys Bakery",
        "The Loft at Latitude 47.7",
        "Tizley's Europub",
      ],
      restrooms: ["Poulsbo Marina Restrooms", "Waterfront Park Restrooms"],
      hiddenSpots: ["Fish Park Nature Trails", "Poulsbo's Little Norway"],
      funActivities: ["Stand-Up Paddleboarding", "Historic Walking Tours"],
      gasStations: ["Chevron Poulsbo", "76 Station"],
      coffeeShops: ["Hot Shots Java", "Cups Espresso"],
    },
  },
  {
    id: 3,
    title: "Bainbridge Island",
    description:
      "A charming island offering art galleries, local eateries, and waterfront views.",
    image: "/assets/BainbridgeIsland.jpg",
    alt: "Waterfront view of houses along a calm body of water at Bainbridge Island",
    travelTime: 1,
    distance: "10 miles (Ferry Ride)",
    activities: ["Wine Tasting", "Biking", "Museums"],
    highlight:
      "A short ferry ride from Seattle with tranquil settings and local wines.",
    additionalDescriptions: [
      "Meander through picturesque neighborhoods where local art installations add flair to quiet corners and hidden gardens.",
      "Taste farm-fresh cuisine at the local farmer’s market and pair it with handcrafted wines at one of the island’s boutique wineries.",
      "Rent a bicycle and pedal along coastal roads lined with old-growth forests, passing by bays dotted with sailboats and kayaks.",
    ],
    details: {
      bestStays: [
        {
          name: "Eagle Harbor Inn",
          type: "Boutique Hotel",
        },
        {
          name: "Island Country Inn",
          type: "Inn",
        },
      ],
      airbnb: [
        {
          name: "Modern Island Cottage",
        },
        {
          name: "Seaside Studio",
        },
      ],
      restaurants: ["Blackbird Bakery", "Harbour Public House", "Bruciato"],
      restrooms: ["Ferry Terminal Restrooms", "Waterfront Park Facilities"],
      hiddenSpots: ["Grand Forest Trails", "Fay Bainbridge Park"],
      funActivities: [
        "Wine Tasting at Eleven Winery",
        "Cycling Around the Island",
      ],
      gasStations: ["Chevron Bainbridge", "Shell Gas Station"],
      coffeeShops: ["Coquette Bake Shop", "Pegasus Coffee House"],
    },
  },
  {
    id: 4,
    title: "Port Townsend",
    description: "A historic Victorian seaport town with vibrant art culture.",
    image: "/assets/PortTownsend.jpg",
    alt: "A quiet street in Port Townsend lined with historic Victorian-style buildings",
    travelTime: 2,
    distance: "58 miles",
    activities: ["Boating", "Shopping", "Art Galleries"],
    highlight: "Preserved Victorian architecture and the Wooden Boat Festival.",
    additionalDescriptions: [
      "Discover the town’s maritime legacy at the waterfront, where wooden schooners and tall ships evoke the glory of the past.",
      "Savor the local art scene by browsing artist studios tucked into historic brick buildings and Victorian-era mansions.",
      "Take a leisurely walk through well-preserved neighborhoods to appreciate grand architectural details like stained-glass windows and intricate spindles.",
    ],
    details: {
      bestStays: [
        {
          name: "The Bishop Hotel",
          type: "Historic Hotel",
        },
        {
          name: "Ravenscroft Inn",
          type: "Inn",
        },
      ],
      airbnb: [
        {
          name: "Victorian Loft Retreat",
        },
        {
          name: "Harborview Cottage",
        },
      ],
      restaurants: [
        "Silverwater Cafe",
        "Alchemy Bistro & Wine Bar",
        "The Bayview",
      ],
      restrooms: ["Point Hudson Marina", "Waterfront Park Restrooms"],
      hiddenSpots: ["Chetzemoka Park", "North Beach Trail"],
      funActivities: ["Whale Watching Tours", "Wooden Boat Festival Events"],
      gasStations: ["Port Townsend Chevron", "Shell Gas Station"],
      coffeeShops: ["Better Living Through Coffee", "Velocity Coffee"],
    },
  },
  {
    id: 5,
    title: "Mount Rainier National Park",
    description:
      "A majestic park with breathtaking views of Mount Rainier and diverse wildlife.",
    image: "/assets/MountRainier.jpg",
    alt: "Snow-covered Mount Rainier surrounded by evergreen trees under a bright blue sky",
    travelTime: 2,
    distance: "75 miles",
    activities: ["Hiking", "Wildlife Watching", "Photography"],
    highlight: "Stunning wildflower meadows and panoramic mountain vistas.",
    additionalDescriptions: [
      "Follow alpine trails scented with wildflowers and evergreen needles as you approach glaciers shimmering under the summer sun.",
      "Listen to the distant rumble of waterfalls and rushing streams that carve through moss-covered old-growth forests.",
      "Experience unforgettable sunrises that paint the mountain’s snow-capped summit in hues of pink and gold.",
    ],
    details: {
      bestStays: [
        {
          name: "Paradise Inn",
          type: "Historic Lodge",
        },
        {
          name: "National Park Inn",
          type: "Lodge",
        },
      ],
      airbnb: [
        {
          name: "Mountain View Cabin",
        },
        {
          name: "Rainier Alpine Retreat",
        },
      ],
      restaurants: ["Summit House", "Wildberry Restaurant", "Copper Creek Inn"],
      restrooms: ["Visitor Center Facilities", "Trailhead Restrooms"],
      hiddenSpots: ["Grove of the Patriarchs Trail", "Reflection Lakes"],
      funActivities: ["Snowshoeing in Winter", "Scenic Drives on Sunrise Road"],
      gasStations: ["Ashford Chevron", "Packwood Gas Station"],
      coffeeShops: ["Rainier Coffee Company", "Mountain Goat Coffee"],
    },
  },
  {
    id: 6,
    title: "Snoqualmie Falls",
    description: "A picturesque waterfall surrounded by lush greenery.",
    image: "/assets/Snoqualmie.jpg",
    alt: "Snoqualmie Falls with a brown and white lodge building nearby, surrounded by lush greenery",
    travelTime: 1,
    distance: "29 miles",
    activities: ["Photography", "Hiking", "Picnicking"],
    highlight:
      "A 268-foot waterfall with nearby hiking trails and scenic overlooks.",
    additionalDescriptions: [
      "Capture the misty spray of the falls as it creates rainbows on sunny afternoons and a dramatic roar after heavy rains.",
      "Enjoy the serene riverbank where ancient cedars and ferns provide a lush, emerald backdrop.",
      "Learn about the area’s Indigenous heritage and the cultural significance this powerful waterfall holds for local tribes.",
    ],
    details: {
      bestStays: [
        {
          name: "Salish Lodge & Spa",
          type: "Luxury Hotel",
        },
        {
          name: "Treehouse Point",
          type: "Unique Stay",
        },
      ],
      airbnb: [
        {
          name: "Falls View Cabin",
        },
        {
          name: "Riverside Retreat",
        },
      ],
      restaurants: [
        "The Dining Room at Salish Lodge",
        "Woodman Lodge",
        "Aahaar Indian Eatery",
      ],
      restrooms: ["Falls Overlook Restrooms", "Visitor Parking Lot Facilities"],
      hiddenSpots: ["Rattlesnake Ledge Trail", "Twin Falls"],
      funActivities: [
        "Hot Air Balloon Rides",
        "Picnic by the Snoqualmie River",
      ],
      gasStations: ["North Bend Chevron", "Snoqualmie Shell"],
      coffeeShops: ["Snoqualmie Falls Brewery Café", "Twede's Café"],
    },
  },
  {
    id: 7,
    title: "Anacortes",
    description:
      "A gateway to the San Juan Islands with rich maritime history.",
    image: "/assets/Anacortes.jpg",
    alt: "A boat floating on calm water under a purple sunset sky, representing Anacortes' serene waterfront",
    travelTime: 2,
    distance: "81 miles",
    activities: ["Boating", "Fishing", "Art Festivals"],
    highlight:
      "Known for its annual arts festival and whale-watching opportunities.",
    additionalDescriptions: [
      "Wander through working marinas where fishermen mend their nets and seabirds wheel overhead.",
      "Admire dramatic sunsets over the San Juan Islands, their silhouettes etched against a fiery western sky.",
      "Explore the town’s thriving arts scene, including murals, galleries, and seasonal festivals that celebrate creativity and craftsmanship.",
    ],
    details: {
      bestStays: [
        {
          name: "Majestic Inn & Spa",
          type: "Hotel",
        },
        {
          name: "The Marina Inn",
          type: "Inn",
        },
      ],
      airbnb: [
        {
          name: "Island Gateway Cottage",
        },
        {
          name: "Waterfront Cabin Retreat",
        },
      ],
      restaurants: ["Adrift", "Gere-a-Deli", "Anthony's at Cap Sante Marina"],
      restrooms: ["Washington Park Restrooms", "Downtown Visitor Center"],
      hiddenSpots: ["Cap Sante Lookout", "Ship Harbor Interpretive Preserve"],
      funActivities: ["Whale Watching Tours", "Kayaking Around Burrows Island"],
      gasStations: ["Anacortes Chevron", "Shell at Commercial Avenue"],
      coffeeShops: ["Penguin Coffee", "Johnny Picasso's"],
    },
  },
  {
    id: 8,
    title: "Deception Pass State Park",
    description:
      "A stunning park with beaches, trails, and iconic Deception Pass Bridge.",
    image: "/assets/Deception Pass.jpg",
    alt: "The iconic Deception Pass Bridge spanning over a turquoise river with a lush green forest in the background",
    travelTime: 2,
    distance: "86 miles",
    activities: ["Hiking", "Boating", "Beachcombing"],
    highlight: "A breathtaking park with scenic trails and waterways.",
    additionalDescriptions: [
      "Experience the dramatic meeting of coastal currents as turbulent teal waters churn beneath the iconic bridge.",
      "Traverse thickly forested trails leading to hidden coves, tidal pools, and secluded beaches rich in marine life.",
      "Listen to the cries of bald eagles and seabirds echoing across cliffs, as sailboats glide silently in the distance.",
    ],
    details: {
      bestStays: [
        {
          name: "Swinomish Casino & Lodge",
          type: "Hotel",
        },
        {
          name: "Captain Whidbey Inn",
          type: "Inn",
        },
      ],
      airbnb: [
        {
          name: "Forest Beach Cabin",
        },
        {
          name: "Deception Pass Retreat",
        },
      ],
      restaurants: [
        "Shrimp Shack",
        "Seabolt's Smokehouse",
        "The PNW Coastal Café",
      ],
      restrooms: ["Bowman Bay Restrooms", "West Beach Parking Facilities"],
      hiddenSpots: ["Goose Rock Summit", "Rosario Beach Tide Pools"],
      funActivities: ["Bridge Walks", "Beachcombing at North Beach"],
      gasStations: ["Deception Pass Shell", "Chevron at Oak Harbor"],
      coffeeShops: ["Whidbey Coffee", "Red Cup Café"],
    },
  },
  {
    id: 9,
    title: "Olympic National Park",
    description:
      "A vast park featuring diverse ecosystems from mountains to rainforests.",
    image: "/assets/OlympicNationalPark.jpg",
    alt: "A deer grazing on green grass with snow-capped mountains in the background",
    travelTime: 3,
    distance: "112 miles",
    activities: ["Hiking", "Camping", "Wildlife Watching"],
    highlight:
      "A UNESCO World Heritage Site with stunning beaches, mountains, and old-growth forests.",
    additionalDescriptions: [
      "Venture into lush rainforests dripping with moss, where giant ferns and towering hemlocks create an ancient green tapestry.",
      "Stand on wild, rocky shores where driftwood piles up and the ocean’s rhythm shapes the coastline.",
      "Climb alpine ridges for sweeping panoramas of jagged peaks, glacier-fed rivers, and flower-carpeted meadows.",
    ],
    details: {
      bestStays: [
        {
          name: "Kalaloch Lodge",
          type: "Cabin",
        },
        {
          name: "Lake Crescent Lodge",
          type: "Lodge",
        },
      ],
      airbnb: [
        {
          name: "Forest Haven Cabin",
        },
        {
          name: "Rainforest Retreat",
        },
      ],
      restaurants: [
        "Lake Crescent Dining Room",
        "Kalaloch Creekside Restaurant",
      ],
      restrooms: ["Visitor Center Restrooms", "Trailhead Restrooms"],
      hiddenSpots: ["Sol Duc Hot Springs", "Hoh Rain Forest's Hall of Mosses"],
      funActivities: [
        "Star Gazing at Hurricane Ridge",
        "Kayaking on Lake Crescent",
      ],
      gasStations: ["Forks Gas & Convenience", "Port Angeles Chevron"],
      coffeeShops: ["Blackbird Coffee", "Rainforest Coffee Co."],
    },
  },
  {
    id: 10,
    title: "San Juan Islands",
    description:
      "An archipelago with scenic ferry rides, wildlife, and quaint towns.",
    image: "/assets/SanJuanIslands.jpg",
    alt: "A rocky cliff overlooking the ocean under a clear blue sky, representing the scenic beauty of the San Juan Islands",
    travelTime: 3,
    distance: "90 miles",
    activities: ["Whale Watching", "Kayaking", "Cycling"],
    highlight: "One of the best places to spot orcas in their natural habitat.",
    additionalDescriptions: [
      "Drift through calm straits where orcas, harbor seals, and porpoises play amid kelp forests and gentle currents.",
      "Visit cozy harbors framed by pastel-painted houses, and explore art galleries that capture island life.",
      "Enjoy a slow pace, savoring locally sourced cuisine, hand-crafted cheeses, and fresh shellfish while gazing at distant mountain silhouettes.",
    ],
  },
  {
    id: 11,
    title: "Whidbey Island",
    description: "A serene island with charming small towns and scenic vistas.",
    image: "/assets/WhidbeyIsland.jpg",
    alt: "A person standing on a deck overlooking a serene view of Whidbey Island with trees and water",
    travelTime: 1,
    distance: "48 miles",
    activities: ["Hiking", "Wine Tasting", "Local Markets"],
    highlight: "Home to Ebey's Landing National Historical Reserve.",
    additionalDescriptions: [
      "Drive rolling country roads lined with fields of lavender, wildflowers, and old barns whispering stories of a rural past.",
      "Explore historic Coupeville, where weathered wharves and wooden storefronts overlook tranquil Penn Cove.",
      "Discover protected wetlands, coastal bluffs, and hidden beaches that invite reflection, photography, and quiet contemplation.",
    ],
    details: {
      bestStays: [
        {
          name: "The Inn at Langley",
          type: "Boutique Hotel",
        },
        {
          name: "Captain Whidbey Inn",
          type: "Historic Inn",
        },
      ],
      airbnb: [
        {
          name: "Seaside Bungalow",
        },
        {
          name: "Cedar Hollow Retreat",
        },
      ],
      restaurants: ["Prima Bistro", "Oystercatcher", "Pickles Deli"],
      restrooms: [
        "Downtown Langley Facilities",
        "Ebey's Landing Trailhead Restrooms",
      ],
      hiddenSpots: ["Double Bluff Beach", "Greenbank Farm Trails"],
      funActivities: [
        "Whale Watching from Coupeville",
        "Farmers Market Strolls",
      ],
      gasStations: ["Coupeville Chevron", "Shell in Freeland"],
      coffeeShops: ["Useless Bay Coffee Company", "Mukilteo Coffee Roasters"],
    },
  },
  {
    id: 12,
    title: "North Cascades National Park",
    description: "A rugged wilderness with alpine peaks and turquoise lakes.",
    image: "/assets/Northcascades.jpg",
    alt: "A tranquil lake surrounded by snow-covered mountains under a clear blue sky, representing North Cascades National Park",
    travelTime: 3,
    distance: "110 miles",
    activities: ["Hiking", "Camping", "Photography"],
    highlight: "Often called the 'American Alps' for its dramatic landscapes.",
    additionalDescriptions: [
      "Traverse narrow trails along steep valley walls carpeted with alpine wildflowers and evergreen forests.",
      "Gaze across turquoise glacial lakes reflecting snowy summits, where the air is crisp and silent except for distant waterfalls.",
      "Embrace solitude in a land where mountain goats roam steep cliffs and eagles soar against dramatic craggy peaks.",
    ],
    details: {
      bestStays: [
        {
          name: "North Cascades Lodge",
          type: "Lodge",
        },
        {
          name: "Diablo Lake Cabins",
          type: "Cabin",
        },
      ],
      airbnb: [
        {
          name: "Mountain Serenity Cabin",
        },
        {
          name: "Alpine Retreat",
        },
      ],
      restaurants: [
        "Good Food Skagit Valley",
        "Cascadian Farms Roadside Stand",
      ],
      restrooms: ["Visitor Center Facilities", "Trailhead Restrooms"],
      hiddenSpots: ["Diablo Lake Overlook", "Thunder Knob Trail"],
      funActivities: ["Boat Rentals on Ross Lake", "Stargazing at Newhalem"],
      gasStations: ["Marblemount Chevron", "Skagit River Gas Stop"],
      coffeeShops: ["Riverside Coffee", "Glacier Peak Espresso"],
    },
  },
  {
    id: 13,
    title: "Lake Chelan",
    description: "A crystal-clear lake surrounded by vineyards and orchards.",
    image: "/assets/Chelanlake.jpg",
    alt: "A person standing on a hill overlooking Lake Chelan with mountains in the background",
    travelTime: 3,
    distance: "180 miles",
    activities: ["Boating", "Wine Tasting", "Fishing"],
    highlight:
      "One of Washington's premier wine regions with stunning lake views.",
    additionalDescriptions: [
      "Cruise the lake’s 50-mile length to reach remote communities nestled between towering basalt cliffs and orchard-laden hillsides.",
      "Sample award-winning wines at hillside vineyards, pairing robust reds and crisp whites with panoramic water views.",
      "Savor sun-soaked days by the shoreline, where gentle breezes and crystal-blue waters offer a summer escape.",
    ],
    details: {
      bestStays: [
        {
          name: "Campbell's Resort",
          type: "Resort",
        },
        {
          name: "Lakeshore Inn",
          type: "Inn",
        },
      ],
      airbnb: [
        {
          name: "Lakeside Getaway",
        },
        {
          name: "Winery Retreat",
        },
      ],
      restaurants: [
        "Marcela's Cocina Mexicana",
        "Lakeview Drive-In",
        "Tsillan Cellars",
      ],
      restrooms: ["Downtown Public Restrooms", "Chelan Marina Facilities"],
      hiddenSpots: ["Echo Ridge Trails", "Chelan Riverwalk Park"],
      funActivities: ["Paddleboarding on the Lake", "Touring Local Wineries"],
      gasStations: ["Chelan Chevron", "Shell on Main Street"],
      coffeeShops: ["Riverwalk Coffee", "Lake Chelan Coffee Company"],
    },
  },
  {
    id: 14,
    title: "Skagit Valley Tulip Festival",
    description: "A vibrant celebration of tulip blooms in the spring.",
    image: "/assets/Skagitvalleytulip.jpg",
    alt: "A vibrant field of pink tulips with trees in the background at the Skagit Valley Tulip Festival",
    travelTime: 1,
    distance: "65 miles",
    activities: ["Photography", "Festivals", "Local Markets"],
    highlight: "Famous for its colorful fields of tulips and daffodils.",
    additionalDescriptions: [
      "Wander among endless rows of vibrant tulips, each bloom a brushstroke in nature’s most colorful painting.",
      "Admire the patchwork fields—yellow, pink, purple, and red—that stretch to distant farmlands and rolling hills.",
      "Celebrate the arrival of spring with artisanal craft markets, photography workshops, and family-friendly festivities.",
    ],
    details: {
      bestStays: [
        {
          name: "La Conner Channel Lodge",
          type: "Lodge",
        },
        {
          name: "Swinomish Casino & Lodge",
          type: "Hotel",
        },
      ],
      airbnb: [
        {
          name: "Tulip Fields Cottage",
        },
        {
          name: "Valley View Retreat",
        },
      ],
      restaurants: [
        "Seeds Bistro",
        "Nell Thorn Waterfront Bistro",
        "Calico Cupboard Café",
      ],
      restrooms: [
        "Festival Grounds Facilities",
        "Downtown La Conner Restrooms",
      ],
      hiddenSpots: ["Roozengaarde Display Garden", "Bay View State Park"],
      funActivities: [
        "Bike Tours Through Tulip Fields",
        "Photography Contests",
      ],
      gasStations: ["Chevron in Mount Vernon", "Shell on Pioneer Highway"],
      coffeeShops: ["Espresso Connection", "Farmhouse Coffee"],
    },
  },
  {
    id: 15,
    title: "Seattle Arboretum",
    description:
      "A lush garden with seasonal blooms and scenic walking trails.",
    image: "/assets/Seattlearboretum.jpg",
    alt: "A pair of brown flip-flops on green grass at Seattle Arboretum",
    travelTime: 0.5,
    distance: "5 miles",
    activities: ["Walking", "Photography", "Nature Study"],
    highlight: "Home to the Japanese Garden and seasonal cherry blossoms.",
    additionalDescriptions: [
      "Stroll beneath towering maples and fragrant magnolias, their leaves rustling softly in the lakeside breeze.",
      "Marvel at the seasonal changes—from cherry blossoms in spring to fiery foliage in autumn—that transform the landscape.",
      "Observe migrating birds, turtles sunning on logs, and the delicate interplay of sun and shadow across curated botanical collections.",
    ],
    details: {
      bestStays: [
        {
          name: "The Edgewater Hotel",
          type: "Luxury Hotel",
        },
        {
          name: "Hotel Deca",
          type: "Hotel",
        },
      ],
      airbnb: [
        {
          name: "Urban Oasis Studio",
        },
        {
          name: "Seattle Nature Retreat",
        },
      ],
      restaurants: ["Café Flora", "Tilikum Place Café", "Harvest Vine"],
      restrooms: ["Visitor Center Facilities", "Japanese Garden Restrooms"],
      hiddenSpots: ["Foster Island Trail", "Azalea Way Path"],
      funActivities: ["Picnicking by Lake Washington", "Birdwatching"],
      gasStations: ["Chevron on Montlake", "Shell on Madison"],
      coffeeShops: ["Fuel Coffee", "Zoka Coffee Roasters"],
    },
  },
  {
    id: 16,
    title: "Crystal Mountain Resort",
    description:
      "A year-round destination with skiing, hiking, and stunning views.",
    image: "/assets/Crystalmountainresort.jpg",
    alt: "A tranquil river flowing near mountains at Crystal Mountain Resort",
    travelTime: 2,
    distance: "85 miles",
    activities: ["Skiing", "Hiking", "Gondola Rides"],
    highlight:
      "Offers breathtaking views of Mount Rainier from the summit gondola.",
    additionalDescriptions: [
      "Glide down pristine powder slopes in winter, surrounded by panoramic views of Cascade peaks and valleys.",
      "Explore alpine meadows in summer, where wildflowers bloom beneath clear, blue skies and mountain streams run cold and clear.",
      "Take in the grandeur of Mount Rainier from the gondola’s summit station as you sip a warm beverage and embrace the silence of high altitudes.",
    ],
    details: {
      bestStays: [
        {
          name: "Crystal Mountain Hotels",
          type: "Lodge",
        },
        {
          name: "Alpine Inn",
          type: "Inn",
        },
      ],
      airbnb: [
        {
          name: "Mountain Chalet",
        },
        {
          name: "Crystal Basecamp Cabin",
        },
      ],
      restaurants: ["Summit House", "Bullwheel Restaurant", "Fireside Lounge"],
      restrooms: ["Summit Facilities", "Base Lodge Restrooms"],
      hiddenSpots: ["Henskin Lake Trail", "Silver Creek Basin"],
      funActivities: ["Scenic Gondola Rides", "Mountain Biking in Summer"],
      gasStations: ["Enumclaw Chevron", "Shell in Greenwater"],
      coffeeShops: ["Alpine Espresso", "Chair 6 Coffee"],
    },
  },
];

export default tripsData;
