#compdef napi-bash
# (c) 3ED 2014
#
#TODO:
# * "--"
# * "*.($videoext)"

_napi-bash() {
  _arguments : \
    '(-c --colors)'{-c=,--colors=}'[Używaj kolorów]:Używać kolorów?:(tak nie)' \
    '(-s --skipifexist)'{-s=,--skipifexist=}'[Pomijaj pobrane]:Pomijać pobrane napisy?:(tak nie)' \
    '(-X --subext-autodetect)'{-X=,--subext-autodetect=}'[Przeprowadzić autodetekcje]:Przeprowadzić autodetekcji rozszerzenia?:(tak nie)' \
    '(-o --suboverwrite)'{-o=,--suboverwrite=}'[Nadpisuj pliki]:Nadpisywać istniejąe pliki z napisami?:(tak nie)' \
    '(-x --subext)'{-x=,--subext=}'[Rozszerzenie pliku]:Rozszerzenia plików:(sub txt srt)' \
    '(-P --subext-prefix)'{-P=,--subext-prefix=}'[Przedrostek dla rozszerzenia]:Przedrostek rozszerzeń plików:' \
    '(-F --subfmt-conv)'{-F=,--subfmt-conv=}'[Format napisów]:Format napisów:(fab microdvd mpl2 subviewer subrip tmplayer)' \
    '(-C --subcp-conv)'{-C=,--subcp-conv=}'[Kodowanie znaków]:Kodowanie znaków:(ISO-8859-2 UTF-8 WINDOWS-1252)' \
    '(-E --subeol-conv)'{-E=,--subeol-conv=}'[Konwertowanie typu oznaczenia końca linii]:Koniec linii:(dos unix)' \
    '(-d --depth)'{-d=,--depth=}'[Głębia przeszukiwania rekursywnego]:Głębia od-do:' \
    '(--debug)--debug=[Plik dla dziennika informacji debugowych]:stworz/nadpisz debugiem:_files -g \*.nb_debug' \
    '(-h --help)'{-h,--help}'[Pomoc programu]::' \
    ':pliki lub foldery:_files'
}
