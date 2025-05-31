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
        { nombre: 'Pechuga a La Leña ', precio: 28, imagen: '/images/pollos-a-la-parrilla/pechuga-a-la-leña.jpg' },
        { nombre: 'Pechuga Cordon Bleu', precio: 33, imagen: '/images/pollos-a-la-parrilla/pechuga-cordon-bleu.jpg' },
        { nombre: 'Pechuga de Pollo Bbq', precio: 28, imagen: '/images/pollos-a-la-parrilla/pechuga-de-pollo-bbq.jpg' },
        { nombre: 'Pierna Deshuesada a la Parrilla', precio: 25, imagen: '/images/pollos-a-la-parrilla/pierna-deshuesada-a-la-parrilla.jpg' },
        { nombre: 'Pierna Deshuesada Bbq', precio: 25, imagen: '/images/pollos-a-la-parrilla/pierna-deshuesada-bbq.jpg' }
    ],
    'POLLO A LA LEÑA': [
        { nombre: 'Combo Familiar #1', precio: 70, imagen: '/images/Pollo-a-la-leña/pollo-familiar-combo-1.jpg' },
        { nombre: 'Combo Familiar #2', precio: 70, imagen: '/images/Pollo-a-la-leña/pollo-familiar-combo-2.jpg' },
        { nombre: 'Combo Familiar #3', precio: 73, imagen: '/images/Pollo-a-la-leña/pollo-familiar-combo-3.jpg' },
        { nombre: 'Combo Familiar #4', precio: 88, imagen: '/images/Pollo-a-la-leña/pollo-familiar-combo-4.jpg' },
        { nombre: '1 Pollo a La Leña', precio: 60, imagen: '/images/Pollo-a-la-leña/1-pollo-a-la-leña.jpg' },
        { nombre: '1/2 Pollo a La Leña', precio: 37, imagen: '/images/Pollo-a-la-leña/medio-pollo-a-la-parrilla.jpg' },
        { nombre: '1/4 Pollo a La Leña', precio: 20, imagen: '/images/Pollo-a-la-leña/cuarto-pollo-a-la-leña.jpg' }
    ],
    'PIQUEOS': [
        { nombre: 'Alitas a La BBQ- 14 Unidades', precio: 32, imagen: '/images/Piqueos/alitas-a-la-bbq.jpg' },
        { nombre: 'Alitas A la BBQ Picantes- 14 Unidades', precio: 32, imagen: '/images/Piqueos/alitas-a-la-bbq.jpg' },
        { nombre: 'Anticucho Parrillero', precio: 23, imagen: '/images/Piqueos/anticucho-parrillero.jpg' },
        { nombre: 'Chicharron de Pollo', precio: 25, imagen: '/images/Piqueos/chicharron-de-pollo.jpg' },
        { nombre: 'Chorizo', precio: 20, imagen: '/images/Piqueos/chorizos.jpg' },
        { nombre: 'Mollejitas De Pollo', precio: 18, imagen: '/images/Piqueos/mollejitas-de-pollo.jpg' },
        { nombre: 'Tequeños Leña Y Sabor', precio: 15, imagen: '/images/Piqueos/Tequeños-leña-y-sabor.jpg' },
        { nombre: 'Tequeños Tradicionales', precio: 15, imagen: '/images/Piqueos/Tequeños-leña-y-sabor.jpg' },
        
    ],
    'NUESTRAS PASTAS': [
        { nombre: 'Tallarines Verdes Con Bife', precio: 42, imagen: '/images/pastas/tallarin-verde-con-bife.jpg' },
        { nombre: 'Tallarin Verde Con Chuleta', precio: 29, imagen: '/images/pastas/tallarin-verde-con-chuleta.jpg' },
        { nombre: 'Tallarin Verde Con Churrasco', precio: 35, imagen: '/images/pastas/tallarin-verde-con-churrasco.jpg' },
        { nombre: 'Tallarin Verde Con Pechuga a la Parrilla', precio: 32, imagen: '/images/pastas/tallarines-verdes-con-pechuga-a-la-parrilla.jpg' },
        { nombre: 'Tallarines A la Huancaina Con Bife', precio: 36, imagen: '/images/pastas/tallarines-huancaina-con-bife.jpg' },
        { nombre: 'Tallarines A la Huancaina Con Chuleta', precio: 32, imagen: '/images/pastas/tallarines-huaincana-chuleta.jpg' },
        { nombre: 'Tallarines a la Huancaina Con Churrasco', precio: 37, imagen: '/images/Pastas/tallarines-huancaina-con-churrasco.jpg' },
        { nombre: 'Tallarines a La Huancaina con Lomo Saltado', precio: 37, imagen: '/images/Pastas/tallarines-huaicana-lomo.jpg' },
        { nombre: 'Tallarines A La Huancaina Con Pechuga A La Parrilla', precio: 35, imagen: '/images/Pastas/tallarines-huncaina-pechuga.jpg' },
        { nombre: 'Tallarines A Lo Alfredo', precio: 25, imagen: '/images/Pastas/tallarines-a-lo-alfredo.jpg' },
        { nombre: 'Tallarines A Lo Alfredo Con Bife', precio: 40, imagen: '/images/Pastas/tallarines-huancaina-con-bife.jpg' },
        { nombre: 'Tallarines A Lo Alfredo Con Pechuga', precio: 35, imagen: '/images/Pastas/tallarines-huncaina-pechuga.jpg' }
    ],
    'NUESTRAS PARRILLAS': [
        { nombre: 'Parrilla Familiar', precio: 110, imagen: '/images/Nuestras-Parrillas/Parrilla-Familiar.jpg' },
        { nombre: 'Parrilla Leña Y Sabor', precio: 139, imagen: '/images/Nuestras-Parrillas/Parrilla-leña-y-sabor.jpg' },
        { nombre: 'Parrilla Mediana', precio: 80, imagen: '/images/Nuestras-Parrillas/Parrilla-Familiar.jpg' },
        { nombre: 'Parrilla Para Dos', precio: 60, imagen: '/images/Nuestras-Parrillas/Parrilla-para-dos.jpg' }
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
