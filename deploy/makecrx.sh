#!/usr/bin/env bash

# Build an .crx Chromium extension (for Chromium 17+)
#
# To build the current state of the tree:
#
#     ./makecrx.sh
#
# To build a particular tagged release:
#
#     ./makecrx.sh <version number>
#
# eg:
#
#     ./makecrx.sh chrome-2012.1.26
#
# Note that .crx files must be signed; this script makes you a
# "dummy-chromium.pem" private key for you to sign your own local releases,
# but these .crx files won't detect and upgrade to official extension
# releases signed by extension developer :/.  We should find a more elegant arrangement.

VERSION=`cat ../version.txt`

echo "Building chrome version" $VERSION


[ -d pkg ] || mkdir -p pkg
[ -e pkg/crx ] && rm -rf pkg/crx
mkdir -p pkg/crx
cd pkg/crx
cp -a ../../../code/* .
do_not_ship="*.py *.xml icon.jpg"
rm -f $do_not_ship
cd ../..

sed -i -e "s/0.1.0/$VERSION/g" pkg/crx/manifest.json

crx="pkg/chrome-angular-extension-$VERSION.crx"
key=../deploy/dummy-chromium.pem

if ! [ -f "$key" ] ; then
  echo "Making a dummy signing key for local build purposes"
  openssl genrsa 2048 > "$key"
fi

# update if VERSION or FILENAME tag used
sed -i -e "s/VERSION/$VERSION/g" pkg/crx/manifest.json
FILENAME=$(basename "$crx")
sed -i -e "s/FILENAME/$FILENAME/g" pkg/crx/manifest.json


## Based on https://code.google.com/chrome/extensions/crx.html

dir=pkg/crx
name=pkg/crx
pub="$name.pub"
sig="$name.sig"
zip="$name.zip"
trap 'rm -f "$pub" "$sig" "$zip"' EXIT

# zip up the crx dir
cwd=$(pwd -P)
(cd "$dir" && zip -qr -9 -X "$cwd/$zip" .)

# signature
openssl sha1 -sha1 -binary -sign "$key" < "$zip" > "$sig"

# public key
openssl rsa -pubout -outform DER < "$key" > "$pub" 2>/dev/null

byte_swap () {
  # Take "abcdefgh" and return it as "ghefcdab"
  echo "${1:6:2}${1:4:2}${1:2:2}${1:0:2}"
}

crmagic_hex="4372 3234" # Cr24
version_hex="0200 0000" # 2
pub_len_hex=$(byte_swap $(printf '%08x\n' $(ls -l "$pub" | awk '{print $5}')))
sig_len_hex=$(byte_swap $(printf '%08x\n' $(ls -l "$sig" | awk '{print $5}')))
(
  echo "$crmagic_hex $version_hex $pub_len_hex $sig_len_hex" | xxd -r -p
  cat "$pub" "$sig" "$zip"
) > "$crx"
#rm -rf pkg/crx


echo >&2 "Created $crx"