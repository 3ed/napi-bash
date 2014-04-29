napi-bash
=========

Pobieranie polskich napisów do filmów przy użyciu bazy NapiProjektu..
Poprzednia strona: https://code.google.com/p/napi-bash/

Opis
====

Jest to odpowiednik napi.py przepisany do basha i rozszerzony o wiele nowych funkcji, interface ma w GTK/QT (tylko libnotify) lub CLI. Program ten służy do pobierania napisów z NapiProjektu.. Założenia programu to prostota, lekkość, szybkość, jak najmniejsze wymagania: 
* bash - interpretator skryptu 
* curl - pobieranie archiwum z napi-project (chyba że użytkownik zmieni) 
* p7zip - rozpakowywanie archiwum 
* libnotify - przekazywanie złych i dobrych wiadomości (opcjonalne, wymagane dla wersji gui)

Zrzuty ekranu
=============

[1](https://dl.dropboxusercontent.com/u/22895264/GoogleCode/napi-bash_term.png), [2](https://dl.dropboxusercontent.com/u/22895264/GoogleCode/napi-bash_notify.png)

Integracja
==========

summary Integracja z menadżerami plików

# Nautilus
## Akcja
Zainstaluj pakiet [nautilus-actions](http://www.nautilus-actions.org/), uruchom aplikację *_Nautilus-Actions Configuration Tool_* i zaimportuj [ten plik](http://napi-bash.googlecode.com/files/62b2e80c-ea3c-4d22-bf7d-eed51851caa4.desktop)...

## Skrypt
Zrób link, np. poleceniem
```bash
ln -s "$(which napi-bash)" ~/.local/share/nautilus/scripts/
```
Gotowe..

# Thunar
## Czynność
Z menu wybierz _*Edycja*_ i _*Czynność*_. W nowym oknie przyciśnij ikonę z plusem, zobaczysz okno o nazwie _Nowa czynność_. Wystarczy że wstawisz:
  * Karta: _*Ogólne*_
    * _*Nazwa:*_ `Pobierz napisy`
    * _*Opis:*_ `Pobierz napisy z NapiProjektu`
    * _*Polecenie:*_ `napi-bash -s=1 -- %F`
    * _*Ikona:* (Wedle uznania)_
  * Karta: _*Wyświetlanie*_
    * _*Wzór pliku:*_ `*`
    * _*Typy elementów:* zaznacz:_ `Katalogi`, `Pliki nagrań wideo`
Wiadomo.. _*OK*_, _*Zamknij*_ i gotowe..

# Midnight Commander
## Menu użytkownika
Z głównego menu wybierz _*Polecenia*_ i _*Zmodyfikuj plik menu*_. Konfiguracja menu zostanie wyświetlona w edytorze, doklej to gdzieś:
```bash
s       Pobierz napisy
        DISPLAY= napi-bash -s=1 -- %s
        printf "\n%%s" "Przyciśnij [Enter] aby kontynuować..."; read
```
_Pamiętaj by zrobić linię odstępu między pozycjami._
Gotowe, teraz wystarczy że wciśniesz _*F2*_ i literę _*s*_..
