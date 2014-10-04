# fill_fields plugin

fill_fields__esc__cli() {
  return_str="${1//\\/\\\\}"
}

fill_fields__fmt__cli() {
  enabled "$colors" || return

  case "$1" in
    '%') return_str="%"; return 0;;
    [0-7]) local_array[0]=";3$1";;
    'b') local_array[1]=";1";;
    'i') local_array[2]=";3";;
    'u') local_array[3]=";4";;
    [8-9]) unset local_array[0];;
    'B') unset local_array[1];;
    'I') unset local_array[2];;
    'U') unset local_array[3];;
    'R') local i; for i in {0..3}; do unset local_array[$i]; done;;
    *) return 1;;
  esac

  return_str="\e[0${local_array[1]}${local_array[2]}${local_array[3]}${local_array[0]}m"
}

