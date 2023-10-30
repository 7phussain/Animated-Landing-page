function circleMousFollower() {
  window.addEventListener("mousemove", function (dets) {
    this.document.querySelector(
      ".miniCircle"
    ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
  });
}

function firstPageAnim() {
  var t1 = gsap.timeline();

  t1.from("nav", {
    y: -10,
    opacity: 0,
    duration: 1,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      duration: 1.8,
      ease: Expo.easeInOut,
    })
    .from(".anim2", {
      y: -100,
      duration: 1.3,
      opacity: 0,
    });
}

circleMousFollower();
firstPageAnim();
