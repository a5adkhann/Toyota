const pageTransition = () => {
  gsap.timeline()
    .to(".page-transition", {
      duration: 0.6,
      height: "100%",
      top: "0%",
      ease: "power1.inOut"
    })
    .fromTo(".loader-text", 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      "-=0.4" 
    )
    .to(".page-transition", {
      duration: 0.2,
      height: "100%",
      top: "0%",
      delay: 0.1
    })
    .to(".page-transition", {
      duration: 0.5,
      top: "-100%",
      ease: "power1.in"
    });
};

pageTransition();
