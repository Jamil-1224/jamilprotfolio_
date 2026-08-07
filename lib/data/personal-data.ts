export interface PersonalData {
  full_name: string;
  first_name: string;
  last_name: string;
  nickname: string;
  post: string;
  headings: string[];
  post_description: string;
  interests: string[];
  education: {
    level: string;
    institution: string;
    result: string;
  };
  universityEducation: {
    level: string;
    institution: string;
    currentCgpa: string;
  };
  email: string;
  phone: string;
  location: string;
  social_usernames: {
    facebook: string;
    linkedIn: string;
    github: string;
  };
  image: string;
}

export const personalData: PersonalData = {
  full_name: "Khalad Ebnay Rouson Jamil",
  first_name: "Rouson",
  last_name: "Jamil",
  nickname: "Jamil",
  post: "Full Stack Developer",
  headings: [
    "Software Engineer Researcher Problem Solver",
  ],
  post_description:
    "Final-year CSE student at BAUST University, passionate about backend development and competitive programming.",
  interests: ["Research", "Machine Learning", "Competitive Programming"],
  education: {
    level: "Higher Secondary Certificate",
    institution: "Ullapara Science College",
    result: "GPA: 5.00 / 5.00",
  },
  universityEducation: {
    level: "Bachelor of Science in Computer Science & Engineering",
    institution: "Bangladesh Army University of Science & Technology (BAUST)",
    currentCgpa: "3.84",
  },
  email: "rousonjamil5328@gmail.com",
  phone: "+8801755224848",
  location: "Ullapara,Sirajganj,Bangladesh",
  social_usernames: {
    facebook: "https://www.facebook.com/share/1HQHGBrF1Q/",
    linkedIn: "https://www.linkedin.com/in/md-rouson-jamil-541833324",
    github: "https://github.com/Jamil-1224",
  },
  image: "/public/jamil_1014.jpg",
};

/**
 * Helper to get resolved image path for Next.js public directory
 */
export const getProfileImagePath = (imagePath: string = personalData.image): string => {
  if (imagePath.startsWith("/public/")) {
    return imagePath.replace("/public/", "/");
  }
  return imagePath;
};
