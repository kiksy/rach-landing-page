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
    name: 'Gwen',
    headline: 'In her 50\'s, 6kg down in 6 months in her latest fat loss phase.',
    paragraphs: [
      '“Her energy levels have stayed HIGH. Because fat loss shouldn\'t leave you feeling like absolute sh*t. And does she spend the summer eating lettuce and turning down every social occasion? Absolutely f*cking not. She went to IBIZA. She partied. She enjoyed herself. She lived her life.”',
    ],
    image: { src: '/clients/gwen.png', width: 534, height: 1208 },
  },

  {
    name: 'Emma',
    headline: 'Seeing the benefits of being consistent - feeling stronger and just look at those shoulders!',
    paragraphs: [
      '“Emma joined the team in March. Her motivation was a family holiday in August. Well....I think she crushed it! When I asked Emma what differences she had noticed just 12 weeks into the programme this is what she said: Increased strength Better arm definition More energy Clearer focus in the gym”',
    ],
    image: { src: '/clients/emma.png', width: 534, height: 1208 },
  },

    {
    name: 'Lou',
    headline: 'From only knowing cardio to loving her gym sessions and seeing the definition she has wanted for years.',
    paragraphs: [
      '“When I first joined with Rach I lacked any structure , didn\'t eat enough , had some motivation to be active but all I knew was running. I wanted to change my mindset, feel better in myself and follow a plan I knew would give me results ! Im getting married in December and I wanted good back shoulders and arms for wedding dress . I can already see a change but seeing photos also helps this. Thank you”',
    ],
    image: { src: '/clients/lou.png', width: 534, height: 1208 },
  },

  {
    name: 'Kirsten',
    headline: 'Working with me can cause severe side effects…',
    paragraphs: [
      '“I am SO GLAD I signed up. I feel like a weight has been lifted (pun absolutely intended) knowing I’m not winging it, that you have my back. All I have to do is feed back honestly and put in the work.”',
    ],
    image: { src: '/clients/kirsten.png', width: 534, height: 1208 },
  },



];
