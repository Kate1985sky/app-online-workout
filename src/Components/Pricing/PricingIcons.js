import { ReactComponent as Price5 } from "./icons/5doll.svg";
import { ReactComponent as Price14 } from "./icons/14doll.svg";
import { ReactComponent as Price20 } from "./icons/20doll.svg";

export const items = [
  {
    title: "Start",
    icon: Price5,
    conditions : [
      "Program for 8 workouts",
      "3 calls with the trainer",
      "Video instructions",
    ], 
    button: (
      <button
        className="rounded-5"
        style={{
          backgroundColor: "#A76BF2",
          color: "white",
          width: 132,
          height: 55,
          border: "2px solid white",
          fontSize: 20,
        }}
      >
        Choose
      </button>
    ),
  },
  {
    title: "Middle",
    icon: Price14,
    conditions: [
      "Program for 18 workouts",
      "5 calls with the trainer",
      "Video instructions",
      "Text instructions",
      "1 technique analysis",
    ], 
    button: (
      <button
        className="rounded-5"
        style={{
          backgroundColor: "#A76BF2",
          color: "white",
          width: 132,
          height: 55,
          border: "2px solid white",
          fontSize: 20,
        }}
      >
        Choose
      </button>
    ),
  },
  {
    title: "Pro",
    icon: Price20,
    conditions: [
      "Program for 40 workouts",
      "15 calls with the trainer",
      "Video instructions",
      "Text instructions",
      "5 technique analysis",
      "Acces to chat with other sportsmen",
    ], 
    button: (
      <button
        className="rounded-5"
        style={{
          backgroundColor: "#A76BF2",
          color: "white",
          width: 132,
          height: 55,
          border: "2px solid white",
          fontSize: 20,
        }}
      >
        Choose
      </button>
    ),
  },
];
