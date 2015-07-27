fps_detect_tools_reg ffprobe

subfmt_convert__fps__ffprobe() {
  fps_sub=
  if [ -z "$BIN_bc" ]; then
    local findbin_ret
    findbin bc && BIN_bc="$findbin_ret" || return 1
  fi

  local bin="$1" file="$2" i
  local -a fps
  IFS=, read -a fps < <("$bin" \
      -v 0 \
      -select_streams v \
      -print_format csv \
      -show_entries stream=avg_frame_rate,r_frame_rate \
      -- "$file") \
    && [ "${#fps[@]}" = "3" ] \
    || return 1

  for i in 1 2; do
    if [ "${fps[i]}" != "0/0" ]; then
      read fps_sub < <("$BIN_bc" <<< "scale=3;${fps[i]}") && return 0
    fi
  done

  return 1
  #RETURNVAR: $fps_sub $BIN_bc
}

