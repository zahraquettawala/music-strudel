// EDIT-ME BEAT — a starter beat to edit and learn from
// Paste into strudel.cc, press Ctrl+Enter to play, Ctrl+. to stop.
//
// Mini-notation cheat sheet:
//   ~        rest (silence)
//   x*8      repeat x 8 times in the cycle
//   <a b c>  play one per cycle, in turn
//   [a b]    squeeze both into one step
// Knobs: .gain(0-1) volume · .lpf(hz) filter (lower = darker) · .s() the sound

setcps(0.5)   // tempo: cycles per second (0.5 = 120 bpm in 4/4)

$: s("bd ~ ~ bd ~ ~ bd ~")                       // kick
$: s("~ ~ sd ~ ~ ~ sd ~")                        // snare
$: s("hh*16").gain(0.25)                         // 16th-note hats, kept quiet
$: note("c2 c2 ~ eb2 ~ g2 ~ bb2")                // bassline in C minor
   .s("sawtooth").lpf(600).gain(0.8)
$: note("~ c5 ~ eb5 ~ g5 ~ ~")                   // sparkle on top
   .s("triangle").delay(0.4).gain(0.3)
