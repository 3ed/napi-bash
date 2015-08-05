### Wymagania instalacyjne

- Wymagane zależności dla instalacji:
  - autoconf
  - automake
  - make
- Wymagane zależności dla programu:
  - bash >= 4.1
  - curl
  - p7zip
  - coreutils
  - findutils 

### Instalacja

    ./autogen.sh
    ./configure --prefix=/usr
    make install

### Deinstalacja

    make uninstall
