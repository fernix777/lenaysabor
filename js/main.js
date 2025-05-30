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
// --- MOSTRAR PRODUCTOS REALES POR CATEGORÍA AL HACER CLIC EN LA TARJETA ---
document.addEventListener('DOMContentLoaded', function() {
    // Definir productos por categoría (ejemplo, personaliza según tu carta real)
    const productosPorCategoria = {
        'VINOS': [
            { nombre: 'Vino Buenos Aires Malbec', precio: 60, imagen: '/images/vinos/vino_buenos_aires_malbec.jpeg' },
            { nombre: 'Vino Blanco Dulce', precio: 55, imagen: 'images/vino-blanco.jpg' },
            { nombre: 'Vino Rosé', precio: 58, imagen: 'images/vino-rose.jpg' },
            { nombre: 'Vino Malbec', precio: 70, imagen: 'images/vino-malbec.jpg' },
            { nombre: 'Vino Cabernet', precio: 65, imagen: 'images/vino-cabernet.jpg' },
            { nombre: 'Vino Merlot', precio: 62, imagen: 'images/vino-merlot.jpg' },
            { nombre: 'Vino Syrah', precio: 68, imagen: 'images/vino-syrah.jpg' },
            { nombre: 'Vino Espumante', precio: 75, imagen: 'images/vino-espumante.jpg' },
            { nombre: 'Vino Crianza', precio: 80, imagen: 'images/vino-crianza.jpg' },
            { nombre: 'Vino Selección', precio: 90, imagen: 'images/vino-seleccion.jpg' }
        ],
        'POLLOS A LA PARRILLA': [
            { nombre: 'Pollo Entero a la Parrilla', precio: 48, imagen: 'images/pollo-parrilla-entero.jpg' },
            { nombre: 'Medio Pollo a la Parrilla', precio: 28, imagen: 'images/pollo-parrilla-medio.jpg' },
            { nombre: 'Cuarto de Pollo a la Parrilla', precio: 18, imagen: 'images/pollo-parrilla-cuarto.jpg' },
            { nombre: 'Pollo Parrillero Especial', precio: 55, imagen: 'images/pollo-parrillero-especial.jpg' },
            { nombre: 'Pollo Parrilla Familiar', precio: 90, imagen: 'images/pollo-parrilla-familiar.jpg' }
        ],
        'POLLO A LA LEÑA': [
            { nombre: 'Pollo Entero a la Leña', precio: 45, imagen: 'images/pollo-leña-entero.jpg' },
            { nombre: 'Medio Pollo a la Leña', precio: 25, imagen: 'images/pollo-leña-medio.jpg' },
            { nombre: 'Cuarto de Pollo a la Leña', precio: 15, imagen: 'images/pollo-leña-cuarto.jpg' },
            { nombre: 'Pollo Leña Familiar', precio: 80, imagen: 'images/pollo-leña-familiar.jpg' },
            { nombre: 'Pollo Leña Especial', precio: 60, imagen: 'images/pollo-leña-especial.jpg' },
            { nombre: 'Pollo Leña Tradicional', precio: 50, imagen: 'images/pollo-leña-tradicional.jpg' },
            { nombre: 'Pollo Leña Premium', precio: 70, imagen: 'images/pollo-leña-premium.jpg' }
        ],
        'PIQUEOS': [
            { nombre: 'Tequeños', precio: 22, imagen: 'images/tequeños.jpg' },
            { nombre: 'Alitas BBQ', precio: 25, imagen: 'images/alitas-bbq.jpg' },
            { nombre: 'Papas Bravas', precio: 18, imagen: 'images/papas-bravas.jpg' },
            { nombre: 'Chorizo Artesanal', precio: 20, imagen: 'images/chorizo-artesanal.jpg' },
            { nombre: 'Brochetas de Pollo', precio: 24, imagen: 'images/brochetas-pollo.jpg' },
            { nombre: 'Yuquitas Fritas', precio: 16, imagen: 'images/yuquitas.jpg' },
            { nombre: 'Croquetas de Jamón', precio: 21, imagen: 'images/croquetas-jamon.jpg' },
            { nombre: 'Piqueo Mixto', precio: 30, imagen: 'images/piqueo-mixto.jpg' },
            { nombre: 'Piqueo Criollo', precio: 28, imagen: 'images/piqueo-criollo.jpg' }
        ],
        'NUESTRAS PASTAS': [
            { nombre: 'Pasta Alfredo', precio: 32, imagen: 'images/pasta-alfredo.jpg' },
            { nombre: 'Pasta Boloñesa', precio: 34, imagen: 'images/pasta-boloñesa.jpg' },
            { nombre: 'Pasta Carbonara', precio: 36, imagen: 'images/pasta-carbonara.jpg' },
            { nombre: 'Pasta Pesto', precio: 30, imagen: 'images/pasta-pesto.jpg' },
            { nombre: 'Pasta a la Huancaína', precio: 33, imagen: 'images/pasta-huancaina.jpg' },
            { nombre: 'Pasta con Pollo', precio: 35, imagen: 'images/pasta-pollo.jpg' },
            { nombre: 'Pasta con Lomo', precio: 38, imagen: 'images/pasta-lomo.jpg' },
            { nombre: 'Pasta con Mariscos', precio: 40, imagen: 'images/pasta-mariscos.jpg' },
            { nombre: 'Pasta Vegetariana', precio: 29, imagen: 'images/pasta-vegetariana.jpg' },
            { nombre: 'Pasta 4 Quesos', precio: 37, imagen: 'images/pasta-4quesos.jpg' },
            { nombre: 'Pasta Napolitana', precio: 31, imagen: 'images/pasta-napolitana.jpg' },
            { nombre: 'Pasta a la Putanesca', precio: 39, imagen: 'images/pasta-putanesca.jpg' }
        ],
        'NUESTRAS PARRILLAS': [
            { nombre: 'Parrilla Mixta', precio: 85, imagen: 'images/parrilla-mixta.jpg' },
            { nombre: 'Parrilla Personal', precio: 45, imagen: 'images/parrilla-personal.jpg' },
            { nombre: 'Parrilla Familiar', precio: 120, imagen: 'images/parrilla-familiar.jpg' },
            { nombre: 'Parrilla Especial', precio: 100, imagen: 'images/parrilla-especial.jpg' }
        ],
        'NUESTRAS CARNES': [
            { nombre: 'Lomo Fino', precio: 55, imagen: 'images/lomo-fino.jpg' },
            { nombre: 'Bife de Chorizo', precio: 60, imagen: 'images/bife-chorizo.jpg' },
            { nombre: 'Picaña', precio: 58, imagen: 'images/picaña.jpg' },
            { nombre: 'Asado de Tira', precio: 62, imagen: 'images/asado-tira.jpg' },
            { nombre: 'Entraña', precio: 65, imagen: 'images/entraña.jpg' }
        ],
        'LOS CRIOLLAZOS': [
            { nombre: 'Lomo Saltado', precio: 38, imagen: 'images/lomo-saltado.jpg' },
            { nombre: 'Ají de Gallina', precio: 32, imagen: 'images/aji-gallina.jpg' },
            { nombre: 'Tacu Tacu con Lomo', precio: 40, imagen: 'images/tacu-tacu-lomo.jpg' },
            { nombre: 'Seco de Res', precio: 36, imagen: 'images/seco-res.jpg' },
            { nombre: 'Arroz con Pollo', precio: 30, imagen: 'images/arroz-pollo.jpg' },
            { nombre: 'Cau Cau', precio: 28, imagen: 'images/cau-cau.jpg' },
            { nombre: 'Carapulcra', precio: 29, imagen: 'images/carapulcra.jpg' },
            { nombre: 'Anticuchos', precio: 27, imagen: 'images/anticuchos.jpg' },
            { nombre: 'Papa a la Huancaína', precio: 18, imagen: 'images/papa-huancaina.jpg' },
            { nombre: 'Ceviche Criollo', precio: 35, imagen: 'images/ceviche-criollo.jpg' },
            { nombre: 'Chanfainita', precio: 26, imagen: 'images/chanfainita.jpg' }
        ],
        'ENSALADAS': [
            { nombre: 'Ensalada César', precio: 28, imagen: 'images/ensalada-cesar.jpg' },
            { nombre: 'Ensalada Mixta', precio: 25, imagen: 'images/ensalada-mixta.jpg' },
            { nombre: 'Ensalada de Quinoa', precio: 30, imagen: 'images/ensalada-quinoa.jpg' },
            { nombre: 'Ensalada de Pollo', precio: 27, imagen: 'images/ensalada-pollo.jpg' }
        ],
        'BEBIDAS': [
            { nombre: 'Gaseosa Personal', precio: 6, imagen: 'images/gaseosa.jpg' },
            { nombre: 'Gaseosa 1L', precio: 12, imagen: 'images/gaseosa-1l.jpg' },
            { nombre: 'Agua Mineral', precio: 5, imagen: 'images/agua-mineral.jpg' },
            { nombre: 'Chicha Morada', precio: 8, imagen: 'images/chicha-morada.jpg' },
            { nombre: 'Limonada', precio: 9, imagen: 'images/limonada.jpg' },
            { nombre: 'Cerveza Personal', precio: 10, imagen: 'images/cerveza-personal.jpg' },
            { nombre: 'Cerveza 1L', precio: 18, imagen: 'images/cerveza-1l.jpg' },
            { nombre: 'Jugo de Naranja', precio: 11, imagen: 'images/jugo-naranja.jpg' },
            { nombre: 'Agua con Gas', precio: 7, imagen: 'images/agua-gas.jpg' },
            { nombre: 'Bebida Energética', precio: 14, imagen: 'images/bebida-energetica.jpg' }
        ],
        'ADICIONALES': [
            { nombre: 'Papas Fritas', precio: 10, imagen: 'images/papas-fritas.jpg' },
            { nombre: 'Arroz Blanco', precio: 8, imagen: 'images/arroz-blanco.jpg' },
            { nombre: 'Ensalada Simple', precio: 7, imagen: 'images/ensalada-simple.jpg' },
            { nombre: 'Salsas Variadas', precio: 5, imagen: 'images/salsas-variadas.jpg' },
            { nombre: 'Pan al Ajo', precio: 6, imagen: 'images/pan-ajo.jpg' },
            { nombre: 'Yuca Frita', precio: 9, imagen: 'images/yuca-frita.jpg' }
        ]
    };

    // Crear modal para mostrar productos
    let modal = document.createElement('div');
    modal.className = 'modal-productos-categoria';
    modal.style.display = 'none';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h3 class="modal-title"></h3>
            <div class="modal-lista-productos"></div>
        </div>
    `;
    document.body.appendChild(modal);

    // Mostrar productos al hacer clic en una tarjeta
    document.querySelectorAll('.category-card').forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function() {
            const nombreCategoria = card.getAttribute('data-categoria');
            if (nombreCategoria) {
                window.location.href = `categoria.html?cat=${encodeURIComponent(nombreCategoria)}`;
            }
        });
    });

    // Cerrar modal
    modal.querySelector('.close-modal').addEventListener('click', function() {
        modal.style.display = 'none';
    });
    // Cerrar modal al hacer clic fuera del contenido
    modal.addEventListener('click', function(e) {
        if (e.target === modal) modal.style.display = 'none';
    });
});

// Rotación de logo en hero al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
  const logo = document.getElementById('heroLogoRotating');
  if (!logo) return;
  window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
      logo.style.transform = 'translateY(-50%) rotate(180deg)';
    } else {
      logo.style.transform = 'translateY(-50%) rotate(0deg)';
    }
  });
});
