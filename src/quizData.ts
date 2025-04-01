export interface QuizQuestion {
  question: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
}

export interface Quiz {
  caseId: number;
  questions: QuizQuestion[];
}

export const quizzes: Quiz[] = [
  // Case 1 quiz placeholder
  {
    caseId: 1,
    questions: []
  },
  // Case 2 quiz placeholder
  {
    caseId: 2,
    questions: []
  },
  // Case 3 quiz - Male Breast Cancer Patient
  {
    caseId: 3,
    questions: [
      {
        question: "A 25-year-old patient presents with a lump in their chest. What should guide your initial decision to recommend further testing?",
        options: [
          {
            id: "A",
            text: "Only consider testing if the lump appears malignant on physical inspection.",
            isCorrect: false
          },
          {
            id: "B",
            text: "Recommend testing based solely on the patient's gender.",
            isCorrect: false
          },
          {
            id: "C",
            text: "Proceed with imaging like ultrasound or CT regardless of gender, since any visible lump warrants further testing.",
            isCorrect: true
          },
          {
            id: "D",
            text: "Defer testing unless the patient is female, due to the higher risk of breast cancer in women.",
            isCorrect: false
          }
        ]
      },
      {
        question: "If the patient is female, what diagnosis would you initially lean toward?",
        options: [
          {
            id: "A",
            text: "Dismiss it as benign until proven otherwise.",
            isCorrect: false
          },
          {
            id: "B",
            text: "Strongly consider breast cancer and prioritize a mammogram or further imaging.",
            isCorrect: true
          },
          {
            id: "C",
            text: "Focus on muscular injuries due to lifestyle factors.",
            isCorrect: false
          },
          {
            id: "D",
            text: "Delay imaging until symptoms worsen.",
            isCorrect: false
          }
        ]
      },
      {
        question: "If the patient is male, how should your approach differ?",
        options: [
          {
            id: "A",
            text: "Avoid testing for breast cancer, as it's extremely rare in men.",
            isCorrect: false
          },
          {
            id: "B",
            text: "Treat it the same as female chest pain, but opt for different imaging methods if necessary.",
            isCorrect: true
          },
          {
            id: "C",
            text: "Assume it's likely hormonal or muscular and wait before imaging.",
            isCorrect: false
          },
          {
            id: "D",
            text: "Immediately perform a biopsy without any imaging.",
            isCorrect: false
          }
        ]
      },
      {
        question: "Breast cancer in men accounts for less than 1% of cases. Should that rarity affect your decision to test for it?",
        options: [
          {
            id: "A",
            text: "Yes — the rarity makes it an unlikely diagnosis and not worth testing initially.",
            isCorrect: false
          },
          {
            id: "B",
            text: "No — the visible lump alone justifies testing regardless of statistical rarity.",
            isCorrect: true
          },
          {
            id: "C",
            text: "Only test if other diagnoses are ruled out and the patient insists.",
            isCorrect: false
          },
          {
            id: "D",
            text: "Test only if the patient has a family history of breast cancer.",
            isCorrect: false
          }
        ]
      },
      {
        question: "What role do societal assumptions — like breast cancer being a \"women's disease\" — play in healthcare algorithms like the one that denied Raymond Johnson coverage?",
        options: [
          {
            id: "A",
            text: "No role — algorithms are neutral by design.",
            isCorrect: false
          },
          {
            id: "B",
            text: "Societal biases don't affect technical systems like algorithms.",
            isCorrect: false
          },
          {
            id: "C",
            text: "They heavily influence how algorithms are designed, leading to biased outcomes.",
            isCorrect: true
          },
          {
            id: "D",
            text: "They affect patient care, but not insurance coverage decisions.",
            isCorrect: false
          }
        ]
      },
      {
        question: "What changes should be made to healthcare algorithms to prevent gender-based denial of coverage?",
        options: [
          {
            id: "A",
            text: "Remove all statistical analysis from algorithm design.",
            isCorrect: false
          },
          {
            id: "B",
            text: "Allow doctors to override algorithmic decisions and ensure algorithms recognize rare conditions.",
            isCorrect: true
          },
          {
            id: "C",
            text: "Use gender as the primary factor in decision-making.",
            isCorrect: false
          },
          {
            id: "D",
            text: "Keep algorithms as-is but provide appeals after denial.",
            isCorrect: false
          }
        ]
      },
      {
        question: "Should healthcare algorithms prioritize statistical likelihoods or account for rare but serious conditions?",
        options: [
          {
            id: "A",
            text: "Focus strictly on statistics to streamline decision-making.",
            isCorrect: false
          },
          {
            id: "B",
            text: "Ignore rare conditions to avoid over-testing.",
            isCorrect: false
          },
          {
            id: "C",
            text: "Balance both, but always allow human review and account for serious rare cases.",
            isCorrect: true
          },
          {
            id: "D",
            text: "Use only historical averages when assessing individual patients.",
            isCorrect: false
          }
        ]
      }
    ]
  },
  // Case 4 quiz placeholder
  {
    caseId: 4,
    questions: []
  },
  // Case 5 quiz placeholder
  {
    caseId: 5,
    questions: []
  },
  // Case 6 quiz placeholder
  {
    caseId: 6,
    questions: []
  }
];
