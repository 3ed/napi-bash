#!/bin/bash
# (c) 3ED 2014
#
#TODO: 
# * "--"
# * "*.($videoext)"

_napi-bash() {
  local cur
  
  _init_completion -n = || return

  case $cur in
    --depth=*|--nick=*|--pass=*|--ge=*|--le=*|--subext-prefix=*)
      cur=${cur#*=}
      return 0
      ;;
    --colors=*|--skipifexist=*|--subext-autodetect=*|--suboverwrite=*|--login=*)
      cur=${cur#*=}
      COMPREPLY=( $( compgen -W 'tak nie' -- "$cur" ) )
      return 0
      ;;
    --subext=*)
      cur=${cur#*=}
      COMPREPLY=( $( compgen -W 'sub txt srt' -- "$cur" ) )
      return 0
      ;;
    --subfmt-conv=*)
      cur=${cur#*=}
      COMPREPLY=( $( compgen -W 'fab microdvd mpl2 subviewer subrip tmplayer' -- "$cur" ) )
      return 0
      ;;
    --subcp-conv=*)
      cur=${cur#*=}
      COMPREPLY=( $( compgen -W 'ISO-8859-2 UTF-8 WINDOWS-1252' -- "$cur" ) )
      return 0
      ;;
    --subeol-conv=*)
      cur=${cur#*=}
      COMPREPLY=( $( compgen -W 'dos unix' -- "$cur" ) )
      return 0
      ;;
    --config=*)
      cur=${cur#*=}
      _filedir -f -g '\*.config'
      return 0
      ;;
    --debug=*)
      cur=${cur#*=}
      _filedir -f -g '\*.nb_debug'
      return 0
      ;;
    *) if [ "${cur:0:1}" != "-" ]; then _filedir; return 0; fi
  esac

  _expand || return 0

  COMPREPLY=( $( compgen -W '$( _parse_help "$1" )' -- "$cur" )  )

}

complete -o nospace -F _napi-bash napi-bash
