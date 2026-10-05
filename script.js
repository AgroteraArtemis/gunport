const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.08});
document.querySelectorAll('.skill,.project-card,.about-section,.bottom-section').forEach(el=>observer.observe(el));
