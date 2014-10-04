fps_detect_tools+=(mpv)

subfmt_convert__fps__mpv() {
  fps_sub=

  local -a args
  local msg="::NAPI-BASH::FPS=" line

  case "$fps_detect_mpv_version" in
    0.3*)
      args=("--playing-msg=$msg\${=fps}" --vo=null
      --ao=null --frames=1 --quiet --no-cache --no-config)
      ;;
    ""|0.[4-6]*)
      args=("--term-playing-msg=$msg\${=fps}" --vo=null
      --ao=null --frames=1 --quiet --no-cache --no-config)
      ;;
    *) return 1
  esac

  # notka: ten test robi za returna
  while read line; do
    test "${line:0:${#msg}}" = "$msg" \
      && fps_sub="${line:${#msg}}" \
      && break
  done < <("$bin" "${args[@]}" -- "$file" 2>&1)

  #RETURNVAR: $fps_sub
}

