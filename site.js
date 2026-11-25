// Edit this file only. Everything on the page comes from here.
// TODO = placeholder until the hotel confirms. Address, phone, rating and coordinates come from the hotel's Google listing: please confirm them.
export const hotel = {
  slug: "hotel-mkr-residency", // TODO: PureBook hotel slug (used by the booking button)
  name: "MKR Regency",
  full: "Hotel MKR Regency",
  locality: "Tadepalli",
  region: "Andhra Pradesh",
  pin: "522501",
  street: "NH Bypass, behind SBI Branch Tadepalli",
  address: "NH Bypass, behind SBI Branch Tadepalli, Tadepalle, Andhra Pradesh 522501",
  phones: [{ show: "76194 97619", tel: "+917619497619" }],
  email: "", // TODO
  mapQuery: "Hotel MKR Residency Tadepalli 522501", // name as listed on Google Maps
  lat: 16.4749693,
  lng: 80.6152792,
};

export const site = {
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com").replace(/\/$/, ""),
  title: "Hotel MKR Regency, Tadepalli, Andhra Pradesh",
  description:
    "Book direct at Hotel MKR Regency in Tadepalli, on the NH bypass between Vijayawada and Guntur. Refined rooms, a quiet welcome and live rates.",
  embed: { primary: "#826536", theme: "light", label: "Reserve your stay" },
  ogImg: "/images/exec-2-1600.webp",
  rating: { score: "4.3", note: "on Google, 200+ reviews" },
  tagline: "Luxury. Redefined.",
  headline: "A quiet, refined stay in Tadepalli",
  lead: "Considered rooms and attentive service, on the NH bypass between Vijayawada and Guntur.",
  intro:
    "Hotel MKR Regency sits in Tadepalli, close to the Krishna river and the highway that links Vijayawada, Mangalagiri and Guntur. Every stay is booked direct, with live rates and instant confirmation.",
  // Room details below are written from the photos: confirm beds, size and perks with the hotel.
  // img = main photo, more = two smaller photos shown under it (names from scripts/optimize-images.py)
  rooms: [
    { name: "A/C Premium Twin Room", bed: "Two single beds", desc: "A bright, quiet room with twin beds, cushioned headboards and a work desk, ideal for friends and colleagues travelling together.", perks: ["Air conditioning", "Free Wi-Fi", "Work desk", "Television"], img: "twin-main", pos: "center", more: [["twin-1", "Premium Twin Room, side view"], ["twin-2", "Premium Twin Room, second angle"]] },
    { name: "A/C Premium King Room", bed: "King bed", desc: "A generous king bed with a tufted headboard, warm lighting and a tidy dressing and work corner.", perks: ["Air conditioning", "Free Wi-Fi", "Mini fridge", "Attached bathroom"], img: "king-1", pos: "50% 58%", more: [["king-2", "Premium King Room, side view"], ["king-3", "Premium King Room bed"]] },
    { name: "A/C Mini Suite", bed: "King bed and sofa", desc: "A king bed with its own seating area, a television wall and a mini fridge, for longer stays.", perks: ["Air conditioning", "Sofa seating area", "Television", "Mini fridge"], img: "mini-1", pos: "center", more: [["mini-2", "Mini Suite seating area"], ["mini-3", "Mini Suite bed"]] },
    { name: "A/C Executive Suite", bed: "King bed and lounge", desc: "Our most spacious address: a king bed, a full lounge with two sofas and a marble-top table, and a lit dressing mirror.", perks: ["Air conditioning", "Lounge with two sofas", "Lit dressing mirror", "Free Wi-Fi"], img: "exec-1", pos: "50% 60%", more: [["exec-2", "Executive Suite lounge"], ["exec-3", "Executive Suite bed"]] },
  ],
  // TODO: keep only what the hotel really offers
  amenities: [
    ["Complimentary breakfast", "Start the day at the hotel."],
    ["Air-conditioned rooms", "Cool and quiet, day and night."],
    ["Free Wi-Fi", "In rooms and public areas."],
    ["24-hour front desk", "Arrive at any hour."],
    ["Parking", "On site for hotel guests."],
    ["Room service", "Ask the front desk."],
    ["Hot water", "In every bathroom."],
    ["Power backup", "Uninterrupted stays."],
  ],
  // Photos are names from scripts/optimize-images.py, e.g. "exec-2" -> /images/exec-2-*.webp
  heroImg: "exec-2",
  introImg: "detail-mirror",
  gallery: [
    { src: "exec-2", alt: "Executive Suite lounge", span: "big" },
    { src: "detail-lounge", alt: "Suite seating and television", span: "" },
    { src: "bath-1", alt: "Marble-look bathroom", span: "" },
    { src: "twin-wide", alt: "Premium Twin Room", span: "wide" },
    { src: "detail-wardrobe", alt: "Wardrobe and mini fridge", span: "" },
    { src: "bath-2", alt: "Guest bathroom", span: "tall" },
    { src: "twin-bed-a", alt: "Premium Twin Room bed with towel swan", span: "tall" },
    { src: "twin-bed-b", alt: "Premium Twin Room single bed", span: "tall" },
    { src: "twin-3", alt: "Desk and wardrobe", span: "" },
  ],
  // Around the hotel: [place, distance]
  nearby: [
    ["Undavalli Caves", "1.5 km"],
    ["Manipal Hospital Vijayawada", "2 km"],
    ["Vijaya Keeladri Temples", "2 km"],
    ["KL University", "3 km"],
    ["Prakasam Barrage", "3.5 km"],
    ["APSRTC PNBS Bus Stand, Vijayawada", "4.5 km"],
    ["Sri Durga Malleswara Swamy Varla Devasthanam", "5 km"],
    ["Vijayawada Junction", "5.5 km"],
    ["Bhavani Island", "6 km"],
    ["Mangalagiri Railway Station", "6.5 km"],
    ["Sri Panakala Narasimha Swamy Temple", "7 km"],
    ["AIIMS Mangalagiri", "8 km"],
    ["SRM University AP", "13 km"],
    ["Amaravati Stupam", "33 km"],
  ],
  faq: [
    ["How do I book?", "Press Reserve your stay, choose your dates and complete the booking in the window that opens."],
    ["Where is the hotel?", "On the NH bypass, behind the SBI branch in Tadepalli, Andhra Pradesh 522501."],
    ["Can I book by phone?", "Yes. Call the front desk on 76194 97619."],
    ["Do I get the best rate by booking direct?", "Rates in the booking window are the hotel's own live rates."],
  ],
};
