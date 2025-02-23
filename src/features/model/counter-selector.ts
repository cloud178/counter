import {AppRootState} from "../../store";

export const selectCounter = (state: AppRootState): number => state.counter
