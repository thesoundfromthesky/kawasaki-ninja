import {
  trigger,
  style,
  animate,
  transition,
  query,
  group,
  AnimationTriggerMetadata
} from "@angular/animations";

export const transformer: AnimationTriggerMetadata = trigger(
  "routeAnimations",
  [
    transition("* => isLeft", transitionTo({ x: -100, y: -100, rotate: -720 })),
    transition("* => isRight", transitionTo({ x: 100, y: -100, rotate: 90 })),
    transition("isRight => *", transitionTo({ x: -100, y: -100, rotate: 360 })),
    transition("isLeft => *", transitionTo({ x: 100, y: -100, rotate: -360 }))
  ]
);

function transitionTo({ x = 100, y = 0, rotate = 0 }) {
  const optional = { optional: true };
  return [
    query(":enter, :leave", [
      style({ position: "absolute", top: 0, left: 0, width: "100%" })
    ]),
    query(":enter", [
      style({ transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)` })
    ]),
    group([
      query(":leave", [
        animate(
          "600ms ease-out",
          style({
            transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)`
          })
        )
      ]),
      query(":enter", [
        animate(
          "600ms ease-out",
          style({
            transform: `translate(0, 0) rotate(0)`
          })
        )
      ])
    ])
  ];
}
