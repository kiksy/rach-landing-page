import React from 'react';

export default function OnlineCoaching() {
  return (
    <section className="band sky" id="online-coaching">
      <div className="wrap">
        <div className="stack narrow">
          <p className="eyebrow">What actually is online coaching?</p>

          <p className="lead">Lots of women tell me they don't really understand online coaching. That's completely fair. Here's the simple version.</p>
        </div>
        <div className="stack">
          <p><strong>It isn't:</strong></p>
          <div className="notlist" aria-label="What online coaching is not">
            <span>A Zoom workout class</span><span>A generic app you'll forget about</span><span>A copy-and-paste meal plan</span><span>A 6-week challenge</span>
          </div>
        </div>
        <p className="narrow"><strong>It is:</strong> me writing a training plan just for you, which lives in an app on your phone. You train at your own gym, at times that suit you. Every exercise has a video showing you how to do it. You log what you lift, and I can see it all. You message me when you need me, and every week we check in so I can adjust things. You get everything a PT gives you, minus the bit where you have to book a slot and pay for an hour of someone counting your reps.</p>
        <div className="stack">
          <h3>What a week looks like</h3>
          <ol className="week">
            <li><span className="when">Any day</span><b>Open the app</b><p>Your session is waiting, with the exercises, sets and reps all set out. No more wandering round the gym wondering what to do.</p></li>
            <li><span className="when">2–4 times a week</span><b>Train with a plan</b><p>Follow your session, watch the demo videos if you need them, and log your weights. Send your coach a video if you want a form check.</p></li>
            <li><span className="when">When needed</span><b>Message us</b><p>Stuck on an exercise? Eating out? Feeling rubbish? Message us on WhatsApp or in the app. You're never on your own.</p></li>
            <li><span className="when">Every week</span><b>Check in</b><p>We look at your strength, measurements, sleep, stress and energy together, and tweak your plan so you're never more than 7 days from a course correction.</p></li>
          </ol>
        </div>
      </div>
    </section>
  );
}
