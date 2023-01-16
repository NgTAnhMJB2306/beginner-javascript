// lib/handlers.js

import { loader, jokeHolder, jokeButtonSpan } from "./elements";
import { fetchJoke } from "./index.js";
import { randomItemFromArray } from "./utils.js";
import buttonText from "../data/buttonText.js";

// Name export
export async function handleClick() {
    const { joke } = await fetchJoke(loader);
    jokeHolder.textContent = joke;
    jokeButtonSpan.textContent = randomItemFromArray(
        buttonText,
        jokeButtonSpan.textContent
    );
}