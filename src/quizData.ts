import { caseStudies } from '@/data'

export interface QuizQuestion {
  type?: 'question' | 'info'
  question: string
  options?: {
    text: string
  }[]
  answer?: number // Index of the correct answer (0-3)
}

export interface Quiz {
  caseId: number
  questions: QuizQuestion[]
}

function formatSummaryWithNewlines(paragraphs: string[]): string {
  return paragraphs.join('\n\n') // double newline for clearer spacing
}

export const quizzes: Quiz[] = [
  // Case 1 quiz - Transgender Patient Case
  {
    caseId: 1,
    questions: [
      {
        question:
          'A patient presents with severe abdominal pain and no visible injuries. What diagnoses should be considered first, and what additional information should be gathered?',
        options: [
          {
            text: 'Immediately suspect pregnancy or reproductive issues regardless of gender identity.'
          },
          {
            text: 'Begin with gastrointestinal causes and request information about medical history, sex assigned at birth, and gender identity.'
          },
          {
            text: 'Assume the pain is muscular and recommend rest at home.'
          },
          {
            text: 'Avoid ordering any tests unless symptoms worsen significantly.'
          }
        ],
        answer: 1
      },
      {
        question:
          'If informed that the patient is a woman, how should diagnostic reasoning change?',
        options: [
          {
            text: 'Keep the original focus on gastrointestinal causes without any changes.'
          },
          {
            text: 'Prioritize emotional or stress-related causes based on gender.'
          },
          {
            text: 'Include reproductive system-related conditions such as ovarian cysts or pregnancy in the differential.'
          },
          {
            text: 'Dismiss the severity of the pain based on assumed gender exaggeration.'
          }
        ],
        answer: 2
      },
      {
        question: 'If informed the patient is a man, how should diagnostic thinking adapt?',
        options: [
          {
            text: 'Consider general abdominal issues like appendicitis or gastrointestinal conditions, but exclude pregnancy.'
          },
          {
            text: 'Include pregnancy as a potential cause regardless of male identification.'
          },
          {
            text: 'Assume male patients do not experience significant abdominal pain.'
          },
          {
            text: "Request information about the patient's menstrual history just in case."
          }
        ],
        answer: 0
      },
      {
        question:
          'If it is revealed that the patient is a transgender man, what factors should be considered in clinical reasoning?',
        options: [
          {
            text: 'Exclude pregnancy since the patient identifies as male.'
          },
          {
            text: 'Consider sex assigned at birth, history of surgeries, and current hormone therapy to fully understand clinical risks.'
          },
          {
            text: 'Ignore gender history because it does not influence medical decisions.'
          },
          {
            text: 'Treat the patient using the same approach applied to cisgender men.'
          }
        ],
        answer: 1
      },
      {
        type: 'info',
        question:
          'Case Summary: Read before moving on to the next questions\n\n' +
          formatSummaryWithNewlines(caseStudies[0].summary)
      },
      {
        question:
          'Knowing the patient was transgender and pregnant, what role did system design and algorithmic bias likely play in the misdiagnosis?',
        options: [
          {
            text: 'No significant role—human judgment was the only factor.'
          },
          {
            text: 'System failure was solely responsible, without any clinician accountability.'
          },
          {
            text: 'The rigid binary design of health records and lack of nuanced gender data prevented pregnancy alerts from triggering, contributing significantly to the misdiagnosis.'
          },
          {
            text: 'Transgender identity caused confusion, which inherently makes diagnosis more difficult.'
          }
        ],
        answer: 2
      },
      {
        question:
          'What changes could be implemented in health systems to prevent similar incidents in the future?',
        options: [
          {
            text: 'No changes are necessary, as this was an isolated incident.'
          },
          {
            text: 'EHR systems should include fields for both sex assigned at birth and gender identity, and clinicians should receive training on transgender healthcare needs.'
          },
          {
            text: 'Remove AI and automation entirely from the healthcare process.'
          },
          {
            text: 'Eliminate gender from health records altogether to avoid confusion.'
          }
        ],
        answer: 1
      },
      {
        question:
          'If it is revealed that the patient is a transgender man, what factors should be considered in clinical reasoning?',
        options: [
          {
            text: 'Exclude pregnancy since the patient identifies as male.'
          },
          {
            text: 'Consider sex assigned at birth, history of surgeries, and current hormone therapy to fully understand clinical risks.'
          },
          {
            text: 'Ignore gender history because it does not influence medical decisions.'
          },
          {
            text: 'Treat the patient using the same approach applied to cisgender men.'
          }
        ],
        answer: 1
      },
      {
        question:
          'Knowing the patient was transgender and pregnant, what role did system design and algorithmic bias likely play in the misdiagnosis?',
        options: [
          {
            text: 'No significant role—human judgment was the only factor.'
          },
          {
            text: 'System failure was solely responsible, without any clinician accountability.'
          },
          {
            text: 'The rigid binary design of health records and lack of nuanced gender data prevented pregnancy alerts from triggering, contributing significantly to the misdiagnosis.'
          },
          {
            text: 'Transgender identity caused confusion, which inherently makes diagnosis more difficult.'
          }
        ],
        answer: 2
      },
      {
        question:
          'What changes could be implemented in health systems to prevent similar incidents in the future?',
        options: [
          {
            text: 'No changes are necessary, as this was an isolated incident.'
          },
          {
            text: 'EHR systems should include fields for both sex assigned at birth and gender identity, and clinicians should receive training on transgender healthcare needs.'
          },
          {
            text: 'Remove AI and automation entirely from the healthcare process.'
          },
          {
            text: 'Eliminate gender from health records altogether to avoid confusion.'
          }
        ],
        answer: 1
      }
    ]
  },
  // Case 2 quiz - Cardiac Case
  {
    caseId: 2,
    questions: [
      {
        question:
          'A 59-year-old patient presents with sudden chest pain and nausea. Without knowing their gender, what should be the top differential diagnosis?',
        options: [
          {
            text: 'Depression or anxiety'
          },
          {
            text: 'Musculoskeletal pain'
          },
          {
            text: 'Cardiac issue (e.g., heart attack or angina)'
          },
          {
            text: 'Indigestion'
          }
        ],
        answer: 2
      },
      {
        question:
          "Should the problem be taken seriously immediately, or is it likely to be benign because chest pain in a 59-year-old isn't always an emergency?",
        options: [
          {
            text: 'It should always be taken seriously'
          },
          {
            text: 'Only if the patient is male'
          },
          {
            text: 'Depends on whether the pain is constant or intermittent'
          },
          {
            text: "It's likely benign due to the patient's age"
          }
        ],
        answer: 0
      },
      {
        question:
          'Upon learning the patient is a woman—and knowing that statistically women are less likely to have heart attacks—should this information influence the urgency of the response?',
        options: [
          {
            text: 'Yes, because heart attacks are rare in women'
          },
          {
            text: 'No, because symptoms must be evaluated individually'
          },
          {
            text: 'Yes, because anxiety is more common in women'
          },
          {
            text: 'No, but only if the woman has other risk factors'
          }
        ],
        answer: 1
      },
      {
        question:
          'If the patient were a man instead, does this change the urgency or clinical response?',
        options: [
          {
            text: 'Yes, more urgency because heart attacks are more common in men'
          },
          {
            text: 'No, gender should not change the response when symptoms are serious'
          },
          {
            text: 'Yes, but only if the man has a family history'
          },
          {
            text: 'No, unless additional symptoms develop'
          }
        ],
        answer: 1
      },
      {
        question:
          "Should a clinician's level of concern for chest pain in a 59-year-old differ based on gender?",
        options: [
          {
            text: 'Yes, because heart attack likelihood differs'
          },
          {
            text: 'No, life-threatening symptoms require the same seriousness'
          },
          {
            text: 'Yes, unless diagnostic tools suggest otherwise'
          },
          {
            text: 'Only if medical history suggests higher risk'
          }
        ],
        answer: 1
      },
      {
        question:
          'How should clinicians balance lower statistical risk in women with the potential for serious conditions like heart attacks?',
        options: [
          {
            text: 'Focus only on what is statistically most likely'
          },
          {
            text: 'Use gender-based probabilities to rule out conditions'
          },
          {
            text: 'Always keep serious outcomes in consideration, even if rare'
          },
          {
            text: 'Assume anxiety unless proven otherwise'
          }
        ],
        answer: 2
      },
      {
        type: 'info',
        question:
          'Case Summary: Read before moving on to the next questions\n\n' +
          formatSummaryWithNewlines(caseStudies[1].summary)
      },
      {
        question:
          'How should an AI triage system respond to gender-based statistical differences when a user inputs serious symptoms?',
        options: [
          {
            text: 'Present only the most likely condition'
          },
          {
            text: 'Ignore statistical differences completely'
          },
          {
            text: 'Present all serious possibilities, highlighting rare but fatal outcomes'
          },
          {
            text: 'Recommend mental health evaluation for female users by default'
          }
        ],
        answer: 2
      },
      {
        question:
          "Was the AI's recommendation defensible because it followed statistical trends, or should patient safety have come first?",
        options: [
          {
            text: 'It was defensible—statistics are important'
          },
          {
            text: 'Yes, because machine learning can only reflect its training data'
          },
          {
            text: 'No, AI must prioritize patient safety over probabilities'
          },
          {
            text: 'Yes, because it was technically accurate'
          }
        ],
        answer: 2
      }
    ]
  },
  // Case 3 quiz - Male Breast Cancer Patient
  {
    caseId: 3,
    questions: [
      {
        question:
          'A 25-year-old patient presents with a lump in their chest. What should guide your initial decision to recommend further testing?',
        options: [
          {
            text: 'Only consider testing if the lump appears malignant on physical inspection.'
          },
          {
            text: "Recommend testing based solely on the patient's gender."
          },
          {
            text: 'Proceed with imaging like ultrasound or CT regardless of gender, since any visible lump warrants further testing.'
          },
          {
            text: 'Defer testing unless the patient is female, due to the higher risk of breast cancer in women.'
          }
        ],
        answer: 2
      },
      {
        question: 'If the patient is female, what diagnosis would you initially lean toward?',
        options: [
          {
            text: 'Dismiss it as benign until proven otherwise.'
          },
          {
            text: 'Strongly consider breast cancer and prioritize a mammogram or further imaging.'
          },
          {
            text: 'Focus on muscular injuries due to lifestyle factors.'
          },
          {
            text: 'Delay imaging until symptoms worsen.'
          }
        ],
        answer: 1
      },
      {
        question: 'If the patient is male, how should your approach differ?',
        options: [
          {
            text: "Avoid testing for breast cancer, as it's extremely rare in men."
          },
          {
            text: 'Treat it the same as female chest pain, but opt for different imaging methods if necessary.'
          },
          {
            text: "Assume it's likely hormonal or muscular and wait before imaging."
          },
          {
            text: 'Immediately perform a biopsy without any imaging.'
          }
        ],
        answer: 1
      },
      {
        question:
          'Breast cancer in men accounts for less than 1% of cases. Should that rarity affect your decision to test for it?',
        options: [
          {
            text: 'Yes — the rarity makes it an unlikely diagnosis and not worth testing initially.'
          },
          {
            text: 'No — the visible lump alone justifies testing regardless of statistical rarity.'
          },
          {
            text: 'Only test if other diagnoses are ruled out and the patient insists.'
          },
          {
            text: 'Test only if the patient has a family history of breast cancer.'
          }
        ],
        answer: 1
      },
      {
        type: 'info',
        question:
          'Case Summary: Read before moving on to the next questions\n\n' +
          formatSummaryWithNewlines(caseStudies[2].summary)
      },
      {
        question:
          "What role do societal assumptions — like breast cancer being a 'women's disease' — play in healthcare algorithms like the one that denied Raymond Johnson coverage?",
        options: [
          {
            text: 'No role — algorithms are neutral by design.'
          },
          {
            text: "Societal biases don't affect technical systems like algorithms."
          },
          {
            text: 'They heavily influence how algorithms are designed, leading to biased outcomes.'
          },
          {
            text: 'They affect patient care, but not insurance coverage decisions.'
          }
        ],
        answer: 2
      },
      {
        question:
          'What changes should be made to healthcare algorithms to prevent gender-based denial of coverage?',
        options: [
          {
            text: 'Remove all statistical analysis from algorithm design.'
          },
          {
            text: 'Allow doctors to override algorithmic decisions and ensure algorithms recognize rare conditions.'
          },
          {
            text: 'Use gender as the primary factor in decision-making.'
          },
          {
            text: 'Keep algorithms as-is but provide appeals after denial.'
          }
        ],
        answer: 1
      },
      {
        question:
          'Should healthcare algorithms prioritize statistical likelihoods or account for rare but serious conditions?',
        options: [
          {
            text: 'Focus strictly on statistics to streamline decision-making.'
          },
          {
            text: 'Ignore rare conditions to avoid over-testing.'
          },
          {
            text: 'Balance both, but always allow human review and account for serious rare cases.'
          },
          {
            text: 'Use only historical averages when assessing individual patients.'
          }
        ],
        answer: 2
      }
    ]
  },
  // Case 4 quiz - Kidney Transplant Algorithm Bias
  {
    caseId: 4,
    questions: [
      {
        question:
          'What clinical factors are typically considered when assessing disease severity and readiness for kidney transplant?',
        options: [
          {
            text: "Patient's annual income and employment status"
          },
          {
            text: 'Age, lifestyle, organ match compatibility, and clinical urgency'
          },
          {
            text: 'Race and genetic history only'
          },
          {
            text: 'Number of family members who have received a transplant'
          }
        ],
        answer: 1
      },
      {
        question:
          'What was the original intention behind including race in kidney scoring systems like eGFR?',
        options: [
          {
            text: 'To prioritize Black patients in the transplant system'
          },
          {
            text: 'To account for perceived physiological differences based on race'
          },
          {
            text: 'To reduce costs of scoring algorithms'
          },
          {
            text: 'To follow outdated eugenics-based principles'
          }
        ],
        answer: 1
      },
      {
        type: 'info',
        question:
          'Case Summary: Read before moving on to the next questions\n\n' +
          formatSummaryWithNewlines(caseStudies[3].summary)
      },
      {
        question:
          'Knowing that the race-based modifier made Black patients appear healthier than they were, how did this affect patients like Anthony Randall?',
        options: [
          {
            text: 'It helped them move up the transplant list'
          },
          {
            text: 'It delayed their eligibility and led to worse outcomes and reduced trust'
          },
          {
            text: 'It made no difference in care or outcomes'
          },
          {
            text: 'It improved overall scoring accuracy'
          }
        ],
        answer: 1
      },
      {
        question:
          'Should hospitals or national organizations be held accountable when biased algorithms are knowingly continued?',
        options: [
          {
            text: 'No, because the algorithm was intended to be neutral'
          },
          {
            text: 'Yes, especially once harm is known—they have an obligation to act immediately'
          },
          {
            text: 'Only if lawsuits are filed'
          },
          {
            text: "Only if there's a public outcry"
          }
        ],
        answer: 1
      },
      {
        question:
          'The transplant board eventually removed the race adjustment, but it came years after the issue was known. Was this delay acceptable?',
        options: [
          {
            text: 'Yes, research takes time'
          },
          {
            text: 'No, once harm is known, delays can lead to further injustice'
          },
          {
            text: 'Yes, because adjusting algorithms is complicated'
          },
          {
            text: 'No opinion'
          }
        ],
        answer: 1
      },
      {
        question:
          'How can health systems design clinical algorithms that avoid reinforcing systemic inequities, especially those tied to race?',
        options: [
          {
            text: 'Avoid using demographic data completely'
          },
          {
            text: 'Use only historical datasets'
          },
          {
            text: 'Use diverse datasets, conduct regular audits, and monitor outcomes across demographics'
          },
          {
            text: 'Build the system once and never retrain it'
          }
        ],
        answer: 2
      },
      {
        question:
          'What steps should be taken to make things right for patients harmed by biased algorithms?',
        options: [
          {
            text: 'Offer apologies and resume using the algorithm'
          },
          {
            text: 'Provide compensation, revise eligibility, and regain trust through transparency'
          },
          {
            text: 'Do nothing—past errors are irreversible'
          },
          {
            text: 'Use new algorithms silently without informing affected communities'
          }
        ],
        answer: 1
      }
    ]
  },
  // Case 5 quiz - Pulse Oximeter Bias
  {
    caseId: 5,
    questions: [
      {
        question:
          "You're treating a patient with chronic lung disease during a respiratory pandemic. The pulse oximeter shows normal oxygen saturation, but the patient appears visibly distressed. What should be the next step?",
        options: [
          {
            text: 'Rely on the pulse oximeter since it is a certified medical device'
          },
          {
            text: "Administer pain medication assuming it's unrelated to oxygen levels"
          },
          {
            text: 'Investigate further using additional tests or clinical judgment'
          },
          {
            text: 'Wait to see if symptoms get worse before acting'
          }
        ],
        answer: 2
      },
      {
        question:
          'How much should tools like pulse oximeters be relied on in clinical decision-making?',
        options: [
          {
            text: 'Completely—technology is unbiased and should be trusted'
          },
          {
            text: 'Moderately—with occasional second opinions from other clinicians'
          },
          {
            text: "Sparingly—they often malfunction and aren't trustworthy"
          },
          {
            text: 'Judiciously—use them, but always validate against patient condition and potential failure'
          }
        ],
        answer: 3
      },
      {
        type: 'info',
        question:
          'Case Summary: Read before moving on to the next questions\n\n' +
          formatSummaryWithNewlines(caseStudies[4].summary)
      },
      {
        question:
          "What does Dr. Aboelata's case highlight about relying too heavily on technology like pulse oximeters?",
        options: [
          {
            text: 'Technology always works unless misused'
          },
          {
            text: 'Clinical judgment and awareness of biases are crucial'
          },
          {
            text: 'Medical devices are never biased, only humans are'
          },
          {
            text: 'The problem lies solely with older patients'
          }
        ],
        answer: 1
      },
      {
        question:
          'Pulse oximeters were found to overestimate oxygen levels in patients with darker skin. Why did this flaw persist for so long?',
        options: [
          {
            text: 'Hospitals purposely ignored the data'
          },
          {
            text: "Clinicians didn't have enough training"
          },
          {
            text: 'Devices were not tested adequately on diverse populations'
          },
          {
            text: 'The flaw was introduced recently during the pandemic'
          }
        ],
        answer: 2
      },
      {
        question:
          'Have the FDA and manufacturers done enough to address the bias issue in pulse oximeters? What should be done?',
        options: [
          {
            text: 'Yes, they issued a single report and warning'
          },
          {
            text: 'No, routine testing on diverse demographics should be required'
          },
          {
            text: 'Yes, because no patients complained'
          },
          {
            text: 'No changes are needed—doctors just need better training'
          }
        ],
        answer: 1
      },
      {
        question:
          'How should future healthcare providers be trained to detect and challenge device-based bias in patient care?',
        options: [
          {
            text: 'Teach them to always follow device readings without question'
          },
          {
            text: 'Train them to focus only on white male patient baselines'
          },
          {
            text: 'Encourage them to trust patient symptoms and investigate discrepancies'
          },
          {
            text: 'Tell them to report every issue directly to the FDA'
          }
        ],
        answer: 2
      },
      {
        question:
          'For communities historically underserved or harmed by biased tools, how can the medical system begin to rebuild trust?',
        options: [
          {
            text: 'Discontinue use of all digital medical tools'
          },
          {
            text: 'Increase transparency, test devices on diverse populations, and center patient experience'
          },
          {
            text: 'Only allow high-income hospitals to use advanced equipment'
          },
          {
            text: 'Ignore the issue—it will resolve as technology evolves'
          }
        ],
        answer: 1
      }
    ]
  },
  // Case 6 quiz - Smartwatch Blood-Oxygen Reading Bias
  {
    caseId: 6,
    questions: [
      {
        question:
          'What level of accuracy and reliability should be expected from a health-monitoring device like a smartwatch, especially for critical metrics like blood oxygen levels or heart rate?',
        options: [
          {
            text: 'These devices should offer highly accurate and medically reliable data across all users.'
          },
          {
            text: "Some general accuracy is expected, but it's understood that smartwatches are not medical devices."
          },
          {
            text: 'No real expectation—these are tech gadgets, not medical tools.'
          },
          {
            text: 'Accuracy should be clearly published by the company, and users should be informed of the limitations.'
          }
        ],
        answer: 3
      },
      {
        question:
          'How would it feel to discover that the device does not work as accurately for people of a certain skin tone or demographic?',
        options: [
          {
            text: "Frustration, especially if this wasn't disclosed upfront."
          },
          {
            text: "Disappointment, but it's not surprising given how tech is usually developed."
          },
          {
            text: 'Not a big deal—smartwatches are not meant to be fully trusted anyway.'
          },
          {
            text: 'Outrage, because it reveals systemic bias in consumer technology.'
          }
        ],
        answer: 0
      },
      {
        type: 'info',
        question:
          'Case Summary: Read before moving on to the next questions\n\n' +
          formatSummaryWithNewlines(caseStudies[5].summary)
      },
      {
        question:
          'Do companies like Apple have an obligation to disclose limitations in their health sensors, especially if they affect certain racial or skin tone groups?',
        options: [
          {
            text: 'Yes, transparency about these limitations is essential.'
          },
          {
            text: 'Only if the product is marketed as medically accurate.'
          },
          {
            text: 'It might be enough to include it in the fine print or terms and conditions.'
          },
          {
            text: "No, it's the user's responsibility to know the risks."
          }
        ],
        answer: 0
      },
      {
        question:
          "Why hasn't skin tone bias in oximeters and wearable health devices received widespread attention until recently?",
        options: [
          {
            text: "Devices weren't tested on diverse populations during development."
          },
          {
            text: 'People affected might not speak out due to fear of being dismissed or ignored.'
          },
          {
            text: 'Users and doctors might assume the devices work for everyone.'
          },
          {
            text: 'All of the above.'
          }
        ],
        answer: 3
      },
      {
        question:
          "The court dismissed Morales's case. Should tech companies still be held accountable in other ways when products underperform for marginalized users?",
        options: [
          {
            text: 'Yes, through public apologies, refunds, and product improvements.'
          },
          {
            text: 'Only if the product fails to meet a promised standard.'
          },
          {
            text: "No, unless it's legally proven they caused harm."
          },
          {
            text: 'Accountability should depend on how the product was advertised and perceived.'
          }
        ],
        answer: 0
      },
      {
        question:
          'Should consumer tech devices with health features (like smartwatches) be subject to the same regulatory scrutiny as medical devices?',
        options: [
          {
            text: "Yes, especially if they're marketed for health tracking."
          },
          {
            text: 'A higher bar than now is necessary, but not as strict as full medical regulations.'
          },
          {
            text: 'No, they are consumer gadgets, not medical tools.'
          },
          {
            text: 'Only if the company claims the device can be used for medical decisions.'
          }
        ],
        answer: 0
      },
      {
        question:
          'How can the tech industry ensure innovations in health and wellness tools are tested fairly across diverse populations? Who should be involved?',
        options: [
          {
            text: 'Include diverse participants in testing and development.'
          },
          {
            text: 'Regulatory bodies should require diversity in clinical trials.'
          },
          {
            text: 'Marginalized groups should be part of the design and research teams.'
          },
          {
            text: 'All of the above.'
          }
        ],
        answer: 3
      },
      {
        question:
          'What does this case reveal about the intersection of technology, race, and access to accurate health information in the digital age?',
        options: [
          {
            text: 'It shows how marginalized communities face barriers in both tech and healthcare access.'
          },
          {
            text: 'It reveals that consumer health devices can unintentionally perpetuate racial bias.'
          },
          {
            text: 'It highlights the importance of trust, transparency, and inclusive design.'
          },
          {
            text: 'All of the above.'
          }
        ],
        answer: 3
      }
    ]
  }
]
