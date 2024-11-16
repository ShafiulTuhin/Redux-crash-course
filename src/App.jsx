import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./Counter";
import Stats from "./Stats";
import Posts from "./Posts";
import { decrement, increment } from "./features/counters/counterSlice";

const App = () => {
  const counters = useSelector((state) => state.counters);

  const dispatch = useDispatch();
  const totalCount = counters.reduce(
    (sum, currentValue) => sum + currentValue.value,
    0
  );
  const handleIncrement = (counterId) => {
    dispatch(increment(counterId));
  };
  const handleDecrement = (counterId) => {
    dispatch(decrement(counterId));
  };
  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="text-3xl p-3 text-center">Simple Counter Application</h1>
      <div>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            count={counter.value}
            onIncrement={() => handleIncrement(counter.id)}
            onDecrement={() => handleDecrement(counter.id)}
          />
        ))}
      </div>
      <Stats totalCount={totalCount} />
      <Posts />
    </div>
  );
};

export default App;
