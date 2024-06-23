WorldWise Travel Tracker
WorldWise is a web application that helps users track their travel adventures by allowing them to add and manage cities they have visited. It provides features such as interactive maps, city lists, user authentication, and more.

node_modules/
public/
src/
│
├── components/
│ ├── Buttons/
│ │ ├── BackButton.jsx
│ │ └── Button.jsx
│ ├── City/
│ │ ├── City.jsx
│ │ ├── CityItem.jsx
│ │ └── CityList.jsx
│ ├── Country/
│ │ ├── CountryItem.jsx
│ │ └── CountryList.jsx
│ ├── Form & Map/
│ │ ├── Form.jsx
│ │ ├── Map.jsx
│ │ └── User.jsx
│ ├── Nav & Logo/
│ │ ├── AppNav.jsx
│ │ ├── Logo.jsx
│ │ └── PageNav.jsx
│ ├── Reusables/
│ │ ├── Message.jsx
│ │ ├── SideBar.jsx
│ │ ├── Spinner.jsx
│ │ └── SpinnerFullPage.jsx
│ ├── Context/
│ │ ├── CitiesContext.jsx
│ │ └── FakeAuthentication.jsx
│ └── Hooks/
│ ├── useGeolocation.js
│ └── useUrlPosition.js
├── Pages/
│ ├── AppLayout.jsx
│ ├── Homepage.jsx
│ ├── Login.jsx
│ ├── Pricing.jsx
│ ├── Product.jsx
│ └── ProtectedRouter.jsx
├── App.jsx
├── index.css
├── .eslint.json
├── .gitignore
├── db.json
├── index.html
├── package-lock.json
└── package.json

Features
City Management: Add, delete, and view details of cities visited.
Country Listing: Display a list of countries based on visited cities.
Interactive Map: Mark cities on a map with the ability to click and add new cities.
User Authentication: Login and logout functionalities.
Responsive Design: Ensures compatibility across various devices.

Getting Started

1. Clone the repository:
   bash git clone https://github.com/your-username/WorldWise.git
   cd WorldWise

2. Install dependencies: npm install

3. Start the development server: npm start

The app will be served at http://localhost:3000.

Built With
React - JavaScript library for building user interfaces.
React Router - Declarative routing for React applications.
react-leaflet - React components for Leaflet maps.
CSS Modules - CSS files in which all class names and animation names are scoped locally by default.
JSON Server - Fake REST API for local development with a minimal setup.
Contributors
Your Name - Initial work - GitHub
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Hat tip to anyone whose code was used.
Inspiration.
etc.
