"use client";

import { useState } from "react";

type Style = "Modern" | "Classic" | "Tech" | "Creative" | "Short";

const SUFFIXES = ["Lab", "Hub", "Pro", "ify", "ly", "Tech", "AI", "Box", "Space", "Works"];
const PREFIXES = ["Smart", "Quick", "Easy", "Pro", "My", "The", "Super", "Mega", "Ultra", "Next"];
const TECH_WORDS = ["Cloud", "Data", "Cyber", "Digital", "Net", "Web", "App", "Code", "Byte", "Logic"];

export default function BusinessNameGenerator() {
  const [keyword, setKeyword] = useState<string>("");
  const [style, setStyle] = useState<Style>("Modern");
  const [names, setNames] = useState<string[]>([]);
  const [copied, setCopied] = useState<string>("");

  const generateNames = () => {
    if (!keyword.trim()) {
      alert("Please enter a keyword");
      return;
    }

    const generated: string[] = [];
    const cleanKeyword = keyword.trim();

    switch (style) {
      case "Modern":
        generated.push(`${cleanKeyword}${SUFFIXES[0]}`);
        generated.push(`${cleanKeyword}${SUFFIXES[1]}`);
        generated.push(`${PREFIXES[0]}${cleanKeyword}`);
        generated.push(`${cleanKeyword}${SUFFIXES[2]}`);
        generated.push(`${PREFIXES[1]}${cleanKeyword}`);
        generated.push(`${cleanKeyword}${SUFFIXES[7]}`);
        generated.push(`${cleanKeyword}${SUFFIXES[8]}`);
        generated.push(`${PREFIXES[2]}${cleanKeyword}`);
        generated.push(`${cleanKeyword}360`);
        generated.push(`${cleanKeyword}Plus`);
        break;

      case "Classic":
        generated.push(`${cleanKeyword} & Co`);
        generated.push(`${cleanKeyword} Group`);
        generated.push(`${cleanKeyword} Solutions`);
        generated.push(`${cleanKeyword} Associates`);
        generated.push(`The ${cleanKeyword} Company`);
        generated.push(`${cleanKeyword} Enterprises`);
        generated.push(`${cleanKeyword} Industries`);
        generated.push(`${cleanKeyword} Corporation`);
        generated.push(`${cleanKeyword} Partners`);
        generated.push(`${cleanKeyword} International`);
        break;

      case "Tech":
        generated.push(`${cleanKeyword}${SUFFIXES[5]}`);
        generated.push(`${cleanKeyword}${SUFFIXES[6]}`);
        generated.push(`${TECH_WORDS[0]}${cleanKeyword}`);
        generated.push(`${cleanKeyword}${TECH_WORDS[1]}`);
        generated.push(`${TECH_WORDS[2]}${cleanKeyword}`);
        generated.push(`${cleanKeyword}${TECH_WORDS[7]}`);
        generated.push(`${TECH_WORDS[8]}${cleanKeyword}`);
        generated.push(`${cleanKeyword}${TECH_WORDS[9]}`);
        generated.push(`${cleanKeyword}${SUFFIXES[3]}`);
        generated.push(`${cleanKeyword}${TECH_WORDS[5]}`);
        break;

      case "Creative":
        generated.push(`${cleanKeyword}${SUFFIXES[4]}`);
        generated.push(`${cleanKeyword}${SUFFIXES[3]}`);
        generated.push(`${PREFIXES[7]}${cleanKeyword}`);
        generated.push(`${PREFIXES[8]}${cleanKeyword}`);
        generated.push(`${cleanKeyword} & Beyond`);
        generated.push(`${cleanKeyword} Studio`);
        generated.push(`${cleanKeyword} Creative`);
        generated.push(`${cleanKeyword} Collective`);
        generated.push(`${cleanKeyword} Project`);
        generated.push(`${cleanKeyword} Labs`);
        break;

      case "Short":
        const short1 = cleanKeyword.substring(0, 3).toUpperCase();
        const short2 = cleanKeyword.substring(0, 2).toUpperCase();
        generated.push(`${short1}${SUFFIXES[4]}`);
        generated.push(`${short2}${SUFFIXES[2]}`);
        generated.push(`${short1}X`);
        generated.push(`${short2}Go`);
        generated.push(`${short1}Hub`);
        generated.push(`${short2}App`);
        generated.push(`${short1}Tech`);
        generated.push(`${short2}AI`);
        generated.push(`${cleanKeyword.substring(0, 4)}`);
        generated.push(`${short1}.io`);
        break;
    }

    setNames(generated);
  };

  const copyName = async (name: string) => {
    await navigator.clipboard.writeText(name);
    setCopied(name);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Business Name Generator</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Industry/Keyword
        </label>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="e.g., Market, Design, Finance"
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Style
        </label>
        <select
          value={style}
          onChange={(e) => setStyle(e.target.value as Style)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        >
          <option value="Modern">Modern</option>
          <option value="Classic">Classic</option>
          <option value="Tech">Tech</option>
          <option value="Creative">Creative</option>
          <option value="Short">Short</option>
        </select>
      </div>

      <button
        onClick={generateNames}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors mb-6"
      >
        Generate Names
      </button>

      {names.length > 0 && (
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Generated Names</h3>
          <div className="space-y-2">
            {names.map((name, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-md"
              >
                <span className="text-gray-900 dark:text-white font-medium">{name}</span>
                <button
                  onClick={() => copyName(name)}
                  className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-md transition-colors"
                >
                  {copied === name ? "Copied!" : "Copy"}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">💡 Tips</h3>
        <ul className="text-sm text-blue-800 dark:text-blue-300 list-disc list-inside space-y-1">
          <li>Check domain availability before finalizing</li>
          <li>Ensure the name is easy to spell and pronounce</li>
          <li>Verify trademark availability in your industry</li>
          <li>Test the name with your target audience</li>
          <li>Consider social media handle availability</li>
        </ul>
      </div>
    </div>
  );
}
