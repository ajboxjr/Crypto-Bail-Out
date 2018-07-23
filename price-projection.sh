#!/bin/bash
run(){
  python3 -m http.server --bind 127.0.0.1 ${PORT}

}

if [ $# -gt 0 ]; then

    PORT=$1
else
    PORT=8000
fi


run
