import { atom, useAtom } from "jotai"

const showDrinks = atom(false)
const currentDrinks = atom([])

export const useShowDrinks = () => useAtom(showDrinks)
export const useCurrentDrinks = () => useAtom(currentDrinks)