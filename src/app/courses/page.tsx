import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { getCoursesWithCount } from "@/lib/content/courses";
import { buildMetadata } from "@/lib/seo/seo";

export const metadata: Metadata = buildMetadata({
  title: "अभ्यासक्रम — Marathi Learn Hub",
  description:
    "Python, वेब डेव्हलपमेंट, Android, AI, इलेक्ट्रॉनिक्स आणि बरेच काही — मराठीतले सर्व अभ्यासक्रम.",
  path: "/courses",
});

export default function CoursesPage() {
  const courses = getCoursesWithCount();

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold marathi mb-3 bg-gradient-to-r from-marathi-500 to-primary-600 bg-clip-text text-transparent">
            📚 सर्व अभ्यासक्रम
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto marathi">
            तुमचा विषय निवडा आणि अधिकृत साधने, पाठधडे आणि प्रकल्पांसह शिकायला सुरुवात करा.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.slug}`}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="text-4xl mb-3">{course.icon}</div>
              <h2 className="text-xl font-semibold mb-1 marathi">{course.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-3">{course.description}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="px-2.5 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-medium">
                  {course.lessonCount} पाठ
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}