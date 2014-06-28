all:

install:
	install -dm755 "$(DESTDIR)$(PREFIX)/bin/"
	install -m 755 "napi-bash" "$(DESTDIR)$(PREFIX)/bin/"
	test -z "$$MPV_VERSION" || sed 's/fps_detect_mpv_version="[0-9.]*" #CHANGEME#/fps_detect_mpv_version="'"$$MPV_VERSION"'"/' -i "$(DESTDIR)$(PREFIX)/bin/napi-bash"

uninstall:
	rm "$(PREFIX)/bin/napi-bash"
	rmdir --ignore-fail-on-non-empty "$(PREFIX)/bin/"
