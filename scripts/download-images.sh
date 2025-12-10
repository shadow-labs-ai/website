#!/bin/bash
# Script to download all images from Figma MCP localhost server

BASE_URL="http://localhost:3845/assets"
IMAGES_DIR="public/images"

# Create directories
mkdir -p "$IMAGES_DIR/hero"
mkdir -p "$IMAGES_DIR/logo"
mkdir -p "$IMAGES_DIR/features"
mkdir -p "$IMAGES_DIR/icons"
mkdir -p "$IMAGES_DIR/integrations"

# List of image hashes from the Figma design
declare -a images=(
    "96749e2af7f886656604cddaafbe655fad97e20f:hero/desktop-wallpaper.png"
    "5676c90804bce52d7f0a0244cce4840cedeaad88:logo/final-logo-1.png"
    "c1699e81242a154c3525c573c74124972c3cf16f:logo/final-style-1.png"
    "3a414b4387dbc05bc057b8b8c5eff9773b95fc6e:features/image-16.png"
    "c207dfce29d52e58eaaf74724578b30aa9bc765c:features/member-image.png"
    "3ae7a297d905efb9f06d59e62790768291736cbc:features/member-image-1.png"
    "630c5a4e8fd9095b926401d886b2869fe11f6948:features/member-image-2.png"
    "0b7b83da6912ad5649521961dfc3eff87e55583e:features/member-image-3.png"
    "f7ac3e69f58047547ac9c589accb9a0ebda3347f:features/member-image-4.png"
    "4b38a5cacab7464c58b61183661cd590e8818b3e:features/image-17.png"
    "f5a9e8ba4160714897ee8188806510fe1a969b5d:features/demo.png"
    "ede2c313ecc46ebdcdf2cff3decefd49e0d1d620:features/layer-01.png"
    "2d5834ece4d7544d3ea9533c4859d69bd6ad8d83:icons/icon-1.png"
    "9e11efdf1a74e907dad73d0f04db476f2fae1c8a:icons/icon-2.png"
    "2d9232afc7540010cab6f8974e6d73d00d66684b:icons/icon-3.png"
    "10a816b2170d07f70ed52e6767607f6373285b05:icons/icon-4.png"
    "52ae5c227a1f8fa41b4ea8b2e67124b2e9b61aff:icons/icon-5.png"
    "dbba28abb122c2620a71cff56bfd42f54486330d:integrations/slack-logo.png"
    "dec235d50ca70ffaf6ac152f1b19402a65774072:integrations/google-meet.png"
    "79a99b188cf6ad90a60145ea4ada02ff988ac8e5:integrations/microsoft.png"
    "58c857e92ee3b0874d86bd9988f1fb7ed4b41b11:integrations/zoom-logo.png"
)

echo "Downloading images from Figma MCP server..."
for image in "${images[@]}"; do
    IFS=':' read -r hash path <<< "$image"
    url="$BASE_URL/$hash"
    output="$IMAGES_DIR/$path"
    
    echo "Downloading: $path"
    curl -s "$url" -o "$output" || echo "Failed to download $path"
done

echo "Image download complete!"

