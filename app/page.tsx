"use client";

import { useMemo, useState } from "react";

const stops = [
  { day: "01", place: "Arusha", kicker: "The threshold", text: "Touch down beneath Mount Meru. Slow into Tanzanian time over cardamom coffee and a garden dinner.", image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=85" },
  { day: "02–04", place: "Serengeti", kicker: "Where the earth moves", text: "Cross the golden plains at first light, track lion prides, and sleep beneath a sky loud with stars.", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1400&q=85" },
  { day: "05", place: "Ngorongoro", kicker: "Into the crater", text: "Descend through cloud forest into a lost world where elephant, rhino and flamingo share one ancient caldera.", image: "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=1200&q=85" },
  { day: "06–08", place: "Zanzibar", kicker: "The blue finale", text: "Trade dust for salt. Wander Stone Town, sail a dhow at sunset, and float in impossible Indian Ocean blue.", image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1400&q=85" },
];

const moods = [
  { id: "wild", label: "Go wilder", line: "More dawn drives · mobile camp · walking safari", price: "$5,840" },
  { id: "slow", label: "Take it slow", line: "Private guide · longer stays · spa afternoon", price: "$6,420" },
  { id: "coast", label: "Chase the coast", line: "Short safari · island hopping · extra beach days", price: "$4,980" },
];

export default function Home() {
  const [active, setActive] = useState(1);
  const [mood, setMood] = useState("wild");
  const [sound, setSound] = useState(false);
  const selected = useMemo(() => moods.find((m) => m.id === mood)!, [mood]);

  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-image" />
        <nav>
          <a className="brand" href="#top" aria-label="Tembea home">tembea<span>°</span></a>
          <div className="nav-links"><a href="#journey">The journey</a><a href="#shape">Make it yours</a></div>
          <button className="sound" onClick={() => setSound(!sound)} aria-label="Toggle savannah ambience"><i className={sound ? "playing" : ""}/>{sound ? "Savannah on" : "Feel the wild"}</button>
        </nav>
        <div className="hero-content">
          <p className="eyebrow">Tanzania · 8 days · one unforgettable story</p>
          <h1>Come alive<br/><em>in the wild.</em></h1>
          <p className="lede">A journey from the pulse of the Serengeti to the slow blue rhythm of Zanzibar.</p>
          <a className="round-link" href="#journey"><span>Begin the journey</span><b>↓</b></a>
        </div>
        <p className="coordinates">3.3869° S<br/>36.6830° E</p>
      </section>

      <section className="intro">
        <p className="section-no">01 / YOUR STORY</p>
        <div><h2>Not a tour.<br/>A change of <em>pace.</em></h2><p>Eight unhurried days. Four extraordinary places. One private guide who knows when to speak—and when to let the landscape do it.</p></div>
        <div className="stamp">KARIBU<br/><span>WELCOME</span></div>
      </section>

      <section className="journey" id="journey">
        <header><p className="section-no">02 / THE JOURNEY</p><p>Choose a stop to step inside</p></header>
        <div className="journey-stage" style={{ backgroundImage: `linear-gradient(90deg, rgba(15,25,17,.82), rgba(15,25,17,.05)), url('${stops[active].image}')` }}>
          <div className="stop-copy" key={active}><p>DAY {stops[active].day}</p><h2>{stops[active].place}</h2><h3>{stops[active].kicker}</h3><p className="description">{stops[active].text}</p><button onClick={() => setActive((active + 1) % stops.length)}>Next stop <span>→</span></button></div>
          <div className="animal-note">{active === 1 ? "Listen: the plain wakes before you do" : active === 3 ? "Breathe: the ocean changes everything" : "Look closer: every landscape holds a story"}</div>
        </div>
        <div className="timeline" role="tablist" aria-label="Trip stops">
          {stops.map((stop, i) => <button role="tab" aria-selected={active === i} key={stop.place} onClick={() => setActive(i)}><span>{String(i + 1).padStart(2,"0")}</span><b>{stop.place}</b><i /></button>)}
        </div>
      </section>

      <section className="moments">
        <p className="section-no">03 / SMALL MOMENTS</p>
        <blockquote>“You come for the animals.<br/>You remember <em>the feeling.</em>”</blockquote>
        <div className="moment-grid"><figure><div className="photo one"/><figcaption>05:42 — coffee, canvas, first light</figcaption></figure><figure><div className="photo two"/><figcaption>18:17 — the coast catches the last light</figcaption></figure><figure><div className="photo three"/><figcaption>22:06 — the Milky Way, uninterrupted</figcaption></figure></div>
      </section>

      <section className="shape" id="shape">
        <div className="shape-copy"><p className="section-no">04 / MAKE IT YOURS</p><h2>What kind of wild<br/>are you looking for?</h2><p>There is no standard Tanzania. Shape the rhythm, and we’ll shape the route.</p></div>
        <div className="mood-list">{moods.map((m) => <button className={mood === m.id ? "active" : ""} onClick={() => setMood(m.id)} key={m.id}><span>{m.label}</span><small>{m.line}</small><b>{mood === m.id ? "●" : "○"}</b></button>)}</div>
        <aside><p>Your journey</p><h3>{selected.label}</h3><p>{selected.line}</p><div><span>8 days · private</span><strong>from {selected.price}</strong></div><a href={`mailto:hello@tembea.travel?subject=My ${selected.label} Tanzania journey`}>Start planning <b>↗</b></a><small>No commitment. Just a conversation.</small></aside>
      </section>

      <footer><a className="brand" href="#top">tembea<span>°</span></a><p>Travel slowly. Remember deeply.</p><div><a href="#journey">Journey</a><a href="#shape">Plan your trip</a><a href="mailto:hello@tembea.travel">Say hello</a></div><small>Made with respect for Tanzania, its people and its wild places.</small></footer>
    </main>
  );
}
