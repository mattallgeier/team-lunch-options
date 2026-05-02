const restaurants = [
  {
    name: "Birk's Restaurant",
    shortName: "Birk's",
    cuisine: "American steakhouse / seafood",
    address: "3955 Freedom Cir, Santa Clara",
    distance: 1.4,
    drive: "6-10 min",
    cost: "$31-50",
    costScore: 2,
    ratingScore: 4.8,
    ratings: ["OpenTable 4.8 (3.6k+)", "AAA 3.3 inspector score"],
    reservation: "Strong",
    groupScore: 5,
    atmosphere: "Polished business-lunch classic with moderate noise",
    vibeScore: 4,
    qualityScore: 4.4,
    summary: "The easiest logistics option and a dependable celebratory business lunch pick. It is close to the office, serves steaks, chops, seafood, and lunch classics, and has strong reservation-platform ratings.",
    dishes: "Smoked prime rib, peppered filet mignon, petite filet mignon with scallops, chipotle steak bits, truffle mac and cheese.",
    notes: ["Closest option by a wide margin", "Reservation-friendly", "More refined than playful"],
    links: [
      ["OpenTable", "https://www.opentable.com/restaurant/profile/147"],
      ["Tripadvisor", "https://www.tripadvisor.com/Restaurant_Review-g33046-d342111-Reviews-Birk_s_Restaurant-Santa_Clara_California.html"]
    ],
    colors: ["#486f86", "#6f8f72"]
  },
  {
    name: "Din Tai Fung Valley Fair",
    shortName: "Din Tai Fung",
    cuisine: "Taiwanese / dim sum",
    address: "2855 Stevens Creek Blvd, Santa Clara",
    distance: 5.9,
    drive: "14-22 min",
    cost: "$20-30",
    costScore: 1,
    ratingScore: 4.1,
    ratings: ["Google 4.4 (4.6k+)", "Yelp 3.8 (6k+)"],
    reservation: "Good, competitive",
    groupScore: 4,
    atmosphere: "Busy, lively, dumpling-focused, crowd-pleasing",
    vibeScore: 4.6,
    qualityScore: 4.5,
    summary: "A high-energy crowd pleaser with excellent dumplings, noodles, and shareable dishes. It is likely fun for a team win, but reservations and timing matter because the Valley Fair location is popular.",
    dishes: "Pork xiao long bao, shrimp and pork dumplings, spicy wontons, string beans with garlic, fried rice, and noodles.",
    notes: ["Accepts reservations", "Usually a wait", "Best value among the destination-feeling choices"],
    links: [
      ["Reservations", "https://new.dintaifungusa.com/us/reservations.html"],
      ["Postcard ratings", "https://www.postcard.inc/places/din-tai-fung-santa-clara"],
      ["Yelp", "https://www.yelp.com/biz/din-tai-fung-santa-clara-5"]
    ],
    colors: ["#bf6947", "#c99a43"]
  },
  {
    name: "Baekjeong KBBQ Valley Fair",
    shortName: "Baekjeong",
    cuisine: "Korean barbecue",
    address: "2855 Stevens Creek Blvd, Santa Clara",
    distance: 5.9,
    drive: "14-22 min",
    cost: "$40-70",
    costScore: 3,
    ratingScore: 4.15,
    ratings: ["Yelp 4.1 (2.4k+)", "Resy 4.3", "Google-like aggregate 4.0"],
    reservation: "Good, competitive",
    groupScore: 4,
    atmosphere: "Interactive, smoky, energetic, very social",
    vibeScore: 5,
    qualityScore: 4.3,
    summary: "One of the most fun options because the meal is interactive and shared around tabletop grills. It fits a celebration mood well, though it can be louder and pricier than a standard lunch.",
    dishes: "Beef and pork combo sets, short rib, pork belly, beef brisket, kimchi stew, and shared banchan.",
    notes: ["Resy booking signal", "Reservations can go quickly", "Great for a lively team meal"],
    links: [
      ["Resy notes", "https://blog.resy.com/2023/08/baekjeong-san-jose-reservations/"],
      ["Westfield", "https://www.westfield.com/united-states/valleyfair/restaurants-detail/baekjeong-korean-bbq/78683"],
      ["Yelp", "https://www.yelp.com/biz/baekjeong-san-jose-santa-clara"]
    ],
    colors: ["#a55765", "#bf6947"]
  },
  {
    name: "Maggiano's Little Italy Santana Row",
    shortName: "Maggiano's",
    cuisine: "Italian-American",
    address: "3055 Olin Ave, San Jose",
    distance: 6.1,
    drive: "15-24 min",
    cost: "$30-50; family style about $53",
    costScore: 2,
    ratingScore: 4.3,
    ratings: ["Google 4.3 (4.3k+)", "Large-format menu published"],
    reservation: "Strong",
    groupScore: 5,
    atmosphere: "Lively, casual, large-party friendly",
    vibeScore: 4.1,
    qualityScore: 3.7,
    summary: "A straightforward large-group choice with generous family-style portions and familiar food. It is less distinctive than the destination restaurants, but very practical for 8-10 people.",
    dishes: "Chicken parmesan, Mom's lasagna, Rigatoni D, fettuccine Alfredo, spaghetti and meatballs, and family-style salads.",
    notes: ["Family-style dining for parties of 4+", "Reservations suggested", "Predictable group logistics"],
    links: [
      ["Family-style menu", "https://www.maggianos.com/menus/3055-olin-ave./family%20style/"],
      ["Postcard ratings", "https://www.postcard.inc/places/maggianos-little-italy-san-jose-eIAvaSQ01rv"],
      ["SF Station", "https://www.sfstation.com/maggianos-little-italy-santana-row-b211457"]
    ],
    colors: ["#6f8f72", "#c99a43"]
  },
  {
    name: "Suspiro Santana Row",
    shortName: "Suspiro",
    cuisine: "Spanish / Peruvian",
    address: "3060 Olsen Dr, San Jose",
    distance: 6.2,
    drive: "15-24 min",
    cost: "$50+",
    costScore: 3,
    ratingScore: 4.3,
    ratings: ["Google 4.5 (700+)", "Yelp 4.1 (600+)", "OpenTable-style 4.4"],
    reservation: "Strong",
    groupScore: 4,
    atmosphere: "Stylish, vibrant, tapas-and-cocktails energy",
    vibeScore: 4.8,
    qualityScore: 4.2,
    summary: "A newer, stylish Santana Row option with shareable Spanish and Peruvian dishes. It has strong atmosphere for a celebration and public notes direct parties of 17+ to events, so 8-10 should be normal reservation territory.",
    dishes: "Ceviche clasico, ceviche mixto, lomo saltado with gnocchi, paella negra, bikini trufado, and croquetas.",
    notes: ["Reservations available", "Larger parties 17+ route to events email", "Small plates can raise cost"],
    links: [
      ["Santana Row", "https://santanarow.com/dine/suspiro/"],
      ["Postcard ratings", "https://www.postcard.inc/places/suspiro-san-jose-nk0AMj2JNCv"],
      ["Tripadvisor", "https://www.tripadvisor.com/Restaurant_Review-g33020-d33880728-Reviews-Suspiro-San_Jose_California.html"]
    ],
    colors: ["#a55765", "#486f86"]
  },
  {
    name: "Luna Mexican Kitchen The Alameda",
    shortName: "Luna",
    cuisine: "Mexican / Latin American",
    address: "1495 The Alameda, San Jose",
    distance: 5.6,
    drive: "14-22 min",
    cost: "$20-35",
    costScore: 1,
    ratingScore: 4.3,
    ratings: ["Yelp 4.3 (3.1k+)"],
    reservation: "Weak",
    groupScore: 1,
    atmosphere: "Warm, casual, popular, patio-friendly",
    vibeScore: 4.2,
    qualityScore: 4.2,
    summary: "Good food and a warm atmosphere, but the official policy is the blocker: The Alameda location is walk-in only and publicly lists a one-table group cap of 7.",
    dishes: "Guacamole, flamed queso Oaxaca, ceviche, battered cauliflower, chile relleno, carnitas, tacos, and elote.",
    notes: ["Walk-in only", "The Alameda one-table cap: 7", "Risky for 8-10 at noon"],
    links: [
      ["Reservation policy", "https://www.lunamexicankitchen.com/reservations/"],
      ["FAQ", "https://www.lunamexicankitchen.com/faq/"],
      ["Yelp", "https://www.yelp.com/biz/luna-mexican-kitchen-the-alameda-san-jose"]
    ],
    colors: ["#c99a43", "#6f8f72"]
  },
  {
    name: "Alexander's Steakhouse Cupertino",
    shortName: "Alexander's",
    cuisine: "Fine dining steakhouse / Japanese influence",
    address: "19379 Stevens Creek Blvd, Cupertino",
    distance: 8.2,
    drive: "18-30 min",
    cost: "$78 lunch prix fixe; a la carte entrees often $30-90+",
    costScore: 4,
    ratingScore: 4.55,
    ratings: ["OpenTable 4.6 (3.3k+)", "Tripadvisor 4.3 (350+)"],
    reservation: "Strong",
    groupScore: 5,
    atmosphere: "Upscale, polished, special-occasion steakhouse",
    vibeScore: 4.3,
    qualityScore: 4.7,
    summary: "A premium special-occasion option with Wednesday-Friday lunch service and a current lunch prix fixe listed at $78. It is excellent for celebration polish, but among the highest-cost options.",
    dishes: "Hamachi shots, petite filet mignon, 50/50 burger, Alaskan halibut, mushroom risotto, A5 wagyu taco, and mochi doughnuts.",
    notes: ["Lunch Wed-Fri noon-2pm", "OpenTable reservations", "Private dining request pathway"],
    links: [
      ["Official info", "https://alexanderssteakhouse.com/cupertino/info/"],
      ["OpenTable", "https://www.opentable.com/alexanders-steakhouse-cupertino"],
      ["Official menu handoff", "https://alexanderssteakhouse.com/cupertino/going-to-imenupro-menus/"],
      ["Current lunch menu", "https://qr.imenupro.com/rvl-gh"]
    ],
    colors: ["#263943", "#bf6947"]
  },
  {
    name: "Haidilao Hot Pot Cupertino",
    shortName: "Haidilao",
    cuisine: "Chinese hot pot",
    address: "19409 Stevens Creek Blvd, Cupertino",
    distance: 8.3,
    drive: "18-30 min",
    cost: "$45-80+",
    costScore: 3,
    ratingScore: 4.7,
    ratings: ["Google-like aggregate 4.8 (4.9k)", "Tripadvisor 4.6"],
    reservation: "Good",
    groupScore: 4,
    atmosphere: "Festive, highly interactive, service-forward",
    vibeScore: 5,
    qualityScore: 4.4,
    summary: "Probably the most playful celebration format: shared hot pot, sauce bar, attentive service, and a festive room. It is farther and can get expensive, but the atmosphere is strong.",
    dishes: "Tomato or spicy soup base, Angus brisket, boneless short rib, signature shrimp paste, tripe, crispy pork, vegetables, and hand-pulled noodles.",
    notes: ["Accepts reservations", "Long waits reported without planning", "Great celebration energy"],
    links: [
      ["Tripadvisor", "https://www.tripadvisor.com/Restaurant_Review-g32273-d14216619-Reviews-Haidilao_Hot_Pot-Cupertino_California.html"],
      ["Apple Maps listing", "https://maps.apple.com/place?auid=8212142873981379267"],
      ["Top-Rated aggregate", "https://www.top-rated.online/cities/Cupertino/place/p/7030557/Haidilao%2BHot%2BPot%2BCupertino"]
    ],
    colors: ["#bf6947", "#a55765"]
  },
  {
    name: "Nobu Palo Alto",
    shortName: "Nobu",
    cuisine: "Japanese / Peruvian",
    address: "180 Hamilton Ave, Palo Alto",
    distance: 13.5,
    drive: "25-40 min",
    cost: "$50+",
    costScore: 4,
    ratingScore: 4.2,
    ratings: ["OpenTable 4.5 (1.9k+)", "Yelp 3.6", "Tripadvisor 3.5"],
    reservation: "Strong",
    groupScore: 4,
    atmosphere: "Chic, upscale, destination feel",
    vibeScore: 4.6,
    qualityScore: 4.5,
    summary: "The highest-profile destination option with signature Nobu dishes and a chic setting. It is also the farthest option and carries the clearest splurge pricing.",
    dishes: "Black cod with miso, yellowtail sashimi with jalapeno, whitefish tiradito, rock shrimp tempura, and sushi or sashimi selections.",
    notes: ["Daily lunch service", "OpenTable reservations", "Private/large-party signals"],
    links: [
      ["Official dining", "https://www.nobuhotels.com/palo-alto/dining/nobu-palo-alto/"],
      ["OpenTable", "https://www.opentable.com/restaurant/profile/992539"],
      ["Tripadvisor", "https://www.tripadvisor.com/Restaurant_Review-g32849-d12591778-Reviews-Nobu_Palo_Alto-Palo_Alto_California.html"]
    ],
    colors: ["#384b58", "#c99a43"]
  }
];

