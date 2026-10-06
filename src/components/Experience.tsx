import AchievementsBlock from "./AchievementsBlock";
import EducationBlock from "./EducationBlock";
import InternshipBlock from "./InternshipBlock";
import LeadershipBlock from "./LeadershipBlock";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-line-soft py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <SectionHeading
          title="Experience"
          description="Internship experience, leadership, achievements, and academic foundation."
        />

        <div className="mt-12 flex flex-col gap-14">
          <InternshipBlock />
          <LeadershipBlock />
          <AchievementsBlock />
          <EducationBlock />
        </div>
      </div>
    </section>
  );
}