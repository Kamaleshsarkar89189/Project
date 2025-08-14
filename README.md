# ShopEase - E-commerce Website

A complete, functional e-commerce website built with HTML, CSS, and JavaScript. This project demonstrates modern web development practices with a responsive design and comprehensive shopping functionality.

## 🌟 Features

### **Pages & Navigation**
- **Home Page**: Hero banner, featured products, category navigation
- **Shop Page**: Product grid with filtering and sorting options
- **Product Details Page**: Detailed product view with quantity selector
- **Shopping Cart**: Cart management with quantity updates and removal
- **Checkout Page**: Complete checkout form with validation
- **About Us Page**: Company information and mission
- **Contact Page**: Contact form and company details

### **Core Functionality**
- **Shopping Cart System**: Add/remove products, update quantities
- **Local Storage**: Cart data persists across browser sessions
- **Product Management**: 12 sample products across 4 categories
- **Responsive Design**: Mobile-first approach with hamburger menu
- **Form Validation**: Client-side validation for all forms
- **Interactive Elements**: Hover effects, animations, and smooth transitions

### **Product Categories**
- **Electronics**: Headphones, laptops, wireless mouse
- **Clothing**: T-shirts, jeans, hoodies
- **Home & Garden**: Coffee tables, wall art, table lamps
- **Sports & Fitness**: Smart watches, yoga mats, running shoes

## 🚀 Getting Started

### **Prerequisites**
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - runs entirely in the browser

### **Installation**
1. Clone or download the project files
2. Open `index.html` in your web browser
3. Start exploring the website!

### **File Structure**
```
project/
├── index.html          # Home page
├── shop.html          # Shop page
├── product.html       # Product details page
├── cart.html          # Shopping cart page
├── checkout.html      # Checkout page
├── about.html         # About us page
├── contact.html       # Contact page
├── style.css          # Complete stylesheet
├── script.js          # JavaScript functionality
├── images/            # Image assets directory
└── README.md          # This file
```

## 💻 Technical Details

### **Frontend Technologies**
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript ES6+**: Modern JavaScript with classes and modules
- **Font Awesome**: Icon library for UI elements
- **Google Fonts**: Spartan font family for typography

### **Key JavaScript Features**
- **Cart Class**: Object-oriented cart management
- **Local Storage API**: Persistent data storage
- **Event Handling**: Comprehensive event management
- **Form Validation**: Client-side form validation
- **Responsive Navigation**: Mobile menu functionality

### **CSS Features**
- **CSS Grid & Flexbox**: Modern layout systems
- **CSS Variables**: Consistent color scheme and spacing
- **Media Queries**: Responsive breakpoints
- **Transitions & Animations**: Smooth hover effects
- **Box Shadows**: Modern depth and elevation

## 🎨 Design Features

### **Color Scheme**
- **Primary**: #088178 (Teal)
- **Secondary**: #667eea to #764ba2 (Gradient)
- **Accent**: #28a745 (Green)
- **Neutral**: #f8f9fa, #222, #666

### **Typography**
- **Font Family**: Spartan (Google Fonts)
- **Hierarchy**: Clear heading and text hierarchy
- **Readability**: Optimized line heights and spacing

### **Layout**
- **Container Width**: Max-width containers for content
- **Spacing**: Consistent padding and margins
- **Grid Systems**: Responsive grid layouts
- **Card Design**: Modern card-based UI components

## 📱 Responsive Design

### **Breakpoints**
- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: 480px to 767px
- **Small Mobile**: Below 480px

### **Mobile Features**
- **Hamburger Menu**: Collapsible navigation
- **Touch-Friendly**: Optimized button sizes
- **Stacked Layouts**: Single-column layouts on small screens
- **Optimized Forms**: Mobile-friendly form inputs

## 🛒 Shopping Features

### **Cart Management**
- Add products to cart
- Update quantities
- Remove items
- Persistent storage
- Real-time total calculation

### **Product Features**
- Product images and descriptions
- Pricing with original price display
- Category organization
- Featured product highlighting
- Related products suggestions

### **Checkout Process**
- Customer information form
- Shipping address
- Payment method selection
- Order summary
- Form validation

## 🔧 Customization

### **Adding Products**
To add new products, edit the `products` array in `script.js`:

```javascript
{
    id: 13,
    name: "New Product",
    price: 99.99,
    originalPrice: 129.99,
    category: "electronics",
    image: "path/to/image.jpg",
    description: "Product description",
    sku: "NP-013",
    featured: false
}
```

### **Modifying Styles**
- Edit `style.css` to change colors, fonts, and layouts
- CSS variables are defined at the top for easy customization
- Responsive breakpoints can be adjusted as needed

### **Adding Pages**
1. Create new HTML file following existing structure
2. Add navigation link in all pages
3. Include necessary CSS classes
4. Add JavaScript functionality if needed

## 🌐 Browser Support

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+
- **Internet Explorer**: Not supported

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support or questions, please open an issue in the project repository.

## 🎯 Future Enhancements

Potential improvements for future versions:
- User authentication system
- Product search functionality
- Wishlist feature
- Product reviews and ratings
- Advanced filtering options
- Payment gateway integration
- Admin panel for product management
- Order tracking system
- Email notifications
- Multi-language support

---

**Built with ❤️ using modern web technologies**
