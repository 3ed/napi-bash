PREFIX     ?= /usr/local
MANPREFIX  ?= $(PREFIX)/share
COMP_ZSH   ?= /usr/share/zsh/site-functions
COMP_BASH  ?= /usr/share/bash-completion/completions

define MAKE_USAGE_DEFINITION
# PREFIX
#   Domyslnie: /usr/local
#   Ustawione: $(PREFIX)
#
# MANPREFIX
#   Domyslnie: $$PREFIX/share
#   Ustawione: $(MANPREFIX)

# COMP_ZSH     [ustaw puste by pominac instalacje]
#   Domyslnie: /usr/share/zsh/site-functions
#   Ustawione: $(COMP_ZSH)
#
# COMP_BASH    [ustaw puste by pominac instalacje]
#   Domyslnie: /usr/share/bash-completion/completions
#   Ustawione: $(COMP_BASH)

# DESTDIR
#   Domyslnie:
#   Ustawione: $(DESTDIR)

# MPV_VERSION
#   Domyślnie: 0.4
#   Ustawione: $(MPV_VERSION)
endef

export MAKE_USAGE_DEFINITION PREFIX MANPREFIX DESTDIR COMP_ZSH COMP_BASH

ifeq ($(PREFIX),)
	$(error Zmienna PREFIX jest pusta..)
endif
ifeq ($(MANPREFIX),)
	$(error Zmienna MANPREFIX jest pusta..)
endif

help: help-var

help-var:
	@echo "$$MAKE_USAGE_DEFINITION"

install:
	make install -C bin
	make install -C man
	make install -C completion

uninstall:
	make uninstall -C bin
	make uninstall -C man
	make uninstall -C completion
