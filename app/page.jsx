// app/blog/page.jsx

import PizzaList from "./components/product";

const pizza = [
  { id: 1, title: "Margaritda", desc: "Hakuna matata", publisher: "Zahid", date: "17 Nov 2024" },
  { id: 2, title: "Demo Memo",       desc: "Huba Muba",     publisher: "Elxan", date: "23 Oct 2025" },
];

export default function HomePage() {
  return (
   <>
    <PizzaList/>
   </>
  );
}
