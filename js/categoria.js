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
        { nombre: 'Combo Familiar #1', precio: 73, imagen: '/images/Pollo-a-la-leña/pollo-familiar-combo-1.jpg' },
        { nombre: 'Combo Familiar #2', precio: 78, imagen: '/images/Pollo-a-la-leña/pollo-familiar-combo-2.jpg' },
        { nombre: 'Combo Familiar #3', precio: 80, imagen: '/images/Pollo-a-la-leña/pollo-familiar-combo-3.jpg' },
        { nombre: 'Combo Familiar #4', precio: 85, imagen: '/images/Pollo-a-la-leña/pollo-familiar-combo-4.jpg' },
        { nombre: '1 Pollo a La Leña', precio: 68, imagen: '/images/Pollo-a-la-leña/1-pollo-a-la-leña.jpg' },
        { nombre: '1/2 Pollo a La Leña', precio: 37, imagen: '/images/Pollo-a-la-leña/medio-pollo-a-la-parrilla.jpg' },
        { nombre: '1/4 Pollo a La Leña', precio: 20, imagen: '/images/Pollo-a-la-leña/cuarto-pollo-a-la-leña.jpg' }
    ],
    'PIQUEOS': [
        { nombre: 'Alitas a La BBQ- 14 Unidades', precio: 32, imagen: '/images/Piqueos/alitas-a-la-bbq.jpg' },
        { nombre: 'Alitas A la BBQ Picantes- 14 Unidades', precio: 32, imagen: '/images/Piqueos/alitas-a-la-bbq.jpg' },
        { nombre: 'Anticucho Parrillero', precio: 25, imagen: '/images/Piqueos/anticucho-parrillero.jpg' },
        { nombre: 'Chicharron de Pollo', precio: 25, imagen: '/images/Piqueos/chicharron-de-pollo.jpg' },
        { nombre: 'Chorizo', precio: 20, imagen: '/images/Piqueos/chorizos.jpg' },
        { nombre: 'Mollejitas De Pollo', precio: 20, imagen: '/images/Piqueos/mollejitas-de-pollo.jpg' },
        { nombre: 'Tequeños Leña Y Sabor', precio: 15, imagen: '/images/Piqueos/Tequeños-leña-y-sabor.jpg' },
        { nombre: 'Tequeños Tradicionales', precio: 15, imagen: '/images/Piqueos/Tequeños-leña-y-sabor.jpg' },
        
    ],
    'NUESTRAS PASTAS': [
        { nombre: 'Tallarines Verdes Con Bife', precio: 42, imagen: '/images/pastas/tallarin-verde-con-bife.jpg' },
        { nombre: 'Tallarin Verde Con Chuleta', precio: 32, imagen: '/images/pastas/tallarin-verde-con-chuleta.jpg' },
        { nombre: 'Tallarin Verde Con Churrasco', precio: 40, imagen: '/images/pastas/tallarin-verde-con-churrasco.jpg' },
        { nombre: 'Tallarin Verde Con Pechuga a la Parrilla', precio: 35, imagen: '/images/pastas/tallarines-verdes-con-pechuga-a-la-parrilla.jpg' },
        { nombre: 'Tallarines A la Huancaina Con Bife', precio: 36, imagen: '/images/pastas/tallarines-huancaina-con-bife.jpg' },
        { nombre: 'Tallarines A la Huancaina Con Chuleta', precio: 32, imagen: '/images/pastas/tallarines-huaincana-chuleta.jpg' },
        { nombre: 'Tallarines a la Huancaina Con Churrasco', precio: 37, imagen: '/images/Pastas/tallarines-huancaina-con-churrasco.jpg' },
        { nombre: 'Tallarines a La Huancaina con Lomo Saltado', precio: 45, imagen: '/images/Pastas/tallarines-huaicana-lomo.jpg' },
        { nombre: 'Tallarines A La Huancaina Con Pechuga A La Parrilla', precio: 35, imagen: '/images/Pastas/tallarines-huncaina-pechuga.jpg' },
        { nombre: 'Tallarines A Lo Alfredo', precio: 25, imagen: '/images/Pastas/tallarines-a-lo-alfredo.jpg' },
        { nombre: 'Tallarines A Lo Alfredo Con Bife', precio: 40, imagen: '/images/Pastas/tallarines-huancaina-con-bife.jpg' },
        { nombre: 'Tallarines A Lo Alfredo Con Pechuga', precio: 35, imagen: '/images/Pastas/tallarines-huncaina-pechuga.jpg' }
    ],
    'NUESTRAS PARRILLAS': [
        { nombre: 'Parrilla Familiar', precio: 150, imagen: '/images/Nuestras-Parrillas/Parrilla-Familiar.jpg' },
        { nombre: 'Parrilla Leña Y Sabor', precio: 130, imagen: '/images/Nuestras-Parrillas/Parrilla-leña-y-sabor.jpg' },
        { nombre: 'Parrilla Mediana', precio: 70, imagen: '/images/Nuestras-Parrillas/Parrilla-Familiar.jpg' },
        { nombre: 'Parrilla Para Dos', precio: 90, imagen: '/images/Nuestras-Parrillas/Parrilla-para-dos.jpg' }
    ],
    'NUESTRAS CARNES': [
        { nombre: 'Lomo Fino', precio: 55, imagen: '/images/Nuestras-Carnes/lomo_fino.jpg' },
        { nombre: 'Bife Angosto', precio: 40, imagen: '/images/Nuestras-Carnes/bife.jpg' },
        { nombre: 'Chuleta A La Parrilla', precio: 28, imagen: '/images/Nuestras-Carnes/chuleta_parrilla.jpg' },
        { nombre: 'Churrasco A La Parrilla', precio: 35, imagen: '/images/Nuestras-Carnes/churrasco-parrilla.jpg' },
        { nombre: 'Costilla A La BBQ', precio: 45, imagen: '/images/Nuestras-Carnes/Costilla-BBQ.jpg' }
    ],
    'LOS CRIOLLAZOS': [
        { nombre: 'Bistec A Lo Pobre', precio: 30, imagen: '/images/Criollazos/bistec_pobre.jpg' },
        { nombre: 'Chaufa De Cecina', precio: 32, imagen: '/images/Criollazos/Chaufa_cezina.jpg' },
        { nombre: 'Chaufa Leña Y Sabor', precio: 25, imagen: '/images/Criollazos/chaufa_leñaysabor.jpg' },
        { nombre: 'Lomo A Lo Pobre', precio: 42, imagen: '/images/Criollazos/lomo_pobre.jpg' },
        { nombre: 'Lomo Saltado', precio: 35, imagen: '/images/Criollazos/lomo_saltado_chaufa.jpg' },
        { nombre: 'Lomo Saltado Con Chaufa', precio: 40, imagen: '/images/Criollazos/lomo_saltado_chaufa.jpg' },
        { nombre: 'Mostrito Leña Y Sabor', precio: 27, imagen: '/images/Criollazos/mostrito.jpg' },
        { nombre: 'Pollo Saltado', precio: 25, imagen: '/images/Criollazos/pollo_saltado.jpg' },
        { nombre: 'Pollo Saltado A Lo Pobre', precio: 30, imagen: '/images/Criollazos/pollo_saltado_pobre.jpg' },
        { nombre: 'Tallarin Saltado De Carne', precio: 33, imagen: '/images/Criollazos/tallarin_saltado_carne.jpg' },
        { nombre: 'Tallarin Saltado De Pollo', precio: 27, imagen: '/images/Criollazos/tallarin_saltado_pollo.jpg' }
    ],
    'ENSALADAS': [
        { nombre: 'Ensalada Clasica Grande', precio: 10, imagen: '/Fotos/Ensalada.jpg' },
        { nombre: 'Ensalada Con Pechuga A La Parrilla', precio: 28, imagen: '/images/ensaladas/ensalada_pechuga.jpg' },
        { nombre: 'Ensalada Con Pierna Deshuesada A La Parrilla', precio: 27, imagen: '/images/ensaladas/ensalada_muslo.jpg' },
        { nombre: 'Ensalada de Palta', precio: 15, imagen: '/images/ensaladas/ensalada_palta.png' }
    ],
    'BEBIDAS': [
        { nombre: 'Agua Mineral', precio: 4, imagen: '/images/bebidas/AguaCielo.webp' },
        { nombre: 'Chicha Morada 1L', precio: 18, imagen: '/images/bebidas/chicha_morada.jpeg' },
        { nombre: 'Coca Cola 1,5 Lts', precio: 10, imagen: '/images/bebidas/coca_litroymedio.jpg' },
        { nombre: 'Coca Cola 600 ', precio: 6, imagen: '/images/bebidas/cocapersonal.png' },
        { nombre: 'Inka Kola 1,5 Lts', precio: 10, imagen: '/images/bebidas/bebidas-inca-kola-15-web.png' },
        { nombre: 'Inka Kola 500', precio: 6, imagen: '/images/bebidas/bebidas-inca-kola-500-web.png' },
        { nombre: 'Limonada Americana 1 Lt', precio: 16, imagen: '/images/bebidas/limonada_americana.webp' },
        { nombre: 'Limonada De Hierba Luisa 1 Lt', precio: 18, imagen: '/images/bebidas/limonada_hierba_luisa.jpeg' },
        { nombre: 'Maracuya 1 Lt', precio: 18, imagen: '/images/bebidas/maracuya_1lt.jpeg' },
        { nombre: 'Maracuya Con Limon 1 Lt', precio: 20, imagen: '/images/bebidas/maracuya_conlimon.webp' }
    ],
    'ADICIONALES': [
        { nombre: 'Papas Fritas', precio: 15, imagen: '/images/adicionales/papas_fritas.jpg' },
        { nombre: 'Chaufa', precio: 13, imagen: '/images/adicionales/chaufa.jpg' },
        { nombre: 'Huevos Fritos', precio: 4, imagen: '/images/adicionales/huevos.jpeg' },
        { nombre: 'Platano Frito', precio: 4, imagen: '/images/adicionales/platanos.jpg' },
        { nombre: 'Porcion De Arroz', precio: 4, imagen: '/images/adicionales/porcion_arroz.jpg' },
        { nombre: 'Unidad De Chorizo', precio: 6, imagen: '/images/Piqueos/chorizos.jpg' }
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
