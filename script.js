// Product Data
const products = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        price: 89.99,
        originalPrice: 129.99,
        category: "electronics",
        image: "https://cdn.pixabay.com/photo/2022/10/06/21/49/headphones-7503631_1280.jpg", 
        description: "High-quality wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
        sku: "WH-001",
        featured: true
    },
    {
        id: 2,
        name: "Smart Fitness Watch",
        price: 199.99,
        originalPrice: 249.99,
        category: "sports",
        image: "https://cdn.pixabay.com/photo/2023/10/07/14/24/smartwatch-8300238_1280.jpg", 
        description: "Advanced fitness tracking with heart rate monitor, GPS, and water resistance. Track your workouts and health metrics.",
        sku: "SW-002",
        featured: true
    },
    {
        id: 3,
        name: "Organic Cotton T-Shirt",
        price: 24.99,
        originalPrice: 34.99,
        category: "clothing",
        image: "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_1280.jpg", 
        description: "Comfortable and sustainable cotton t-shirt available in multiple colors. Perfect for everyday wear.",
        sku: "TS-003",
        featured: true
    },
    {
        id: 4,
        name: "Modern Coffee Table",
        price: 299.99,
        originalPrice: 399.99,
        category: "home",
        image: "https://cdn.pixabay.com/photo/2017/03/27/14/18/coffee-2179028_1280.jpg", 
        description: "Elegant wooden coffee table with modern design. Perfect centerpiece for your living room.",
        sku: "CT-004",
        featured: true
    },
    {
        id: 5,
        name: "Gaming Laptop",
        price: 1299.99,
        originalPrice: 1499.99,
        category: "electronics",
        image: "https://media.istockphoto.com/id/906347962/photo/gaming-laptop-with-connected-mouse-and-headphones.jpg?s=612x612&w=is&k=20&c=7bmaEklz99c53pIFav_a3C_WZ-Cws46doLdefSnHq2w=", 
        description: "High-performance gaming laptop with RTX graphics, 16GB RAM, and 1TB SSD. Dominate any game.",
        sku: "GL-005",
        featured: false
    },
    {
        id: 6,
        name: "Yoga Mat Premium",
        price: 49.99,
        originalPrice: 69.99,
        category: "sports",
        image: "https://cdn.pixabay.com/photo/2019/11/24/18/48/yoga-4650150_1280.jpg", 
        description: "Non-slip yoga mat with perfect thickness for comfort and stability during your practice.",
        sku: "YM-006",
        featured: false
    },
    {
        id: 7,
        name: "Denim Jeans Classic",
        price: 79.99,
        originalPrice: 99.99,
        category: "clothing",
        image: "https://cdn.pixabay.com/photo/2025/04/23/07/30/jeans-trousers-9551973_1280.jpg",
        description: "Classic fit denim jeans with stretch comfort. Available in multiple washes and sizes.",
        sku: "DJ-007",
        featured: false
    },
    {
        id: 8,
        name: "Wall Art Canvas",
        price: 89.99,
        originalPrice: 119.99,
        category: "home",
        image: "https://cdn.pixabay.com/photo/2022/07/13/02/46/abstract-7318436_1280.jpg",
        description: "Beautiful canvas wall art to enhance your home decor. Multiple designs available.",
        sku: "WA-008",
        featured: false
    },
    {
        id: 9,
        name: "Wireless Mouse",
        price: 39.99,
        originalPrice: 59.99,
        category: "electronics",
        image: "https://cdn.pixabay.com/photo/2016/11/01/17/11/cp-1788949_1280.jpg", 
        description: "Ergonomic wireless mouse with precision tracking and long battery life.",
        sku: "WM-009",
        featured: false
    },
    {
        id: 10,
        name: "Running Shoes",
        price: 119.99,
        originalPrice: 149.99,
        category: "sports",
        image: "https://media.istockphoto.com/id/1258110890/photo/indian-made-mens-sports-shoes-isolated-on-gray.jpg?s=1024x1024&w=is&k=20&c=VDgzLyEd2oFuBsdnOdNxMsCQCX2Ms3dEWHS4psrp0ks=", 
        description: "Lightweight running shoes with superior cushioning and breathable mesh upper.",
        sku: "RS-010",
        featured: false
    },
    {
        id: 11,
        name: "Hoodie Sweatshirt",
        price: 59.99,
        originalPrice: 79.99,
        category: "clothing",
        image: "https://media.istockphoto.com/id/954699820/photo/hacker-standing-alone.jpg?s=1024x1024&w=is&k=20&c=TqaxkAEzBRMGgXLu5LMxU1xxunpQx3qeh6aRlCyuIYY=",
        description: "Comfortable hoodie made from premium cotton blend. Perfect for casual wear.",
        sku: "HS-011",
        featured: false
    },
    {
        id: 12,
        name: "Table Lamp Modern",
        price: 69.99,
        originalPrice: 89.99,
        category: "home",
        image: "https://cdn.pixabay.com/photo/2019/06/01/11/04/plant-4243898_1280.jpg", 
        description: "Sleek modern table lamp with adjustable brightness and touch controls.",
        sku: "TL-012",
        featured: false
    }
];


