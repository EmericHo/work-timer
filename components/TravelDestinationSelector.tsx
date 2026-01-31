"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretRight, faDice, faLandmark, faLightbulb, faMapMarkedAlt, faMountain, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';

interface Destination {
  country: string;
  capital: string;
  continent: string;
  flag: string;
  fact: string;
}

const destinations: Destination[] = [
  // Europe
  { country: "France", capital: "Paris", continent: "Europe", flag: "🇫🇷", fact: "Le pays le plus visité au monde avec plus de 89 millions de touristes par an" },
  { country: "Espagne", capital: "Madrid", continent: "Europe", flag: "🇪🇸", fact: "Possède 47 sites classés au patrimoine mondial de l'UNESCO" },
  { country: "Italie", capital: "Rome", continent: "Europe", flag: "🇮🇹", fact: "Abrite plus de la moitié des trésors artistiques du monde" },
  { country: "Allemagne", capital: "Berlin", continent: "Europe", flag: "🇩🇪", fact: "Plus de 2 100 châteaux et près de 25 000 châteaux forts" },
  { country: "Royaume-Uni", capital: "Londres", continent: "Europe", flag: "🇬🇧", fact: "Londres possède plus de 170 musées, dont beaucoup sont gratuits" },
  { country: "Grèce", capital: "Athènes", continent: "Europe", flag: "🇬🇷", fact: "Composée de plus de 6 000 îles et îlots" },
  { country: "Portugal", capital: "Lisbonne", continent: "Europe", flag: "🇵🇹", fact: "L'une des plus anciennes nations d'Europe avec près de 900 ans d'histoire" },
  { country: "Pays-Bas", capital: "Amsterdam", continent: "Europe", flag: "🇳🇱", fact: "Possède plus de vélos que d'habitants" },
  { country: "Suisse", capital: "Berne", continent: "Europe", flag: "🇨🇭", fact: "Abrite 208 montagnes de plus de 3 000 mètres d'altitude" },
  { country: "Autriche", capital: "Vienne", continent: "Europe", flag: "🇦🇹", fact: "Berceau de Mozart et de la valse viennoise" },
  { country: "Norvège", capital: "Oslo", continent: "Europe", flag: "🇳🇴", fact: "Destination idéale pour observer les aurores boréales" },
  { country: "Suède", capital: "Stockholm", continent: "Europe", flag: "🇸🇪", fact: "Stockholm est construite sur 14 îles reliées par 57 ponts" },
  { country: "Danemark", capital: "Copenhague", continent: "Europe", flag: "🇩🇰", fact: "Le pays du hygge et du design scandinave" },
  { country: "Finlande", capital: "Helsinki", continent: "Europe", flag: "🇫🇮", fact: "Abrite le village officiel du Père Noël en Laponie" },
  { country: "Islande", capital: "Reykjavik", continent: "Europe", flag: "🇮🇸", fact: "Terre de feu et de glace avec volcans et glaciers" },
  { country: "Irlande", capital: "Dublin", continent: "Europe", flag: "🇮🇪", fact: "Connue pour ses paysages verdoyants et ses falaises spectaculaires" },
  { country: "Belgique", capital: "Bruxelles", continent: "Europe", flag: "🇧🇪", fact: "Capitale du chocolat et de la bière artisanale" },
  { country: "Croatie", capital: "Zagreb", continent: "Europe", flag: "🇭🇷", fact: "Plus de 1 000 îles le long de la côte adriatique" },
  { country: "République Tchèque", capital: "Prague", continent: "Europe", flag: "🇨🇿", fact: "Prague est surnommée 'la ville aux cent clochers'" },
  { country: "Pologne", capital: "Varsovie", continent: "Europe", flag: "🇵🇱", fact: "Abrite la plus ancienne forêt d'Europe, Białowieża" },
  
  // Asie
  { country: "Japon", capital: "Tokyo", continent: "Asie", flag: "🇯🇵", fact: "Mélange parfait de traditions ancestrales et de technologie futuriste" },
  { country: "Thaïlande", capital: "Bangkok", continent: "Asie", flag: "🇹🇭", fact: "Plus de 40 000 temples bouddhistes à travers le pays" },
  { country: "Chine", capital: "Pékin", continent: "Asie", flag: "🇨🇳", fact: "La Grande Muraille s'étend sur plus de 21 000 kilomètres" },
  { country: "Inde", capital: "New Delhi", continent: "Asie", flag: "🇮🇳", fact: "22 langues officielles et une diversité culturelle incroyable" },
  { country: "Vietnam", capital: "Hanoï", continent: "Asie", flag: "🇻🇳", fact: "Plus de 3 000 kilomètres de côtes spectaculaires" },
  { country: "Indonésie", capital: "Jakarta", continent: "Asie", flag: "🇮🇩", fact: "Plus grand archipel du monde avec plus de 17 000 îles" },
  { country: "Singapour", capital: "Singapour", continent: "Asie", flag: "🇸🇬", fact: "Ville-État ultra-moderne avec jardins verticaux et architecture futuriste" },
  { country: "Malaisie", capital: "Kuala Lumpur", continent: "Asie", flag: "🇲🇾", fact: "Forêts tropicales parmi les plus anciennes au monde" },
  { country: "Corée du Sud", capital: "Séoul", continent: "Asie", flag: "🇰🇷", fact: "Leader mondial de la technologie et de la K-pop" },
  { country: "Philippines", capital: "Manille", continent: "Asie", flag: "🇵🇭", fact: "Plus de 7 600 îles paradisiaques" },
  { country: "Cambodge", capital: "Phnom Penh", continent: "Asie", flag: "🇰🇭", fact: "Temples d'Angkor, l'une des merveilles archéologiques du monde" },
  { country: "Népal", capital: "Katmandou", continent: "Asie", flag: "🇳🇵", fact: "Abrite 8 des 10 plus hautes montagnes du monde dont l'Everest" },
  { country: "Sri Lanka", capital: "Colombo", continent: "Asie", flag: "🇱🇰", fact: "Surnommée 'la perle de l'océan Indien'" },
  { country: "Émirats Arabes Unis", capital: "Abou Dabi", continent: "Asie", flag: "🇦🇪", fact: "Dubaï possède le plus haut gratte-ciel du monde, Burj Khalifa" },
  { country: "Israël", capital: "Jérusalem", continent: "Asie", flag: "🇮🇱", fact: "Ville sainte pour trois grandes religions mondiales" },
  { country: "Jordanie", capital: "Amman", continent: "Asie", flag: "🇯🇴", fact: "Abrite la cité antique de Pétra, l'une des 7 merveilles du monde" },
  
  // Amérique du Nord
  { country: "États-Unis", capital: "Washington DC", continent: "Amérique du Nord", flag: "🇺🇸", fact: "63 parcs nationaux offrant des paysages spectaculaires" },
  { country: "Canada", capital: "Ottawa", continent: "Amérique du Nord", flag: "🇨🇦", fact: "Deuxième plus grand pays du monde avec des paysages variés" },
  { country: "Mexique", capital: "Mexico", continent: "Amérique du Nord", flag: "🇲🇽", fact: "Riche patrimoine maya et aztèque avec plus de 35 sites UNESCO" },
  { country: "Costa Rica", capital: "San José", continent: "Amérique du Nord", flag: "🇨🇷", fact: "Plus de 25% du territoire est constitué de zones protégées" },
  { country: "Cuba", capital: "La Havane", continent: "Amérique du Nord", flag: "🇨🇺", fact: "Célèbre pour sa musique, ses cigares et ses voitures vintage" },
  
  // Amérique du Sud
  { country: "Brésil", capital: "Brasília", continent: "Amérique du Sud", flag: "🇧🇷", fact: "Abrite la forêt amazonienne, le poumon de la planète" },
  { country: "Argentine", capital: "Buenos Aires", continent: "Amérique du Sud", flag: "🇦🇷", fact: "Terre du tango et des vastes pampas" },
  { country: "Pérou", capital: "Lima", continent: "Amérique du Sud", flag: "🇵🇪", fact: "Le Machu Picchu, citadelle inca perchée à 2 430 mètres d'altitude" },
  { country: "Chili", capital: "Santiago", continent: "Amérique du Sud", flag: "🇨🇱", fact: "Le désert d'Atacama est le plus sec au monde" },
  { country: "Colombie", capital: "Bogotá", continent: "Amérique du Sud", flag: "🇨🇴", fact: "Le pays le plus biodiversifié par kilomètre carré" },
  { country: "Équateur", capital: "Quito", continent: "Amérique du Sud", flag: "🇪🇨", fact: "Les îles Galápagos, laboratoire de l'évolution de Darwin" },
  { country: "Bolivie", capital: "Sucre", continent: "Amérique du Sud", flag: "🇧🇴", fact: "Le Salar d'Uyuni, plus grande étendue de sel au monde" },
  
  // Afrique
  { country: "Maroc", capital: "Rabat", continent: "Afrique", flag: "🇲🇦", fact: "Mélange fascinant de cultures arabes, berbères et européennes" },
  { country: "Égypte", capital: "Le Caire", continent: "Afrique", flag: "🇪🇬", fact: "Les pyramides de Gizeh, dernière merveille du monde antique" },
  { country: "Afrique du Sud", capital: "Pretoria", continent: "Afrique", flag: "🇿🇦", fact: "Nation arc-en-ciel avec 11 langues officielles" },
  { country: "Kenya", capital: "Nairobi", continent: "Afrique", flag: "🇰🇪", fact: "Safaris spectaculaires et grande migration des gnous" },
  { country: "Tanzanie", capital: "Dodoma", continent: "Afrique", flag: "🇹🇿", fact: "Le Kilimandjaro, plus haut sommet d'Afrique à 5 895 mètres" },
  { country: "Tunisie", capital: "Tunis", continent: "Afrique", flag: "🇹🇳", fact: "Ruines de Carthage et désert du Sahara" },
  { country: "Sénégal", capital: "Dakar", continent: "Afrique", flag: "🇸🇳", fact: "Point le plus occidental du continent africain" },
  { country: "Madagascar", capital: "Antananarivo", continent: "Afrique", flag: "🇲🇬", fact: "90% de la faune et flore sont endémiques" },
  { country: "Maurice", capital: "Port-Louis", continent: "Afrique", flag: "🇲🇺", fact: "Île paradisiaque avec plages de sable blanc et lagon turquoise" },
  { country: "Seychelles", capital: "Victoria", continent: "Afrique", flag: "🇸🇨", fact: "115 îles paradisiaques dans l'océan Indien" },
  
  // Océanie
  { country: "Australie", capital: "Canberra", continent: "Océanie", flag: "🇦🇺", fact: "Grande Barrière de Corail, plus grand récif corallien au monde" },
  { country: "Nouvelle-Zélande", capital: "Wellington", continent: "Océanie", flag: "🇳🇿", fact: "Paysages époustouflants qui ont servi de décor au Seigneur des Anneaux" },
  { country: "Fidji", capital: "Suva", continent: "Océanie", flag: "🇫🇯", fact: "Plus de 300 îles tropicales paradisiaques" },
  { country: "Polynésie Française", capital: "Papeete", continent: "Océanie", flag: "🇵🇫", fact: "Tahiti et Bora Bora, destinations de rêve pour les lunes de miel" },
  { country: "Nouvelle-Calédonie", capital: "Nouméa", continent: "Océanie", flag: "🇳🇨", fact: "Lagon classé au patrimoine mondial de l'UNESCO" },
];

