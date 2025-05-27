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

    // Overlay para menús móviles
    const overlay = document.getElementById('overlay');
    
    if (overlay) {
        overlay.addEventListener('click', () => {
            const mobileMenu = document.querySelector('.nav-links.active');
            if (mobileMenu) {
                mobileMenu.classList.remove('active');
                document.querySelector('.hamburger').classList.remove('active');
                overlay.classList.remove('active');
                document.body.classList.remove('no-scroll');
            }
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
                    <a href="#contacto" class="btn btn-primary">
                        Haz tu pedido
                    </a>
                </div>
            `;
            featuredProducts.appendChild(productElement);
        });
    }


    // Función para mostrar notificaciones
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Mostrar notificación
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        // Ocultar y eliminar después de 3 segundos
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }



    // Evento para los botones de pedido
    document.addEventListener('click', (e) => {
        if (e.target.closest('.btn-primary')) {
            e.preventDefault();
            showNotification('Redirigiendo a la sección de contacto');
            // Desplazamiento suave al hacer clic en el botón
            const contactSection = document.getElementById('contacto');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
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
    const navLinks = document.querySelector('.nav-links');
    
    // Solo ejecutar si el menú de navegación existe
    if (!navLinks) return;
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        // Solo continuar si la sección tiene un ID
        if (!sectionId) return;
        
        try {
            const navLink = navLinks.querySelector(`a[href*="${sectionId}"]`);
            if (navLink) {
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        } catch (e) {
            console.warn('Error al actualizar la navegación activa:', e);
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