const cuisineFilter = document.querySelector("#cuisineFilter");
const sortSelect = document.querySelector("#sortSelect");
const reservationOnly = document.querySelector("#reservationOnly");
const comparisonBody = document.querySelector("#comparisonBody");
const distanceList = document.querySelector("#distanceList");
const cards = document.querySelector("#cards");
const sourceList = document.querySelector("#sourceList");

function balancedScore(restaurant) {
  const distanceScore = Math.max(1, 5 - restaurant.distance / 3);
  const costValue = 6 - restaurant.costScore;
  return (
    restaurant.qualityScore * 0.3 +
    restaurant.vibeScore * 0.25 +
    distanceScore * 0.2 +
    costValue * 0.15 +
    restaurant.groupScore * 0.1
  );
}

function reservationClass(reservation) {
  if (reservation.startsWith("Strong") || reservation.startsWith("Good")) return "good";
  if (reservation.startsWith("Weak")) return "warn";
  return "";
}

function groupFitText(score) {
  if (score >= 5) return "Excellent";
  if (score >= 4) return "Good";
  if (score >= 3) return "Possible";
  return "Caution";
}

function costSortValue(restaurant) {
  return restaurant.costScore * 10 + restaurant.distance / 10;
}

function getFilteredRestaurants() {
  const cuisine = cuisineFilter.value;
  const reservationFriendlyOnly = reservationOnly.checked;
  return restaurants
    .filter((restaurant) => cuisine === "all" || restaurant.cuisine === cuisine)
    .filter((restaurant) => !reservationFriendlyOnly || restaurant.groupScore >= 4)
    .sort((a, b) => {
      switch (sortSelect.value) {
        case "distance":
          return a.distance - b.distance;
        case "cost":
          return costSortValue(a) - costSortValue(b);
        case "rating":
          return b.ratingScore - a.ratingScore;
        case "group":
          return b.groupScore - a.groupScore || a.distance - b.distance;
        default:
          return balancedScore(b) - balancedScore(a);
      }
    });
}

