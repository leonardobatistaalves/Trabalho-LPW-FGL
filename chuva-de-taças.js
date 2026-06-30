

(function () {
  const canvas = document.createElement('canvas');
  canvas.id = 'chuva-tacas-canvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.zIndex = '-1';       
  canvas.style.pointerEvents = 'none'; 
  document.body.style.position = document.body.style.position || 'relative';
  document.body.insertBefore(canvas, document.body.firstChild);

  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const NUM_TROPHIES = 18;       
  const trophies = [];

  function randomTrophy() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      size: 20 + Math.random() * 26,        
      speed: 2.0 + Math.random() * 1.4,     
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      opacity: 0.15 + Math.random() * 0.25, 
      sway: Math.random() * Math.PI * 2,    
      swaySpeed: 0.01 + Math.random() * 0.02,
    };
  }

  for (let i = 0; i < NUM_TROPHIES; i++) {
    trophies.push(randomTrophy());
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    trophies.forEach((t) => {
      ctx.save();
      ctx.globalAlpha = t.opacity;
      ctx.translate(t.x, t.y);
      ctx.rotate(t.rotation);
      ctx.font = `${t.size}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('🏆', 0, 0);
      ctx.restore();

      t.y += t.speed;
      t.rotation += t.rotationSpeed;
      t.sway += t.swaySpeed;
      t.x += Math.sin(t.sway) * 0.6;

      if (t.y > canvas.height + 50) {
        t.y = -50;
        t.x = Math.random() * canvas.width;
      }
    });

    requestAnimationFrame(draw);
  }

  draw();
})();