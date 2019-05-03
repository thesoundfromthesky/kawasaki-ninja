import {
  trigger,
  style,
  animate,
  transition,
  query,
  AnimationTriggerMetadata
} from "@angular/animations";

export const fader: AnimationTriggerMetadata = trigger("routeAnimations", [
  transition("* <=> *", [
    query(":enter, :leave", [
      style([
        {
          position: "absolute",
          width: "100%",
          opacity: 1,
          transform: "scale(0) translateY(100%)"
        }
      ])
    ]),
    query(":enter", [
      animate(
        "600ms ease",
        style({
          opacity: 1,
          transform: "scale(1) translateY(0)"
        })
      )
    ])
  ])
]);
