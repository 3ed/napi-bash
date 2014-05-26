PREFIX     ?= /usr/local
MANPREFIX  ?= $(PREFIX)/share
COMPPREFIX ?= /usr/share
COMP_ZSH   ?= $(COMPPREFIX)/zsh/site-functions
COMP_BASH  ?= $(COMPPREFIX)/bash-completion/completions

define MAKE_USAGE_DEFINITION
# PREFIX
#   Domyslnie: /usr/local
#   Ustawione: $(PREFIX)
#
# MANPREFIX
#   Domyslnie: $$PREFIX/share
#   Ustawione: $(MANPREFIX)

# COMPPREFIX
#   Domyslnie: /usr/share
#   Ustawione: $(COMPPREFIX)
#
# COMP_ZSH
#   Domyslnie: $$COMPPREFIX/zsh/site-functions/
#   Ustawione: $(COMP_ZSH)
#
# COMP_BASH
#   Domyslnie: $$COMPPREFIX/bash-completion/completions
#   Ustawione: $(COMP_BASH)

# DESTDIR
#   Domyslnie:
#   Ustawione: $(DESTDIR)
endef
export MAKE_USAGE_DEFINITION PREFIX MANPREFIX DESTDIR COMP_ZSH COMP_BASH

ifeq ($(PREFIX),)
	$(error Zmienna PREFIX jest pusta..)
endif
ifeq ($(MANPREFIX),)
	$(error Zmienna MANPREFIX jest pusta..)
endif

help: help-prefix

help-prefix:
	@echo "$$MAKE_USAGE_DEFINITION"

install:
	make install -C bin
	make install -C man
	make install -C completion

uninstall:
	make uninstall -C bin
	make uninstall -C man
	make uninstall -C completion
