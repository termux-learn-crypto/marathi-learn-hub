import { SectionHeader } from "@/components/Cards";
import PathCardGrid from "@/components/PathCardGrid";

export default function LearningPaths() {
  return (
    <section className="py-8">
      <SectionHeader
        title="🧭 Learning Paths"
        subtitle="शून्यापासून प्रोजेक्टपर्यंत — संपूर्ण journey मध्ये शिका"
        link="/paths"
        linkText="सर्व paths"
      />
      <PathCardGrid />
    </section>
  );
}