function renderCuisineOptions() {
  const cuisines = [...new Set(restaurants.map((restaurant) => restaurant.cuisine))].sort();
  for (const cuisine of cuisines) {
    const option = document.createElement("option");
    option.value = cuisine;
    option.textContent = cuisine;
    cuisineFilter.append(option);
  }
}

function renderComparison(list) {
  comparisonBody.innerHTML = list
    .map((restaurant) => `
      <tr>
        <td>
          <div class="restaurant-name">
            <span>${restaurant.name}</span>
            <small>${restaurant.address}</small>
          </div>
        </td>
        <td>${restaurant.cuisine}</td>
        <td><strong>${restaurant.distance.toFixed(1)} mi</strong><br><span class="subtle">${restaurant.drive}</span></td>
        <td>${restaurant.cost}</td>
        <td>${restaurant.ratings.join("<br>")}</td>
        <td>
          <span class="chip ${reservationClass(restaurant.reservation)}">${restaurant.reservation} reservation signal</span>
          <div class="scorebar" aria-label="${groupFitText(restaurant.groupScore)} group fit">
            <span style="width: ${restaurant.groupScore * 20}%"></span>
          </div>
          <span class="subtle">${groupFitText(restaurant.groupScore)} for 8-10</span>
        </td>
        <td>${restaurant.atmosphere}</td>
      </tr>
    `)
    .join("");
}

