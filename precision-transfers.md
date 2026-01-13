---
title: Precision w/ transfers (hildebrand-2024)
author: Joe Hildebrand
description: Integrating different Precision sources into one place -- With transfers after 1C
github: hildjj/bidding
---

# Our Precision with Transfers

This started from notes on "The Precision Bidding System in Bridge" by C.C.
Wei (Edited by Alan Truscott), 2nd Edition, 1973. (ISBN 0-486-21171-1), then
got a dusting of transfers in response to 1C.

Last Updated: 2025-01-05.

## Strong Openings

1C! 16+HCP nothing about clubs [sim](https://hildjj.github.io/bridge-deal/?name=Precision+1C&stamp=1712605097572&code=eJzLyy8qyeBSUFA0MtI1MtZRSErMScxLTk0BChmaaQPJpMwUBUNnRSsQV0chsagkMy0zOTMxBwCuEw9d)
  1D! Negative  0--7 HCP, nothing about diamonds
  1H! 8+ HCP, 5+S
    1S! Asking about S
      1step!) none of top three honors
      2step!) 5!s one of top three honors
      3step!) 5!s two of top three honors
      4step!) 6!s one of top three honors
      5step!) 6!s two of top three honors
      6step!) all three of top honors
        NewSuit!) asking about that suit
          1step!) no control (xxx)
          2step!) 3rd round control (xx or Qxx)
          3step!) 2nd round control (x or Kx)
          4step!) 1st round control (void or A)
          5step!) AK or AQx
            Rebid!) Asking which?
              1step!) shortness (or AQx if 5step)
              2step!) strength (or AK if 5 step)
            NewSuit!) asking
    1N prefer 3N to 4S
      2S 6+S, 8-10
      2CDH! slam interest, cue bid
      2N! 11+, no shortness
      3S! 6+S, 11+, no shortness,
      3CDH! shortness
      3N 8-10
    2N! asks for shortness
      3H! 11+, no shortness
      3CDS! Shortness
      3N! min, no shortness
    2* Natural
  1S! 8+ HCP. Balanced, or semi-balanced with strength outside longer suits (e.g. 5m4M22) (see [below](#1c-1s-responses))
  1N! 8+HCP, 5+ clubs, unsuitable for NT
    2C see 1C-1H
    2DHS natural
    2N! asks for shortness (must have, or NT would have been ok)
      3C! 11+, no shortness, 6+C
      3DHS! Shortness
      3N! min, no shortness, 6+C
    3N stop
  2C! 8+HCP, 5+ diamonds
    2D see 1C-1H
    2HS natural
    2N! asks for shortness
      3D! 11+, no shortness
      3CHS! Shortness
      3N! min, no shortness
  2D! 8+HCP, 5+H
    2H see 1C-1H
    2S natural
    2N asks for shortness
      3H! 11+, no shortness
      3CDS! Shortness
      3N! min, no shortness
  2H 4-7, 6!H (like weak 2)
  2S 4-7, 6!S (like weak 2)
  2N! GF 3-suiter (4441, 5440 with bad 5)
    3C! Asking for short suit
      3D! 0-1!D
      3H! 0-1!H
      3S! 0-1!S
      3N! 0-1!C
    3N to play.  "That's nice, dear."
  3X 4--7 hcp, 7+ suit (like preempt) [sim](https://hildjj.github.io/bridge-deal/?name=Precision+1C-3X&stamp=1712605278417&code=eJzLyy8qyeBSUFA0MtI1MtZRSErMScxLTk0BChmaaQPJpMwUBUNnRSsQV0chsagkMy0zOTMxh4sLJBPAxVWcXwo2QaW4NLNEwVbBGcg20TXXUTDXdkYSdkEIuyAJeyCEPZCEgxHCwVBHGKtUgyRrgU4pT03M5gIA2ootdQ%3D%3D)
  3N DO NOT BID THIS (could be 65+ minors, I guess?)

2N 22--23 hcp, balanced
  3C stayman
  3D ->3!h
  3H ->3!s
  3S Minor suit stayman
  3N stop
  4C Gerber (ew.  find something else)
  4D ->4!h stop
  4H ->4!s stop

## Limited Openings

1D! 11--15, 2+!d, see [SMP 1D Responses](smp-1d.htm)
1H 11--15, 5+!h
  1S 8+ hcp, 4+!s
  1N 8--12, balanced, semi-forcing one round, not 4!s
    P 11--12, 5H 332
    2CD 3+!c/!d (often 3, sometimes 2)
    2H rebid: 6+!h, min
    2S reverse: max, 45xx
    2N! don't bid this.  Either you should have opened 1N, or pass here.
    3CD max, invites
    3H max, 6+!h
  2H 6--9, 3!h
  2N Jacoby 2NT (see [below](#jacoby-2nt))
  3H 10--11 total points usually 4!h, invites
  3S splinter
  3N 13--15 2!h
  4CD splinter
  4H! Either preempt or sub-slam strong hand
1S 11--15, 5+!s
  1N 8--12, balanced, semi-forcing one round
    P 11--12, 5S 332
    2CD 3+!c/!d (often 3, sometimes 2)
    2H 4+!h
    2S rebid: 6+!s, min
    2N! don't bid this.  Either you should have opened 1N, or pass here.
    3CDH max, invites
    3S max, 6+!s
  2S 6--9, 3!s
  2N Jacoby 2NT (see [below](#jacoby-2nt))
  3S 10--11 total points usually 4!s, invite
  3N 13--15 hcp 2!s
  4CDH splinter
  4S! Either preempt or sub-slam strong hand
1N  13--15, balanced (see [below](#nt-responses))
2C!  11--15 HCP. 6+!c OR 5+!c and 4!h/!s [sim](https://hildjj.github.io/bridge-deal/?name=Precision+2C&stamp=1712616707124&code=eJzLyy8qyeBSUFA0NNY1NNVRSErMScxLTk0BChkagkVMnXUUTHwRfDNtZyAnKTNFwchZ0QoiqmCabOKrkF8EkgQAIQgSfw%3D%3D)
  2D!  11+ hcp, forcing one round [sim](https://hildjj.github.io/bridge-deal/?name=Precision+2C-2D&stamp=1712616489409&code=eJzLyy8qyeBSUFA0NNY1NNVRSErMScxLTk0BChkagkVMnXUUTHwRfDNtZyAnKTNFwchZ0QoiqmCabOKrkF8EluQCyQVwcRXnl4KNNjTUhmlwAWvQ1lFIyy9KzsxLV8jPS1Uoyi_NSwEAc8EhRQ%3D%3D)
    2HS 11--13 hcp, 4!h/!s [sim](https://hildjj.github.io/bridge-deal/?name=Precision+2C-2D-2M&stamp=1712617550558&code=eJzLyy8qyeBSUDA01DU01lEw1XbWUTDxBQokZaYoGDkrWoFlTBVMk018FfKLFMy0nbm4QHIBXFzF-aVQvdowDS5gDdo6Cmn5RcmZeekK-XmpCkX5pXkpcF15UBtVikszSxRsFTyAbBMPHQUbk2AkURAbLAA2VqUaJFwLcYyxggmUDwArhTAo)
    2N 14--15, 6+!c, two side suits stopped [sim](https://hildjj.github.io/bridge-deal/?name=Precision+2C-2D-2N&stamp=1712617316261&code=eJxFjrESgjAQRPt8xVpZJA4TBixooVUcxx_QJEgs7pgk-P0CCpZ7u29viUPqBaCLgy4VjrKexMNb5PWugtbTFaUpTuCwmGL2LkJEHr-clivQLIBU6DgYT08wOQQeyW4U_b5lGW5t01a4upczCb6DZRdpn9Df3w4x8TC4ENfq81y9LVTIEb39xz6OUTXN)
    3C 11--13, 6+!c, usually one side suit stopped [sim](https://hildjj.github.io/bridge-deal/?name=Precision+2C-2D-3C&stamp=1712617331384&code=eJxFjs0OgjAQhO99ivHkgRpSEQ9c4WowxhfAtkgJ6ZL-mPj2agU9zs58O2PJhYEBQuxEwXHM6re4GYV9vanStUQpDyeQSyb7eGfGPMWFy1agSUDG0ZOTxt5BVsNRtOpH2aUtz3Ftm7bCRY9aBpgeirS324Che2j4QPOsnV9eF-uW70KO6GM3TU8IeKP-8RdJUDjn)
    3D xx56 [sim](https://hildjj.github.io/bridge-deal/?name=Precision+2C-2D-3C&stamp=1712617380578&code=eJw9jbsOgCAQBPv7irUGC1QobLE18Rt829wlqAmfrxi1nMxOliUcKwHG5KbUcF7DNjf324jCZ_UjLOxQtZAApzxRch3RLuebqi9onkBpzBKGjRcITwhy8vhX_B4mLNM-RusuiRgiDQ%3D%3D)
    3HS 14--15 hcp, 4!h/!s [sim](https://hildjj.github.io/bridge-deal/?name=Precision+2C-2D-3M&stamp=1712617592387&code=eJxNjjsOwjAQRHufYpDS2RQLa4qIVKZIEwmJG5DwceOVnLhC3B07CYhu5o2edoPE6akA4i1ZA6udAXcZXP2AndvUIMoLbM8dJOKgnVJlOys1Slpc0l_hNAva4C6x9-EBCTdESWH4WWG9WI3JT2jQ5sytwZEvf7TkGRRrX70KftfLm-C1fwAvVjAz)
    3N 14--15, 6+!c, solid [sim](https://hildjj.github.io/bridge-deal/?name=Precision+2C-2D-3N&stamp=1712617775417&code=eJzLyy8qyeBSUDA00TU01VEw03bWUXB29A4ECiVlpigYOStaKRgaAuUUTJNNfBXyi0BKuLhAcgFcXMX5pRDdhtowDS5gDdo6Cmn5RcmZeekK-XmpCkX5pXkpcF15UDtBXGM_kHq45QrF-TmZKQCk5CW2)
  2HS Weak, 6+!h/!s or 5+!h/!s with no clubs [sim](https://hildjj.github.io/bridge-deal/?name=Precision+2C-2M&stamp=1712618450702&code=eJzLyy8qyeBSUFA0NNY1NNVRSErMScxLTk0BChkagkVMnXUUTHwRfDNtZyAnKTNFwchZ0QoiqmCabOKrkF8EluQCyQVwcRXnl4KNVikuzSxRsFXwALINdA0NQEYg2KYeOgoGzkjKgpGUIdimwVBlYItVqkGKa60UylMTs0EKoQIgJ5jCOXn5Csk5pUnFADYON3g%3D)
    3HS 15 HCP, 4!h/!s
  2N ~11 hcp, invites 3N [sim](https://hildjj.github.io/bridge-deal/?name=Precision+2C-2N&stamp=1712618663555&code=eJzLyy8qyeBSUFA0NNY1NNVRSErMScxLTk0BChkagkVMnXUUTHwRfDNtZyAnKTNFwchZ0QoiqmCabOKrkF8EluQCyQVwcRXnl4KNNjSEqfcDqq8zNNRRyMwryyxJBQAEhB10)
  3C 8--10 hcp, !c support [sim](https://hildjj.github.io/bridge-deal/?name=Precision+2C-3C&stamp=1712618785043&code=eJzLyy8qyeBSUFA0NNY1NNVRSErMScxLTk0BChkagkVMnXUUTHwRfDNtZyAnKTNFwchZ0QoiqmCabOKrkF8EluQCyQVwcRXnl4KNttA1NNBRMIZrMwZpgwgm55QmKRSXFhQAXQEAobwg9Q%3D%3D)
2D!  11-15 HCP. 4414ish. 3415, 4315, 4405 weak clubs. [sim](https://hildjj.github.io/bridge-deal/?name=Precision+2D&stamp=1712605881025&code=eJw1jLsOgzAMRXe-4jJ0S4TyWqqWJQxdOnXoXBpEIqEYQRj693UGFss-1-dm2kpsgMtKKZcdd1gBI6AFFOPWPPh88dZ1eKcSMRMFfJdj3PHJAZSXH48J9ilA65ShffWcZ4-RP4t7GOZKSeUEbnrgWFbHSleFMQXoob2eHxsdc-Rqa5Vt_titKVg%3D)
  2HS To play
  2N! Forcing (see [below](#2d-2n-forcing)) [sim](https://hildjj.github.io/bridge-deal/?name=Precision+2D-2N&stamp=1712606540135&code=eJw1jr0OgkAQhPt7irGw4gjZ42iM2kBhozGxsBYO4RJyS_gpfHv3SGg2uzP7TSbwtPQKOI7swzLjAquRaxgNEvmQ3-R8yZZlePulR8fs0AxrPeMTHDgMPxkt7F2DxzbAlJErSuFEKvfgK3LRiVIqNM6mEjuNjE2LCNTewVSH0_4x8dr1Em0tWaWi-1Rq5nUrS5TsyGNDEo0vT40P3dZF4OD-0wc4Hg%3D%3D)
  3C To play
  3D! Relay to 3N
  3H Invite to 4H, promises 5H
  3S Invite to 4S, promises 5S
  3N To play
2HS Weak: 6--10 HCP, 6+!h/!s
  2N Ogust
    3C Weak Hand, Weak Suit
    3D Weak Hand, Strong Suit
    3H Strong Hand, Weak Suit
    3S Strong Hand, Strong Suit
    3N AKQ in original pre-empt suit
3N Gambling

## 1C-1S responses

1S! 8+ HCP. Balanced, or semi-balanced with strength outside longer suits (e.g. 5m4M22)
  1N! asking info
    2C! 8--11
      2D! Stayman
        2H! 4S, may have 4H
        2S! 4H, denies 4S
        2N! Flat, no 4M, exactly 8, takes off game force
        3C 5C, no 4M
        3D 5D, no 4M
        3H 5H
        3S 5S
        3N Flat, 9--11
      2HS 5 cards
      2N! exactly 16, no 4M, takes off game force
    2D! 12+, no 4M
      2HS 4 cards
      2N Asks for cuebids
      3X 5 cards
      3N 16-18 balanced
    2H! 12+, 4!S, <4!H
    2S! 12+, 4!H, <4!S
    2N 12+, 4!H and 4!S
    3C 12+, 5C good suit, otherwise prefer 2D
    3D 12+, 5D good suit, otherwise prefer 2D
    3H 12+, 5H
    3S 12+, 5S
  2X Sets trump.  Support-asking bid
    1step!) 2-3 trump little (no honor)
    2step!) Doubleton with honor
    3step!) 3 with honor
    4step!) 3 with 2 honors
    5step!) 4+
  2N! 5-4+ in the minors
    3m 3m
    3M 5M
    3N Major stoppers, minimum
  3N no 4M, 17--18
    4C Gerber
  4C Gerber

## NT responses

1N 13--15, balanced
  2C! Puppet Stayman.  Invite+, no 5+M, no 6+m, not 4441, not 5440, may not have 4M
    2D! 1-2 4M, no 5M
      2H! 4!s, <4!h
      2S! 4!h, <4!s
      2N! No 4M, min invite
      3C! Both, GF
      3D! Both, invite
      3H! 4!s, <4!h GF
      3S! 4!h, <4!s GF
      3N To play
    2H! 5H
      2S slam interest, control
      2N Invite 3N
      3CD slam interest, control
      3H Invite to 4!h
      3S! splinter
      3N to play
      4CD! splinter
      4H to play
      4N RKC !h
    2S! 5S
      2N Invite 3N
      3CDH slam interest, control
      3S Invite
      3N to play
      4CDH splinter
      4S to play
      4N RKC !s
    2N! no 4M, min
      3X slam interest, control
      3N to play
      4C Gerber
    3C 5!c332, max
    3D 5!d332, max
    3N! no 4M, no 5m, max
      4C Gerber
  2D ->2!h
    4N quantitative
  2H ->2!s
    4N quantitative
  2S! 6+!c, either to play or slam interest if bidding continues
    2N! Two small clubs
      3C STOP
      *) See 3!c responsese below
    3C! Average+ !c (at least Kx or xxx)
      3DHS! shortness in the bid suit.  6+c.  Game force or better.
      3N to play
      4C invite for 5!c
      4DHS 4+, slam try
      4N! quantitative for 5!c/6!c/6N
      5N! quantitative for 6!c/6N/7!c/7N
  2N! 6+!d, either to play or slam interest if bidding continues
    3C! two small !d
      3D STOP
      *) See 3!d responses below
    3D! Average+ !d (at least Kx or xxx)
      3HS! shortness, game force
      3N to play
      4C! shortness, game force
      4D invite to 5!d
      4HS 4+, slam try
      4N! quantitative for 5!d/6!d/6N
      5N! quantitative for 6!d/6N/7!d/7N
  3X! splinter, game forcing
    4shortSuit!) Control-asking
  3N 11+ balanced no slam
  4C Gerber
    4D 0 or 4 aces
  4D ->4!h 6+!h
    4N Blackwood
  4H ->4!s 6+!s
    4N Blackwood

## Jacoby 2NT

1HS-2N Game forcing, slam interest, no singleton/void, usually 4 card support
  3CD (or other major) 0-1 of bid suit
  3HS (bid suit) 14--15, no shortness, no outside 5 card suit
  3N 14-15, AKQ of suit
  4CD (or other major) 5+ cards in bid suit
  4HS (bid suit) 11--13, no shortness, no outside 5 card suit

## 2D-2N (forcing)

3C! 11--13
  3D! Shape?
    3H 3415
    3S 4315
    3N 4414 or 4405 (both)
3D! 14--15, 4414
3H! 14--15, 3415
3S! 14--15, 4315
3N! 14--15, 4405

After any of these, responder bidding !d is a Control-Asking Bid
([responses](#cab-responses)).

## Balanced Hands

Most of these are duplicates, but it's nice to have them all in one place.

1D-1N  11-12
1N     13-15
1C-1N  16-18
1C-2N  19-21
2N     22-23
1C-3N  24+ (good luck finding the right slam)

## Interference

Partner-(RHO)-?

1N-(X) Moscow escapes (only over PENALTY doubles.  Systems on over artificial double.  This is effectively DONT, the other direction.)
  R ->2c one suited
  2C !c and a major
  2D !d and a major
  2H !h and !s
  2S 5+!s, weaker than X-2C-2S
  2N !c and !d
1N-(X) Not for penalty
  XX We're either going to play 3N or double them
  other) Systems on
1N-(2C) No matter what it means
  X Stayman
  * Systems on
1N-(*) [Transefer Lebensohl](transfer-lebensohl.htm) with Tim

Good players who are prepared will often find an excuse to bid over 1C, even with puny hands.

1C!-(X) Least-effective interference.  Just gives us more room.  Ignore the meaning of the double.
  P! 0-4, Systems on as if 1C-(P)-1D, but not forcing
  XX! 9+, any 4441 or 5440, GF
    1N! (or 2N with 2X overcall) Where is shortness?
      2X! Short in bid suit
        2N Control-asking bid (A=2 controls, K=1), please bid past game if 4+ controls (because majors)
          3C 0-2 controls
          3D 3 controls
          3H 4 controls
          3S 5 controls
          3N 6+ controls
        * Natural, sets trump
  1D! 5-8, any shape (like a good 1D response to 1C), systems on as if 1C-(P)-1D
  * Everything else, systems on, but with 9+

1C!-(1D) No matter what 1D means
  P! 0-4, systems on as if 1C-(P)-1D, but not forcing
  X! 5-8, systems on as if 1C-(P)-1D (or 9-10 balanced no stopper, or 9+ 4441 impossible negative)
  *) Systems on.

1C-(1H->2S) Effective interference!
  P! 0-4 hcp
  D 5-8 hcp, no 5 card suit or 9+ balanced, no stopper
  minX) 5-8 hcp 5+X
  jumpX) 9+ hcp 5+X
  minN) 6-8, balanced, stopper
  jumpN) 9-11 balanced
  2jumpN) 12-14 balanced
  2X (cuebid of implied suit) 9+, short in X

1C-(2N+) Unlikely this is their hand
  D penalty
  3* 5+ cards, game force
  3N 9-12 and stopper in at least one of the implied suits
  cuebid) strong takeout

## Overcalls

### DONT

I like bidding over 1N and strong 1!c systems, particularly at the beginner to
intermediate level.  Many partnerships at that level haven't discussed
what to do over any interference, including a double.  At a higher level,
there's lots of interference, so everyone has a plan.  DONT may or may not
be the right choice there, but it's a contender at least.  Another choice
would be to use a different overall system over weak 1NT.

Over 1!c, shift all of the responses down.

(1N)-D single suited, at least KQ109xx
  P convert to penalty.  I have entries and think I know what your suit is.
  2C relay
    P !c
    2DH !d/!h
    2S !s (stronger than 2S directly)
  2DHS strong 6 card suit of your own
(1N)-2C 2-suited !c-(!d/!h/!s) 5-5+, could be 5-4 with 15+
  2D What's the other suit?
    P !d
    2HS !h, !s
      2N strong game invite in second suit
  2N game invite, please name second suit (much more likely over weak NT)
  3C support, continued disturbance
(1N)-2D 2-suited !d-(!h/!s) 5-5+
  2H What's the other suit?
    P !h
    2S !s
      2N strong game invite in spades
  2N game invite, please name second suit (much more likely over weak NT)
  3C scrambling, long clubs
  3D support, continued disturbance
(1N)-2H 2-suited !h!s 5-5+
  2S preference
  2N game invite
    3CD void
    3H no thank you
      3S preference, STOP
    3S no thank you and my spade suit is a lot better.  STOP.
(1N)-2S one-suited in spades, weaker than (1N)-D-2!c-2!s.  Think weak 2.
(1N)-2N Minors, weak
(1N)-3X pre-emptive, 7+X

Over interference with DONT:

(1N)-X-(XX) This is usually either strong (with strong NT) or escape (with weak)
  P feel free to bid your suit next
  X Natural
(1N)-X-(2*) Usually systems-on
  D (of a natural bid) bid your suit (assuming it's not theirs), I'm balanced
  D (of an artificial bid) lead directing
  X Natural
