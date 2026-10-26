import React from 'react';

export default function Page() {
  return (
    <>
      <head>
        <title>The Strength Shift</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,500&display=swap" />
      </head>

      <style dangerouslySetInnerHTML={{ __html: `
        :root{
          --blush:#F9DED3;
          --sky:#CFE6F3;
          --paper:#FFF9F6;
          --ink:#3B2219;
          --ink-soft:#6B4B3F;
          --orange:#E8601C;
          --orange-ink:#FFFFFF;
          --line:#E9C6B7;
          --card:#FFFFFF;
          --display:"Bagel Fat One","Arial Black",Impact,system-ui,sans-serif;
          --body:"Montserrat","Helvetica Neue",Arial,system-ui,sans-serif;
          --step-0:1rem; --step-1:1.2rem; --step-2:1.5rem; --step-3:clamp(1.8rem,4.5vw,2.6rem); --step-4:clamp(2.6rem,8vw,4.6rem);
        }
        @media (prefers-color-scheme: dark){
          :root:not([data-theme="light"]){
            --blush:#2E1B15; --sky:#1C2730; --paper:#24150F; --ink:#FBE9E1; --ink-soft:#D9BCAF;
            --orange:#FF8A4C; --orange-ink:#24150F; --line:#4A3127; --card:#33201A; color-scheme:dark;
          }
        }
        :root[data-theme="dark"]{
          --blush:#2E1B15; --sky:#1C2730; --paper:#24150F; --ink:#FBE9E1; --ink-soft:#D9BCAF;
          --orange:#FF8A4C; --orange-ink:#24150F; --line:#4A3127; --card:#33201A; color-scheme:dark;
        }
        *{box-sizing:border-box}
        body{background:var(--paper);color:var(--ink);font-family:var(--body);font-size:var(--step-0);line-height:1.65;margin:0}
        .band{padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px))}
        .band.blush{background:var(--blush)} .band.sky{background:var(--sky)} .band.paper{background:var(--paper)}
        .wrap{max-width:1080px;margin:0 auto;padding-block:clamp(48px,8vw,96px);display:grid;gap:32px}
        .narrow{max-width:65ch}
        h1,h2,h3{font-family:var(--display);font-weight:400;line-height:1.05;margin:0;text-wrap:balance;letter-spacing:.01em}
        h1{font-size:var(--step-4);text-transform:uppercase}
        h2{font-size:var(--step-3);text-transform:uppercase}
        h3{font-size:var(--step-1);text-transform:uppercase;letter-spacing:.02em}
        p{margin:0}
        .stack{display:grid;gap:16px}
        .eyebrow{font-weight:700;text-transform:uppercase;letter-spacing:.14em;font-size:.8rem;color:var(--orange)}
        .lead{font-size:var(--step-1);color:var(--ink-soft);font-weight:500}
        em.o{font-style:normal;color:var(--orange)}
        strong{font-weight:700}
        .squiggle{display:block;width:180px;height:18px;color:var(--orange)}
         
        .hero .wrap{gap:24px;padding-block:clamp(56px,10vw,120px) clamp(40px,7vw,80px)}
        .hero h1 span{display:block}
        .tagline{font-family:var(--display);font-size:var(--step-2);color:var(--orange);text-transform:uppercase}
        .welcome{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:16px;margin-top:8px}
        .welcome div{background:var(--card);border-radius:18px;padding:20px 22px;display:grid;gap:6px}
        .welcome b{font-family:var(--display);font-weight:400;text-transform:uppercase;font-size:1.05rem}
         
        .notlist{display:flex;flex-wrap:wrap;gap:10px}
        .notlist span{border:2px solid var(--ink);border-radius:999px;padding:6px 14px;font-weight:600;font-size:.9rem;text-decoration:line-through;text-decoration-color:var(--orange);text-decoration-thickness:2px}
        .week{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:16px;list-style:none;padding:0;margin:0}
        .week li{background:var(--card);border-radius:18px;padding:20px;display:grid;gap:8px;align-content:start}
        .week .when{font-weight:700;font-size:.78rem;text-transform:uppercase;letter-spacing:.12em;color:var(--orange)}
         
        .two{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:24px}
        .two > div{min-width:0}
        .ticks{list-style:none;padding:0;margin:0;display:grid;gap:12px}
        .ticks li{padding-left:34px;position:relative}
        .ticks li::before{content:"";position:absolute;left:0;top:.3em;width:20px;height:20px;border-radius:50%;background:var(--orange)}
        .ticks li::after{content:"";position:absolute;left:6px;top:calc(.3em + 5px);width:8px;height:5px;border-left:2px solid var(--orange-ink);border-bottom:2px solid var(--orange-ink);transform:rotate(-45deg)}
        .crosses li::before{background:transparent;border:2px solid var(--ink-soft)}
        .crosses li::after{content:"×";border:0;transform:none;left:5px;top:calc(.3em - 4px);width:auto;height:auto;color:var(--ink-soft);font-weight:700}
        .quoteline{font-family:var(--display);font-size:var(--step-1);line-height:1.3;text-transform:none}
         
        .pillars{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));gap:16px}
        .pillar{background:var(--card);border-radius:20px;padding:24px;display:grid;gap:12px;align-content:start}
        .pillar ul{margin:0;padding-left:18px;display:grid;gap:6px;color:var(--ink-soft);font-size:.95rem}
        .pillar .who{font-size:.8rem;font-weight:600;color:var(--ink-soft)}
        .bigsay{font-family:var(--display);font-size:var(--step-2);line-height:1.2;text-transform:uppercase;max-width:28ch}
        .outcomes{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,230px),1fr));gap:12px;list-style:none;padding:0;margin:0}
        .outcomes li{border-top:3px solid var(--orange);padding-top:12px;font-weight:600}
         
        .months{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:16px;list-style:none;padding:0;margin:0}
        .months li{display:grid;gap:8px;align-content:start;background:var(--card);border-radius:18px;padding:20px}
        .months .m{font-family:var(--display);font-size:2.4rem;color:var(--orange);line-height:1}
         
        .shift{width:100%;border-collapse:collapse;font-size:.95rem}
        .tablewrap{overflow-x:auto;background:var(--card);border-radius:18px;padding:8px 20px}
        .shift th{font-family:var(--display);font-weight:400;text-transform:uppercase;text-align:left;padding:14px 8px;font-size:1rem}
        .shift td{padding:12px 8px;border-top:1px solid var(--line);vertical-align:top}
        .shift td:first-child{color:var(--ink-soft)}
        .shift td:last-child{font-weight:600}
         
        .quotes{columns:3 300px;column-gap:16px}
        .q{break-inside:avoid;background:var(--card);border-radius:20px;padding:24px;margin:0 0 16px;display:grid;gap:12px}
        .q .name{display:flex;gap:10px;align-items:baseline;flex-wrap:wrap}
        .q .name b{font-family:var(--display);font-weight:400;font-size:1.4rem;text-transform:uppercase}
        .q .age{font-size:.75rem;font-weight:700;letter-spacing:.12em;color:var(--orange);text-transform:uppercase}
        .q .headline{font-weight:700}
        .q blockquote{margin:0;font-style:italic;font-weight:500;color:var(--ink-soft)}
        .note{font-size:.9rem;color:var(--ink-soft);font-style:italic}
         
        .faq{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr));gap:16px}
        .faq article{background:var(--card);border-radius:20px;padding:24px;display:grid;gap:10px;align-content:start;min-width:0}
        .faq h3{text-transform:none;font-size:1.25rem;letter-spacing:0;line-height:1.2}
        .faq p{color:var(--ink-soft)}
        .faq .feature{border:3px solid var(--orange)}
        .compare{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:6px}
        .compare div{background:var(--blush);border-radius:12px;padding:12px;font-size:.88rem;display:grid;gap:4px;align-content:start}
        .compare b{font-family:var(--display);font-weight:400;text-transform:uppercase;font-size:.95rem}
        @media (max-width:420px){.compare{grid-template-columns:1fr}}
         
        .close .wrap{text-align:left}
        .cta{display:inline-flex;align-items:center;gap:10px;background:var(--orange);color:var(--orange-ink);font-family:var(--display);font-size:1.3rem;text-transform:uppercase;padding:14px 26px;border-radius:999px;width:fit-content}
        .prep{list-style:none;padding:0;margin:0;display:grid;gap:12px;counter-reset:p}
        .prep li{counter-increment:p;padding-left:44px;position:relative}
        .prep li::before{content:counter(p);position:absolute;left:0;top:-2px;width:30px;height:30px;border-radius:50%;background:var(--ink);color:var(--paper);display:grid;place-items:center;font-weight:700;font-size:.9rem}
        footer .wrap{padding-block:32px;font-size:.85rem;color:var(--ink-soft);gap:6px}
      `}} />

      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <symbol id="sq" viewBox="0 0 180 18">
          <path d="M2 9 C 17 -3, 32 21, 47 9 S 77 -3, 92 9 S 122 21, 137 9 S 167 -3, 178 9" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 8" />
        </symbol>
      </svg>

      {/* HERO */}
      <header className="band blush hero">
        <div className="wrap">
          <p className="eyebrow">Online strength coaching for women 40+</p>
          <h1><span>The Strength</span><span>Shift</span></h1>
          <p className="tagline">Feminine power over 40</p>
          <svg className="squiggle" aria-hidden="true"><use href="#sq" /></svg>
          <p className="lead narrow">Stop wasting effort in the gym and start getting strong. A plan built for you, nutrition that fits real life, a coach in your pocket every day, and a squad of women who get it.</p>
          <div className="welcome">
            <div><b>Just booked a call?</b><p>Thank you. I can't wait to chat. Have a read through this page before we speak so you know exactly how it all works, then scroll to the bottom for a few things to think about before our call.</p></div>
            <div><b>Asked me for more details?</b><p>Everything's here: what online coaching actually is, who it's for, what you get, what my clients say, and honest answers to the questions everyone asks.</p></div>
          </div>
        </div>
      </header>

      {/* ABOUT RACHEL */}
      <section className="band paper">
        <div className="wrap two">
          <div className="stack">
            <p className="eyebrow">Hi, I'm Rachel</p>
            <h2>45, in perimenopause and done with the BS</h2>
          </div>
          <div className="stack narrow">
            <p>I'm a qualified personal trainer and British Powerlifting coach, and I'm living this too. Perimenopause, anxiety, broken sleep, a body that suddenly stopped playing by the old rules. I get it, because I'm in it.</p>
            <p>I started The Strength Shift because women over 40 are drowning in conflicting advice. Eat less. Do more cardio. Try this fad. None of it works long term, and most of it leaves you exhausted. I wanted to cut through all of that and give women a clear, simple plan that actually gets results.</p>
            <p>Nutrition is led by our Head Coach <strong>Rosie</strong>, a Nutritionist and Food Behaviour Coach, so you get expert support on the food side too.</p>
          </div>
        </div>
      </section>

      {/* WHAT IS ONLINE COACHING */}
      <section className="band sky" id="online-coaching">
        <div className="wrap">
          <div className="stack narrow">
            <p className="eyebrow">What actually is online coaching?</p>
            <h2>It's a personal trainer in your pocket</h2>
            <p className="lead">Lots of women tell me they don't really understand online coaching. That's completely fair. Here's the simple version.</p>
          </div>
          <div className="stack">
            <p><strong>It isn't:</strong></p>
            <div className="notlist" aria-label="What online coaching is not">
              <span>A Zoom workout class</span><span>A generic app you'll forget about</span><span>A copy-and-paste meal plan</span><span>A 6-week challenge</span>
            </div>
          </div>
          <p className="narrow"><strong>It is:</strong> me writing a training plan just for you, which lives in an app on your phone. You train at your own gym (or at home), at times that suit you. Every exercise has a video showing you how to do it. You log what you lift, and I can see it all. You message me whenever you need me, and every week we check in so I can adjust things. You get everything a PT gives you, minus the bit where you have to book a slot and pay for an hour of someone counting your reps.</p>
          <div className="stack">
            <h3>What a week looks like</h3>
            <ol className="week">
              <li><span className="when">Any day</span><b>Open the app</b><p>Your session is waiting, with the exercises, sets, reps and weights all set out. No more wandering round the gym wondering what to do.</p></li>
              <li><span className="when">2–4 times a week</span><b>Train with a plan</b><p>Follow your session, watch the demo videos if you need them, and log your weights. Send me a video if you want a form check.</p></li>
              <li><span className="when">Every day</span><b>Message me</b><p>Stuck on an exercise? Eating out tonight? Feeling rubbish? Message me on WhatsApp or in the app. You're never on your own.</p></li>
              <li><span className="when">Every week</span><b>Check in</b><p>We look at your strength, measurements, sleep, stress and energy together, and I tweak your plan so you're never more than 7 days from a course correction.</p></li>
            </ol>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="band paper" id="who">
        <div className="wrap">
          <div className="stack narrow">
            <p className="eyebrow">Who it's for</p>
            <h2>Is this you?</h2>
          </div>
          <div className="two">
            <div className="stack">
              <h3>This is for you if…</h3>
              <ul className="ticks">
                <li>You're 40+ and you've put everyone else first for years. You're ready for something that's about you.</li>
                <li>You're already in the gym (or ready to be), but you're doing machines and classes with no real plan, and nothing's changing.</li>
                <li>You're eating less than ever and still gaining weight around your middle.</li>
                <li>You're tired all the time and dealing with (peri)menopause symptoms like poor sleep, brain fog, anxiety or low mood.</li>
                <li>You've tried Slimming World, calorie counting, HIIT, bootcamps or apps, and you're done with things that don't last.</li>
                <li>You want to feel strong, capable and like yourself again, for the next 40 years, not just the next 6 weeks.</li>
              </ul>
            </div>
            <div className="stack">
              <h3>It's probably not for you if…</h3>
              <ul className="ticks crosses">
                <li>You want a quick fix before a holiday and then to stop.</li>
                <li>You're looking for a starvation diet or a list of foods you can never eat again.</li>
                <li>You're not ready to show up honestly each week. You don't have to be perfect, but you do have to tell me what's going on.</li>
              </ul>
              <p className="quoteline">&quot;I'm in the gym all the time and nothing's changing.&quot; If you've ever said that, you're in the right place.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="band blush" id="what-you-get">
        <div className="wrap">
          <div className="stack narrow">
            <p className="eyebrow">What you actually get</p>
            <h2>Four pillars, one coach who gives a damn</h2>
          </div>
          <div className="pillars">
            <article className="pillar">
              <h3>The Strength Strategy</h3>
              <ul>
                <li>A personalised strength programme built for you. No wasted exercises.</li>
                <li>Technique reviews so you lift safely and progress faster.</li>
                <li>An exercise library with videos that works in any gym, even on a business trip.</li>
                <li>An app to track every session and watch your numbers go up.</li>
              </ul>
            </article>
            <article className="pillar">
              <h3>No Bullshit Nutrition</h3>
              <p className="who">Led by Head Coach Rosie</p>
              <ul>
                <li>Personalised nutrition targets. Nothing is off limits.</li>
                <li>Flexible fuelling, so dinners out and a glass of wine still fit.</li>
                <li>Habit-based coaching that takes the mental load off.</li>
                <li>Ongoing adjustments, so you're never guessing.</li>
              </ul>
            </article>
            <article className="pillar">
              <h3>Seen &amp; Supported</h3>
              <ul>
                <li>A weekly 1:1 check-in.</li>
                <li>Direct messaging with your coach, every day.</li>
                <li>Tracking for strength, measurements, sleep, stress and energy.</li>
                <li>Goal setting and habit tracking for small daily wins.</li>
                <li>If something isn't working, we change it quickly.</li>
              </ul>
            </article>
            <article className="pillar">
              <h3>Feminine Power</h3>
              <ul>
                <li>The Strong Girls Squad WhatsApp group: women who get it, cheering each other on.</li>
                <li>Monthly squad Q&amp;As.</li>
                <li>Local in-person workshops and meet-ups (clients stretch from Devon to the Orkney Islands, and lots are local to Dorset).</li>
              </ul>
            </article>
          </div>
          <div className="stack">
            <p className="bigsay">You're not investing in an app. You're investing in what it helps you do.</p>
            <ul className="outcomes">
              <li>Lift weights you used to walk straight past.</li>
              <li>Like what you see in the changing room mirror.</li>
              <li>Have the energy for a Friday night out, and still make progress.</li>
              <li>Feel like you again. Maybe more than ever.</li>
            </ul>
            <p className="narrow">Plus a coach who's in perimenopause too, who sees you and actually cares where you're going.</p>
          </div>
        </div>
      </section>

      {/* TIMELINE + SHIFT */}
      <section className="band paper" id="journey">
        <div className="wrap">
          <div className="stack narrow">
            <p className="eyebrow">Your first four months</p>
            <h2>What the shift looks like</h2>
            <p>Every woman is different, but this is the path most of my clients follow.</p>
          </div>
          <ol className="months">
            <li><span className="m">M1</span><b>Plan &amp; routine</b><p>You've got a plan, a routine and better technique. Energy starts to lift.</p></li>
            <li><span className="m">M2</span><b>Strength gains</b><p>The numbers start going up. Many clients notice better sleep and mood.</p></li>
            <li><span className="m">M3</span><b>Visible change</b><p>Clothes fit differently and the habits are sticking without a fight.</p></li>
            <li><span className="m">M4</span><b>Strong &amp; independent</b><p>Strong, confident, and you understand what works for your body.</p></li>
          </ol>
          <div className="tablewrap">
            <table className="shift">
              <thead><tr><th scope="col">Before</th><th scope="col">After</th></tr></thead>
              <tbody>
                <tr><td>No plan, just turning up</td><td>Three focused strength sessions a week</td></tr>
                <tr><td>Machines and light weights</td><td>Confident with barbells</td></tr>
                <tr><td>Eating less and less</td><td>Eating properly and still seeing results</td></tr>
                <tr><td>Weight creeping on around the middle</td><td>Losing fat, clothes fitting better</td></tr>
                <tr><td>Exhausted</td><td>More energy, better sleep</td></tr>
                <tr><td>Confused by all the advice</td><td>Understands what actually works</td></tr>
                <tr><td>Anxious and invisible</td><td>Confident and proud</td></tr>
                <tr><td>Doing it alone</td><td>Part of a squad</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="band sky" id="results">
        <div className="wrap">
          <div className="stack narrow">
            <p className="eyebrow">Client results</p>
            <h2>Here's what actually happens</h2>
            <p>We don't do before-and-after photos in your pants. I'm far more interested in what you can do, how you feel and who you become.</p>
          </div>
          <div className="quotes">
            <figure className="q">
              <div className="name"><b>Mel</b><span className="age">50s</span></div>
              <p className="headline">From too anxious to walk into the gym, to loading a barbell on her own.</p>
              <blockquote>&quot;About 8 weeks before I took this photo my anxiety wouldn't let me walk into the gym on my own. This photo is the first time I was about to use a 20kg barbell, having got it off the rack and added the weights all by myself! This is something I never thought I'd do.&quot;</blockquote>
            </figure>
            <figure className="q">
              <div className="name"><b>Cara</b><span className="age">40s</span></div>
              <p className="headline">18kg down, 4 dress sizes down, zero FOMO.</p>
              <blockquote>&quot;It's the first proper weekend away in many years that I've not felt uncomfortable, overweight, unfit, self conscious! I danced for 3 days straight, outlasted everyone and did 73,000 steps. I could never have done this before.&quot;</blockquote>
            </figure>
            <figure className="q">
              <div className="name"><b>Sìne</b><span className="age">Client</span></div>
              <p className="headline">Pain-free hips and jeans that fit differently, within a few months.</p>
              <blockquote>&quot;The hips just don't ache at all. It's like somebody's gone along with an oil can. I can pick that up, no problem. I can bend. I can sit cross-legged. Look at me!&quot;</blockquote>
            </figure>
            <figure className="q">
              <div className="name"><b>Jo</b><span className="age">50s</span></div>
              <p className="headline">From self-conscious to deadlifting with confidence.</p>
              <blockquote>&quot;The programme really helps me to feel confident in the space and shuts down all those little negative voices that can creep in at the gym. Now I feel like it's my space too. But it's more than the app. It's the feeling of being part of a wider community of women cheering each other on.&quot;</blockquote>
            </figure>
            <figure className="q">
              <div className="name"><b>Kirsten</b><span className="age">40s</span></div>
              <p className="headline">Working with me can cause severe side effects…</p>
              <blockquote>&quot;I am SO GLAD I signed up. I feel like a weight has been lifted (pun absolutely intended) knowing I'm not winging it, that you have my back. It's so good NOT to be on my own. All I have to do is feed back honestly and put in the work.&quot;</blockquote>
            </figure>
            <figure className="q">
              <div className="name"><b>Alison</b><span className="age">Client</span></div>
              <p className="headline">Trousers she couldn't get into in January, and her third-fastest 10k ever.</p>
              <blockquote>&quot;I don't really see the difference, but I feel the difference.&quot; And now? &quot;I'll have a glass of wine or a gin and tonic and not feel bad about it.&quot;</blockquote>
            </figure>
            <figure className="q">
              <div className="name"><b>Catherine</b><span className="age">40s</span></div>
              <p className="headline">Wasn't convinced she was capable of changing. We proved that wrong.</p>
              <blockquote>&quot;What's really changed is my ability not to give up after a bad week or a bad gym session, and I've even gone when I've not wanted to. That's been an incredible change for me.&quot;</blockquote>
            </figure>
            <figure className="q">
              <div className="name"><b>Gwen</b><span className="age">50s</span></div>
              <p className="headline">6kg down in 6 months, energy stayed high.</p>
              <p>Did she spend the summer eating lettuce and turning down every social occasion? Absolutely not. She went to Ibiza, she partied and she lived her life. Fat loss shouldn't leave you feeling awful.</p>
            </figure>
            <figure className="q">
              <div className="name"><b>Abby</b><span className="age">40s</span></div>
              <p className="headline">From a plateau in group classes to real progress.</p>
              <blockquote>&quot;The 1:1 training is so much better than classes. I've increased my weight on everything in just a few months. I can just do the exercises that I enjoy and are targeting the muscles I want, and train whenever suits me.&quot;</blockquote>
            </figure>
            <figure className="q">
              <div className="name"><b>Helen</b><span className="age">50s</span></div>
              <p className="headline">Struggled with bodyweight exercises. Now squats 100kg+.</p>
              <blockquote>&quot;I didn't press the f*ck it button. Usually everything goes to pot in December, but not this year.&quot;</blockquote>
            </figure>
            <figure className="q">
              <div className="name"><b>Karen</b><span className="age">60s</span></div>
              <p className="headline">Pull-ups, deadlifts and L-sits. In her 60s.</p>
              <p>Because apparently we're supposed to accept that getting older means getting weaker? No thanks. That's not how we roll in this team.</p>
            </figure>
            <figure className="q">
              <div className="name"><b>Lou</b><span className="age">40s</span></div>
              <p className="headline">From only knowing cardio to loving her gym sessions.</p>
              <blockquote>&quot;When I first joined I lacked any structure, didn't eat enough, and all I knew was running. I wanted to change my mindset, feel better in myself and follow a plan I knew would give me results. I can already see a change.&quot;</blockquote>
            </figure>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="band paper" id="faq">
        <div className="wrap">
          <div className="stack narrow">
            <p className="eyebrow">Questions you're probably asking</p>
            <h2>The honest answers</h2>
            <p>Most of the women I work with have spent decades looking after everyone else. Investing in yourself can feel uncomfortable at first. These are the things that come up on almost every call.</p>
          </div>
          <div className="faq">
            <article>
              <h3>Isn't it a bit selfish to spend this on myself?</h3>
              <p>You've probably spent years making sure everyone else has what they need. Looking after your strength, energy and health isn't selfish. It's what lets you keep showing up for everyone else, and for yourself, for the next 40 years. You can't pour from an empty cup.</p>
            </article>
            <article>
              <h3>Am I too old? Is it too late to start?</h3>
              <p>No. It's never too late. I have clients in their 50s and 60s doing pull-ups, squatting 100kg+ and deadlifting more than they ever have. Strength training after 40 is one of the best things you can do to protect your muscle, bones, metabolism and mood.</p>
            </article>
            <article>
              <h3>I've tried everything and wasted money before. Why would this be different?</h3>
              <p>Because most of what you've tried was built for someone else. A generic app, a class, a diet plan. This is built around you, your body, your gym and your life, and it changes as you change. And you're not on your own with it. If something isn't working, we spot it within a week and fix it.</p>
            </article>
            <article>
              <h3>I'm not fit enough yet. Should I get in shape first?</h3>
              <p>That's like tidying up before the cleaner comes. You start exactly where you are. Several of my clients started too anxious to walk into the gym alone. Confidence doesn't arrive before you start. You build it by doing things you once thought you couldn't.</p>
            </article>
            <article>
              <h3>Won't lifting weights make me bulky?</h3>
              <p>No. Strength training makes you lean and strong, not bulky. Building muscle takes a lot of time and very specific work. What you'll notice is clothes fitting better, more shape, and feeling more capable in everyday life.</p>
            </article>
            <article>
              <h3>I'm so busy. I don't have time for more.</h3>
              <p>You won't be doing more. You'll be doing less, but the right things. Most clients train two to four times a week, and sessions can be as short as 20 to 30 minutes when life is busy. No more hours on the cross trainer for nothing.</p>
            </article>
            <article>
              <h3>I don't know how to use half the equipment.</h3>
              <p>Nobody is born knowing how to use a squat rack. Every exercise in your plan has a demo video, I'll review your technique when you send me videos, and I'll build you up gradually. Lots of my clients started on machines and light dumbbells and are now confident with barbells.</p>
            </article>
            <article>
              <h3>Do I have to count calories forever?</h3>
              <p>No. You'll get personalised nutrition targets and support from Rosie, and nothing is off limits. Tracking is a tool to help you learn, not a life sentence. The goal is that you understand what works for you, so you can eat out, have a glass of wine and still get results.</p>
            </article>
            <article>
              <h3>Will this help with my menopause symptoms?</h3>
              <p>Strength training and good nutrition don't replace medical care, but many clients notice better sleep, more energy, a better mood and less brain fog. I'm in perimenopause myself, so I'll never brush off how you're feeling.</p>
            </article>
            <article className="feature">
              <h3>How much does it cost?</h3>
              <p>The Strength Shift is a bespoke coaching package, so there are a few options depending on how much support you want and which coach you work with. We'll go through them together on our call so you can choose what's right for you.</p>
              <p>To give you an idea of value, compare it with a personal trainer:</p>
              <div className="compare">
                <div><b>A PT</b><span>Around £40–£60+ for one hour. One session a week adds up to about £160–£240 a month for four hours of support, and you're on your own the rest of the time.</span></div>
                <div><b>The Strength Shift</b><span>A plan for every session, nutrition coaching, a weekly 1:1 check-in, daily messaging and the squad. Support 7 days a week, for less than you'd expect.</span></div>
              </div>
            </article>
            <article className="feature">
              <h3>Why is there a 4-month minimum?</h3>
              <p>If I wanted to be rich, I'd take anyone on for one month. But I don't want your money for a month. I want you to get real results.</p>
              <p>Real change takes time. Month one is learning the plan and building a routine. The strength, the shape change and the confidence come in months two, three and four, and that's when the habits stick for good. Four months gives us time to do this properly, so you finish strong, confident and independent.</p>
            </article>
            <article>
              <h3>What if life gets in the way and I miss a week?</h3>
              <p>It will, and that's fine. Holidays, illness, family, work. We plan around them. Even half a session or a walk keeps the consistency going. You don't need to be perfect, you just need to keep showing up, and I'll help you get back on track without starting over.</p>
            </article>
            <article>
              <h3>Do I need to go to a gym?</h3>
              <p>Most clients train at a gym, and your plan works in any gym, even a hotel one. If home suits you better, there are home options too. We'll talk about what works for you on our call.</p>
            </article>
          </div>
        </div>
      </section>

      {/* CLOSE / CALL PREP */}
      <section className="band blush close" id="next">
        <div className="wrap two">
          <div className="stack">
            <p className="eyebrow">What happens next</p>
            <h2>Your call with me</h2>
            <p>It's a relaxed chat about where you are now, where you want to be, and whether The Strength Shift is the right fit for you. Come as you are.</p>
            <p><strong>Haven't booked yet?</strong> Reply to my message with <em className="o"><strong>SHIFT</strong></em> and I'll send you a time.</p>
            <span className="cta">Message me SHIFT</span>
          </div>
          <div className="stack">
            <h3>Before we speak, have a think about…</h3>
            <ol className="prep">
              <li>What you're doing in the gym right now, and what you'd love to be doing.</li>
              <li>What's been getting in the way: time, confidence, energy, food, knowing where to start.</li>
              <li>How you want to feel in four months' time. Not just what you want to weigh.</li>
              <li>Any questions from this page you'd like to talk through.</li>
            </ol>
          </div>
        </div>
      </section>

      <footer className="band paper">
        <div className="wrap">
          <p><strong>The Strength Shift</strong> · Feminine power over 40 · Coaching by Rachel and Head Coach Rosie</p>
          <p>Strength training supports health through menopause but isn't a substitute for medical advice.</p>
        </div>
      </footer>
    </>
  );
}