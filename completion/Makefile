all:

install:
	if [ -n "$(COMP_BASH)" ]; then install -dm755 "$(DESTDIR)$(COMP_BASH)" && install -m 644 "completion.bash" "$(DESTDIR)$(COMP_BASH)/napi-bash" || true; fi 2> /dev/null
	if [ -n "$(COMP_ZSH)" ]; then install -dm755 "$(DESTDIR)$(COMP_ZSH)" && install -m 644 "completion.zsh" "$(DESTDIR)$(COMP_ZSH)/_napi-bash" || true; fi 2> /dev/null

uninstall:
	if [ -f "$(COMP_BASH)/napi-bash" ]; then rm "$(COMP_BASH)/napi-bash" && rmdir --ignore-fail-on-non-empty "$(COMP_BASH)"; fi
	if [ -f "$(COMP_ZSH)/_napi-bash" ]; then rm "$(COMP_ZSH)/_napi-bash" && rmdir --ignore-fail-on-non-empty "$(COMP_ZSH)"; fi
