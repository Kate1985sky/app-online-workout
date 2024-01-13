import { ReactComponent as Price5 } from "./icons/5doll.svg";
import { ReactComponent as Price14 } from "./icons/14doll.svg";
import { ReactComponent as Price20 } from "./icons/20doll.svg";

export const items = [
  {
    title: "Start",
    icon: Price5,
    list1: "Program for 8 workouts",
    list2: "3 calls with the trainer",
    list3: "Video instructions",
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
    list1: "Program for 18 workouts",
    list2: "5 calls with the trainer",
    list3: "Video instructions",
    list4: "Text instructions",
    list5: "1 technique analysis",
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
    list1: "Program for 40 workouts",
    list2: "15 calls with the trainer",
    list3: "Video instructions",
    list4: "Text instructions",
    list5: "5 technique analysis",
    list6: "Acces to chat with other sportsmen",
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
