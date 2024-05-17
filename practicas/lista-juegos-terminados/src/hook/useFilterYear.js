import { useState } from "react";

export function useFilterYear({ years }) {

    const [filterYear, setFilterYear] = useState(years[0]);

    return { filterYear }
}