// Mapeo de productos por categoría (igual que en main.js, puedes personalizar)
const productosPorCategoria = {
    'VINOS': [
        { nombre: 'Vino Tinto Buenos Aires', precio: 45, imagen: '/images/vinos/vino_buenos_aires_malbec.jpeg' },
        { nombre: 'Vino Queirolo Borgoña', precio: 38, imagen: '/images/vinos/santiago-queirolo-borgona.jpg' },
        { nombre: 'Vino Queirolo Rose', precio: 38, imagen: '/images/vinos/SANTIAGO-QUEIROLO-ROSE.jpg' },
        { nombre: 'Sangria de la casa 1 lt', precio: 40, imagen: '/images/vinos/sangria-de-la-casa.jpg' },
        { nombre: 'Sangria Especial  1lt', precio: 50, imagen: 'images/vinos/sangria-de-la-casa.jpg' },
        { nombre: 'Vino Tabernero Borgoña', precio: 38, imagen: '/images/vinos/tabernero_borgoña.jpg' },
        { nombre: 'Vino Tabernero Gran Rose', precio: 38, imagen: '/images/vinos/tabernero_granrose.png' },
        { nombre: 'Vino Tabernero Tinto', precio: 45, imagen: '/images/vinos/tabernero_tinto.png' },
        { nombre: 'Vino Tacama Rose', precio: 45, imagen: '/images/vinos/tacama_rose.jpg' },
        { nombre: 'Vino Tacama Tinto', precio: 45, imagen: '/images/vinos/tacama_tinto.jpg' }
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

// Obtener la categoría de la URL
function getCategoriaFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('cat');
}

// Función para normalizar cadenas (mayúsculas y sin tildes)
function normalizar(str) {
    return str
        ? str.normalize('NFD').replace(/[^\w\s]/g, '').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, ' ').toUpperCase().trim()
        : '';
}

// Renderizar productos
function renderProductos(categoria) {
    const title = document.getElementById('categoria-title');
    const grid = document.getElementById('productos-lista');
    if (!categoria) {
        title.textContent = 'Categoría no encontrada';
        grid.innerHTML = '<p>No hay productos para mostrar.</p>';
        return;
    }
    // Buscar la categoría normalizando
    const keys = Object.keys(productosPorCategoria);
    const keyMatch = keys.find(k => normalizar(k) === normalizar(categoria));
    if (!keyMatch) {
        title.textContent = 'Categoría no encontrada';
        grid.innerHTML = '<p>No hay productos para mostrar.</p>';
        return;
    }
    title.textContent = keyMatch;
    grid.innerHTML = '';
    productosPorCategoria[keyMatch].forEach(prod => {
        const card = document.createElement('div');
        card.className = 'producto-card';
        card.innerHTML = `
            <img src="${prod.imagen}" alt="${prod.nombre}" class="producto-img">
            <div class="producto-info">
                <h3>${prod.nombre}</h3>
                <span class="producto-precio">S/ ${prod.precio.toFixed(2)}</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const categoria = getCategoriaFromUrl();
    renderProductos(categoria);
});
