import {
  FaReact,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVercel,
  SiNetlify,
  SiNextdotjs,
  SiVuedotjs,
  SiSvelte,
  SiTypescript,
  SiRedux,
  SiReactquery,
  SiVite,
  SiWebpack,
  SiAdobexd,
} from "react-icons/si";

const icons = [
  { icon: <FaHtml5 className="text-orange-500" />, key: "html" },
  { icon: <FaCss3Alt className="text-blue-500" />, key: "css" },
  { icon: <FaJs className="text-yellow-400" />, key: "js" },
  { icon: <SiTypescript className="text-blue-400" />, key: "typescript" },
  { icon: <FaReact className="text-blue-400" />, key: "react" },
  {
    icon: <SiNextdotjs className="text-black dark:text-white" />,
    key: "nextjs",
  },
  { icon: <SiVuedotjs className="text-green-500" />, key: "vue" },
  { icon: <SiSvelte className="text-orange-600" />, key: "svelte" },
  { icon: <SiTailwindcss className="text-blue-500" />, key: "tailwind" },
  { icon: <FaBootstrap className="text-purple-600" />, key: "bootstrap" },
  { icon: <SiRedux className="text-purple-500" />, key: "redux" },
  { icon: <SiReactquery className="text-red-500" />, key: "reactquery" },
  { icon: <SiVite className="text-purple-500" />, key: "vite" },
  { icon: <SiWebpack className="text-blue-600" />, key: "webpack" },
  { icon: <FaGitAlt className="text-orange-600" />, key: "git" },
  { icon: <FaGithub className="text-black dark:text-white" />, key: "github" },
  { icon: <SiVercel className="text-black dark:text-white" />, key: "vercel" },
  { icon: <SiNetlify className="text-blue-400" />, key: "netlify" },
  { icon: <FaFigma className="text-pink-500" />, key: "figma" },
  { icon: <SiAdobexd className="text-red-500" />, key: "adobexd" },
];

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-white py-5 mt-10 overflow-hidden">
      <p className="mb-4 text-sm text-center">
        Crafted by Azizullokh ⚡ Powered by React & Tailwind
      </p>
      <div className="relative w-full flex items-center">
        <div className="flex space-x-8 animate-scroll">
          {[...icons, ...icons].map(({ icon, key }, index) => (
            <div
              key={`${key}-${index}`}
              className="text-3xl sm:text-4xl md:text-5xl"
            >
              {icon}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
