#                                               -*- Autoconf -*-
# Process this file with autoconf to produce a configure script.

AC_PREREQ([2.69])
AC_INIT([napi-bash], [1.0], [bugtracker at https://github.com/3ed/napi-bash])
AM_INIT_AUTOMAKE([foreign])

# Checks for programs.
AC_PROG_INSTALL
AC_PROG_LN_S
AC_PROG_MAKE_SET

AC_CHECK_PROG([found_bash], [bash], [yes], [no])
AM_CONDITIONAL([found_bash], [test "x$found_bash" != xno])
AM_COND_IF([found_bash],,[AC_MSG_ERROR([required program „bash” not found.])])

AM_CONDITIONAL([bash_minver], [bash <<< 'if @<:@ -n "${BASH_VERSINFO@<:@0@:>@}" @:>@; then if @<:@ "${BASH_VERSINFO@<:@0@:>@}" -lt "4" @:>@ ||  @<:@ "${BASH_VERSINFO@<:@0@:>@}" -eq "4" -a "${BASH_VERSINFO@<:@1@:>@}" -lt "1" @:>@; then exit 1; fi; else exit 1; fi; exit 0'])
AM_COND_IF([bash_minver],,[AC_MSG_ERROR([required: bash >= 4.1])])

AC_CHECK_PROGS([found_coreutils], [dd md5sum], [no])
AM_CONDITIONAL([found_coreutils], [test "x$found_coreutils" != xno])
AM_COND_IF([found_coreutils],,[AC_MSG_ERROR([required program „coreutils” not found.])])

AC_CHECK_PROG([found_findutils], [find], [yes], [no])
AM_CONDITIONAL([found_findutils], [test "x$found_findutils" != xno])
AM_COND_IF([found_findutils],,[AC_MSG_ERROR([required program „findutils” not found.])])

AC_CHECK_PROGS([found_p7zip], [7z 7za], [no])
AM_CONDITIONAL([found_p7zip], [test "x$found_p7zip" != xno])
AM_COND_IF([found_p7zip],,[AC_MSG_ERROR([required program „p7zip” not found.])])

AC_CHECK_PROG([found_realpath], [realpath], [yes], [no])
AM_CONDITIONAL([found_realpath], [test "x$found_realpath" != xno])
AM_COND_IF([found_realpath],,[AC_MSG_ERROR([required program „realpath” not found.])])

# Checks for libraries.

# Checks for header files.

# Checks for typedefs, structures, and compiler characteristics.

# Checks for library functions.

AC_CONFIG_FILES([Makefile
                 bin/Makefile
                 lib/Makefile
                 completion/Makefile
                 man/Makefile])
AC_OUTPUT
