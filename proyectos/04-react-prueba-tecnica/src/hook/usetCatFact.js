import { useState, useEffect } from "react";
import { getRandomFact } from "../services/facts"

export function useCatFact() {
    const [fact, setFact] = useState()

    const refreshFact = async() => {
            const fact = await getRandomFact();
            setFact(fact)
        }
        // HACEMOS EL PRIMER FETCH DE DATOS
    useEffect(refreshFact, [])

    return { fact, refreshFact }
}