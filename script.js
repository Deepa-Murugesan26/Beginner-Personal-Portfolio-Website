gsap.from("nav", {
  y: -80,
  opacity: 0,
  duration: 1
});

gsap.from(".hero", {
  scale: 0.8,
  opacity: 0,
  duration: 1.2
});

gsap.from(".card", {
  scrollTrigger: {
    trigger: ".card",
    start: "top 80%"
  },
  y: 50,
  opacity: 0,
  stagger: 0.2,
  duration: 1
});

gsap.to(".profile", {
  y: -10,
  repeat: -1,
  yoyo: true,
  duration: 2
});