
const domain = 'http://localhost:8080';

export const CommonConfig = {
    CompanyAll : `${domain}/company/all`,
    AddManager : `${domain}/manager`,
    AddReview : `${domain}/review`,
    ManagerSearch : `${domain}/search`,
    ManagerReviewSearch : `${domain}/search/review`,
};


export const REVIEW_LABEL_TYPES = {
    LABEL1: [
        'Novice',
        'Basic',
        'Intermediate',
        'Advanced',
        'Expert'
    ],
    LABEL2: [
        'Poor',
        'Bad',
        'Average',
        'Good',
        'Excellent'
    ],
    LABEL3: [
        'With',
        'For',
        'None'
    ],
};

export const EXPERIENCE = [
    {value: 0, label: '<2 yrs'},
    {value: 1, label: '2-5 yrs'},
    {value: 2, label: '5-10 yrs'},
    {value: 3, label: '>10 yrs'},
];

export const GENDERS = [
    {value: 0, label: 'Mr'},
    {value: 1, label: 'Miss'},
];

export const DESIGNATIONS = [
    {value: 0, label: 'Project Manager'},
    {value: 1, label: 'Technical Lead'},
    {value: 2, label: 'Other'},
];

export const DESIGNATION_VALUE = {
    PROJECT_MANAGER: 'Project Manager',
    TECH_LEAD: 'Technical Lead',
    OTHER: 'Other'
};

export const FEEDBACK_OPTIONS = {
    SKILLS: 'Skills',
    BEHAVIOUR: 'Behaviour',
    KNOWLEDGE: 'Knowledge',
    TRANSPARENCY: 'Transparency',
    COMMUNICATION: 'Effective Communication',
    LEADERSHIP: 'Leadership Skills',
    MANAGING: 'Management Skills',
    REVIEWER_RELATION: 'reviewerRelation'
};

export const FEEDBACK_RATING = {
    [FEEDBACK_OPTIONS.SKILLS]: REVIEW_LABEL_TYPES.LABEL1,
    [FEEDBACK_OPTIONS.BEHAVIOUR]: REVIEW_LABEL_TYPES.LABEL2,
    [FEEDBACK_OPTIONS.KNOWLEDGE]: REVIEW_LABEL_TYPES.LABEL1,
    [FEEDBACK_OPTIONS.TRANSPARENCY]: REVIEW_LABEL_TYPES.LABEL2,
    [FEEDBACK_OPTIONS.COMMUNICATION]: REVIEW_LABEL_TYPES.LABEL2,
    [FEEDBACK_OPTIONS.LEADERSHIP]: REVIEW_LABEL_TYPES.LABEL1,
    [FEEDBACK_OPTIONS.MANAGING]: REVIEW_LABEL_TYPES.LABEL1,
};

export const HOME_DATA = [
    {
        id: 1,
        managerName: "Ashutosh Singh",
        designation: "PROJECT_MANAGER",
        companyName: "Wynk Ltd",
        city: "Gurugram",
        averageRating: 7,
        totalReviews: 10,
        promotedReview: {
            reviewer: "Thushi la",
            comments: "100% the best Math teacher I've taken. His lectures are great, and he really cares about his" +
                " students. Mr. Allen really goes out of his way to make sure you understand the material, taking you.."
        }
    },
    {
        id: 2,
        managerName: "Morris Knuth",
        designation: "TECH_LEAD",
        companyName: "Google",
        city: "Gurugram",
        averageRating: 6,
        totalReviews: 1,
        promotedReview: {
            reviewer: "Hians Hegde",
            comments: "100% the best Math teacher I've taken. His lectures are great, and he really cares about his" +
                " students. Mr. Allen really goes out of his way to make sure you understand the material, taking you.."
        }
    },
    {
        id: 3,
        managerName: "MVP Arora",
        designation: "PROJECT_MANAGER",
        companyName: "ABP Co. Ltd",
        city: "Bangalore",
        averageRating: 3,
        totalReviews: 20,
        promotedReview: {
            reviewer: "Nayak",
            comments: "100% the best Math teacher I've taken. His lectures are great, and he really cares about his" +
                " students. Mr. Allen really goes out of his way to make sure you understand the material, taking you.."
        }
    }
];

export const TESTIMONIAL_DATA = [
    {
        id: 1,
        name: "Sandeep Mirakhur",
        designation: "CTO",
        companyName: "Rational Heads",
        comments: "100% the best Math teacher I've taken. His lectures are great, and he really cares about his" +
            " students. Mr. Allen really goes out of his way to make sure you understand the material, taking you.."
    },
    {
        id: 2,
        name: "Vijay Mathur",
        designation: "Director",
        companyName: "FaceBook Inc",
        comments: "100% the best Math teacher I've taken. His lectures are great, and he really cares about his" +
            " students. Mr. Allen really goes out of his way to make sure you understand the material"
    },
    {
        id: 3,
        name: "Chetan Kabu",
        designation: "Co-Founder",
        companyName: "Truminds Ltd.",
        comments: "100% the best Math teacher I've taken. His lectures are great, and he really cares about his" +
            " students. Mr. Allen really goes out of his way to make sure you"
    }
];
