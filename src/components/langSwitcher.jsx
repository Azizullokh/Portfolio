import useLanguageStore from "../store/languageStore";

const LanguageSwitcher = () => {
  const { changelanguage, language } = useLanguageStore();

  return (
    <div className="relative">
      <label
        htmlFor="language"
        className="absolute -top-2 left-3 text-xs px-1 font-bold bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300"
      >
        Lang
      </label>

      <select
        id="language"
        value={language}
        onChange={(e) => changelanguage(e.target.value)}
        className="w-[70px] px-3 py-2 rounded-md border-2 outline-none border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="en">EN</option>
        <option value="uz">UZ</option>
        <option value="ru">RU</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
