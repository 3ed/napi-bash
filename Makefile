PREFIX ?= /usr/local
MANPREFIX ?= $(PREFIX)/share

define MAKE_USAGE_DEFINITION
# PREFIX    = $(PREFIX)
# MANPREFIX = $(MANPREFIX)
# DESTDIR   = $(DESTDIR)
endef
export MAKE_USAGE_DEFINITION PREFIX MANPREFIX DESTDIR

ifeq ($(PREFIX),)
	$(error Zmienna PREFIX jest pusta..)
endif
ifeq ($(MANPREFIX),)
	$(error Zmienna MANPREFIX jest pusta..)
endif

help:
	@echo "$$MAKE_USAGE_DEFINITION"

install:
	make install -C bin
	make install -C man

uninstall:
	make uninstall -C bin
	make uninstall -C man
