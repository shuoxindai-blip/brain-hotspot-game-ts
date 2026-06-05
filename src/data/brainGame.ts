import type { AnatomyGameConfig, QuizOption } from '../types/game'

const labels = [
  'Sensory Cortex',
  'Motor Cortex',
  'Parietal Lobe',
  'Frontal Lobe',
  'Occipital Lobe',
  'Temporal Lobe',
  'Cerebellum',
  'Brain Stem',
  "Wernicke's Area",
  "Broca's Area",
] as const

const makeOptions = (correctIndex: number): QuizOption[] => {
  const distractors = labels.filter((_, index) => index !== correctIndex).slice(correctIndex % 4, (correctIndex % 4) + 3)
  const fallback = labels.filter((label, index) => index !== correctIndex && !distractors.includes(label))
  const choices = [labels[correctIndex], ...distractors, ...fallback].slice(0, 4)

  return choices.map((text, index) => ({
    label: ['A', 'B', 'C', 'D'][index] as QuizOption['label'],
    text,
  }))
}

export const brainGame: AnatomyGameConfig = {
  id: 'brain',
  title: 'Brain Anatomy Challenge',
  topic: 'brain anatomy',
  description: 'Choose a mode, then tap each named brain structure as quickly and accurately as you can.',
  asset: {
    src: '/brain-anatomy.png',
    alt: 'Brain anatomy diagram with unlabeled blue hotspot dots',
    aspectRatio: '325 / 259',
    width: '100%',
    translateY: '0%',
  },
  items: [
    {
      id: 'sensory-cortex',
      label: 'Sensory Cortex',
      prompt: 'Tap the sensory cortex',
      hotspot: { x: 48.62, y: 23.55, r: 4.2 },
      options: makeOptions(0),
      correctAnswer: 'A',
      aliases: ['sensory cortex', 'Sensory Cortex'],
      explanation: 'The sensory cortex receives and maps touch, pressure, pain, and body-position signals from across the body.',
    },
    {
      id: 'motor-cortex',
      label: 'Motor Cortex',
      prompt: 'Tap the motor cortex',
      hotspot: { x: 41.54, y: 23.17, r: 4.2 },
      options: makeOptions(1),
      correctAnswer: 'A',
      aliases: ['motor cortex', 'Motor Cortex'],
      explanation: 'The motor cortex sends voluntary movement commands to skeletal muscles, helping control precise body actions.',
    },
    {
      id: 'parietal-lobe',
      label: 'Parietal Lobe',
      prompt: 'Tap the parietal lobe',
      hotspot: { x: 64.31, y: 25.48, r: 4.2 },
      options: makeOptions(2),
      correctAnswer: 'A',
      aliases: ['parietal lobe', 'Parietal Lobe'],
      explanation: 'The parietal lobe integrates sensory information and supports spatial awareness, attention, and body orientation.',
    },
    {
      id: 'frontal-lobe',
      label: 'Frontal Lobe',
      prompt: 'Tap the frontal lobe',
      hotspot: { x: 23.08, y: 30.12, r: 4.2 },
      options: makeOptions(3),
      correctAnswer: 'A',
      aliases: ['frontal lobe', 'Frontal Lobe'],
      explanation: 'The frontal lobe supports planning, decision-making, personality, speech production, and voluntary movement.',
    },
    {
      id: 'occipital-lobe',
      label: 'Occipital Lobe',
      prompt: 'Tap the occipital lobe',
      hotspot: { x: 82.46, y: 44.02, r: 4.2 },
      options: makeOptions(4),
      correctAnswer: 'A',
      aliases: ['occipital lobe', 'Occipital Lobe'],
      explanation: "The occipital lobe is the brain's main visual processing area, interpreting shape, color, and motion.",
    },
    {
      id: 'temporal-lobe',
      label: 'Temporal Lobe',
      prompt: 'Tap the temporal lobe',
      hotspot: { x: 53.54, y: 58.69, r: 4.2 },
      options: makeOptions(5),
      correctAnswer: 'A',
      aliases: ['temporal lobe', 'Temporal Lobe'],
      explanation: 'The temporal lobe helps process sound, language comprehension, memory, and recognition of objects and faces.',
    },
    {
      id: 'cerebellum',
      label: 'Cerebellum',
      prompt: 'Tap the cerebellum',
      hotspot: { x: 67.69, y: 72.59, r: 4.2 },
      options: makeOptions(6),
      correctAnswer: 'A',
      aliases: ['cerebellum', 'Cerebellum'],
      explanation: 'The cerebellum coordinates balance, posture, timing, and smooth, accurate movement.',
    },
    {
      id: 'brain-stem',
      label: 'Brain Stem',
      prompt: 'Tap the brain stem',
      hotspot: { x: 58.46, y: 82.63, r: 4.2 },
      options: makeOptions(7),
      correctAnswer: 'A',
      aliases: ['brain stem', 'Brain Stem'],
      explanation: 'The brain stem connects the brain to the spinal cord and regulates vital functions such as breathing and heart rate.',
    },
    {
      id: 'wernickes-area',
      label: "Wernicke's Area",
      prompt: "Tap the wernicke's area",
      hotspot: { x: 51.38, y: 47.88, r: 4.2 },
      options: makeOptions(8),
      correctAnswer: 'A',
      aliases: ["wernicke's area", "Wernicke's Area", 'wernickes area'],
      explanation: "Wernicke's area supports language comprehension, helping the brain understand spoken and written words.",
    },
    {
      id: 'brocas-area',
      label: "Broca's Area",
      prompt: "Tap the broca's area",
      hotspot: { x: 29.23, y: 48.26, r: 4.2 },
      options: makeOptions(9),
      correctAnswer: 'A',
      aliases: ["broca's area", "Broca's Area", 'brocas area'],
      explanation: "Broca's area helps produce speech by coordinating the planning and sequencing of spoken language.",
    },
  ],
}
