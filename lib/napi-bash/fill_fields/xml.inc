# fill_fields plugin

fill_fields__esc__xml() {
  return_str="${1//&/&amp;}"
  return_str="${return_str//\"/&quot;}"
  return_str="${return_str//\'/&apos;}"
  return_str="${return_str//>/&gt;}"
  return_str="${return_str//</&lt;}"
}

fill_fields__fmt__xml() {
  local c
  case "$1" in
    '%') return_str="%";;
    'b'|'i'|'u')
      local canset=1
      for ((c=0; $c < ${#local_array[0]}; c++)); do
        test "${local_array[0]:$c:1}" = "$1" && canset=0
      done
      test "$canset" = "1" || return
      return_str="<$1>" && local_array[0]+="$1"
    ;;
    'B'|'I'|'U')
      local stupidxml_left="" stupidxml_right="" stupidxml_tag="" canunset=0 new_GUIFMT=""
      for ((c=0; $c < ${#local_array[0]}; c++)); do
        stupidxml_tag="${local_array[0]:$c:1}"
        if [ "$stupidxml_tag" = "${1,}" ]; then
          canunset=1
        else
          new_GUIFMT="$stupidxml_tag"
          stupidxml_right+="<$stupidxml_tag>"
        fi
      done
      test "$canunset" = "1" || return

      for ((c=$[${#local_array[0]}-1]; $c >= 0; c--)); do
        stupidxml_left+="</${local_array[0]:$c:1}>"
      done

      local_array[0]="$new_GUIFMT"

      return_str="$stupidxml_left$stupidxml_right"
    ;;
    'R')
      return_str=
      for ((c=$[${#local_array[0]}-1]; $c >= 0; c--)); do
        return_str+="</${local_array[0]:$c:1}>"
      done
      unset local_array[0]
    ;;
    'file-uri')
      local file="${files[$file_id]}"
      fill_fields__esc "${file##*/}"

      local uri_encode_ret
      test "${file:0:1}" = "/" || file="$PWD/$file"
      uri_encode "$file"

      return_str='<a href="file://'"$uri_encode_ret"'">'"$return_str"'</a>'
    ;;
    *) return 1;;
  esac
}

