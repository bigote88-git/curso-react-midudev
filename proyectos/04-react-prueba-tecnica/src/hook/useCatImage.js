import { useEffect, useState } from "react";

const CAT_ENDPOINT_IMAGE_BY_FACT = 'https://cataas.com'

export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState()

    // HACEMOS EL SEGUNDO FETCHING DE DATOS
    useEffect(() => {
        if (!fact) return;

        const firstThreeWord = fact.split(' ', 3).join(' ')

        fetch(`https://cataas.com/cat/says/${firstThreeWord}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(data => {
                const { url } = data;
                setImageUrl(url);
            })

    }, [fact])

    return { imageUrl: `${CAT_ENDPOINT_IMAGE_BY_FACT}${imageUrl}` };
}