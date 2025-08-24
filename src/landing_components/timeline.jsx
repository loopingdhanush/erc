import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2016",
    title: "The Start Line",
    description:
      "Founded in October 2016 by Dr. Madhushankar, Mr. Krishnamoorthy, and Dr. Arunandhi Chelvan with just 10 passionate runners.",
  },
  {
    year: "2017",
    title: "Building the Pack",
    description:
      "Community runs, weekend gatherings, and steady growth. Formally registered under the Tamil Nadu Societies Registration Act, 1975.",
  },
  {
    year: "2020",
    title: "Training Takes Shape",
    description:
      "Launch of structured programs like Couch to 5K and Couch to 10K. Membership swelled past 200 runners.",
  },
  {
    year: "2022",
    title: "1st Erode Marathon (The Big Debut)",
    description:
      "The inaugural edition of the Erode Marathon took place in 2022, marking the club’s entry into large-scale events.",
  },
  {
    year: "2023",
    title: "2nd Erode Marathon",
    description:
      "A bigger, more organized edition with increased participation and visibility.",
  },
  {
    year: "2024",
    title: "3rd Erode Marathon",
    description:
      "Cemented the race as the flagship running event of Erode, attracting runners from across Tamil Nadu.",
  },
  {
    year: "2025",
    title: "4th Erode Marathon (Coming Soon!)",
    description:
      "Scheduled for 9 November 2025. Registrations open July 2025. The club now blends tradition with forward vision.",
  },
];

export default function Timeline() {
  return (
    <section className="relative bg-gradient-to-b from-blue-200 to-white pt-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h1 className="text-md md:text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900 pb-2">
          History
        </h1>
        <h2 className="kollektif-font text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 text-center">
          Timeline
        </h2>
        
        <p className="mt-3 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto text-center">
          A journey from a small running group to hosting one of Tamil Nadu’s most anticipated marathons.
        </p>

        {/* Timeline */}
        <div className="relative mt-16">
  {/* Timeline line */}
  <div className="absolute left-[32px] top-6 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-blue-200 dark:from-blue-600 dark:to-blue-400 "></div>

  <div className="space-y-16">
    {timelineData.map((item, index) => (
      <motion.div
        key={index}
        className="relative flex items-start"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: index * 0.1 }}
      >
        {/* Year marker */}
        <div className="flex items-center justify-center absolute left-0 top-6 w-16 h-8 bg-blue-500 text-white text-sm font-semibold rounded-md shadow">
          {item.year}
        </div>

        {/* Card */}
        <div className="ml-24 bg-blue-50 dark:bg-gray-900 border border-blue-300 dark:border-blue-600 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300 w-full">
          <h3 className="text-xl md:text-2xl font-bold text-blue-500 kollektif-font mb-2">
            {item.title}
          </h3>
          <p className="text-gray-900 dark:text-orange-100 futura-font leading-relaxed">
            {item.description}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
  <div className="h-20"></div>
</div>

      </div>
    </section>
  );
}
