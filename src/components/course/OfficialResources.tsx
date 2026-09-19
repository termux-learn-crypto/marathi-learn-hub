import type { OfficialResource, ResourceType } from "@/types";
import { getEnabledResources } from "@/data/languages";
import type { LanguageEntity } from "@/types";

const typeIcons: Record<ResourceType, string> = {
  "official-website": "🌐",
  documentation: "📘",
  reference: "📖",
  github: "🐙",
  download: "⬇️",
  installation: "🛠️",
  playground: "🧪",
  "package-registry": "📦",
  "api-reference": "🔌",
  specification: "📜",
  tutorial: "🎓",
  community: "👥",
  "source-code": "💻",
};

const typeLabels: Record<ResourceType, string> = {
  "official-website": "अधिकृत संकेतस्थळ",
  documentation: "दस्तऐवज",
  reference: "संदर्भ",
  github: "GitHub",
  download: "डाउनलोड",
  installation: "स्थापना",
  playground: "प्लेग्राउंड",
  "package-registry": "पॅकेज आधार",
  "api-reference": "API संदर्भ",
  specification: "अधिकृत व्याख्या",
  tutorial: "ट्यूटोरियल",
  community: "समुदाय",
  "source-code": "स्रोत कोड",
};

// Every official resource links to the original source. Always driven by data —
// editing resources never requires changing this component.
export function OfficialResources({ language }: { language: LanguageEntity }) {
  const resources = getEnabledResources(language);

  if (resources.length === 0) {
    return null;
  }

  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold marathi">
          🔗 <span className="capitalize">{language.name}</span> ची अधिकृत साधने
        </h2>
      </div>
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl divide-y divide-gray-100 dark:divide-gray-700">
        {resources.map((r) => (
          <a
            key={r.id}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
          >
            <div className="text-2xl shrink-0">{typeIcons[r.type] ?? "🔗"}</div>
            <div className="min-w-0 flex-1">
              <p className="font-medium text-gray-800 dark:text-gray-100">
                {r.title}
              </p>
              {r.description && (
                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                  {r.description}
                </p>
              )}
            </div>
            <span className="shrink-0 text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
              {typeLabels[r.type] ?? r.type}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}