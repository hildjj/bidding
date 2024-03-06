defvector Ace 1
defvector HCP 4 3 2 1

shapecond prec_2d {
  ($h==4 || $h==3) &&
  ($s==4 || $s == 3) &&
  !($h==3 && $s==3) &&
  $d<=1 &&
  $c<6
}

shapecond maj3 {
  $h==3 || $s==3
}

main {
  reject unless {[prec_2d north]}
  set np [hcp north]
  reject if {$np<11 || $np>15}
  # 2d-2n-3n shows A/Kd
  # reject if {[Ace north diamonds]>0}
  reject if {[hcp south] < 11}
  # Only open w/ 5c4M if clubs are weak or both majors
  reject if {[maj3 north] && [HCP north clubs]>3}
  accept
}
