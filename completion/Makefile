COMP_ZSH  ?= /usr/share/zsh/site-functions
COMP_BASH ?= /usr/share/bash-completion/completions

all:

install:
	install -dm755 "$(DESTDIR)$(COMP_BASH)"
	install -dm755 "$(DESTDIR)$(COMP_ZSH)"
	install -m 644 "completion.bash" "$(DESTDIR)$(COMP_BASH)/napi-bash"
	install -m 644 "completion.zsh"  "$(DESTDIR)$(COMP_ZSH)/_napi-bash"

uninstall:
	rm "$(COMP_BASH)/napi-bash"
	rmdir --ignore-fail-on-non-empty "$(COMP_BASH)"
	rm "$(COMP_ZSH)/_napi-bash"
	rmdir --ignore-fail-on-non-empty "$(COMP_ZSH)"
