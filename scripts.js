document.addEventListener('DOMContentLoaded', function () {
    const body = document.getElementById('body');
    const zoomOverlay = document.createElement('div');
    zoomOverlay.classList.add('zoom-overlay');
    zoomOverlay.style.display = 'none';
    body.appendChild(zoomOverlay);

    function zoomIn(event) {
        const target = event.target;
        if (target.tagName === 'IMG' || target.tagName === 'VIDEO') {
            zoomOverlay.innerHTML = '';
            const clone = target.cloneNode(true);
            zoomOverlay.appendChild(clone);
            zoomOverlay.style.display = 'flex';
            body.style.overflow = 'hidden';
        }
    }

    function zoomOut() {
        zoomOverlay.style.display = 'none';
        body.style.overflow = 'auto';
    }

    document.querySelectorAll('.gallery img, .gallery video').forEach(element => {
        element.addEventListener('click', zoomIn);
    });

    zoomOverlay.addEventListener('click', zoomOut);
});