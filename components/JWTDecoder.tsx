"use client";

import { useState } from "react";

export default function JWTDecoder() {
  const [token, setToken] = useState<string>("");
  const [header, setHeader] = useState<string>("");
  const [payload, setPayload] = useState<string>("");
  const [signature, setSignature] = useState<string>("");
  const [error, setError] = useState<string>("");

  const decodeJWT = () => {
    if (!token.trim()) {
      setHeader("");
      setPayload("");
      setSignature("");
      setError("");
      return;
    }

    try {
      const parts = token.trim().split(".");
      
      if (parts.length !== 3) {
        throw new Error("Format JWT invalide. Un JWT doit avoir 3 parties séparées par des points.");
      }

      const decodeBase64 = (str: string): string => {
        try {
          const base64 = str.replace(/-/g, "+").replace(/_/g, "/");
          const padding = "=".repeat((4 - (base64.length % 4)) % 4);
          const decoded = atob(base64 + padding);
          const parsed = JSON.parse(decoded);
          return JSON.stringify(parsed, null, 2);
        } catch (e) {
          throw new Error(`Erreur de décodage: ${e instanceof Error ? e.message : "Inconnu"}`);
        }
      };

      setHeader(decodeBase64(parts[0]));
      setPayload(decodeBase64(parts[1]));
      setSignature(parts[2]);
      setError("");
    } catch (e) {
      setHeader("");
      setPayload("");
      setSignature("");
      setError(e instanceof Error ? e.message : "Erreur de décodage du token");
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(
      () => alert(`${label} copié!`),
      () => alert("Erreur lors de la copie.")
    );
  };

  const handleClear = () => {
    setToken("");
    setHeader("");
    setPayload("");
    setSignature("");
    setError("");
  };

  return (
    <div className="space-y-6">
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-red-900 dark:text-red-100 flex items-center gap-2">
          ⚠️ Avertissement de sécurité
        </h4>
        <p className="text-sm text-red-800 dark:text-red-200">
          <strong>Ne pas décoder de tokens sensibles sur internet!</strong> Ce décodeur fonctionne entièrement dans votre navigateur (aucune donnée n&apos;est envoyée sur internet), mais par précaution, n&apos;utilisez que des tokens de test ou de développement.
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Token JWT
        </label>
        <textarea
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 resize-none font-mono text-sm"
        />
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
          Collez votre token JWT complet (format: header.payload.signature)
        </p>
      </div>

      <div className="flex gap-3">
        <button
          onClick={decodeJWT}
          disabled={!token.trim()}
          className="flex-1 px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          🔓 Décoder le token
        </button>
        <button
          onClick={handleClear}
          className="px-6 py-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold"
        >
          🗑️
        </button>
      </div>

      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <h4 className="font-semibold mb-2 text-red-900 dark:text-red-100">
            ❌ Erreur
          </h4>
          <p className="text-sm text-red-800 dark:text-red-200">{error}</p>
        </div>
      )}

      {header && !error && (
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">
                📋 Header (En-tête)
              </h4>
              <button
                onClick={() => copyToClipboard(header, "Header")}
                className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                📋 Copier
              </button>
            </div>
            <pre className="bg-white dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-700 overflow-x-auto">
              <code className="text-sm font-mono text-blue-900 dark:text-blue-100">
                {header}
              </code>
            </pre>
            <p className="text-xs text-blue-700 dark:text-blue-300 mt-2">
              Contient le type de token et l&apos;algorithme de signature utilisé
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-green-900 dark:text-green-100">
                📦 Payload (Données)
              </h4>
              <button
                onClick={() => copyToClipboard(payload, "Payload")}
                className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
              >
                📋 Copier
              </button>
            </div>
            <pre className="bg-white dark:bg-green-950/30 p-4 rounded-lg border border-green-200 dark:border-green-700 overflow-x-auto max-h-96">
              <code className="text-sm font-mono text-green-900 dark:text-green-100">
                {payload}
              </code>
            </pre>
            <p className="text-xs text-green-700 dark:text-green-300 mt-2">
              Contient les claims (revendications) et les données de l&apos;utilisateur
            </p>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100">
                🔐 Signature
              </h4>
              <button
                onClick={() => copyToClipboard(signature, "Signature")}
                className="px-3 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
              >
                📋 Copier
              </button>
            </div>
            <pre className="bg-white dark:bg-purple-950/30 p-4 rounded-lg border border-purple-200 dark:border-purple-700 overflow-x-auto">
              <code className="text-sm font-mono text-purple-900 dark:text-purple-100 break-all">
                {signature}
              </code>
            </pre>
            <p className="text-xs text-purple-700 dark:text-purple-300 mt-2">
              Signature cryptographique pour vérifier l&apos;intégrité du token
            </p>
          </div>
        </div>
      )}

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">
          💡 Qu&apos;est-ce qu&apos;un JWT ?
        </h4>
        <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
          Un JWT (JSON Web Token) est un standard ouvert (RFC 7519) pour transmettre des informations de manière sécurisée entre deux parties sous forme d&apos;objet JSON.
        </p>
        <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
          <div className="bg-white dark:bg-blue-950/30 p-3 rounded border border-blue-200 dark:border-blue-700">
            <p className="font-semibold mb-1">Structure d&apos;un JWT:</p>
            <code className="text-xs font-mono">
              <span className="text-blue-600 dark:text-blue-400">HEADER</span>
              <span className="text-gray-500">.</span>
              <span className="text-green-600 dark:text-green-400">PAYLOAD</span>
              <span className="text-gray-500">.</span>
              <span className="text-purple-600 dark:text-purple-400">SIGNATURE</span>
            </code>
          </div>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-green-900 dark:text-green-100">
          📖 Claims courants
        </h4>
        <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
          <li><strong>iss</strong> (issuer): Émetteur du token</li>
          <li><strong>sub</strong> (subject): Sujet du token (généralement l&apos;ID utilisateur)</li>
          <li><strong>aud</strong> (audience): Destinataire du token</li>
          <li><strong>exp</strong> (expiration): Date d&apos;expiration (timestamp Unix)</li>
          <li><strong>iat</strong> (issued at): Date de création (timestamp Unix)</li>
          <li><strong>nbf</strong> (not before): Token invalide avant cette date</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-yellow-900 dark:text-yellow-100">
          ⚠️ Important à savoir
        </h4>
        <ul className="text-sm text-yellow-800 dark:text-yellow-200 space-y-1">
          <li>Un JWT est <strong>encodé</strong>, pas <strong>chiffré</strong> - les données sont lisibles</li>
          <li>Ne stockez jamais d&apos;informations sensibles (mots de passe, etc.) dans un JWT</li>
          <li>La signature garantit l&apos;intégrité, pas la confidentialité</li>
          <li>Utilisez toujours HTTPS pour transmettre des JWTs</li>
          <li>Vérifiez toujours la signature côté serveur</li>
        </ul>
      </div>
    </div>
  );
}
