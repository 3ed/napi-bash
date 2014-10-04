fps_detect_tools+=(mplayer)

subfmt_convert__fps__mplayer() {
  fps_sub=
  local output="$("$bin" \
    -really-quiet \
    -vo null \
    -ao null \
    -frames 1 \
    -identify \
    -- "$file" 2> /dev/null)" \
    && [[ "$output" =~ 'ID_VIDEO_FPS='([0-9.]*) ]] \
    && fps_sub="${BASH_REMATCH[1]}"
  #RETURNVAR: $fps_sub
}