function renderDistances(list) {
  const maxDistance = Math.max(...restaurants.map((restaurant) => restaurant.distance));
  distanceList.innerHTML = list
    .slice()
    .sort((a, b) => a.distance - b.distance)
    .map((restaurant) => `
      <div class="distance-row">
        <strong>${restaurant.shortName}</strong>
        <div class="track" aria-hidden="true">
          <span style="width: ${(restaurant.distance / maxDistance) * 100}%"></span>
        </div>
        <span>${restaurant.distance.toFixed(1)} mi</span>
      </div>
    `)
    .join("");
}

function renderCards(list) {
  cards.innerHTML = list
    .map((restaurant) => `
      <article class="card" style="--card-a: ${restaurant.colors[0]}; --card-b: ${restaurant.colors[1]}">
        <div class="card-visual">
          <strong>${restaurant.shortName}</strong>
        </div>
        <div class="card-body">
          <p>${restaurant.summary}</p>
          <div class="facts">
            <div class="fact"><span>Cuisine</span><strong>${restaurant.cuisine}</strong></div>
            <div class="fact"><span>Distance</span><strong>${restaurant.distance.toFixed(1)} mi · ${restaurant.drive}</strong></div>
            <div class="fact"><span>Cost</span><strong>${restaurant.cost}</strong></div>
            <div class="fact"><span>Group fit</span><strong>${groupFitText(restaurant.groupScore)}</strong></div>
            <div class="fact dishes"><span>Popular dishes</span><strong>${restaurant.dishes}</strong></div>
          </div>
          <div class="chips">
            ${restaurant.notes.map((note) => `<span class="chip ${note.includes("Walk") || note.includes("cap") || note.includes("Risky") ? "warn" : ""}">${note}</span>`).join("")}
          </div>
          <div class="links">
            ${restaurant.links.map(([label, url]) => `<a href="${url}" target="_blank" rel="noreferrer">${label}</a>`).join("")}
          </div>
        </div>
      </article>
    `)
    .join("");
}

function renderSources() {
  const links = restaurants.flatMap((restaurant) =>
    restaurant.links.map(([label, url]) => ({ label: `${restaurant.shortName}: ${label}`, url }))
  );
  sourceList.innerHTML = links
    .map((link) => `<li><a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a></li>`)
    .join("");
}

function render() {
  const list = getFilteredRestaurants();
  renderComparison(list);
  renderDistances(list);
  renderCards(list);
}

renderCuisineOptions();
renderSources();
render();

[cuisineFilter, sortSelect, reservationOnly].forEach((control) => {
  control.addEventListener("change", render);
});
