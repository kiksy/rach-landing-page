export type Client = {
  name: string;
  /** Bold opening line(s) of the block */
  headline: string;
  /** Body copy, one string per paragraph */
  paragraphs: string[];
  /** Transparent PNG cut-out, served from /public. Optional: block falls back to text only. */
  image?: { src: string; width: number; height: number };
};

export const clients: Client[] = [
  {
    name: 'Danika',
    headline: '22kg down in 8 months. Confidence up.',
    paragraphs: [
      'When Danika first came to me, she was in pain, had very little confidence and genuinely believed the gym wasn’t for her. Eight months later, she’s 20kg lighter, stronger, training confidently in the gym and doing things she never believed she could do.',
      'But the weight loss is only part of the story. Danika has gone from “I can’t do this” to “I can”.',
      'Danika has overcome her fear of the gym, stopped letting perfectionism derail her, navigated holidays, illness and injuries without starting over.',
    ],
    image: { src: '/clients/danika.png', width: 534, height: 1208 },
  },

  // ---------------------------------------------------------------
  // PLACEHOLDERS: copy taken from the existing Results section.
  // Replace with the full write-ups and add an `image` for each.
  // ---------------------------------------------------------------

  {
    name: 'Cara',
    headline: '18kg down, 4 dress sizes down, zero FOMO.',
    paragraphs: [
      '“It’s the first proper weekend away in many years that I’ve not felt uncomfortable, overweight, unfit, self conscious! I danced for 3 days straight, outlasted everyone and did 73,000 steps. I could never have done this before.”',
    ],
     image: { src: '/clients/cara.png', width: 534, height: 1208 },
  },

  {
    name: 'Kirsten',
    headline: 'Working with me can cause severe side effects…',
    paragraphs: [
      '“I am SO GLAD I signed up. I feel like a weight has been lifted (pun absolutely intended) knowing I’m not winging it, that you have my back. All I have to do is feed back honestly and put in the work.”',
    ],
     image: { src: '/clients/kirsten.png', width: 534, height: 1208 },
  },

  {
    name: 'Catherine',
    headline: 'Wasn’t convinced she was capable of changing. We proved that wrong.',
    paragraphs: [
      '“What’s really changed is my ability not to give up after a bad week or a bad gym session, and I’ve even gone when I’ve not wanted to. That’s been an incredible change for me.”',
    ],
     image: { src: '/clients/catherine.png', width: 534, height: 1208 },
  },

];
