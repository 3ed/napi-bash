notifications_tools+=(terminal-notifier)
notifications_fmt[terminal-notifier]="plain" # correct me if I wrong

gui_msg__terminal_notifier() {
  case "$type" in
    raport) terminal-notifier -title 'napi-bash' -message "$msg";;
    0) terminal-notifier -title 'napi-bash' -message "$msg";;
    *) terminal-notifier -title 'napi-bash: ostrzeżenie' -message "$msg"
  esac
}
