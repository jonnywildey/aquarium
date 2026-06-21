#!/bin/bash
set -euo pipefail

TMPDIR=$(mktemp -d)
trap 'rm -rf "$TMPDIR"' EXIT

git clone --depth 1 --branch main https://github.com/jonnywildey/permute "$TMPDIR/permute"

rm -rf "./permute"
cp -r "$TMPDIR/permute/site" permute

echo "permute/site copied to ./permute"

git clone --depth 1 --branch main https://github.com/jonnywildey/waveformjs "$TMPDIR/waveformjs"

rm -rf "./waveformjs"
cp -r "$TMPDIR/waveformjs/releases" releases

echo "waveformhs/site copied to ./waveformjs"