// Cart Management
class Cart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
        this.updateCartCount();
    }

    addItem(product, quantity = 1) {
        const existingItem = this.items.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                ...product,
                quantity: quantity
            });
        }
        
        this.saveCart();
        this.updateCartCount();
        this.showNotification('Product added to cart!');
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartCount();
        this.loadCartItems();
        this.updateCartSummary();
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeItem(productId);
            } else {
                item.quantity = quantity;
                this.saveCart();
                this.updateCartSummary();
                loadCartItems(); 
            }
        }
    }

    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getSubtotal() {
        return this.getTotal();
    }

    getShipping() {
        return this.items.length > 0 ? 9.99 : 0;
    }

    getTax() {
        return this.getSubtotal() * 0.08; // 8% tax
    }

    getGrandTotal() {
        return this.getSubtotal() + this.getShipping() + this.getTax();
    }

    clearCart() {
        this.items = [];
        this.saveCart();
        this.updateCartCount();
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    updateCartCount() {
        const cartCount = document.getElementById('cart-count');
        if (cartCount) {
            const totalItems = this.items.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = totalItems;
        }
    }

    showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: #088178;
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            z-index: 10000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
}

// Initialize cart
const cart = new Cart();

// Utility Functions
function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

function createProductCard(product) {
    return `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onclick="viewProduct(${product.id})">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">
                    <span class="price">${formatPrice(product.price)}</span>
                    ${product.originalPrice > product.price ? `<span class="original-price">${formatPrice(product.originalPrice)}</span>` : ''}
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
    `;
}

function createCartItemCard(item) {
    return `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>${item.category}</p>
            </div>
            <div class="cart-item-price">${formatPrice(item.price)}</div>
            <div class="cart-item-quantity">
                <button onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                <input type="number" value="${item.quantity}" min="1" onchange="updateCartQuantity(${item.id}, parseInt(this.value))">
                <button onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `;
}

// Product Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.addItem(product, 1);
    }
}

function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        // Store product data in sessionStorage for the product page
        sessionStorage.setItem('currentProduct', JSON.stringify(product));
        window.location.href = 'product.html';
    }
}

// Cart Functions
function removeFromCart(productId) {
    cart.removeItem(productId);
}

function updateCartQuantity(productId, quantity) {
    cart.updateQuantity(productId, quantity);
}

function loadCartItems() {
    const cartItems = document.getElementById('cart-items');
    const emptyCart = document.getElementById('empty-cart');
    
    if (!cartItems) return;
    
    if (cart.items.length === 0) {
        cartItems.style.display = 'none';
        if (emptyCart) emptyCart.style.display = 'block';
    } else {
        cartItems.style.display = 'block';
        if (emptyCart) emptyCart.style.display = 'none';
        
        cartItems.innerHTML = cart.items.map(item => createCartItemCard(item)).join('');
    }
}

function updateCartSummary() {
    const subtotal = document.getElementById('subtotal');
    const shipping = document.getElementById('shipping');
    const tax = document.getElementById('tax');
    const total = document.getElementById('total');
    
    if (subtotal) subtotal.textContent = formatPrice(cart.getSubtotal());
    if (shipping) shipping.textContent = formatPrice(cart.getShipping());
    if (tax) tax.textContent = formatPrice(cart.getTax());
    if (total) total.textContent = formatPrice(cart.getGrandTotal());
}

function proceedToCheckout() {
    if (cart.items.length > 0) {
        window.location.href = 'checkout.html';
    } else {
        alert('Your cart is empty!');
    }
}

// Product Details Page Functions
function loadProductDetails() {
    const productData = sessionStorage.getItem('currentProduct');
    if (!productData) {
        window.location.href = 'shop.html';
        return;
    }
    
    const product = JSON.parse(productData);
    
    // Update page elements
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-price').textContent = formatPrice(product.price);
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('product-category').textContent = product.category;
    document.getElementById('product-sku').textContent = product.sku;
    
    if (product.originalPrice > product.price) {
        document.getElementById('original-price').textContent = formatPrice(product.originalPrice);
        document.getElementById('original-price').style.display = 'inline';
    } else {
        document.getElementById('original-price').style.display = 'none';
    }
    
    // Load related products
    loadRelatedProducts(product.category, product.id);
}

function loadRelatedProducts(category, excludeId) {
    const relatedProducts = products.filter(p => p.category === category && p.id !== excludeId).slice(0, 4);
    const container = document.getElementById('related-products');
    
    if (container) {
        container.innerHTML = relatedProducts.map(product => createProductCard(product)).join('');
    }
}

function decreaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput.value > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
}

function increaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput.value < 99) {
        quantityInput.value = parseInt(quantityInput.value) + 1;
    }
}

function addToCartFromDetails() {
    const productData = sessionStorage.getItem('currentProduct');
    if (productData) {
        const product = JSON.parse(productData);
        const quantity = parseInt(document.getElementById('quantity').value);
        cart.addItem(product, quantity);
    }
}

