document.addEventListener('DOMContentLoaded', function() {
    // Efecto de escritura para la sección hero
    function initTypingEffect() {
        const elements = document.querySelectorAll('.typing-text');
        if (elements.length === 0) return;

        let currentElementIndex = 0;
        let currentCharIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100; // Velocidad de escritura en ms
        let deleteSpeed = 50;  // Velocidad de borrado en ms
        let waitBeforeDelete = 2000; // Tiempo de espera antes de borrar (ms)
        let waitBetweenElements = 1000; // Tiempo entre elementos (ms)


        function type() {
            const currentElement = elements[currentElementIndex];
            const text = currentElement.getAttribute('data-text');
            
            if (isDeleting) {
                // Borrando
                currentCharIndex--;
                currentElement.textContent = text.substring(0, currentCharIndex);
                
                if (currentCharIndex === 0) {
                    isDeleting = false;
                    currentElementIndex = (currentElementIndex + 1) % elements.length;
                    setTimeout(type, waitBetweenElements);
                } else {
                    setTimeout(type, deleteSpeed);
                }
            } else {
                // Escribiendo
                currentElement.textContent = text.substring(0, currentCharIndex + 1);
                currentCharIndex++;
                
                if (currentCharIndex === text.length) {
                    // Fin de la escritura
                    currentElement.classList.add('finished');
                    isDeleting = true;
                    setTimeout(type, waitBeforeDelete);
                } else {
                    setTimeout(type, typingSpeed);
                }
            }
            
            // Actualizar la clase de cursor
            if (!isDeleting && currentCharIndex < text.length) {
                currentElement.classList.remove('finished');
            }
        }


        // Iniciar el efecto
        type();
    }


    // Inicializar el efecto de escritura cuando el DOM esté listo
    initTypingEffect();
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
    }

    // Close mobile menu when clicking on a nav link
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });

    // Cart Toggle
    const cartIcon = document.getElementById('cart');
    const cartSidebar = document.querySelector('.cart-sidebar');
    const closeCart = document.querySelector('.close-cart');
    const overlay = document.getElementById('overlay');

    if (cartIcon) {
        cartIcon.addEventListener('click', (e) => {
            e.preventDefault();
            cartSidebar.classList.add('active');
            overlay.classList.add('active');
            document.body.classList.add('no-scroll');
        });
    }

    if (closeCart) {
        closeCart.addEventListener('click', () => {
            cartSidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    }

    if (overlay) {
        overlay.addEventListener('click', () => {
            cartSidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    }

    // Sample product data (you can replace this with your actual product data)
    const products = [
        {
            id: 1,
            name: 'Pollo a la Leña Familiar',
            price: 45.00,
            image: 'images/pollo-familiar.jpg',
            category: 'Pollo a la Leña'
        },
        {
            id: 2,
            name: 'Parrilla Mixta',
            price: 85.00,
            image: 'images/parrilla-mixta.jpg',
            category: 'Parrillas'
        },
        {
            id: 3,
            name: 'Lomo Saltado',
            price: 38.00,
            image: 'images/lomo-saltado.jpg',
            category: 'Platos Criollos'
        },
        {
            id: 4,
            name: 'Pasta Alfredo',
            price: 32.00,
            image: 'images/pasta-alfredo.jpg',
            category: 'Pastas'
        },
        {
            id: 5,
            name: 'Ensalada César',
            price: 28.00,
            image: 'images/ensalada-cesar.jpg',
            category: 'Ensaladas'
        },
        {
            id: 6,
            name: 'Gaseosa Personal',
            price: 6.00,
            image: 'images/gaseosa.jpg',
            category: 'Bebidas'
        }
    ];

    // Display featured products
    const featuredProducts = document.querySelector('.product-grid');
    
    if (featuredProducts) {
        // Get 6 random products
        const randomProducts = [...products].sort(() => 0.5 - Math.random()).slice(0, 6);
        
        randomProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product-card';
            productElement.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <span class="product-price">S/${product.price.toFixed(2)}</span>
                    <button class="add-to-cart" data-id="${product.id}">
                        Añadir al carrito
                    </button>
                </div>
            `;
            featuredProducts.appendChild(productElement);
        });
    }


    // Shopping Cart Functionality
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total h4 span');
    const cartCount = document.querySelector('.cart-count');

    // Update cart count
    function updateCartCount() {
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = count;
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Update cart total
    function updateCartTotal() {
        const total = cart.reduce((sum, item) => {
            const product = products.find(p => p.id === item.id);
            return sum + (product.price * item.quantity);
        }, 0);
        cartTotal.textContent = `S/${total.toFixed(2)}`;
    }

    // Render cart items
    function renderCart() {
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart">Tu carrito está vacío</p>';
            cartTotal.textContent = 'S/0.00';
            return;
        }

        cartItems.innerHTML = '';
        
        cart.forEach(item => {
            const product = products.find(p => p.id === item.id);
            if (!product) return;

            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="item-details">
                    <h4>${product.name}</h4>
                    <span class="item-price">S/${product.price.toFixed(2)}</span>
                    <div class="item-quantity">
                        <button class="quantity-btn decrease" data-id="${product.id}">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn increase" data-id="${product.id}">+</button>
                    </div>
                </div>
                <span class="remove-item" data-id="${product.id}">&times;</span>
            `;
            cartItems.appendChild(cartItem);
        });

        updateCartTotal();
    }

    // Add to cart
    function addToCart(productId) {
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ id: productId, quantity: 1 });
        }
        
        updateCartCount();
        renderCart();
        
        // Show added to cart notification
        showNotification('Producto añadido al carrito');
    }

    // Remove from cart
    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        updateCartCount();
        renderCart();
    }

    // Update quantity
    function updateQuantity(productId, change) {
        const item = cart.find(item => item.id === productId);
        if (!item) return;

        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartCount();
            renderCart();
        }
    }

    // Show notification
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // Event delegation for add to cart buttons
    document.addEventListener('click', (e) => {
        // Add to cart
        if (e.target.classList.contains('add-to-cart')) {
            e.preventDefault();
            const productId = parseInt(e.target.getAttribute('data-id'));
            addToCart(productId);
        }
        
        // Remove item
        if (e.target.classList.contains('remove-item')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            removeFromCart(productId);
        }
        
        // Increase quantity
        if (e.target.classList.contains('increase')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            updateQuantity(productId, 1);
        }
        
        // Decrease quantity
        if (e.target.classList.contains('decrease')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            updateQuantity(productId, -1);
        }
    });

    // Checkout button
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                showNotification('Tu carrito está vacío');
                return;
            }
            
            // Here you would typically redirect to a checkout page or show a checkout form
            showNotification('Redirigiendo al proceso de pago...');
            // window.location.href = '/checkout.html';
        });
    }

    // Initialize cart
    updateCartCount();
    renderCart();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to current section in navigation
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelector(`.nav-links a[href*=${sectionId}]`).classList.add('active');
        } else {
            const navLink = document.querySelector(`.nav-links a[href*=${sectionId}]`);
            if (navLink) navLink.classList.remove('active');
        }
    });
});

// Add notification styles dynamically
const style = document.createElement('style');
style.textContent = `
    .notification {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        background-color: var(--primary-color);
        color: white;
        padding: 15px 30px;
        border-radius: 30px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 1100;
        opacity: 0;
        transition: all 0.3s ease;
    }
    
    .notification.show {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
    }
    
    .no-scroll {
        overflow: hidden;
    }
`;
document.head.appendChild(style);
