# KrishiLink - Farmer’s Growth & Connection Platform (Client-Side)

KrishiLink is a modern single-page web application (SPA) designed as a social agro-network. It bridges the gap between farmers, traders, and consumers in Bangladesh by providing a direct digital space to share crops, express business interests, and collaborate without traditional middleman intervention.

## 🔗 Live Deployment Links
- **Live Website URL:** [https://krishilink-app.netlify.app](https://krishilink-app.netlify.app)
- **Server API Base URL:** [https://krishilink-server-blush.vercel.app](https://krishilink-server-blush.vercel.app)

---

## 🌟 Key Features

- **Direct Agro-Networking & Crop Sharing:** Users can seamlessly post detailed information about the crops they are growing or selling and browse global listings in a clean, consistent grid layout.
- **Real-Time Interactive Interest System:** Authentic communication via an advanced Interest Form (with auto-calculated dynamic pricing based on unit/quantity) and confirmation modals. It includes intelligent constraints preventing crop owners from expressing interest in their own posts.
- **Dynamic Crop Searching & Visual Filters:** An optimized search bar on the 'All Crops' page that filters listings instantly from the MongoDB database with custom "No Results Found" states.
- **Comprehensive Owner Dashboard (CRUD & Action Control):** Dedicated 'My Posts' table where listing owners can dynamically edit or delete their crops via elegant custom modals, as well as accept/reject pending connection requests from buyers directly.
- **Robust Authentication & Private Route Guarding:** Secured Firebase login/registration system (supporting Password policy validation and Google OAuth integration) that flawlessly persists sessions on browser reloading without breaking route access.

---

## 🛠️ Technologies & Packages Used

- **Framework:** React.js (Vite)
- **Routing:** React Router DOM
- **Authentication:** Firebase Auth
- **Styling & UI:** Tailwind CSS, DaisyUI
- **Icons:** React Icons
- **HTTP Client:** Axios / Fetch API

---

## 🚀 Local Installation Guide

Follow these simple steps to run the client-side of KrishiLink locally:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/YOUR_GITHUB_USERNAME/krishilink-client.git](https://github.com/YOUR_GITHUB_USERNAME/krishilink-client.git)
   cd krishilink-client
