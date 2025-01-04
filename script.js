 // Create floating blocks
 const floatingBlocks = document.querySelector('.floating-blocks');
 for (let i = 0; i < 15; i++) {
     const block = document.createElement('div');
     block.className = 'block';
     block.style.left = `${Math.random() * 100}%`;
     block.style.animationDelay = `${Math.random() * 15}s`;
     block.style.width = `${30 + Math.random() * 50}px`;
     block.style.height = block.style.width;
     floatingBlocks.appendChild(block);
 }

 // 3D card effect
 document.addEventListener('mousemove', (e) => {
     const cards = document.querySelectorAll('.card');
     cards.forEach(card => {
         const rect = card.getBoundingClientRect();
         const x = e.clientX - rect.left;
         const y = e.clientY - rect.top;
         
         const centerX = rect.width / 2;
         const centerY = rect.height / 2;
         
         const rotateX = (y - centerY) / 30;
         const rotateY = (centerX - x) / 30;
         
         card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
     });
 });

 // Reset card position when mouse leaves
 document.addEventListener('mouseleave', () => {
     const cards = document.querySelectorAll('.card');
     cards.forEach(card => {
         card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
     });
 });

 // Smooth scroll for navigation links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
         document.querySelector(this.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
         });
     });
 });