// CounterScore.tsx
import { useCounterStore } from "src/Store/CounterStore.ts";

const CounterScore = () => {
    const { count } = useCounterStore();

    return (
        <div >
            <h1 >Counter {count * 10}</h1>
        </div>
    );
}
export default CounterScore;
