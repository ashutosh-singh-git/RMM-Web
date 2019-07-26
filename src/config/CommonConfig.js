
export const CommonConfig = {
    CompanyAll : 'http://localhost:8080/company/all',
    AddManager : 'http://localhost:8080/manager',
    AddReview : 'http://localhost:8080/review',
    ManagerSearch : 'http://localhost:8080/search',
    ManagerReviewSearch : 'http://localhost:8080/search/review',
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
        'With Him',
        'For Him',
        'None'
    ],
};

export const EXPERIENCE = [
    {value: 0, label: '<2 yrs'},
    {value: 1, label: '2-5 yrs'},
    {value: 2, label: '5-10 yrs'},
    {value: 3, label: '>10 yrs'},
];

export const FEEDBACK_OPTIONS = {
    SKILLS: 'Skills',
    BEHAVIOUR: 'Behaviour',
    KNOWLEDGE: 'Knowledge',
    TRANSPARENCY: 'Transparency',
    COMMUNICATION: 'Effective Communication',
    LEADERSHIP: 'Leadership Skills',
    MANAGING: 'Management Skills',
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
