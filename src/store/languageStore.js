import { create } from 'zustand'
import ru from '../locales/ru.json'
import en from '../locales/en.json'
import uz from '../locales/uz.json'

const languages = { en, ru, uz }

const useLanguageStore = create((set) => ({
    language: localStorage.getItem("lang") || "en",
    translation: languages[localStorage.getItem("lang") || "en"],

    changelanguage: (lang) => {
        localStorage.setItem("lang" ,lang);
        set({language:lang , translation: languages[lang]})
    }
}))

export default useLanguageStore