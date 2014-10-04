notifications_tools+=(notify-send)
notifications_fmt[notify-send]="xml"

gui_msg__notify_send() {
  case "$type" in
    raport) notify-send -c "transfer.complite" -t 5000 -i "text-x-generic" -- "napi-bash" "$msg";;
    0) notify-send -c "transfer" -t 5000 -i "info" -- "napi-bash" "$msg";;
    *) notify-send -c "transfer.error" -t 5000 -i "dialog-warning" -- "napi-bash: ostrzeżenie" "$msg"
  esac
}
