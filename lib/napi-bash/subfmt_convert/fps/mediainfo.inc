fps_detect_tools+=(mediainfo)

subfmt_convert__fps__mediainfo() {
  read fps_sub < <("$bin" --Output='Video;%FrameRate%' -- "$file")
  #RETURNVAR: $fps_sub
}
