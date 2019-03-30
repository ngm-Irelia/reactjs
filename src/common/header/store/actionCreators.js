/* 统一存放action */
import { SEARCH_FOCUS, SEARCH_BLUR } from './actionTypes'

export const setSearchFocus = () => ({
  type: SEARCH_FOCUS
})

export const setSearchBlur = () => ({ 
  type: SEARCH_BLUR
})
