defvector HCP 4 3 2 1

# $h and $s cannot both be 3 with $d==1 and $c==5, which is the closest
shapecond prec_2d {
  ($s==4 || $s==3) &&
  ($h==4 || $h==3) &&
  $d<2 &&
  $c<6
}

shapecond maj3 {
  $h==3 || $s==3
}

main {
  reject unless {[prec_2d north]}
  set np [hcp north]
  reject if {$np<11 || $np>15}
  reject if {[hcp south] < 11}
  # Only open 2D w/ 5c4M if both majors are 4 cards or clubs are weak
  reject if {[maj3 north] && [HCP north clubs]>3}
  accept
}
