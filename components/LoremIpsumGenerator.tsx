"use client";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faLightbulb } from '@fortawesome/free-solid-svg-icons';

const LOREM_WORDS = [
  "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
  "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
  "magna", "aliqua", "enim", "ad", "minim", "veniam", "quis", "nostrud",
  "exercitation", "ullamco", "laboris", "nisi", "aliquip", "ex", "ea", "commodo",
  "consequat", "duis", "aute", "irure", "in", "reprehenderit", "voluptate",
  "velit", "esse", "cillum", "fugiat", "nulla", "pariatur", "excepteur", "sint",
  "occaecat", "cupidatat", "non", "proident", "sunt", "culpa", "qui", "officia",
  "deserunt", "mollit", "anim", "id", "est", "laborum",
];

export default function LoremIpsumGenerator() {
  const [type, setType] = useState<"paragraphs" | "words" | "sentences">("paragraphs");
  const [count, setCount] = useState<number>(3);
  const [output, setOutput] = useState<string>("");
  const [startWithLorem, setStartWithLorem] = useState<boolean>(true);

  const generateWords = (num: number, startWith: boolean = false): string => {
    const words: string[] = [];
    if (startWith) {
      words.push("Lorem", "ipsum", "dolor", "sit", "amet");
      num = Math.max(0, num - 5);
    }
    for (let i = 0; i < num; i++) {
      words.push(LOREM_WORDS[Math.floor(Math.random() * LOREM_WORDS.length)]);
    }
    return words.join(" ");
  };

  const generateSentence = (startWith: boolean = false): string => {
    const wordCount = Math.floor(Math.random() * 10) + 5;
    const sentence = generateWords(wordCount, startWith);
    return sentence.charAt(0).toUpperCase() + sentence.slice(1) + ".";
  };

  const generateParagraph = (startWith: boolean = false): string => {
    const sentenceCount = Math.floor(Math.random() * 5) + 3;
    const sentences: string[] = [];
    for (let i = 0; i < sentenceCount; i++) {
      sentences.push(generateSentence(startWith && i === 0));
    }
    return sentences.join(" ");
  };

  const generate = () => {
    let result = "";

    switch (type) {
      case "paragraphs": {
        const paragraphs: string[] = [];
        for (let i = 0; i < count; i++) {
          paragraphs.push(generateParagraph(startWithLorem && i === 0));
        }
        result = paragraphs.join("\n\n");
        break;
      }
      case "sentences": {
        const sentences: string[] = [];
        for (let i = 0; i < count; i++) {
          sentences.push(generateSentence(startWithLorem && i === 0));
        }
        result = sentences.join(" ");
        break;
      }
      case "words": {
        result = generateWords(count, startWithLorem);
        break;
      }
    }

    setOutput(result);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output).then(
      () => alert("Texte copié dans le presse-papiers!"),
      () => alert("Erreur lors de la copie.")
    );
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as typeof type)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          >
            <option value="paragraphs">Paragraphes</option>
            <option value="sentences">Phrases</option>
            <option value="words">Mots</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Nombre de {type === "paragraphs" ? "paragraphes" : type === "sentences" ? "phrases" : "mots"}
          </label>
          <input
            type="number"
            min="1"
            max={type === "words" ? 1000 : 100}
            value={count}
            onChange={(e) => setCount(Math.max(1, Number(e.target.value)))}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>
      </div>

      <div>
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={startWithLorem}
            onChange={(e) => setStartWithLorem(e.target.checked)}
            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <span className="ml-2 text-sm font-medium">
            Commencer par &quot;Lorem ipsum dolor sit amet&quot;
          </span>
        </label>
      </div>

      <button
        onClick={generate}
        className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
      >
        <FontAwesomeIcon icon={faFileAlt} className="inline" /> Générer Lorem Ipsum
      </button>

      {output && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium">
              Texte généré ({output.length} caractères)
            </label>
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
            >
              📋 Copier
            </button>
          </div>
          <div className="w-full px-4 py-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 max-h-96 overflow-y-auto whitespace-pre-wrap">
            {output}
          </div>
        </div>
      )}

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">
          <FontAwesomeIcon icon={faLightbulb} className="inline" /> À propos du Lorem Ipsum
        </h4>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <li><strong>Origine:</strong> Texte latin utilisé depuis les années 1500</li>
          <li><strong>Usage:</strong> Texte de remplissage pour les maquettes et designs</li>
          <li><strong>Avantage:</strong> Neutre et sans signification pour ne pas distraire</li>
          <li><strong>Design:</strong> Permet de visualiser la mise en page avant le contenu final</li>
        </ul>
      </div>
    </div>
  );
}
