import { motion } from "framer-motion";

const SkillBar = ({ skill, level }) => (
  <div className="mb-4">
    <p className="text-white font-semibold">
      {skill} - {level}%
    </p>
    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1 }}
        className="h-2 bg-green-500 rounded-full"
      />
    </div>
  </div>
);

const Skillss = () => (
  <div className="flex flex-col lg:flex-row gap-6 items-center justify-center max-w-4xl mx-auto py-4">
    <div className="bg-gray-900 rounded-lg shadow-md p-6 w-full lg:w-1/2 h-full min-h-[300px] flex flex-col">
      <h2 className="text-xl text-green-400 font-bold mb-4 text-center">
        Technologies
      </h2>
      <div className="flex-grow">
        <SkillBar skill="React.js" level={80} />
        <SkillBar skill="JavaScript" level={70} />
        <SkillBar skill="Tailwind CSS" level={74} />
        <SkillBar skill="HTML5" level={90} />
      </div>
    </div>

    <div className="bg-gray-900 rounded-lg shadow-md p-6 w-full lg:w-1/2 h-full min-h-[300px] flex flex-col">
      <h2 className="text-xl text-blue-400 font-bold mb-4 text-center">
        Tools
      </h2>
      <div className="flex-grow">
        <SkillBar skill="Git & GitHub" level={80} />
        <SkillBar skill="Vercel" level={75} />
        <SkillBar skill="Netlify" level={65} />
        <SkillBar skill="Figma" level={80} />
      </div>
    </div>
  </div>
);

export default Skillss;
