import {Core} from "./stores";
import {getDecks} from "./adapters";

let core: Core;

export async function initialize() {
    const decks = await getDecks();
    core = new Core(decks);

    return core;
}
