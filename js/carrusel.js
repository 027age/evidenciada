

// Carrusel universal para todas las secciones
(function() {
  // Detectar sección por el título del h1 (soporta español e inglés)
  const h1 = document.querySelector('main h1, nav h1');
  if (!h1) return;
  let titulo = h1.innerText || h1.textContent;
  titulo = titulo.replace(/\s+/g, ' ').replace(/\s*\n\s*/g, ' ').replace(/<br\s*\/?>/gi, ' ').trim().toUpperCase();
  let imagenes = [];
  if (titulo === 'CEMENTERIOS' || titulo === 'CEMETERIO/S/' || titulo === 'CEMETERIES') {
    imagenes = [
      "fotos_sueltas_varias/cementerios/c1.webp",
      "fotos_sueltas_varias/cementerios/c2.webp",
      "fotos_sueltas_varias/cementerios/c3.webp",
      "fotos_sueltas_varias/cementerios/c4.webp",
      "fotos_sueltas_varias/cementerios/c5.webp",
      "fotos_sueltas_varias/cementerios/c6.webp",
      "fotos_sueltas_varias/cementerios/c7.webp",
      "fotos_sueltas_varias/cementerios/c8.webp",
      "fotos_sueltas_varias/cementerios/c9.webp",
      "fotos_sueltas_varias/cementerios/c10.webp",
      "fotos_sueltas_varias/cementerios/c11.webp",
      "fotos_sueltas_varias/cementerios/c12.webp",
      "fotos_sueltas_varias/cementerios/c13.webp",
      "fotos_sueltas_varias/cementerios/c14.webp",
      "fotos_sueltas_varias/cementerios/c15.webp",
      "fotos_sueltas_varias/cementerios/c16.webp"
    ];
  } else if (titulo === 'TEXTURAS' || titulo === 'TEXTURES') {
    imagenes = [
      "fotos_sueltas_varias/texturas/textura1.webp",
      "fotos_sueltas_varias/texturas/textura2.webp",
      "fotos_sueltas_varias/texturas/textura3.webp",
      "fotos_sueltas_varias/texturas/textura4.webp",
      "fotos_sueltas_varias/texturas/textura5.webp"
    ];
  } else if (titulo === 'FECHAS' || titulo === 'DATES') {
    imagenes = [
      "fotos_sueltas_varias/fechas/f1.webp",
      "fotos_sueltas_varias/fechas/f2.webp",
      "fotos_sueltas_varias/fechas/f3.webp",
      "fotos_sueltas_varias/fechas/f4.webp",
      "fotos_sueltas_varias/fechas/f5.webp",
      "fotos_sueltas_varias/fechas/f6.webp",
      "fotos_sueltas_varias/fechas/f7.webp",
      "fotos_sueltas_varias/fechas/f8.webp",
      "fotos_sueltas_varias/fechas/f9.webp",
      "fotos_sueltas_varias/fechas/f10.webp",
      "fotos_sueltas_varias/fechas/f11.webp",
      "fotos_sueltas_varias/fechas/f12.webp",
      "fotos_sueltas_varias/fechas/f13.webp",
      "fotos_sueltas_varias/fechas/f14.webp",
      "fotos_sueltas_varias/fechas/f15.webp",
      "fotos_sueltas_varias/fechas/f16.webp",
      "fotos_sueltas_varias/fechas/f17.webp",
      "fotos_sueltas_varias/fechas/f18.webp",
      "fotos_sueltas_varias/fechas/f19.webp",
      "fotos_sueltas_varias/fechas/f20.webp",
      "fotos_sueltas_varias/fechas/f21.webp",
      "fotos_sueltas_varias/fechas/f22.webp",
      "fotos_sueltas_varias/fechas/f23.webp",
      "fotos_sueltas_varias/fechas/f24.webp",
      "fotos_sueltas_varias/fechas/f25.webp",
      "fotos_sueltas_varias/fechas/f26.webp"
    ];
  } else if (titulo === 'FLORES' || titulo === 'FLOWERS') {
    imagenes = [
      "fotos_sueltas_varias/flores/fl1.webp",
      "fotos_sueltas_varias/flores/fl2.webp",
      "fotos_sueltas_varias/flores/fl3.webp",
      "fotos_sueltas_varias/flores/fl4.webp",
      "fotos_sueltas_varias/flores/fl5.webp",
      "fotos_sueltas_varias/flores/fl6.webp",
      "fotos_sueltas_varias/flores/fl7.webp",
      "fotos_sueltas_varias/flores/fl8.webp",
      "fotos_sueltas_varias/flores/fl9.webp",
      "fotos_sueltas_varias/flores/fl10.webp"
    ];
  } else if (titulo === 'PROD.' || titulo === 'PROD' || titulo === 'PRODUCCION') {
    imagenes = [
      "fotos_sueltas_varias/produccion/p1.webp",
      "fotos_sueltas_varias/produccion/p2.webp",
      "fotos_sueltas_varias/produccion/p3.webp",
      "fotos_sueltas_varias/produccion/p4.webp",
      "fotos_sueltas_varias/produccion/p5.webp",
      "fotos_sueltas_varias/produccion/p6.webp",
      "fotos_sueltas_varias/produccion/p7.webp",
      "fotos_sueltas_varias/produccion/p8.webp",
      "fotos_sueltas_varias/produccion/p9.webp"
    ];
  } else if (titulo === 'EL PROCESO' || titulo.includes('THE PROCESS')) {
    imagenes = [
      "fotos_sueltas_varias/elproceso/ep1.webp",
      "fotos_sueltas_varias/elproceso/ep2.webp",
      "fotos_sueltas_varias/elproceso/ep3.webp",
      "fotos_sueltas_varias/elproceso/ep4.webp",
      "fotos_sueltas_varias/elproceso/ep5.webp",
      "fotos_sueltas_varias/elproceso/ep6.webp"
    ];
  }
  if (!imagenes.length) return;
  let actual = 0;
  window.mover = function(dir) {
    const prev = actual;
    actual = (actual + dir + imagenes.length) % imagenes.length;
    mostrarImagen(actual, dir);
  };
  window.seleccionar = function(idx) {
    const dir = idx > actual ? 1 : -1;
    actual = idx;
    mostrarImagen(actual, dir);
  };
  function mostrarImagen(idx, dir = 0) {
    const img = document.getElementById('carrusel-imagen');
    if (!img) return;
    const isMobile = window.innerWidth <= 700;
    if (isMobile && dir !== 0) {
      const outClass = dir > 0 ? 'slide-left' : 'slide-right';
      const inClass = 'slide-in';
      img.classList.remove('slide-in');
      img.classList.add(outClass);
      setTimeout(() => {
        img.classList.remove(outClass);
        img.src = imagenes[idx];
        img.classList.add(inClass);
        setTimeout(() => img.classList.remove(inClass), 350);
      }, 350);
    } else {
      img.src = imagenes[idx];
    }
    document.querySelectorAll('.miniaturas-carrusel img').forEach((el, i) => {
      if (i === idx) {
        el.classList.add('selected');
      } else {
        el.classList.remove('selected');
      }
    });
  }


  window.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('carrusel-imagen')) {
      mostrarImagen(actual);
      // Swipe/touch navigation removido: solo flechas
    }
  });
})();
