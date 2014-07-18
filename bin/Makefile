all:

install:
	install -dm755 "$(DESTDIR)$(PREFIX)/bin/"
	install -m 755 "napi-bash" "$(DESTDIR)$(PREFIX)/bin/"

uninstall:
	rm "$(PREFIX)/bin/napi-bash"
	rmdir --ignore-fail-on-non-empty "$(PREFIX)/bin/"
