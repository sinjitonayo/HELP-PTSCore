import { trigger, state, style, animate, transition } from "@angular/animations"

export const slideInOut = trigger("slideInOut", [
  transition(":enter", [
    style({ transform: "translateY(100%)" }),
    animate("0.3s ease-out", style({ transform: "translateY(0%)" })),
  ]),
  transition(":leave", [
    animate("0.3s ease-in", style({ transform: "translateY(100%)" })),
  ]),
])

export const fadeInOut = trigger("fadeInOut", [
  state("void", style({ opacity: 0 })), // Initial state when added to the DOM
  transition(":enter, :leave", [animate("0.3s")]),
]);

export const slideLeft = trigger("slideLeft", [
  transition(":enter", [
    style({transform: "translateX(100%"}),
    animate("0.3s ease-out", style({ transform: "translateX(0%)" })),
  ]),
  transition(":leave", [
    style({transform: "translateX(0%"}),
    animate("0.3s ease-in", style({ transform: "translateX(100%)" })),
  ]),
]);