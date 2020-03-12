export interface IFeedback {
  rate: number | null;
  advantages: string;
  limitations: string;
  description: string;
}

export const feedbacks: IFeedback[] = [
  {
    rate: null,
    advantages: 'string111111',
    limitations: 'string11111',
    description: 'string11111',
  },
  {
    rate: 5,
    advantages: 'string22222',
    limitations: 'string22222',
    description: 'string22222',
  },
  {
    rate: 2.8,
    advantages: 'string3333333',
    limitations: 'string333333',
    description: 'string333333',
  },
  {
    rate: 4.1,
    advantages: 'string4444444',
    limitations: 'string4444444',
    description: 'string444444',
  },
];