const continentColors: Record<string, { bg: string; text: string; emoji: React.ReactNode }> = {
  "Europe": { bg: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-800 dark:text-blue-300", emoji: "🏰" },
  "Asie": { bg: "bg-red-100 dark:bg-red-900/30", text: "text-red-800 dark:text-red-300", emoji: "🏯" },
  "Amérique du Nord": { bg: "bg-green-100 dark:bg-green-900/30", text: "text-green-800 dark:text-green-300", emoji: "🗽" },
  "Amérique du Sud": { bg: "bg-yellow-100 dark:bg-yellow-900/30", text: "text-yellow-800 dark:text-yellow-300", emoji: <FontAwesomeIcon icon={faMountain} className="inline" /> },
  "Afrique": { bg: "bg-orange-100 dark:bg-orange-900/30", text: "text-orange-800 dark:text-orange-300", emoji: "🦁" },
  "Océanie": { bg: "bg-teal-100 dark:bg-teal-900/30", text: "text-teal-800 dark:text-teal-300", emoji: <FontAwesomeIcon icon={faUmbrellaBeach} className="inline" /> },
};

export default function TravelDestinationSelector() {
  const [excludedCountries, setExcludedCountries] = useState<Set<string>>(new Set());
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [history, setHistory] = useState<Destination[]>([]);
  const [showExclusionList, setShowExclusionList] = useState(false);

  const selectRandomDestination = () => {
    const availableDestinations = destinations.filter(
      (dest) => !excludedCountries.has(dest.country)
    );

    if (availableDestinations.length === 0) {
      alert("Aucune destination disponible. Veuillez désélectionner certains pays.");
      return;
    }

    const randomIndex = Math.floor(Math.random() * availableDestinations.length);
    const selected = availableDestinations[randomIndex];
    setSelectedDestination(selected);

    // Add to history if not already the last entry
    if (history.length === 0 || history[history.length - 1].country !== selected.country) {
      setHistory([...history, selected]);
    }
  };

  const toggleCountryExclusion = (country: string) => {
    const newExcluded = new Set(excludedCountries);
    if (newExcluded.has(country)) {
      newExcluded.delete(country);
    } else {
      newExcluded.add(country);
    }
    setExcludedCountries(newExcluded);
  };

  const selectAllInContinent = (continent: string) => {
    const newExcluded = new Set(excludedCountries);
    destinations
      .filter((dest) => dest.continent === continent)
      .forEach((dest) => newExcluded.add(dest.country));
    setExcludedCountries(newExcluded);
  };

  const deselectAllInContinent = (continent: string) => {
    const newExcluded = new Set(excludedCountries);
    destinations
      .filter((dest) => dest.continent === continent)
      .forEach((dest) => newExcluded.delete(dest.country));
    setExcludedCountries(newExcluded);
  };

  const clearAllExclusions = () => {
    setExcludedCountries(new Set());
  };

  const groupedDestinations = destinations.reduce((acc, dest) => {
    if (!acc[dest.continent]) {
      acc[dest.continent] = [];
    }
    acc[dest.continent].push(dest);
    return acc;
  }, {} as Record<string, Destination[]>);

  return (
    <div className="space-y-6">
      {/* Main Selection Button */}
      <div className="text-center">
        <button
          onClick={selectRandomDestination}
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg rounded-lg shadow-lg transform transition hover:scale-105"
        >
          <FontAwesomeIcon icon={faDice} className="inline" /> Sélectionner une Destination Aléatoire
        </button>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {destinations.length - excludedCountries.size} destinations disponibles
        </p>
      </div>

      {/* Selected Destination Display */}
      {selectedDestination && (
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-300 dark:border-blue-700 rounded-xl p-6 shadow-xl">
          <div className="text-center">
            <div className="text-8xl mb-4">{selectedDestination.flag}</div>
            <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">
              {selectedDestination.country}
            </h2>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl"><FontAwesomeIcon icon={faLandmark} className="inline" /></span>
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  {selectedDestination.capital}
                </span>
              </div>
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${continentColors[selectedDestination.continent].bg}`}>
                <span className="text-xl">{continentColors[selectedDestination.continent].emoji}</span>
                <span className={`font-semibold ${continentColors[selectedDestination.continent].text}`}>
                  {selectedDestination.continent}
                </span>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed max-w-2xl mx-auto">
              <FontAwesomeIcon icon={faLightbulb} className="inline" /> {selectedDestination.fact}
            </p>
          </div>
        </div>
      )}

      {/* Exclusion Management */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <button
          onClick={() => setShowExclusionList(!showExclusionList)}
          className="flex items-center justify-between w-full text-left"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            🚫 Gérer les exclusions ({excludedCountries.size} pays exclus)
          </h3>
          <span className="text-2xl">{showExclusionList ? <FontAwesomeIcon icon={faCaretDown} className="inline" /> : <FontAwesomeIcon icon={faCaretRight} className="inline" />}</span>
        </button>

        {showExclusionList && (
          <div className="mt-4 space-y-4">
            <div className="flex gap-2">
              <button
                onClick={clearAllExclusions}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium"
              >
                Tout réactiver
              </button>
            </div>

            {Object.entries(groupedDestinations).map(([continent, dests]) => {
              const continentExcludedCount = dests.filter((d) => excludedCountries.has(d.country)).length;
              const colors = continentColors[continent];

              return (
                <div key={continent} className={`${colors.bg} rounded-lg p-4`}>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className={`font-bold text-lg ${colors.text} flex items-center gap-2`}>
                      <span className="text-2xl">{colors.emoji}</span>
                      {continent} ({continentExcludedCount}/{dests.length} exclus)
                    </h4>
                    <div className="flex gap-2">
                      <button
                        onClick={() => selectAllInContinent(continent)}
                        className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-xs font-medium"
                      >
                        Tout exclure
                      </button>
                      <button
                        onClick={() => deselectAllInContinent(continent)}
                        className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded text-xs font-medium"
                      >
                        Tout inclure
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                    {dests.map((dest) => {
                      const isExcluded = excludedCountries.has(dest.country);
                      return (
                        <button
                          key={dest.country}
                          onClick={() => toggleCountryExclusion(dest.country)}
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition ${
                            isExcluded
                              ? "bg-red-200 dark:bg-red-900/50 text-red-900 dark:text-red-200 line-through opacity-60"
                              : "bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:shadow-md"
                          }`}
                        >
                          <span className="text-xl">{dest.flag}</span>
                          <span className="truncate">{dest.country}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Continents Overview */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          <FontAwesomeIcon icon={faMapMarkedAlt} className="inline" /> Destinations par continent
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(groupedDestinations).map(([continent, dests]) => {
            const colors = continentColors[continent];
            const availableCount = dests.filter((d) => !excludedCountries.has(d.country)).length;
            return (
              <div key={continent} className={`${colors.bg} rounded-lg p-4 text-center`}>
                <div className="text-3xl mb-2">{colors.emoji}</div>
                <div className={`font-bold ${colors.text}`}>{continent}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {availableCount}/{dests.length} disponibles
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* History */}
      {history.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              📜 Historique des sélections
            </h3>
            <button
              onClick={() => setHistory([])}
              className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-sm font-medium"
            >
              Effacer
            </button>
          </div>
          <div className="space-y-2">
            {history.slice().reverse().map((dest, index) => {
              const colors = continentColors[dest.continent];
              return (
                <div
                  key={`${dest.country}-${history.length - index}`}
                  className={`flex items-center gap-3 p-3 rounded-lg ${colors.bg}`}
                >
                  <span className="text-2xl">{dest.flag}</span>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 dark:text-gray-100">
                      {dest.country}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {dest.capital} • {dest.continent}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedDestination(dest)}
                    className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-medium"
                  >
                    Revoir
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
