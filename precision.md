---
title: Precision (hildebrand-2020)
author: Joe Hildebrand
description: Integrating different Precision sources into one place
github: hildjj/bidding
---

## Our Precision

This started from notes on
"The Precision Bidding System in Bridge" by C.C. Wei (Edited by Alan Truscott),
2nd Edition, 1973. (ISBN 0-486-21171-1).

Last Update: 2024-04-04.

1C! 16+HCP nothing about clubs [sim](https://hildjj.github.io/bridge-deal/?name=Precision+1C&stamp=1712605097572&code=eJzLyy8qyeBSUFA0MtI1MtZRSErMScxLTk0BChmaaQPJpMwUBUNnRSsQV0chsagkMy0zOTMxBwCuEw9d)
  1D! one of: [sim](https://hildjj.github.io/bridge-deal/?name=Precision+1C-1D&stamp=1712605163064&code=eJzLyy8qyeBSUFA0MtI1MtZRSErMScxLTk0BChmaaQPJpMwUBUNnRSsQV0chsagkMy0zOTMxh4sLJBPAxVWcXwo2wQIknVepYGJiYggy0ETXXEfBTNsXzjbXzgWyDXTNYaa6AE0tLS5NzMmpBAmjmA4AWLcmOA%3D%3D)
    a) Negative  0--7 HCP, nothing about diamonds [sim](https://hildjj.github.io/bridge-deal/?name=Precision+1C-1D+weak&stamp=1712605175272&code=eJzLyy8qyeBSUFA0MtI1MtZRSErMScxLTk0BChmaaQPJpMwUBUNnRSsQV0chsagkMy0zOTMxh4sLJBPAxVWcXwoxwUTXXEfBzBfONNeOALINdM1hprgATSktLk3MyakECaOYBgAsDSLK)
    b) Impossible Negative 8+ HCP, 4441.  Jump in singleton next [sim](https://hildjj.github.io/bridge-deal/?name=Precision+1C-1D+strong&stamp=1712605182788&code=eJzLyy8qyeBSUFA0MtI1MtZRSErMScxLTk0BChmaaQPJpMwUBUNnRSsQV0chsagkMy0zOTMxh4sLJBPAxVWcXwo2wQIknVepYGJiYgjT5wLUV1pcmpiTU6lgoGuOoh8AuLUhPw%3D%3D)
  1HS 8+ HCP. 5+!h/!s [sim](https://hildjj.github.io/bridge-deal/?name=Precision+1C-1M&stamp=1712605212995&code=eJzLyy8qyeBSUFA0MtI1MtZRSErMScxLTk0BChmaaQPJpMwUBUNnRSsQV0chsagkMy0zOTMxh4sLJBPAxVWcXwo2QaW4NLNEwVbBA8i2ACo11fbQUQi2sfVAkguGywXDjFapBsnVWkHFoVwuAKF1Jv4%3D)
    2HS raise, asking
      1step) none of top three honors
      2step) 5!h/!s one of top three honors
      3step) 5!h/!s two of top three honors
      4step) 6+!h/!s one of top three honors
      5step) 6+!h/!s two of top three honors
      6step) all three of top honors
        NewSuit) asking
          1step) no control (xxx)
          2step) 3rd round countrol (xx or Qxx)
          3step) 2nd round control (x or Kx)
          4step) 1st round control (void or A)
          5step) AK or AQx
            Rebid) Asking which?
              1step) shortness
              2step) strength
            NewSuit) asking
  1N 8--10 HCP, balanced [sim](https://hildjj.github.io/bridge-deal/?name=Precision+1C-1N&stamp=1712605226480&code=eJzLyy8qyeBSUFA0MtI1MtZRSErMScxLTk0BChmaaQPJpMwUBUNnRSsQV0chsagkMy0zOTMxh4sLJBPAxVWcXwo2wULX0ABFP1innxVYAiEOAKeGHmk%3D)
  2CD 9+ hcp, 5+!c/!d [sim](https://hildjj.github.io/bridge-deal/?name=Precision+1C-2m&stamp=1712605240674&code=eJzLyy8qyeBSUFA0MtI1MtZRSErMScxLTk0BChmaaQPJpMwUBUNnRSsQV0chsagkMy0zOTMxh4sLJBPAxVWcXwo2QaW4NLNEwVbBGci2BCo11XbWUXBWsLNVcEGSdYHLukANN1KpBsnVWkHFoVwuANayJwg%3D)
    Raises) same as majors
  2HS 4--7 hcp, 6!h/!s (like weak 2) [sim](https://hildjj.github.io/bridge-deal/?name=Precision+1C-2M&stamp=1712605255100&code=eJzLyy8qyeBSUFA0MtI1MtZRSErMScxLTk0BChmaaQPJpMwUBUNnRSsQV0chsagkMy0zOTMxh4sLJBPAxVWcXwo2QaW4NLNEwVbBA8g20TXXUTDz4EISDoYLB3NBjTVSqQZJ1lpBJaBcLgABLCXU)
  2N 11--13 or 16+ hcp, balanced [sim](https://hildjj.github.io/bridge-deal/?name=Precision+1C-2N&stamp=1712605266455&code=eJzLyy8qyeBSUFA0MtI1MtZRSErMScxLTk0BChmaaQPJpMwUBUNnRSsQV0chsagkMy0zOTMxh4sLJBPAxVWcXwo2wdBQ1xDDABQ-SIORnxVEpUJ-EZoCAAazJPU%3D)
  3X 4--7 hcp, 7+ suit (like preempt) [sim](https://hildjj.github.io/bridge-deal/?name=Precision+1C-3X&stamp=1712605278417&code=eJzLyy8qyeBSUFA0MtI1MtZRSErMScxLTk0BChmaaQPJpMwUBUNnRSsQV0chsagkMy0zOTMxh4sLJBPAxVWcXwo2QaW4NLNEwVbBGcg20TXXUTDXdkYSdkEIuyAJeyCEPZCEgxHCwVBHGKtUgyRrgU4pT03M5gIA2ootdQ%3D%3D)
  3N 14--15, balanced [sim](https://hildjj.github.io/bridge-deal/?name=Precision+1C-3N&stamp=1712605317786&code=eJzLyy8qyeBSUFA0MtI1MtZRSErMScxLTk0BChmaaQPJpMwUBUNnRSsQV0chsagkMy0zOTMxh4sLJBPAxVWcXwo2wdBE19AUxQCQAmM_K4gMXAIAwZ0exQ%3D%3D)
1D 11--15, 4+!d [sim](https://hildjj.github.io/bridge-deal/?name=Precision+1D&stamp=1712605379089&code=eJzLyy8qyeBSUFC0MXFR0NdXSMnPUy9RSEpVSFTISC3KB8mYaTvrKJiCZfMLUvMUjJxBoqYgURNfDFEPHQUPBTtbBYR6Qw-ITLCOQjCaTDBIxtBY19BURyEpMScxLzk1BSHrB5Q1NARKAumkzBQFQxcuAFC1KNE%3D)
  1HS 8+, 4+!h/!s [sim](https://hildjj.github.io/bridge-deal/?name=Precision+1D-1M&stamp=1712605394510&code=eJxlzs8KgkAQBvD7PMUXCB3ckC0ND9pFD3spgn0CzQWF2A3_nKJ3b8coo04ffL9hZqzrx5aAVRaXiCI0zq5H1AYVWtM7ln1YCCSzupux2BbcJtzGx79WCSgccizzUr1EC-gf0Sxyt5GJQF1dK3sxzaInr1J69Fl3DWRJxHkmGtw0vx0MUzciB59IQ_8Q39dZrugL9Qc1vVcFd8YHPQFRrDww)
  1N 8-10, balanced (often passed!) [sim](https://hildjj.github.io/bridge-deal/?name=Precision+1D-1N&stamp=1712605407535&code=eJxlzrEKwjAUBdA9X3GdHEypTxNxqC7tkMUi5AsSE2hBEqn1_00qEtDpwj33wQtxmgcGrBrRoa7hYljPsB4Gg59ilsOm5ZCLxocP2LW5lbkVl79WcSicTyh7Uh_RHPpHdBbaVyQ5rLmbcPOuaJ-UKGFKOzpQx1jOK2PP-FrePla0LaccjVD6u-7ZG8V4NMA%3D)
  2C 11+hcp, 5+!c, no 4M, forcing one round [sim](https://hildjj.github.io/bridge-deal/?name=Precision+1D-2C&stamp=1712605420385&code=eJxljsEOgjAQRO_9ivHkgRpSLB6MeoFDLxgTvgBoFRKzayr8vy2YkOhpsvN2JkPsx14Am5MukaawTNsRrUOD3nmO5JAUEvlM-eUIWRHdPLq6-nONhMHljPVfmYXUEvUPqSNR-53KJdrm2VDn7EqvgSoVYNB2sFClEFFvQrx5WmbrpJo7dLI2zLFwh4nfZFYccWffDfQAk4Pniaz4AHX7PRM%3D)
  2D! 11+ hcp, 3+!d, forcing one round [sim](https://hildjj.github.io/bridge-deal/?name=Precision+1D-2D&stamp=1712605445090&code=eJxlzrEOgjAUBdC9X3GdHFpDCsXBqAsdWDAmfAHQKiSmz1T4f1sgIdHppfe83jxHfuwZsDsrjSSBIbcf0Vo06K2nKEdeCOSz0ts6pEVM85iq6i8tBUpcL9j2ZblILVD_SB1FZgeZC7TNq3GdNZvegkoZMMx2MJCasTjvjH1oWs5WvFqvmasU34rm3-Gdcb0WpHp3woN8N7gnyFl4mpxhXzBUPkI%3D)
    2HS 11-15, 6+!d-5M
    2N 11-13, balanced-ish
    3C 14-15, 5+!c
    3D 14-15 5+!d
    3HS splinter: 14-15, singleton/void
    3N 14-15 4!d
  2HS game forcing
  2N 16+ hcp, balanced [sim](https://hildjj.github.io/bridge-deal/?name=Precision+1D-2N&stamp=1712605465213&code=eJxljrEKwjAURfd8xXVySKSkJh1EXdohS4uQL0hMoIIkUuv_m9hCoE4XzrnvcUOc5pEAu7PoUFVwMexnWA-D0U8xm4a2DPJn48sH1G2mMlPR_1HFoHC9oPS5Woxm0Bujs-HHA5cM1jxNuHtX7JAs50mmtA8H3hGS80bIO36W2YL265pcbmj5sx7Vw2nDv1ShOb0%3D)
  3C forcing
  3D weak, 5!d [sim](https://hildjj.github.io/bridge-deal/?name=Precision+1D-3D&stamp=1712605481951&code=eJxlzrEKwjAYBOA9T3GdHJJSYhNBUZdmyFIR-gSJDbQoidSKr2_SFgo6_XDfz3E-DGNHgOwoFIoCbfCbEdbBoHNDSLKjFYOcNDydx7ZKqUypqP9SzaBxPmH953qWhqH5kSYJL3MuGax5GH9z7aqXqJxHjNf2LbgiJN0rIa_wnmcLWi9rpipB16IYiHwfp1O1FJQqO-DjzJ18ASH_OWg%3D)
  3HS splinter
  3N 14-15 balanced, no 4M [sim](https://hildjj.github.io/bridge-deal/?name=Precision+1D-3N&stamp=1712605664217&code=eJxlzrEKwjAQBuA9T_E7OTRSYhMHUZd2yNIi5AkSE6ggidT6_uZsoWing__777iYhrFnwOYkG5QlfIrbES7Aog9DIjkUNYf6anqGiH1NqaJUtqtUc2hczlj6Qk9iOMyfGBJR7YTicPZh4y34RbusQmTM0909RMMYzStjr_Se3pZFO39DZflzaV6ruuNKPjUMOoo%3D)
  4C splinter
1H 11--15, 5+!h
  1S 8+ hcp, 4+!s
  1N 8--12, balanced, mostly-forcing one round, not 4!s
    2CD 3+!c/!d (often 3, sometimes 2)
    2H rebid: 6+!h, min
    2S reverse: max, 45xx
    2N stop
    3CD max, invites
    3H max, 6+!h
  2H 8-10, 3!h
  2N Jacoby
  3H 10--11 total points usually 4!h, invites
  3S splinter
  3N 13--15 3!h
  4CD splinter
1S 11--15, 5+!s
  1N 8--12, balanced, mostly-forcing one round
    2CD 3+!c/!d (often 3, sometimes 2)
    2H 4+!h
    2S rebid: 6+!s, min
    2N stop
    3CDH max, invites
    3S max, 6+!s
  2S 8--10, 3!s
  2N Jacoby 2NT
  3S 10--11 total points usually 4!s, invite
  3N 13--15 hcp 3!s
  4CDH splinter
1N  13--15, balanced
  2C Stayman
    2H 4h, might have 4s
      2S! 5+!s,4!h invitational
      2N 4!s, invitational
  2D ->2!h
    4N quantitative
  2H ->2!s
    4N quantitative
  2S! Range ask.  One of (10-11 balanced, 6+c weak, 6+c invitational+)
    2N! min
      3C for goodness sake stop here
    3C! max
      3DHS! (after either) shortness in the bid suit.  6+c.  Game force or better.
      3N to play
      4C invite for 5!c
      4DHS 4+, slam try
      4N quantitative for 5!c/6!c/6N
      5N quantitative for 6!c/6N/7!c/7N
  2N! 6+!d, either to play or slam interest if bidding continues
    3C! Good !d suit
      3D for goodness sake stop here
    3D! Average- !d
      3HS (after either) shortness, game force
      3N (after either) to play
      4C (after either) shortness, game force
      4D (after either) invite to 5!d
      4HS (after either) 4+, slam try
      4N (after either) quantitative for 5!d/6!d/6N
      5N (after either) quantitative for 6!d/6N/7!d/7N
  3X! splinter, game forcing
  3N 11+ balanced no slam
  4C Gerber
    4D 0 or 4 aces
  4D ->4!h 6+!h
    4N Blackwood
  4H ->4!s 6+!s
    4N Blackwood
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
  3D Relay to 3N
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
2N 22--23 hcp, balanced
  3C stayman
  3D ->3!h
  3H ->3!s
  3S Minor suit stayman
  3N stop
  4C Gerber (ew.  find something else)
  4D ->4!h stop
  4H ->4!s stop
3N Gambling

## 2D-2N (forcing)

3C! 3415 weak clubs (bid 2C with better clubs) [sim](https://hildjj.github.io/bridge-deal/?name=Precision+2D-2N-3C&stamp=1712606384451&code=eJw1TrsOgkAQ7O8rhsKKM2ThaEy0wVZjZw0cwkVyS3jE-PfuYa6ZZGZ3Hp7ndVDAYWLn1wVnGI1CI9cgkbMMT7cO6Jkt2nFrFtTegv34Fehgbho8dR55Jd9JFWMuKIQTHamUOEOlsMZZ5NfkFOWZt36QHGPIKBWuD6UW3vY9RGm03IMj1Xjx3Drf773i9TaaAhaVBIcijU9Xv_9b1Q_wODt_)
  3D! RKC Hearts
  3HSN To play
  4C Invite to 5C
  4N! RKC Spades
3D! 4315 weak clubs (bid 2C with better clubs) [sim](https://hildjj.github.io/bridge-deal/?name=Precision+2D-2N-3D&stamp=1712606407789&code=eJw1Tj0PgjAU3PsrjsGJGvJoWUx0wVXj5gwUoZH0kQIx_ntbTJdL7t67D8d-HQVwmNm6dcEZWkJJlBIU5KLA064jBmaDbtraBY0zYDd9A_TQNwmee4eyDt9ZnWIuUIETHamS0IqqwFprUF6zU5I9b8MYcrQmLUS8PoRYeNv3EOXJco-OXOLFvrNu2HuD15lkiqhicCyS-PTN-79V_ADwTzuA)
  3HSN To play
  4C To play
  4D! RKC Hearts
  4N! RKC Spades
3H! 11--13 HCP. 4414 [sim](https://hildjj.github.io/bridge-deal/?name=Precision+2D-2N-3H&stamp=1712606580832&code=eJzLyy8qyeBSUDA01DU01lEwMTE0AfKSMlMUjFwUrcDCpjoKRfml6Rk5lRBpLpBsABdXcX4pVKs2TIsfSIe2jkJaflFyZl66Qn5eKkhvXgpME4g09oAaDLMPAJDNIQs%3D)
  3SN To play
  4C To play
  4D! RKC Hearts
  4N! RKC Spades
3S! 14--15 HCP. 4414 [sim](https://hildjj.github.io/bridge-deal/?name=Precision+2D-2N-3S&stamp=1712615085949&code=eJzLyy8qyeBSUFB0cQST3kDS0ETX0FRHwcTE0ATIS8pMUTByUbRSMDQECxfll6Zn5FRCpLlAsgFcXMX5pWBjDA21YVr8wFq0dRTS8ouSM_PSFfLzUkGa81JgukCksQfUZGOIhToKefklCi6OCvlFCkDHAADTmCcN)
  3N To play
  4C To play
  4D! RKC Hearts
  4N! RKC Spades
3N! 14--15 HCP. 4414, A!d or K!d [sim](https://hildjj.github.io/bridge-deal/?name=Precision+2D-2N-3N&stamp=1712615272721&code=eJzLyy8qyeBSUDA00TU01VEwMTE00VFwccQQ8QaKJGWmKBi5KFopGBqCpYryS9MzcirBSri4QLIBXFzF-aUQAw21YVr8wFq0dRTS8ouSM_PSFfLzUkGa81LguvKgzgBxjf2ADACf7SV2)
  4C! Slam try in clubs
  4D! RKC Hearts
  4HS To play
  4N! RKC Spades
  5C To play
4C! 11--13 HCP, 4405 [sim](https://hildjj.github.io/bridge-deal/?name=Precision+2D-2N-4C&stamp=1712616035528&code=eJzLyy8qyeBSUDA01DU01lEwMTEwBfKSMlMUjFwUrcDCpjoKRfml6Rk5lUBpQxMuLpBsABdXcX4pVKs2TIsfWIu2jkJaflFyZl66Qn5eKkhzXgpcVx7UQhDXxBlqBcJmADghI-c%3D)
  4D! RKC Hearts
  4HS To play
  4N! RKC Spades
4D! 14--15 HCP. 4405 [sim](https://hildjj.github.io/bridge-deal/?name=Precision+2D-2N-4D&stamp=1712616191213&code=eJzLyy8qyeBSUDA00TU01VEwMTEwBfKSMlMUjFwUrRQMDcHCRfml6Rk5lUBpQxMuLpBsABdXcX4pRKuhNkyLH1iLto5CWn5RcmZeukJ-XipIc14KXFce1EIQ1wRsBYrNADsLI_I%3D)
  4HS To play
  4N! RKC Hearts
  5C To play
  5D! RKC Spades

## Balanced Hands

Most of these are duplicates, but it's nice to have them all in one place.

P      11-12, <4D.  Don't be a hero.
1D-1N  11-12, 4D+
1N     13-15
1C-1N  16-18
1C-2N  19-21
2N     22-23
1C-3N  24+ (good luck finding the right slam)

## Interference

Partner-(RHO)-?

1C-(D) Direct double
  P 0-4 hcp, or 5hcp no 5 card suit
  1DHS 5-8, 5 cards
  1N 6-8 balanced
  2C 5-8, 5C
  R 9+hcp
1N-(D) Moscow escapes (only over PENALTY doubles.  Systems on over artificial D.)
  R ->2c one suited
  2C !c and another
  2D !d and a major
  2H !h and !s
  2S 5+!s, invitational
1C-(->2S) (normal interference over strong)
  P 0-4 hcp
  D 5-8 hcp, no 5 card suit or 9+ hcp
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

Over interference:

(1N)-X-(XX) This is usually either strong (with strong NT) or escape (with weak)
  P feel free to bid your suit next
  X Natural
(1N)-X-(2*) Usually systems-on
  D (of a natural bid) bid your other suit
  D (of an artificial bid) lead directing
  X Natural

When used against us:

1N-(X) We get extra information
  XX headed for 3N, but let's see if we can get a penalty
  others) systems on
1N-(2C) If 2C isn't both majors
  X stayman
  others) systems on
1N-(2D) Unless it means hearts
  X ->!h
  2H ->!s
  2N 4-way Stayman
    3C 5!c
    3D 5!d
    3H 4!h
    3S 4!s
    3N None of the above
1N-(2M) treat as single-suit overcall
  X penalty
  others) natural
