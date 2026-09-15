import Link from "next/link";
import { categories } from "@/data/categories";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3 marathi">📚 Marathi Learn Hub</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 marathi">
              मोफत शिका • प्रयोग करा • वाढा
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-3">
              100% Free Learning Platform. No courses, no payment, no certificate - फक्त शिकणे.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Learn</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/learn" className="hover:text-primary-600">सर्व Lessons</Link></li>
              <li><Link href="/tutorials" className="hover:text-primary-600">Tutorials</Link></li>
              <li><Link href="/projects" className="hover:text-primary-600">Projects</Link></li>
              <li><Link href="/quiz" className="hover:text-primary-600">Quiz</Link></li>
              <li><Link href="/glossary" className="hover:text-primary-600">शब्दकोश (Glossary)</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Categories</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              {categories.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link href={`/category/${cat.id}`} className="hover:text-primary-600">
                    {cat.icon} {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">About</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/about" className="hover:text-primary-600">आमच्याबद्दल</Link></li>
              <li><Link href="/contact" className="hover:text-primary-600">संपर्क</Link></li>
              <li><Link href="/tools" className="hover:text-primary-600">Tools</Link></li>
              <li><Link href="/privacy" className="hover:text-primary-600">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Marathi Learn Hub • मोफत मराठी शिक्षा
        </div>
      </div>
    </footer>
  );
}
