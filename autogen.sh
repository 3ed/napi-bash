#!/bin/bash

echo "Running autogen.sh..."
echo "  Running aclocal..."
aclocal
echo "  Running autoconf..."
autoconf
echo "  Running automake..."
automake --add-missing --force-missing
