import ExperienceItem from './ExperienceItem';

const EXPERIENCE = [
  {
    date: "Oct 2024 - Present",
    title: "WordPress software developer",
    company: "Fixtore",
    description:
      "Dedicated to the improvement and development of Fixtore's WooCommerce® and WordPress® web products, managing and maintaining the CMS.",
    link: "https://www.fixtoreonline.es/",
  },
  {
    date: "Jul 2022 - Jan 2023",
    title: "Sales Advisor",
    company: "Playmanity",
    description:
      "Playmanity is a Ukrainian startup focused on providing paid games for free through ad-supported models. I worked as a sales advisor, attracting new customers to their platform.",
    link: "https://playmanity.net/en-US",
  },
];

const Experience = () => {
  return (
    <ol className="relative">
      {EXPERIENCE.map((experience, index) => (
        <li key={index}>
          <ExperienceItem {...experience} />
        </li>
      ))}
    </ol>
  );
};

export default Experience;
