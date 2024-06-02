import { useState } from "react";

interface Props {
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: Props) => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "ayash",
      address: 123,
    },
  });

  const handleClick = () => {
    setGame({
      id: 1,
      player: {
        name: "ayash",
        address: 123,
      },
    });
  };

  //   print ...game
  console.log({ ...game, player: {...game.player , name:"2"} });

  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onClear}>Clear</button>
    </>
  );
};

export default Cart;
