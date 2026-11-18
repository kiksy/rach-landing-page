import React from 'react';
import FaqItem from './FaqItem';

/* Self-contained: accordion styles live here, so no changes to Styles.tsx are needed. */
const css = `
  .faqs{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr));gap:16px;align-items:start}
  .faq-item{background:var(--card);border-radius:20px;min-width:0}
  .faq-item.feature{border:3px solid var(--orange)}
  .faqs h3{margin:0;text-transform:none;font-size:1.25rem;letter-spacing:0;line-height:1.2}
  .faq-item button{
    all:unset;box-sizing:border-box;width:100%;cursor:pointer;
    display:flex;align-items:center;justify-content:space-between;gap:16px;
    padding:20px 24px;border-radius:17px;
    font:inherit;text-transform:inherit;letter-spacing:inherit;line-height:inherit;color:inherit;
  }
  .faq-item button:focus-visible{outline:3px solid var(--orange);outline-offset:2px}
  .faq-item button::after{
    content:"";flex:none;width:28px;height:28px;border-radius:50%;
    background:
      linear-gradient(var(--orange-ink),var(--orange-ink)) center/12px 2px no-repeat,
      linear-gradient(var(--orange-ink),var(--orange-ink)) center/2px 12px no-repeat,
      var(--orange);
    transition:background-size .2s ease;
  }
  .faq-item button[aria-expanded="true"]::after{background-size:12px 2px,2px 0,auto}

  /* Slide reveal: animate the row from 0fr to 1fr */
  .faq-panel{display:grid;grid-template-rows:0fr;transition:grid-template-rows .2s ease}
  .faq-panel[data-open="true"]{grid-template-rows:1fr}
  .faq-panel__inner{overflow:hidden;min-height:0;visibility:hidden;transition:visibility 0s linear .2s}
  .faq-panel[data-open="true"] .faq-panel__inner{visibility:visible;transition-delay:0s}
  .faqs .answer{padding:0 24px 24px;display:grid;gap:10px}
  .faqs .answer p{color:var(--ink-soft)}

  @media (prefers-reduced-motion:reduce){
    .faq-panel,.faq-item button::after,.faq-panel__inner{transition:none}
  }
`;

export default function Faq() {
  return (
    <section className="band paper" id="faq">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="wrap">
        <div className="stack narrow">
          <p className="eyebrow">Questions you're probably asking</p>
          <h2>The honest answers</h2>
          <p>Most of the women I work with have spent decades looking after everyone else. Investing in yourself can feel uncomfortable at first. These are the things that come up on almost every call.</p>
        </div>

        <div className="faqs">
          <FaqItem question="Isn't it a bit selfish to spend this on myself?">
            <p>You've probably spent years making sure everyone else has what they need. Looking after your strength, energy and health isn't selfish. It's what lets you keep showing up for everyone else, and for yourself, for the next 40 years. You can't pour from an empty cup.</p>
          </FaqItem>
          <FaqItem question="Am I too old? Is it too late to start?">
            <p>No. It's never too late. I have clients in their 50s and 60s doing pull-ups, squatting 100kg+ and deadlifting more than they ever have. Strength training after 40 is one of the best things you can do to protect your muscle, bones, metabolism and mood.</p>
          </FaqItem>
          <FaqItem question="I've tried everything and wasted money before. Why would this be different?">
            <p>Because most of what you've tried was built for someone else. A generic app, a class, a diet plan. This is built around you, your body, your gym and your life, and it changes as you change. And you're not on your own with it. If something isn't working, we spot it within a week and fix it.</p>
          </FaqItem>
          <FaqItem question="I'm not fit enough yet. Should I get in shape first?">
            <p>That's like tidying up before the cleaner comes. You start exactly where you are. Several of my clients started too anxious to walk into the gym alone. Confidence doesn't arrive before you start. You build it by doing things you once thought you couldn't.</p>
          </FaqItem>
          <FaqItem question="Won't lifting weights make me bulky?">
            <p>No. Strength training makes you lean and strong, not bulky. Building muscle takes a lot of time and very specific work. What you'll notice is clothes fitting better, more shape, and feeling more capable in everyday life.</p>
          </FaqItem>
          <FaqItem question="I'm so busy. I don't have time for more.">
            <p>You won't be doing more. You'll be doing less, but the right things. Most clients train two to four times a week, and sessions can be as short as 20 to 30 minutes when life is busy. No more hours on the cross trainer for nothing.</p>
          </FaqItem>
          <FaqItem question="I don't know how to use half the equipment.">
            <p>Nobody is born knowing how to use a squat rack. Every exercise in your plan has a demo video, I'll review your technique when you send me videos, and I'll build you up gradually. Lots of my clients started on machines and light dumbbells and are now confident with barbells.</p>
          </FaqItem>
          <FaqItem question="Do I have to count calories forever?">
            <p>No. You'll get personalised nutrition targets and support from Rosie, and nothing is off limits. Tracking is a tool to help you learn, not a life sentence. The goal is that you understand what works for you, so you can eat out, have a glass of wine and still get results.</p>
          </FaqItem>
          <FaqItem question="Will this help with my menopause symptoms?">
            <p>Strength training and good nutrition don't replace medical care, but many clients notice better sleep, more energy, a better mood and less brain fog. I'm in perimenopause myself, so I'll never brush off how you're feeling.</p>
          </FaqItem>
          <FaqItem question="How much does it cost?" feature>
            <p>The Strength Shift is a bespoke coaching package, so there are a few options depending on how much support you want and which coach you work with. That’s why I don’t put one fixed price here. We’ll go through the options together on our call so you can choose what’s right for you.</p>
            <p>To give you an idea of value, compare it with a personal trainer:</p>
            <div className="compare">
              <div><b>A PT</b><span>Around £40–£60+ for one hour. One session a week adds up to about £160–£240 a month. That’s four hours of support focused only on training, and you’re on your own the rest of the time.</span></div>
              <div><b>The Strength Shift</b><span>For around the same monthly cost as a weekly PT, you get a whole team in your corner, 7 days a week. You’ll have a bespoke plan for every session, so you walk into the gym knowing exactly what to do. Nutrition coaching, weekly 1:1 check-in and direct messaging mean you’re never guessing. And the team is there to cheer you on every step of the way. We don’t just look after the hour you spend in the gym. We work on your training, food, habits and confidence, so you feel strong and like yourself again.</span></div>
            </div>
          </FaqItem>
          <FaqItem question="Why is there a 4-month minimum?" feature>
            <p>If I wanted to be rich, I'd take anyone on for one month. But I don't want your money for a month. I want you to get real results.</p>
            <p>Real change takes time. Month one is learning the plan and building a routine. The strength, the shape change and the confidence come in months two, three and four, and that's when the habits stick for good. A minimum commitment of four months gives us time to do this properly, so you finish strong, confident and independent.</p>
          </FaqItem>
          <FaqItem question="What if life gets in the way and I miss a week?">
            <p>It will, and that's fine. Holidays, illness, family, work. We plan around them. Even half a session or a walk keeps the consistency going. You don't need to be perfect, you just need to keep showing up, and I'll help you get back on track without starting over.</p>
          </FaqItem>
          <FaqItem question="Do I need to go to a gym?">
            <p>Most clients train at a gym, and your plan works in any gym, even a hotel one. If home suits you better, there are home options too. We'll talk about what works for you on our call.</p>
          </FaqItem>
        </div>
      </div>
    </section>
  );
}
