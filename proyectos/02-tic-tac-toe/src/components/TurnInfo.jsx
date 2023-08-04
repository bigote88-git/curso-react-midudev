import { TURNS } from "../logic/constants";
import { Square } from "./Square";

export const TurnInfo = ({ turn }) => {
    return (
        <section className='turn'>
            <Square isSelected={TURNS.X === turn}>
                {TURNS.X}
            </Square>
            <Square isSelected={TURNS.O === turn}>
                {TURNS.O}
            </Square>
        </section>
    );
}
