#compdef napi-bash
# (c) 3ED 2014
#
#TODO:
# * "--"
# * "*.($videoext)"

_napi-bash() {
  _arguments : \
    '(-c --colors)'{-c=,--colors=}'[Używaj kolorów]:napi-bash będzie kolorowy?:(tak nie)' \
    '(-s --skipifexist)'{-s=,--skipifexist=}'[Pomijaj pobrane]:pominąć gdy pobrano wcześniej?:(tak nie)' \
    '(-X --subext-autodetect)'{-X=,--subext-autodetect=}'[Przeprowadzić autodetekcje]:przeprowadzić autodetekcjię?:(tak nie)' \
    '(-o --suboverwrite)'{-o=,--suboverwrite=}'[Nadpisuj pliki]:nadpisać istniejące pliki z napisami?:(tak nie)' \
    '(-x --subext)'{-x=,--subext=}'[Rozszerzenie pliku]:rozszerzenie plików:(sub txt srt)' \
    '(-P --subext-prefix)'{-P=,--subext-prefix=}'[Przedrostek dla rozszerzenia]:przedrostek rozszerzeń plików:' \
    '(-F --subfmt-conv)'{-F=,--subfmt-conv=}'[Format napisów]:format napisów:(fab microdvd mpl2 subviewer subrip tmplayer)' \
    '(-C --subcp-conv)'{-C=,--subcp-conv=}'[Kodowanie znaków]:kodowanie znaków:(ISO-8859-2 UTF-8 WINDOWS-1252)' \
    '(-E --subeol-conv)'{-E=,--subeol-conv=}'[Konwertowanie typu oznaczenia końca linii]:typ końca linii:(dos unix)' \
    '(-d --depth)'{-d=,--depth=}'[Głębia przeszukiwania rekursywnego]:głębokość od-do:' \
    '(-g --ge)'{-g=,--ge=}'[Tylko pliki większe bądź równe podanej ilości MiB]:pliki większe bądź równe:' \
    '(-l --le)'{-l=,--le=}'[Tylko pliki mniejsze bądź równe podanej ilości MiB]:pliki mniejsze bądź równe:' \
    '(-n --nick)'{-n=,--nick=}'[Nick do napiprojektu]:nick do napiprojektu:' \
    '(-p --pass)'{-p=,--pass=}'[Hasło do napiprojektu]:hasło do napiprojektu:' \
    '(-L --login)'{-L=,--login=}'[Czy zalogować podanym nickiem i hasłem]:zalogować do napiprojektu?:(tak nie)' \
    '(--debug)--debug=[Plik dla dziennika informacji debugowych]:plik z debugiem:_files -g \*.nb_debug' \
    '(--config)--config=[Alternatywny plik konfiguracyjny]:plik z konfiguracją:_files -g \*.config' \
    '(-h --help)'{-h,--help}'[Pomoc programu]::' \
    ':pliki lub foldery:_files'
}
