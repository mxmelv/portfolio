gsap.from(".hero h1", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

gsap.from(".hero p", {
  y: 100,
  opacity: 0,
  duration: 1.2,
  delay: 0.5,
  ease: "power2.out",
});