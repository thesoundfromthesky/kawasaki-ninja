import {
  trigger,
  style,
  animate,
  transition,
  query,
  group,
  AnimationTriggerMetadata
} from "@angular/animations";

export const slider: AnimationTriggerMetadata = trigger("routeAnimations", [
  transition("* => isLeft", slideTo("left")),
  transition("* => isRight", slideTo("right")),
  transition("isRight => *", slideTo("left")),
  transition("isLeft => *", slideTo("right"))
]);

function slideTo(dir) {
  const optional = { optional: true };
  return [
    query(":enter, :leave", [
      style({
        position: "absolute",
        top: 0,
        [dir]: 0,
        width: "100%"
      })
    ]),
    query(":enter", [style({ [dir]: "-100%" })]),
    group([
      query(":leave", [animate("600ms ease", style({ [dir]: "100%" }))]),
      query(":enter", [animate("600ms ease", style({ [dir]: "0" }))])
    ])
  ];
}
