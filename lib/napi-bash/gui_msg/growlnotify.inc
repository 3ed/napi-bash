notifications_tools+=(growlnotify)
notifications_fmt[growlnotify]="plain" # correct me if I wrong

gui_msg__growlnotify() {
  case "$type" in
    raport|0) growlnotify "napi-bash" -m "$msg";;
    *) growlnotify "napi-bash: ostrzeżenie" -m "$msg"
  esac
}

