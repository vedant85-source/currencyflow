#!/bin/bash
cd /mnt/okcomputer/output/app
rm -rf dist .next
export NODE_OPTIONS="--max-old-space-size=4096"
node node_modules/next/dist/bin/next build 2>&1
