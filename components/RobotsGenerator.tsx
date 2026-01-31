"use client";

import { useState } from "react";

interface Rule {
  id: number;
  userAgent: string;
  directive: "Allow" | "Disallow";
  path: string;
}

export default function RobotsGenerator() {
  const [rules, setRules] = useState<Rule[]>([]);
  const [nextId, setNextId] = useState<number>(1);
  const [userAgent, setUserAgent] = useState<string>("*");
  const [directive, setDirective] = useState<"Allow" | "Disallow">("Disallow");
  const [path, setPath] = useState<string>("/");
  const [sitemapUrl, setSitemapUrl] = useState<string>("");
  const [crawlDelay, setCrawlDelay] = useState<string>("");
  const [generatedContent, setGeneratedContent] = useState<string>("");

  const addRule = () => {
    if (!path.trim()) {
      alert("Please enter a path");
      return;
    }

    setRules([...rules, { id: nextId, userAgent, directive, path }]);
    setNextId(nextId + 1);
    setPath("/");
  };

  const removeRule = (id: number) => {
    setRules(rules.filter((r) => r.id !== id));
  };

  const generateRobotsTxt = () => {
    if (rules.length === 0 && !sitemapUrl && !crawlDelay) {
      alert("Please add at least one rule, sitemap, or crawl-delay");
      return;
    }

    const lines: string[] = [];
    const groupedRules: { [key: string]: Rule[] } = {};

    rules.forEach((rule) => {
      if (!groupedRules[rule.userAgent]) {
        groupedRules[rule.userAgent] = [];
      }
      groupedRules[rule.userAgent].push(rule);
    });

    Object.entries(groupedRules).forEach(([agent, agentRules]) => {
      lines.push(`User-agent: ${agent}`);
      agentRules.forEach((rule) => {
        lines.push(`${rule.directive}: ${rule.path}`);
      });
      if (crawlDelay && agent === "*") {
        lines.push(`Crawl-delay: ${crawlDelay}`);
      }
      lines.push("");
    });

    if (sitemapUrl) {
      lines.push(`Sitemap: ${sitemapUrl}`);
    }

    setGeneratedContent(lines.join("\n"));
  };

  const downloadRobotsTxt = () => {
    if (!generatedContent) return;
    const blob = new Blob([generatedContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "robots.txt";
    link.click();
    URL.revokeObjectURL(url);
  };

  const loadExample = (example: string) => {
    switch (example) {
      case "allow-all":
        setRules([{ id: nextId, userAgent: "*", directive: "Allow", path: "/" }]);
        setNextId(nextId + 1);
        break;
      case "disallow-all":
        setRules([{ id: nextId, userAgent: "*", directive: "Disallow", path: "/" }]);
        setNextId(nextId + 1);
        break;
      case "common":
        setRules([
          { id: nextId, userAgent: "*", directive: "Allow", path: "/" },
          { id: nextId + 1, userAgent: "*", directive: "Disallow", path: "/admin/" },
          { id: nextId + 2, userAgent: "*", directive: "Disallow", path: "/private/" },
          { id: nextId + 3, userAgent: "*", directive: "Disallow", path: "/api/" },
        ]);
        setNextId(nextId + 4);
        break;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">robots.txt Generator</h2>

      <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Add Rule</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              User-agent
            </label>
            <select
              value={userAgent}
              onChange={(e) => setUserAgent(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="*">All (*)</option>
              <option value="Googlebot">Googlebot</option>
              <option value="Bingbot">Bingbot</option>
              <option value="Slurp">Yahoo Slurp</option>
              <option value="DuckDuckBot">DuckDuckBot</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Directive
            </label>
            <select
              value={directive}
              onChange={(e) => setDirective(e.target.value as "Allow" | "Disallow")}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="Allow">Allow</option>
              <option value="Disallow">Disallow</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Path
            </label>
            <input
              type="text"
              value={path}
              onChange={(e) => setPath(e.target.value)}
              placeholder="/path/"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
        </div>

        <button
          onClick={addRule}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors"
        >
          Add Rule
        </button>
      </div>

      {rules.length > 0 && (
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Rules</h3>
          <div className="space-y-2">
            {rules.map((rule) => (
              <div
                key={rule.id}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-md"
              >
                <div className="flex-1">
                  <span className="text-sm text-gray-600 dark:text-gray-400">User-agent: </span>
                  <span className="font-medium text-gray-900 dark:text-white">{rule.userAgent}</span>
                  <span className="mx-2 text-gray-400">|</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{rule.directive}: </span>
                  <span className="font-medium text-gray-900 dark:text-white">{rule.path}</span>
                </div>
                <button
                  onClick={() => removeRule(rule.id)}
                  className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded-md transition-colors"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mb-6 space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Sitemap URL (optional)
          </label>
          <input
            type="url"
            value={sitemapUrl}
            onChange={(e) => setSitemapUrl(e.target.value)}
            placeholder="https://example.com/sitemap.xml"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Crawl-delay in seconds (optional)
          </label>
          <input
            type="number"
            value={crawlDelay}
            onChange={(e) => setCrawlDelay(e.target.value)}
            placeholder="10"
            min="0"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>
      </div>

      <button
        onClick={generateRobotsTxt}
        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition-colors mb-4"
      >
        Generate robots.txt
      </button>

      {generatedContent && (
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Generated robots.txt</h3>
          <pre className="p-4 bg-gray-900 text-green-400 rounded-lg overflow-auto text-sm mb-3">
            <code>{generatedContent}</code>
          </pre>
          <button
            onClick={downloadRobotsTxt}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors"
          >
            Download robots.txt
          </button>
        </div>
      )}

      <div className="mb-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
        <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-3">📝 Examples</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => loadExample("allow-all")}
            className="px-3 py-1 bg-purple-500 hover:bg-purple-600 text-white text-sm rounded-md transition-colors"
          >
            Allow All
          </button>
          <button
            onClick={() => loadExample("disallow-all")}
            className="px-3 py-1 bg-purple-500 hover:bg-purple-600 text-white text-sm rounded-md transition-colors"
          >
            Disallow All
          </button>
          <button
            onClick={() => loadExample("common")}
            className="px-3 py-1 bg-purple-500 hover:bg-purple-600 text-white text-sm rounded-md transition-colors"
          >
            Common Setup
          </button>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">💡 Tips</h3>
        <ul className="text-sm text-blue-800 dark:text-blue-300 list-disc list-inside space-y-1">
          <li>Place robots.txt in your website&apos;s root directory</li>
          <li>Use &quot;/&quot; to block entire site, &quot;/folder/&quot; to block specific folders</li>
          <li>Crawl-delay helps prevent server overload from aggressive bots</li>
          <li>Test your robots.txt in Google Search Console</li>
          <li>Remember: robots.txt is a suggestion, not a security measure</li>
        </ul>
      </div>
    </div>
  );
}
