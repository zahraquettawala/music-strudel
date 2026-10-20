// DON'T BELIEVE IT — John Summit & Absolutely
// Key C minor, 128 BPM. Loop: Ab -> Bb -> Cm (Cm gets 2 bars)
// Paste into strudel.cc, press Ctrl+Enter to play, Ctrl+. to stop.

setcps(0.533)   // 128 bpm

// piano — with delay + reverb space
$: chord("<Ab Bb Cm Cm>").voicing().anchor("c4")
   .s("piano").struct("x ~ x x ~ x ~ ~")
   .delay(0.3).delaytime(0.35).delayfeedback(0.3)   // dotted-8th echo
   .room(0.35).size(2)                              // reverb
   .gain(0.6)

// bass — the pump: gain dips right after every kick, then swells back
$: note("<ab1 bb1 c2 c2>").s("sawtooth").lpf(500)
   .gain("0.55 1 1 1 0.55 1 1 1 0.55 1 1 1 0.55 1 1 1")

$: s("bd*4")                 // four on the floor
$: s("~ hh ~ hh").gain(0.35) // offbeat hats

// riser — white noise swelling over 8 bars, filter opening as it climbs
$: s("white").slow(8)
   .lpf(saw.range(300, 12000).slow(8))
   .gain(saw.range(0.02, 0.16).slow(8))

// crash — lands exactly where the riser peaks, every 8 bars
$: s("cr").slow(8).gain(0.5)
