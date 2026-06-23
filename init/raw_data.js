let raw_data = [
  {
    title: "Cliffside Oceanview Villa with Private Infinity Pool",
    description:
      "Perched on a quiet hillside overlooking a wide stretch of blue water, this spacious villa is designed for travelers who want privacy, comfort, and a strong sense of place rather than a generic hotel room. The home features a large open-plan living area with floor-to-ceiling windows, a fully equipped modern kitchen, handcrafted wooden furniture, and multiple lounge spaces for reading, working, or simply staring at the sea while pretending your inbox does not exist. The primary bedroom opens directly onto a sun deck with uninterrupted ocean views, while the second bedroom offers a calm garden-facing setting that stays cool throughout the afternoon. Outdoors, guests have access to a private infinity pool, shaded dining area, tropical landscaping, and a small barbecue corner suitable for long evening meals. The villa is close enough to reach cafés, beach clubs, and convenience stores within a short drive, but far enough away to remain peaceful after sunset. This stay works especially well for couples, remote workers, and small families looking for a premium coastal base with enough space to actually live in rather than merely sleep in.",
    price: 186,
    location: "Uluwatu, Bali",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    title: "Minimalist Loft in the Arts District with Skyline Balcony",
    description:
      "Set inside a converted warehouse in a lively arts neighborhood, this loft blends industrial structure with a clean, modern interior that feels warm instead of performatively cold. Exposed brick walls, polished concrete floors, high ceilings, and oversized windows give the space a dramatic sense of volume, while soft lighting, layered textiles, and custom shelving make it practical for longer stays. The main living room includes a dedicated workspace, a comfortable sectional, and direct access to a balcony with city skyline views that become especially good at sunset. The kitchen is stocked for actual cooking, not the usual ceremonial Airbnb frying pan and two forks arrangement, and includes a large dining island for meals or laptop sprawl. The bedroom is partially separated for privacy and features blackout curtains, a premium mattress, and generous closet space. Guests can walk to galleries, bakeries, music venues, breweries, and late-night food spots, making this a strong option for solo travelers, couples, and digital nomads who want to stay somewhere with personality without sacrificing comfort.",
    price: 142,
    location: "Los Angeles, California",
    country: "United States",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
  },
  {
    title: "Stone Cottage with Vineyard Views and Rustic Fireplace",
    description:
      "This restored stone cottage sits at the edge of a vineyard-lined valley and offers a slower, more grounded kind of stay for guests who prefer birdsong and local wine to traffic and elevators. The home combines traditional architecture with thoughtful upgrades, including underfloor heating, a renovated farmhouse kitchen, a large walk-in shower, and high-speed internet for the tragically employed. Original timber beams, textured stone walls, and antique-style details preserve the cottage’s character, while the layout remains functional and bright. A generous outdoor terrace looks across rows of vines and rolling hills, making it an ideal place for breakfast, evening drinks, or dramatic life reassessments. Inside, the living room centers around a wood-burning fireplace and a deep sofa, and the bedroom is designed for comfort with crisp linens, soft lighting, and countryside views from the window. Nearby villages offer bakeries, local markets, wineries, and scenic cycling routes, so the cottage works beautifully for couples, honeymooners, or anyone trying to disappear into a picturesque rural fantasy for a few days.",
    price: 129,
    location: "Tuscany",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607",
  },
  {
    title: "Luxury Desert Dome Retreat under Open Night Skies",
    description:
      "Designed for travelers who want a memorable stay without giving up comfort, this luxury desert dome offers a cinematic landscape experience with the practical advantage of insulation, air conditioning, a proper bed, and plumbing that behaves like civilization still matters. The dome sits on a secluded patch of desert land with broad panoramic views, especially striking at sunrise and after dark when the sky opens up into a ridiculous number of stars. Inside, the space is arranged with a king bed, reading nook, compact kitchenette, rainfall shower, and a circular seating area beneath a transparent skylight section perfect for stargazing from bed. Outside, guests have access to a fire pit, outdoor bathtub, private deck, and a shaded breakfast area. The atmosphere is intentionally quiet, with enough distance from neighboring properties to feel private but not isolated in a concerning way. It’s ideal for couples, photographers, and city people who suddenly discover they enjoy silence once it comes with a luxury mattress and a curated desert aesthetic.",
    price: 211,
    location: "Wadi Rum",
    country: "Jordan",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    title: "Canal-Side Apartment in Historic Center with Tall Windows",
    description:
      "Located in a historic canal district, this bright apartment offers the sort of old-world setting people pay too much money to post online about, except here it also functions well as a place to live. The home features tall windows overlooking the water, original detailing, hardwood floors, a calm neutral palette, and a comfortable living room designed for long evenings rather than quick check-ins. The kitchen includes full appliances, a dining table for four, and enough cookware for proper meals if you decide to temporarily roleplay as a local instead of eating pastries three times a day. The bedroom is quiet and spacious with excellent natural light, generous storage, and soft bedding, while the bathroom has been updated with modern fixtures and a walk-in shower. The surrounding area is full of independent cafés, galleries, small grocery stores, and scenic walking routes along the canal. This listing suits couples, solo travelers, and remote workers looking for a central location with charm, comfort, and easy access to museums, transit, and neighborhood life.",
    price: 173,
    location: "Amsterdam",
    country: "Netherlands",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
  },
  {
    title: "Forest Cabin with Hot Tub, Glass Walls, and Mountain Air",
    description:
      "Tucked into a dense evergreen forest just outside a mountain town, this modern cabin was built to make the outdoors feel close without requiring guests to surrender to actual hardship. The structure combines dark timber, glass walls, and warm interior finishes to create a stay that feels both secluded and polished. The main room includes a wood stove, plush seating, a dining area, and a kitchen with full-size appliances, while the bedroom faces the trees and is designed for deep sleep with blackout curtains and layered bedding. One of the standout features is the private hot tub on the deck, positioned to look out over the forest canopy and ideal after hiking, skiing, or simply existing. There is also a fire pit, hammock area, and a covered outdoor dining space for year-round use. Trails, lakes, and small-town cafés are all within a short drive, making this cabin a strong fit for couples, small families, and anyone who wants a cinematic nature stay without pretending they enjoy sleeping in a tent.",
    price: 198,
    location: "Whistler, British Columbia",
    country: "Canada",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650",
  },
  {
    title: "Riad-Style Courtyard Home near the Old Medina",
    description:
      "This beautifully restored riad-style home offers a calm retreat within easy reach of the old city, balancing traditional architecture with the practical comforts modern travelers keep demanding, often correctly. At the center of the house is a tiled open-air courtyard filled with natural light, potted greenery, and a small fountain that softens the sound of the surrounding neighborhood. Around it are multiple sleeping areas, a spacious lounge with handcrafted details, a dining room, and a fully equipped kitchen suited to both short and extended stays. The rooftop terrace provides a second living space with seating, shaded corners, and broad views over nearby rooftops, making it an excellent place for breakfast or evening tea. Bedrooms are decorated with carved wood accents, woven textiles, and warm earth tones, while bathrooms have been updated with modern fixtures and large showers. Guests can easily reach local markets, historic sites, cafés, and hammams, yet return to a private, quiet home that feels sheltered from the energy of the streets. Ideal for families, groups, and design-minded travelers who want atmosphere without sacrificing convenience.",
    price: 117,
    location: "Marrakech",
    country: "Morocco",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    title: "Lakefront Chalet with Sauna and Private Dock",
    description:
      "Set directly on the edge of a quiet lake, this timber chalet is built for slow mornings, long views, and the kind of deep silence that makes city noise feel like a personal attack. The house includes a large open living area with a vaulted ceiling, stone fireplace, oversized windows, and a full kitchen with lake views from the sink, which is frankly unnecessary but nice. The sleeping areas are spread across two levels, allowing families or groups to share the space without being constantly in each other’s way. A private sauna, outdoor deck, and small dock extend the experience beyond the interior, making the property especially appealing in both summer and winter. Guests can swim, paddle, fish, hike, or do absolutely nothing with professional commitment. The chalet is within reach of village shops and seasonal markets, but its main appeal is the sense of privacy and calm. It suits couples, families, and friend groups looking for a scenic retreat with enough comfort and space to justify staying in for entire days.",
    price: 224,
    location: "Lake Bled",
    country: "Slovenia",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    title: "Elegant Parisian Flat near Cafés, Galleries, and Metro",
    description:
      "This refined apartment occupies an upper floor of a classic Parisian building and combines period character with a practical layout that actually works for travelers. Original molding, tall French windows, herringbone floors, and a marble fireplace preserve the apartment’s historic charm, while the furnishings remain clean, comfortable, and intentionally understated. The living room offers a bright place to read, work, or plan your daily attempt to consume an irresponsible quantity of pastries, and the dining area sits beside a compact but fully equipped kitchen with quality appliances. The bedroom is quiet and restful with a queen bed, built-in storage, and blackout curtains, while the bathroom has been renovated with a spacious shower and heated towel rail. The surrounding neighborhood is full of bakeries, wine bars, bookstores, and local boutiques, and several metro lines are within walking distance for easy access to museums, monuments, and the rest of the city. This listing is best for couples or solo travelers who want a central stay with style, convenience, and a little architectural drama.",
    price: 208,
    location: "Paris",
    country: "France",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
  },
  {
    title: "Tropical Bamboo Treehouse with Jungle River Access",
    description:
      "Hidden among tall palms and dense tropical greenery, this handcrafted bamboo treehouse offers a stay that feels adventurous without descending into complete nonsense. Elevated above the forest floor, the home captures cooling breezes and sweeping views of the surrounding jungle canopy, while thoughtful design choices keep the experience comfortable and functional. The open-air living space includes a lounging platform, dining nook, and a compact kitchen with essentials for simple meals. The sleeping area is fitted with a large bed draped in mosquito netting, and the bathroom features stone textures, greenery, and a rainfall shower that leans heavily into the whole tropical retreat fantasy. A short path leads to a river access point where guests can sit, read, or cool off, and the property also includes hammocks, an outdoor daybed, and shaded corners for working or resting. Nearby yoga studios, cafés, rice terraces, and wellness spots make it easy to combine nature, exploration, and mild self-reinvention. Ideal for couples and solo travelers seeking a memorable jungle stay with strong design and a sense of escape.",
    price: 138,
    location: "Ubud, Bali",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    title: "Secluded Beach House with Wraparound Deck and Sunset Views",
    description:
      "This airy beach house sits just steps from a quiet stretch of shoreline and is designed for guests who want direct access to the sea without giving up space, comfort, or a decent mattress. The home features a wraparound deck with multiple seating areas, a bright living room with large windows, and an open kitchen stocked for long stays and family-style meals. Interiors lean coastal without becoming aggressively nautical, using natural textures, soft colors, and simple furnishings that keep the focus on the landscape outside. Bedrooms are arranged to provide privacy for families or groups, with the main suite opening toward the deck and the water beyond. Guests can spend the day swimming, reading in the shade, grilling outdoors, or watching the light change over the ocean from the upper deck. The property is within a short drive of cafés, grocery stores, and small local restaurants, but its main appeal is the combination of privacy, sea air, and uninterrupted sunset views. Best suited to families, couples, and small groups planning a relaxed coastal stay.",
    price: 231,
    location: "Byron Bay, New South Wales",
    country: "Australia",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650",
  },
  {
    title: "Scandinavian Studio with Harbor View and Cozy Reading Nook",
    description:
      "Compact but exceptionally well designed, this Scandinavian-style studio makes intelligent use of space while still feeling calm, airy, and comfortable enough for a meaningful stay. Large windows frame views of the harbor and bring in generous natural light throughout the day, while pale wood finishes, soft textiles, and restrained décor create a warm, uncluttered atmosphere. The apartment includes a sleeping area tucked beside the window, a built-in reading nook with shelving, a small dining table, and a fully equipped kitchen with quality cookware and thoughtful storage. The bathroom is sleek and modern with heated floors and a walk-in shower, and there is also a compact desk for guests balancing travel with work. The neighborhood offers easy access to waterfront walks, coffee shops, public transport, and local markets, making the apartment especially practical for solo travelers and couples who want to stay in a central but peaceful part of the city. It is the kind of place where even doing laundry feels suspiciously well designed.",
    price: 154,
    location: "Copenhagen",
    country: "Denmark",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
  },
  {
    title: "Historic Townhouse with Rooftop Terrace and Cathedral Views",
    description:
      "Located on a quiet lane in the historic center, this multi-level townhouse combines old masonry, restored details, and modern conveniences in a way that feels deliberate rather than decorative. The property includes a spacious living room, separate dining area, fully equipped kitchen, and several bedrooms arranged across different floors for privacy. Traditional architectural elements such as tiled floors, high ceilings, and shuttered windows have been preserved, while modern upgrades like air conditioning, renovated bathrooms, and reliable Wi-Fi make the stay practical for longer visits. The standout feature is the rooftop terrace, which offers open views over the old city skyline and nearby cathedral towers, making it an ideal setting for breakfast, evening wine, or quietly judging everyone else’s travel decisions. The surrounding area is walkable and rich with restaurants, bakeries, museums, and local shops. This listing works especially well for families and groups who want a central base with character, outdoor space, and enough room to gather without spending the entire trip on top of one another.",
    price: 196,
    location: "Seville",
    country: "Spain",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
  },
  {
    title: "Glass Cabin on Snowy Hillside with Northern Sky Views",
    description:
      "Built into a quiet hillside above a pine forest, this glass-front cabin offers an immersive winter landscape experience while still providing all the comforts necessary for human dignity. The design centers on a panoramic living area with expansive windows facing the valley and northern sky, allowing guests to enjoy shifting light, snowfall, and seasonal aurora activity from the warmth of the sofa. Inside, the cabin includes a compact but well-appointed kitchen, a dining corner, heated floors, a spa-style bathroom, and a bedroom designed for deep rest after long outdoor days. The muted interior palette keeps the focus on the scenery, while the private sauna and sheltered deck add a restorative element to the stay. During winter, guests can access nearby cross-country trails, snowmobile routes, and village services; in warmer months, the area becomes ideal for hiking and lake excursions. This stay is especially suited to couples and solo travelers looking for a memorable cold-climate retreat that feels remote, cinematic, and surprisingly comfortable.",
    price: 245,
    location: "Rovaniemi, Lapland",
    country: "Finland",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650",
  },
  {
    title: "Bohemian Penthouse with Private Plunge Pool and City Views",
    description:
      "This top-floor penthouse combines playful design, strong natural light, and generous outdoor space in a way that makes it feel more like a personal hideaway than a short-term rental. Inside, the apartment features textured walls, artisan furniture, woven accents, and a mix of vintage and modern pieces that create a relaxed bohemian atmosphere without tipping into clutter. The living area opens onto a broad terrace with lounge seating, plants, and a private plunge pool overlooking the city skyline. A full kitchen, dining area, and separate workspace make the apartment practical for longer stays, while the bedroom offers privacy, soft lighting, and direct terrace access. The bathroom includes a walk-in shower and high-quality fixtures, and the building itself sits in a neighborhood known for independent cafés, nightlife, and local food spots. It’s an excellent option for couples, creatives, and remote workers who want a visually distinctive stay with outdoor space and easy access to the social energy of the city.",
    price: 167,
    location: "Mexico City",
    country: "Mexico",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    title: "Ski-In Chalet with Fireplace, Mudroom, and Alpine Balcony",
    description:
      "Designed for mountain travelers who value convenience almost as much as scenery, this ski-in chalet offers direct access to the slopes along with the kind of interior layout that makes winter gear management slightly less ridiculous. The main floor includes a spacious living room centered around a stone fireplace, a large dining table for group meals, and a full kitchen with everything needed for extended stays. A dedicated mudroom provides storage for boots, skis, coats, and wet layers, which sounds boring until you have nowhere to put six pairs of snow-covered boots. Bedrooms are spread across multiple levels and include warm wood finishes, comfortable bedding, and mountain-facing windows. The balcony overlooks alpine peaks and nearby runs, while the lower terrace includes a hot tub for post-ski recovery. The chalet is close to lifts, equipment rental shops, and village restaurants, making it ideal for families or friend groups planning an active mountain holiday without compromising on comfort or location.",
    price: 286,
    location: "Zermatt",
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650",
  },
  {
    title: "Sunny Courtyard Apartment in a Quiet Lisbon Neighborhood",
    description:
      "Set in a residential Lisbon neighborhood away from the heaviest tourist traffic, this apartment offers a balanced stay for guests who want local atmosphere, reliable comfort, and easy access to the city without living directly above a bar. The interior is bright and relaxed, with tiled details, wooden floors, and a soft color palette that reflects the natural light pouring in from the courtyard side. The apartment includes a comfortable living room, compact dining area, full kitchen, and a spacious bedroom with excellent storage and a work-friendly corner. French doors open onto a private courtyard patio furnished with outdoor seating and potted plants, creating a useful extension of the living space for breakfast, reading, or an evening glass of wine. Cafés, bakeries, small grocery shops, and tram connections are all within walking distance, while major landmarks can be reached easily by transit or a longer scenic walk. This is a strong choice for couples or solo travelers seeking a calm home base with charm and practical amenities.",
    price: 133,
    location: "Lisbon",
    country: "Portugal",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
  },
  {
    title: "Island Bungalow with Outdoor Shower and Coral Coast Access",
    description:
      "Surrounded by palms and flowering tropical plants, this island bungalow is built for slow days, salt air, and the deeply ambitious goal of doing very little. The structure combines traditional island materials with updated interiors, creating a stay that feels rooted in its surroundings while still delivering air conditioning, a proper kitchen, and a bed that does not punish you for booking something scenic. Inside, the bungalow features a bright open-plan layout with a lounge area, dining table, compact kitchen, and a sleeping space positioned to catch natural light and garden views. Sliding doors open onto a shaded veranda, and the private outdoor shower adds a relaxed resort-like element without the resort pricing theatrics. Beaches, snorkeling spots, small restaurants, and local boat tours are all accessible nearby, while the property itself remains peaceful and private. This listing is ideal for couples and solo travelers looking for a tropical base that feels intimate, comfortable, and close to the water.",
    price: 121,
    location: "Coral Coast, Viti Levu",
    country: "Fiji",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    title: "Modern Farmhouse Retreat with Orchard, Fire Pit, and Long Views",
    description:
      "Located on the edge of a small agricultural valley, this modern farmhouse retreat offers generous indoor and outdoor space for guests who want countryside calm without surrendering all access to decent coffee and internet. The house features a large communal kitchen, open dining area, vaulted living room, and multiple bedrooms arranged to suit families or small groups. Interiors combine natural wood, stone accents, and clean contemporary lines, while oversized windows frame orchard views and bring in soft light throughout the day. Outside, guests can enjoy a wide lawn, fire pit, orchard paths, and a covered porch furnished for long meals and evening conversations. The home is close to wineries, hiking trails, farm stands, and small-town restaurants, making it easy to build a relaxed itinerary without spending the entire trip in the car. This stay is especially good for family gatherings, friend weekends, or remote work escapes where people want both beauty and enough space to avoid becoming each other’s problem.",
    price: 209,
    location: "Sonoma County, California",
    country: "United States",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    title: "Compact Tokyo Apartment near Station with Smart Storage Design",
    description:
      "Small by global standards but exceptionally efficient, this Tokyo apartment is designed with the kind of spatial intelligence that makes most larger rentals look lazy. Located within a short walk of a major station, the apartment offers quick access to restaurants, convenience stores, shopping streets, and multiple train lines while still remaining on a relatively quiet side street. Inside, every element is carefully planned: built-in storage, a fold-out dining area, a proper work desk, a comfortable sleeping nook, and a compact kitchen fitted with quality appliances and practical cookware. The bathroom is modern and spotless, with a deep soaking tub and separate shower area, and the apartment includes air conditioning, fast Wi-Fi, and laundry facilities for longer stays. Large windows and minimal décor keep the space feeling open rather than cramped. This listing is especially suitable for solo travelers and couples who value location, efficiency, and a calm, polished home base in the middle of a dense urban environment.",
    price: 119,
    location: "Shibuya, Tokyo",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
  },
  {
    title: "Countryside Windmill Stay with Meadow Paths and Skylight Bedroom",
    description:
      "For guests who would like their accommodation to come with a story rather than just a lockbox code, this converted countryside windmill offers a distinctive stay surrounded by meadows, walking paths, and open sky. The interior has been carefully adapted across multiple levels, preserving the original circular structure while introducing modern conveniences such as heating, a full kitchen, updated bathroom, and comfortable sleeping areas. The upper bedroom sits beneath a skylight and offers broad views across the surrounding landscape, while the main living space includes a dining area, reading corner, and cozy seating arranged around the tower’s curved walls. Outdoors, guests can enjoy a private garden, breakfast patio, and access to nearby cycling and walking routes through fields and small villages. The location feels secluded without being isolated, with shops and restaurants reachable by a short drive. This listing suits couples, writers, and travelers who enjoy unusual architecture, quiet surroundings, and the pleasant illusion that they have briefly escaped ordinary life.",
    price: 146,
    location: "North Holland",
    country: "Netherlands",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650",
  },
  {
    title: "Harbor Loft with Exposed Beams and Ferry Terminal Access",
    description:
      "Overlooking a working harbor lined with cafés and old warehouses, this loft offers a comfortable and atmospheric base for travelers who want to stay near the water without sacrificing urban convenience. The interior features exposed timber beams, high ceilings, wide plank floors, and a large open living area furnished with a mix of contemporary seating and vintage details. The kitchen is spacious enough for real cooking and includes a breakfast bar and full dining setup, while the bedroom is tucked into a quieter section of the loft for better rest. Large windows frame harbor activity and changing light throughout the day, and the apartment is within easy walking distance of ferry terminals, local seafood restaurants, galleries, and public transport. A dedicated workspace and reliable Wi-Fi make it practical for longer stays, especially for remote workers who like a little maritime scenery with their spreadsheets. Best suited to couples and solo travelers who want a stylish urban stay with character and strong transport links.",
    price: 159,
    location: "Auckland",
    country: "New Zealand",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
  },
  {
    title: "Hillside Villa with Olive Groves, Pool, and Sunset Dining Terrace",
    description:
      "Set among olive groves on a sunlit hillside, this villa offers a generous amount of indoor and outdoor living space for guests seeking a warm-weather escape with privacy and a strong sense of landscape. The property includes several bedrooms, a large kitchen, a dining room, and a comfortable lounge opening directly onto the terrace and pool area. Interiors are simple but elegant, combining natural stone, plaster walls, soft linens, and local decorative touches without turning the house into a museum of fake rusticity. The outdoor areas are the main event: a pool with countryside views, shaded dining terrace, lounge seating under pergolas, and multiple corners for reading or afternoon naps. Nearby villages offer beaches, tavernas, markets, and historical sites, while the villa itself remains quiet and self-contained enough for guests who prefer staying in. It works particularly well for families or groups wanting a Mediterranean base with enough space, privacy, and atmosphere to make the trip feel properly restorative.",
    price: 238,
    location: "Crete",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    title: "Urban Micro-Apartment with Smart Kitchen and Rooftop Access",
    description:
      "This compact urban apartment proves that small spaces do not need to feel temporary, awkward, or designed by someone who has never owned a suitcase. The layout uses custom cabinetry, fold-away furniture, and carefully zoned lighting to create a functional stay with a proper sleeping area, efficient kitchen, breakfast counter, and a small workstation for guests mixing travel with work. Floor-to-ceiling windows bring in plenty of light, and building amenities include shared rooftop access with city views, seating areas, and laundry facilities. The apartment is located in a lively district filled with restaurants, coffee shops, bookstores, and public transit connections, making it a practical choice for travelers who care more about location and intelligent design than square footage. The bathroom is sleek and modern, storage is surprisingly good, and every element has clearly been thought through. Best for solo travelers and couples who want an efficient, central, and stylish place to return to after long days in the city.",
    price: 111,
    location: "Seoul",
    country: "South Korea",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
  },
  {
    title: "Riverfront Houseboat Stay with Deck Dining and Morning Mist Views",
    description:
      "Moored along a calm riverbank lined with trees and walking paths, this thoughtfully renovated houseboat offers a stay that feels unusual in the best possible way. Inside, the space has been adapted for comfort with a bright lounge, compact but capable kitchen, dining nook, and a bedroom positioned to capture water views first thing in the morning. The interior uses warm timber, soft lighting, and marine-inspired details sparingly enough to avoid becoming theatrical. Outside, the private deck functions as an extra living room with seating, dining space, and open views across the water, especially atmospheric at sunrise when the river is still and the city feels far away. Despite the novelty of staying on a boat, the essentials are solid: heating, air conditioning, reliable Wi-Fi, and a proper bathroom with hot water. Nearby bike routes, cafés, parks, and transit make it easy to explore the area. This stay is ideal for couples and solo travelers looking for something memorable, quiet, and slightly romantic without being absurdly impractical.",
    price: 148,
    location: "Berlin",
    country: "Germany",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650",
  },
  {
    title: "Safari-Inspired Lodge with Savanna Views and Outdoor Lounge",
    description:
      "Built to frame the surrounding landscape rather than compete with it, this safari-inspired lodge offers broad savanna views, warm natural materials, and enough comfort to make early sunrise game drives feel like a reasonable life choice. The lodge includes a spacious bedroom suite, indoor sitting area, writing desk, and a bathroom with a freestanding tub positioned near large windows overlooking the plains. A shaded outdoor lounge and dining deck extend the living space and create an ideal setting for quiet breakfasts, evening drinks, or long periods of simply watching the landscape change. Interiors combine canvas textures, wood furniture, woven accents, and neutral tones that echo the environment while still feeling polished and restful. The property is well suited to travelers seeking a nature-focused stay with privacy and comfort, whether as part of a broader safari itinerary or a slower retreat. It is the kind of place where doing nothing still feels eventful because the view keeps performing.",
    price: 263,
    location: "Masai Mara",
    country: "Kenya",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    title: "Colorful Colonial Apartment with Balcony over a Quiet Plaza",
    description:
      "This cheerful colonial-era apartment sits above a small plaza in one of the city’s older neighborhoods and offers a bright, character-filled stay within walking distance of cafés, galleries, and historic streets. High ceilings, patterned tile floors, tall shuttered doors, and painted accents preserve the building’s architectural personality, while modern upgrades like air conditioning, renovated bathrooms, and fast Wi-Fi make the apartment easy to live in. The living room opens to a balcony overlooking the plaza, creating a pleasant spot for morning coffee or evening people-watching at a safe observational distance from the rest of humanity. A full kitchen and dining area make the apartment suitable for longer stays, and the bedroom is positioned toward the quieter rear side of the property for better rest. The neighborhood offers a strong mix of local food, culture, and walkability without feeling overly polished or artificial. Best suited to couples, solo travelers, and anyone who appreciates color, history, and a little architectural texture in their accommodation.",
    price: 127,
    location: "Cartagena",
    country: "Colombia",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
  },
  {
    title: "Mountain View A-Frame with Wood Stove and Stargazing Deck",
    description:
      "This classic A-frame cabin sits on a quiet ridge with broad mountain views and enough distance from neighboring homes to feel genuinely private. The structure has been updated with a warm, modern interior while preserving the dramatic geometry that makes A-frames so appealing to people who enjoy forests and triangular architecture. The main room includes a wood stove, lounge seating, dining area, and a compact but fully functional kitchen, while the loft-style bedroom opens toward the valley through tall front-facing windows. Outside, a large deck provides room for outdoor dining, reading, and late-night stargazing, and a lower fire pit area adds another place to gather after dark. Hiking trails, scenic drives, and small-town restaurants are all accessible nearby, but the cabin is equally suited to guests who plan to stay put and do as little as possible in a beautiful setting. Ideal for couples and solo travelers wanting a peaceful, design-forward mountain retreat.",
    price: 176,
    location: "Blue Ridge, Georgia",
    country: "United States",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650",
  },
  {
    title: "Luxury Marina Apartment with Gym, Pool, and Floor-to-Ceiling Views",
    description:
      "Positioned high above a waterfront marina district, this luxury apartment offers expansive city-and-water views along with the convenience of a modern residential tower. The interior is sleek but comfortable, with a spacious living room, dining area, full kitchen, separate bedroom, and large windows that bring in light from morning through evening. Furnishings are contemporary and practical, designed for both short visits and extended stays, and the apartment includes a dedicated workspace, laundry facilities, and strong climate control for year-round comfort. Building amenities include a gym, pool, secure lobby, and direct access to nearby restaurants, shops, and waterfront promenades. The location makes it easy to explore the city while still enjoying a polished, self-contained base that feels a little more elevated than the average rental. This listing works particularly well for business travelers, couples, and remote workers who want comfort, views, and easy access to both nightlife and everyday conveniences.",
    price: 214,
    location: "Dubai Marina",
    country: "United Arab Emirates",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
  },
  {
    title: "Jungle Eco-Lodge with Hanging Bed and Waterfall Trail Access",
    description:
      "Surrounded by dense green forest and birdsong loud enough to replace your alarm clock, this eco-lodge is designed for travelers who want immersion in nature without abandoning comfort or basic hygiene. The lodge is built from local materials and positioned to maximize airflow, light, and views into the surrounding jungle canopy. Inside, guests will find a large bed, a suspended daybed for reading or napping, a compact seating area, and a bathroom with stone finishes and an open-air shower sheltered by tropical plants. A simple but functional kitchenette supports light meals, while the covered deck creates a second living space for coffee, journaling, or listening to rain move through the trees. Several waterfall trails and swimming spots begin close to the property, making it easy to alternate between quiet rest and outdoor exploration. Best suited to couples and solo travelers who want a nature-focused stay that feels intimate, atmospheric, and just rugged enough to remain interesting.",
    price: 134,
    location: "La Fortuna",
    country: "Costa Rica",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    title:
      "Heritage Haveli Suite with Courtyard Breakfast and Arched Interiors",
    description:
      "Located within a restored heritage haveli, this suite offers a rich architectural setting paired with the comforts expected by modern travelers who are, against all odds, correct to want both history and functioning air conditioning. The space features high ceilings, carved doorways, arched alcoves, patterned stone floors, and antique-inspired furnishings that reflect the building’s original character without making the room feel fragile or staged. Guests have access to a private bedroom suite, a sitting room for reading or working, and a large bathroom with traditional detailing and updated fixtures. The central courtyard serves breakfast and afternoon tea beneath open sky, while rooftop seating offers city views and a quieter place to unwind after a day of markets, forts, and sensory overload. The haveli is well positioned for exploring old streets, local restaurants, and cultural landmarks, making it a strong fit for couples and solo travelers who want a stay with atmosphere, architectural identity, and a little ceremonial elegance.",
    price: 96,
    location: "Jaipur, Rajasthan",
    country: "India",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    title: "Coastal Apartment with Surf Storage and Walk-to-Beach Access",
    description:
      "This relaxed coastal apartment is designed for beach travelers who want easy access to the water without sacrificing the comforts of a well-organized home base. The interior includes a bright living room, full kitchen, dining nook, and a bedroom arranged for comfort after long days outside, with soft linens, good ventilation, and plenty of storage. A practical surf storage area, outdoor rinse station, and small balcony make the apartment especially useful for guests planning to spend most of their time in and around the ocean. The décor stays simple and warm, using natural materials and beach-inspired tones without trying too hard to remind you that water exists nearby. Restaurants, cafés, board rentals, and grocery stores are all within walking distance, and the beach itself is close enough to reach without logistical drama. Ideal for couples, solo travelers, and surf-minded guests who want a functional, welcoming, and well-located stay by the coast.",
    price: 125,
    location: "Ericeira",
    country: "Portugal",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    title: "Grand Family Villa with Game Room, Garden Pool, and Chef’s Kitchen",
    description:
      "Created for larger groups who need both shared gathering space and room to spread out, this grand family villa offers a comfortable, high-capacity stay without feeling like an event venue disguised as a home. The property includes multiple bedrooms, several bathrooms, a large open living room, formal dining area, and a chef’s kitchen equipped for substantial group meals. Additional spaces such as a game room, reading lounge, and covered outdoor terrace make it easy for different people to occupy the house without collapsing into each other’s schedules. The landscaped garden contains a private pool, sun loungers, outdoor dining setup, and enough lawn space for children to play or adults to pretend they’re relaxing while checking work messages. Located in an upscale residential area within easy reach of parks, shopping, and restaurants, the villa works especially well for family reunions, holiday trips, and long celebratory weekends where comfort, space, and logistics matter as much as aesthetics.",
    price: 312,
    location: "Cape Town",
    country: "South Africa",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
  },
];

module.exports = { data: raw_data };
