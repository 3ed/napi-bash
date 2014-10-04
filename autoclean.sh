#!/bin/bash
printf -- "Running autoclean.sh...\n"

if [ "$0" != "./autoclean.sh" ]; then
  printf -- "  Program can be runned only inside project folder...\n"
  printf -- "  To do that run: „./autoclean.sh”\n"
  exit 1
fi

remove_files() {
  local i
  for i in "$@"; do
    printf -- "    Removing: „%s”...\n" "$i"
    test -e "$i" && rm -rf "$i"
  done
}

remove_files_r() {
  local i
  for i in "$@"; do
    printf -- "    Removing: „%s” (recursively)...\n" "$i"
    find -name "$i" -type f -delete
  done
}

printf -- "  Removing aclocal files...\n"
remove_files aclocal.m4 autom4te.cache

printf -- "  Removing autoconf files...\n"
remove_files configure

printf -- "  Removing automake files...\n"
remove_files install-sh missing
remove_files_r Makefile.in

printf -- "  Removing configure files...\n"
remove_files config.log config.status
remove_files_r Makefile