// Shop Page Functions
function loadProducts() {
    const productsGrid = document.getElementById('products-grid');
    if (productsGrid) {
        productsGrid.innerHTML = products.map(product => createProductCard(product)).join('');
    }
}

function filterProducts() {
    const categoryFilter = document.getElementById('category-filter');
    const sortFilter = document.getElementById('sort-filter');
    
    if (!categoryFilter || !sortFilter) return;
    
    let filteredProducts = [...products];
    
    // Filter by category
    if (categoryFilter.value) {
        filteredProducts = filteredProducts.filter(product => product.category === categoryFilter.value);
    }
    
    // Sort products
    switch (sortFilter.value) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
        default:
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    
    const productsGrid = document.getElementById('products-grid');
    if (productsGrid) {
        productsGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    }
}

// Home Page Functions
function loadFeaturedProducts() {
    const featuredProducts = products.filter(product => product.featured);
    const container = document.getElementById('featured-products');
    
    if (container) {
        container.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
    }
}

// Checkout Page Functions
function loadCheckoutItems() {
    const checkoutItems = document.getElementById('checkout-items');
    if (checkoutItems) {
        checkoutItems.innerHTML = cart.items.map(item => `
            <div class="summary-item">
                <span>${item.name} x${item.quantity}</span>
                <span>${formatPrice(item.price * item.quantity)}</span>
            </div>
        `).join('');
    }
    
    // Update totals
    document.getElementById('checkout-subtotal').textContent = formatPrice(cart.getSubtotal());
    document.getElementById('checkout-shipping').textContent = formatPrice(cart.getShipping());
    document.getElementById('checkout-tax').textContent = formatPrice(cart.getTax());
    document.getElementById('checkout-total').textContent = formatPrice(cart.getGrandTotal());
}

function handleCheckoutForm(event) {
    event.preventDefault();
    
    // Basic form validation
    const form = event.target;
    const formData = new FormData(form);
    
    // Check required fields
    let isValid = true;
    const requiredFields = ['firstName', 'lastName', 'email', 'address', 'city', 'state', 'zipCode', 'country'];
    
    requiredFields.forEach(field => {
        const input = form.querySelector(`[name="${field}"]`);
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#dc3545';
        } else {
            input.style.borderColor = '#ddd';
        }
    });
    
    if (!isValid) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Simulate order processing
    alert('Order placed successfully! Thank you for your purchase.');
    cart.clearCart();
    window.location.href = 'index.html';
}

// Contact Page Functions
function handleContactForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Basic validation
    const email = formData.get('email');
    const message = formData.get('message');
    
    if (!email || !message) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Simulate form submission
    alert('Thank you for your message! We will get back to you soon.');
    form.reset();
}

function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('i');
    
    if (answer.classList.contains('active')) {
        answer.classList.remove('active');
        icon.style.transform = 'rotate(0deg)';
    } else {
        answer.classList.add('active');
        icon.style.transform = 'rotate(180deg)';
    }
}

// Mobile Navigation
function toggleMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize cart count
    cart.updateCartCount();
    
    // Load content based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    switch (currentPage) {
        case 'index.html':
            loadFeaturedProducts();
            break;
        case 'shop.html':
            loadProducts();
            const categoryFilter = document.getElementById('category-filter');
            const sortFilter = document.getElementById('sort-filter');

            if (categoryFilter) {
                categoryFilter.addEventListener('change', filterProducts);
                // set from hash if exists
                const hashCategory = window.location.hash.substring(1);
                if (hashCategory) {
                    categoryFilter.value = hashCategory;
                    filterProducts();
                }
            }
            if (sortFilter) sortFilter.addEventListener('change', filterProducts);
            break;

        case 'product.html':
            loadProductDetails();
            break;
        case 'cart.html':
            loadCartItems();
            updateCartSummary();
            break;
        case 'checkout.html':
            loadCheckoutItems();
            const checkoutForm = document.getElementById('checkout-form');
            if (checkoutForm) {
                checkoutForm.addEventListener('submit', handleCheckoutForm);
            }
            break;
        case 'contact.html':
            const contactForm = document.getElementById('contact-form');
            if (contactForm) {
                contactForm.addEventListener('submit', handleContactForm);
            }
            break;
    }
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-menu');
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Payment method toggle
    const paymentMethods = document.querySelectorAll('input[name="paymentMethod"]');
    const creditCardFields = document.getElementById('credit-card-fields');
    
    if (paymentMethods.length > 0 && creditCardFields) {
        paymentMethods.forEach(method => {
            method.addEventListener('change', function() {
                if (this.value === 'credit-card') {
                    creditCardFields.style.display = 'block';
                } else {
                    creditCardFields.style.display = 'none';
                }
            });
        });
    }
});

// Global functions for onclick handlers
window.addToCart = addToCart;
window.viewProduct = viewProduct;
window.removeFromCart = removeFromCart;
window.updateCartQuantity = updateCartQuantity;
window.proceedToCheckout = proceedToCheckout;
window.decreaseQuantity = decreaseQuantity;
window.increaseQuantity = increaseQuantity;
window.addToCartFromDetails = addToCartFromDetails;
window.toggleFAQ = toggleFAQ;
