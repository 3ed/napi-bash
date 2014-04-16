all:

install:
	install -dm755 "$(DESTDIR)$(MANPREFIX)"/man/{,pl/}man{1,5}/
	install -m 644 "napi-bash.1" "$(DESTDIR)$(MANPREFIX)/man/pl/man1/"
	install -m 644 "napi-bash.5" "$(DESTDIR)$(MANPREFIX)/man/pl/man5/"
	gzip -9 "$(DESTDIR)$(MANPREFIX)/man/pl/man1/napi-bash.1"
	gzip -9 "$(DESTDIR)$(MANPREFIX)/man/pl/man5/napi-bash.5"
	ln -s ../pl/man1/napi-bash.1.gz "$(DESTDIR)$(MANPREFIX)/man/man1/"
	ln -s ../pl/man5/napi-bash.5.gz "$(DESTDIR)$(MANPREFIX)/man/man5/"

uninstall:
	rm "$(MANPREFIX)"/man/{,pl/}man1/napi-bash.1.gz
	rm "$(MANPREFIX)"/man/{,pl/}man5/napi-bash.5.gz
	rmdir --parents --ignore-fail-on-non-empty "$(MANPREFIX)"/man/{,pl/}man{1,5}/
