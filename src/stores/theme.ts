import { atom } from 'nanostores'

const initialTheme = localStorage.getItem('theme') || 'light'

export const theme = atom<'light' | 'dark'>(initialTheme === 'light' ? initialTheme : 'dark')

theme.subscribe((value) => {
  document.documentElement.setAttribute('data-theme', value)
  localStorage.setItem('theme', value)
})